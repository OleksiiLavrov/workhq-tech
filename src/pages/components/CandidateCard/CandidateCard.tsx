import Image from "next/image";
import React from "react";
import CandidateWorkHistory from "./CandidateWorkHistory";
import { CandidateModel } from "@/common/types";
import { useCandidateExperience } from "@/hooks/useCandidateExperience";

const CandidateCard = ({
  candidate,
  deleteCandidateHandler,
}: {
  candidate: CandidateModel;
  deleteCandidateHandler: (candidate: CandidateModel) => void;
}) => {
  const { extendedWorkExperience, totalWorkExperience } =
    useCandidateExperience(candidate.workHistory);
  return (
    <div className="border border-gray-300 rounded bg-white mb-3">
      <div className="flex justify-end p-4 border-b border-solid border-gray-300">
        <button
          className="block"
          onClick={() => deleteCandidateHandler(candidate)}
        >
          <Image src="/assets/delete.svg" alt="close" width={20} height={20} />
        </button>
      </div>
      <div className="py-3 px-4 w-full flex justify-between">
        <div className="flex justify-between">
          <Image
            src="/assets/profile.png"
            alt="candidate"
            width={62}
            height={62}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col pl-2">
            <span
              className={`text-2xl font-bold pb-1`}
            >{`${candidate.firstName} ${candidate.lastName}`}</span>

            <div className="flex">
              <Image
                src="/assets/location.svg"
                alt="Candidate's location"
                width={16}
                height={16}
                className="mr-1"
              />

              <span className="text-gray-600 text-sm font-medium">
                {candidate.location}
              </span>
            </div>
          </div>
        </div>
        <div className="py-2 px-5 text-center bg-gray-100 border border-gray-300 rounded">
          <span className="text-sm font-semibold">Experience</span>
          <div>
            <span className="font-bold text-2xl">{totalWorkExperience}</span>
            <span className="text-xs">
              {totalWorkExperience > 1 ? " years" : " year"}
            </span>
          </div>
        </div>
      </div>
      <CandidateWorkHistory workExperience={extendedWorkExperience} />
    </div>
  );
};

export default CandidateCard;
