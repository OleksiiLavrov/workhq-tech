import { candidatesData } from "../mock/candidates";
import { CandidateModel } from "../types";

export const getData = (query: string): Promise<CandidateModel[]> => {
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
