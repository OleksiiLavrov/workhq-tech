import { CandidateModel } from "@/common/types";
import { debounce, getData } from "@/common/util";
import { ChangeEvent, useCallback, useState } from "react";

export const useSearchCandidates = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedCandidates, setSelectedCandidates] = useState<
    CandidateModel[]
  >([]);
  const [availableCandidates, setAvailableCandidates] = useState<
    CandidateModel[]
  >([]);

  const getDebouncedData = useCallback(
    debounce(async (query: string) => {
      const response = await getData(query);
      const filteredCandidates = response.filter(
        (candidate) => !selectedCandidates.includes(candidate)
      );
      setAvailableCandidates(filteredCandidates);
    }, 150),
    [selectedCandidates]
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (query.length) {
      getDebouncedData(query);
    } else {
      setAvailableCandidates([]);
    }
  };

  const addCandidateHandler = (candidateToAdd: CandidateModel) => {
    setSelectedCandidates((prev) => [...prev, candidateToAdd]);
    setAvailableCandidates([]);
    setQuery("");
  };

  const deleteCandidateHandler = (candidateToRemove: CandidateModel) => {
    setSelectedCandidates((prev) =>
      prev.filter((candidate) => candidate !== candidateToRemove)
    );
  };

  return {
    query,
    selectedCandidates,
    availableCandidates,
    changeHandler,
    addCandidateHandler,
    deleteCandidateHandler,
  };
};
