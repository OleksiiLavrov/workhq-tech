import { ExtendedWorkHistoryModel } from "@/common/types";
import Image from "next/image";
import React from "react";

const CandidateWorkHistory = ({
  workExperience,
}: {
  workExperience: ExtendedWorkHistoryModel[];
}) => {
  return (
    <div className="pb-3 px-3">
      <span className="pb-3 text-xs flex items-center justify-between whitespace-nowrap w-full text-gray-600 font-semibold after:content-[''] after:border-t after:w-full after:ml-2">
        Work History · {workExperience.length}
      </span>
      <div className="flex flex-col gap-2">
        {workExperience.map(({ company, title, duration }) => (
          <div className="flex items-center" key={`${company}-${duration}`}>
            <Image
              src="/assets/company.svg"
              alt="logo"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-md mr-1">
              {company} · {title}
            </span>
            <div>
              <span className="text-xs mr-1 text-gray-400 font-semibold">
                {duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateWorkHistory;
