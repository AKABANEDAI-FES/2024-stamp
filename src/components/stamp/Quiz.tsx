import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReplayIcon from "@mui/icons-material/Replay";
import { useEffect, useState } from "react";

import { StampGet } from "@/components/stamp/Get";
import { GetPageLink } from "@/components/stamp/GetPageLink";
import { Title } from "@/components/Title";
import { CheckPoint } from "@/types/checkpoint";
import { SetStamp } from "@/utils/stamp";
export const Quiz = ({
  data,
  alreadyGet,
}: {
  data: CheckPoint;
  alreadyGet: boolean;
}) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (alreadyGet) {
      setIsAnswered(true);
      setIsCorrect(true);
    }
  }, [alreadyGet]);

  const handleOptionClick = (id: string) => {
    setIsAnswered(true);
    const correct = id === data.quiz?.answer?.number;
    setIsCorrect(correct);
    if (correct) {
      SetStamp(data.storage, data.point);
    }
  };

  return (
    <>
      {!isAnswered ? (
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
        </div>
      ) : isCorrect ? (
        <div className="mb-6 mx-5">
          <div className="mt-6">
            <Title title="正解！スタンプを獲得しました！" />
          </div>
          {alreadyGet ? (
            <div className="bg-green-50 shadow-center border-green-500 border-2 rounded-xl p-4 mt-5 w-full">
              <div className="flex justify-start items-center">
                <CheckCircleOutlineIcon className="text-green-500 mr-2" />
                <p className="">このスタンプは獲得済みです。</p>
              </div>
            </div>
          ) : null}
          <StampGet name={data.name} point={data.point} />
          <div className="mt-6">
            <Title title="クイズ" />
          </div>
          <div className="mt-5">
            <div className="bg-white shadow-center rounded-xl p-3 w-full flex flex-col">
              <div className="flex items-start">
                <h2 className="mr-2 text-3xl font-semibold text-primary">Q</h2>
                <p>{data.quiz?.question}</p>
              </div>
              <div className="flex items-center mt-3">
                <h2 className="mr-3 text-3xl font-semibold text-primary">A</h2>
                <p className="text-lg">
                  {data.quiz?.answer.number}.{" "}
                  {
                    data.quiz?.select[
                      data.quiz?.answer.number as keyof typeof data.quiz.select
                    ]
                  }
                </p>
              </div>
              <p className="ms-8">{data.quiz?.answer.explanation}</p>
            </div>
          </div>
          <GetPageLink />
        </div>
      ) : (
        <div className="mb-6 mx-5">
          <div className="mt-6">
            <Title title="残念！不正解です。" />
          </div>
          <div className="mt-5">
            <p>正解するまで何度でも再挑戦できます。</p>
          </div>
          <div className="mt-5">
            <div
              onClick={() => setIsAnswered(false)}
              className="bg-primary shadow-center rounded-xl py-3 w-full flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <ReplayIcon className="text-white me-2" />
                <p className="text-lg underline text-white">
                  クイズに再挑戦する ＞
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
