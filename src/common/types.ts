export type WorkHistoryModel = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
};

export interface ExtendedWorkHistoryModel extends WorkHistoryModel {
  duration: string;
  unixDuration: number;
}

export type CandidateModel = {
  firstName: string;
  lastName: string;
  location: string;
  workHistory: WorkHistoryModel[];
};
