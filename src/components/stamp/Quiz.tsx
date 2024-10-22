import { useState } from "react";

import { StampGet } from "@/components/stamp/Get";
import { GetPageLink } from "@/components/stamp/GetPageLink";
import { Title } from "@/components/Title";
import { CheckPoint } from "@/types/checkpoint";
import { SetStamp } from "@/utils/stamp";

export const Quiz = ({ data }: { data: CheckPoint }) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (id: string) => {
    setIsAnswered(true);
    const correct = id === data.quiz?.answer?.number;
    setIsCorrect(correct);
    if (correct) {
      SetStamp(data.storage, data.point);
    }
  };

  return (
    <div className="mb-6 mx-5">
      <div className="mt-6">
        <Title title="クイズに挑戦！" />
      </div>

      <div className="mt-5">
        <div className="bg-white shadow-center rounded-xl p-3 w-full flex flex-col">
          <div className="flex items-start">
            <h2 className="mr-2 text-3xl font-semibold text-primary">Q</h2>
            <p>{data.quiz?.question}</p>
          </div>
        </div>
      </div>

      {!isAnswered ? (
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-5">
            {Object.values(data.quiz?.select || {}).map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick((index + 1).toString())}
                className="bg-primary shadow-center rounded-xl px-4 py-6 w-full flex flex-col"
              >
                <p className="text-white text-xl">
                  {index + 1}. {option}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-5">
          {isCorrect ? (
            <>
              <div className="text-center text-green-500 text-xl">
                <p>おめでとうございます！正解です！🎉</p>
              </div>
              <StampGet name={data.name} point={data.point} />
              <GetPageLink />
            </>
          ) : (
            <>
              <div className="text-center text-red-500 text-xl">
                <p>残念！不正解です。😢</p>
              </div>
              <GetPageLink />
            </>
          )}
        </div>
      )}
    </div>
  );
};
