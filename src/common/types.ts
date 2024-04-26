type WorkHistoryModel = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
};

export type CandidateModel = {
  firstName: string;
  lastName: string;
  location: string;
  workHistory: WorkHistoryModel[];
};
