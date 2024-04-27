import { ExtendedWorkHistoryModel } from "../types";

export const getTotalWorkExperience = (
  workHistory: ExtendedWorkHistoryModel[]
) => {
  const totalDurationInSeconds = workHistory.reduce(
    (total, workHistoryItem) => (total += workHistoryItem.unixDuration),
    0
  );
  return Math.round(totalDurationInSeconds / 31536000);
};
