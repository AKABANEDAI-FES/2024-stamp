import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";

import { StampGet } from "@/components/stamp/Get";
import { GetPageLink } from "@/components/stamp/GetPageLink";
import { Quiz } from "@/components/stamp/Quiz";
import { CheckPoint } from "@/types/checkpoint";
import {
  GetCheckPoint,
  GetCheckPointPaths,
  GetStamp,
  SetStamp,
} from "@/utils/stamp";

type Props = {
  data: CheckPoint;
};

const GetStampPage = ({ data }: Props) => {
  const [getStamp, setGetStamp] = useState(false);
  const [quiz, setQuiz] = useState(false);
  useEffect(() => {
    const beforePoint = GetStamp(data.storage);
    if (beforePoint < data.point) {
      if (data.quiz) {
        setQuiz(true);
      } else {
        SetStamp(data.storage, data.point);
        setGetStamp(true);
      }
    } else {
      SetStamp(data.storage, beforePoint);
      setGetStamp(true);
    }
  }, [data.id, data.point, data.quiz, data.storage]);

  return getStamp ? (
    <>
      <div className="mb-6 mx-5">
        <StampGet name={data.name} point={data.point} />
        <GetPageLink />
      </div>
    </>
  ) : quiz ? (
    <Quiz data={data} />
  ) : null;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = GetCheckPointPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = ({
  params,
}: GetStaticPropsContext<{ id: string }>) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }
  const data = GetCheckPoint(params.id);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

export default GetStampPage;
