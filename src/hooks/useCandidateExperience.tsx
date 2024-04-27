import { WorkHistoryModel } from "@/common/types";
import { getExtendedWorkHistory, getTotalWorkExperience } from "@/common/util";
import React, { useMemo } from "react";

export const useCandidateExperience = (workHistory: WorkHistoryModel[]) => {
  const extendedWorkExperience = useMemo(
    () => getExtendedWorkHistory(workHistory),
    [workHistory]
  );

  const totalWorkExperience = getTotalWorkExperience(extendedWorkExperience);

  return {
    extendedWorkExperience,
    totalWorkExperience,
  };
};
