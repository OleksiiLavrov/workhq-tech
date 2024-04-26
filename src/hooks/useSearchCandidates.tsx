import { candidatesData } from "@/common/mock/candidates";
import { CandidateModel } from "@/common/types";
import { debounce } from "@/common/util/debounce";
import { useCallback, useState } from "react";

export const useSearchCandidates = () => {
  const [selectedCandidates, setSelectedCandidates] = useState<
    CandidateModel[]
  >([]);
  const [candidates, setCandidates] = useState<CandidateModel[]>([]);

  const getData = (query: string): Promise<CandidateModel[]> => {
    return new Promise((res) => {
      setTimeout(() => {
        const filteredCandidates = candidatesData.filter((candidate) => {
          const candidateFullName =
            `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
          return candidateFullName.includes(query.toLowerCase());
        });
        res(filteredCandidates);
      }, 250);
    });
  };

  const getDebouncedData = useCallback(
    debounce(async (query: string) => {
      const response = await getData(query);
      const filteredCandidates = response.filter(
        (candidate) => !selectedCandidates.includes(candidate)
      );
      setCandidates(filteredCandidates);
    }, 150),
    [selectedCandidates]
  );

  return {
    setSelectedCandidates,
    selectedCandidates,
    candidates,
    setCandidates,
    getDebouncedData,
  };
};
