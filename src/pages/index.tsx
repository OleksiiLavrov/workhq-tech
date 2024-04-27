import Image from "next/image";
import { Inter } from "next/font/google";
import { useSearchCandidates } from "@/hooks/useSearchCandidates";
import CandidateCard from "./components/CandidateCard/CandidateCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    query,
    selectedCandidates,
    availableCandidates,
    changeHandler,
    addCandidateHandler,
    deleteCandidateHandler,
  } = useSearchCandidates();
  return (
    <main className="w-full">
      <div className="px-5 py-3">
        <Image
          priority
          src="/assets/logo.svg"
          alt="WorkHQ Logotype"
          width={109}
          height={34}
        />
      </div>
      <div>
        <div className="px-5 py-4 border-y border-gray-300">
          <p className="pb-1 text-md font-semibold">Search</p>
          <div className="relative">
            <Image
              priority
              src="/assets/stars.svg"
              alt="Stars"
              width={28}
              height={28}
              className="absolute top-1/2 left-2 -translate-y-1/2"
            />
            <input
              onChange={changeHandler}
              value={query}
              className="w-full p-2 pl-10 border rounded border-gray-300"
              type="text"
              placeholder="Darlene Robertson..."
            />
          </div>
          {!!availableCandidates?.length && (
            <ul className="absolute p-4 bg-white w-full border rounded border-gray-300">
              {availableCandidates.map((candidate, index) => (
                <li
                  onClick={() => addCandidateHandler(candidate)}
                  key={index}
                  className="p-2 cursor-pointer"
                >
                  {candidate.firstName} {candidate.lastName}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-5 bg-gray-50">
          {selectedCandidates.map((candidate, index) => (
            <CandidateCard
              key={index}
              candidate={candidate}
              deleteCandidateHandler={deleteCandidateHandler}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
