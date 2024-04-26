import Image from "next/image";
import { Inter } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useSearchCandidates } from "@/hooks/useSearchCandidates";
import { CandidateModel } from "@/common/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const {
    getDebouncedData,
    candidates,
    setCandidates,
    setSelectedCandidates,
    selectedCandidates,
  } = useSearchCandidates();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    getDebouncedData(e.target.value);
  };

  const addCandidate = (candidateToAdd: CandidateModel) => {
    setSelectedCandidates((prev) => [...prev, candidateToAdd]);
    setCandidates((prev) =>
      prev.filter(
        (candidate) =>
          candidate.firstName !== candidateToAdd.firstName &&
          candidate.lastName !== candidateToAdd.lastName
      )
    );
  };

  const deleteCandidate = (candidateToRemove: CandidateModel) => {
    setCandidates((prev) => [...prev, candidateToRemove]);
    setSelectedCandidates((prev) =>
      prev.filter(
        (candidate) =>
          candidate.firstName !== candidateToRemove.firstName &&
          candidate.lastName !== candidateToRemove.lastName
      )
    );
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <h3>Search</h3>
      <input type="text" className="text-black" onChange={changeHandler} />
      <ul>
        {candidates.length
          ? candidates.map((candidate) => (
              <li
                key={`${candidate.firstName}${candidate.lastName}`}
                onClick={() => addCandidate(candidate)}
              >
                {candidate.firstName} {candidate.lastName}
              </li>
            ))
          : null}
      </ul>
      <h3>Results list</h3>
      <ul>
        {selectedCandidates.length
          ? selectedCandidates.map((candidate) => (
              <li
                key={`${candidate.firstName}${candidate.lastName}`}
                onClick={() => deleteCandidate(candidate)}
              >
                {candidate.firstName} {candidate.lastName}
              </li>
            ))
          : null}
      </ul>
    </main>
  );
}
