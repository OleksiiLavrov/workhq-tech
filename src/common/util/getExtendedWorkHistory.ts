import { differenceInMonths, differenceInYears, getUnixTime } from "date-fns";
import { WorkHistoryModel, ExtendedWorkHistoryModel } from "../types";

const getDuration = (startDate: Date, endDate: Date): string => {
  const years = differenceInYears(endDate, startDate);
  const months = differenceInMonths(endDate, startDate) % 12;
  return `${years} ${years > 1 ? "yrs" : "yr"} ${months} ${
    months > 1 ? "mos" : "mo"
  }`;
};

const getUnixDuration = (startDate: Date, endDate: Date): number => {
  return getUnixTime(endDate) - getUnixTime(startDate);
};

export const getExtendedWorkHistory = (
  workHistory: WorkHistoryModel[]
): ExtendedWorkHistoryModel[] => {
  const extendedWorkHistory = workHistory.map((workHistoryItem) => {
    const startDate = new Date(workHistoryItem.startDate);
    const endDate = new Date(workHistoryItem.endDate);

    const duration = getDuration(new Date(startDate), new Date(endDate));
    const unixDuration = getUnixDuration(
      new Date(startDate),
      new Date(endDate)
    );
    return { ...workHistoryItem, duration, unixDuration };
  });
  return extendedWorkHistory.sort((a, b) => b.unixDuration - a.unixDuration);
};
