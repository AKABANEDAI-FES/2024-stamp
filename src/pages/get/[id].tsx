import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import { StampGet } from "@/components/stamp/Get";
import { GetPageLink } from "@/components/stamp/GetPageLink";
import { Quiz } from "@/components/stamp/Quiz";
import { Title } from "@/components/Title";
import { CheckPoint } from "@/types/checkpoint";
import {
  CanStamp,
  GetCheckPoint,
  GetCheckPointPaths,
  SetStamp,
} from "@/utils/stamp";

type Props = {
  data: CheckPoint;
};

const GetStampPage = ({ data }: Props) => {
  const [alreadyGetStamp, setAlreadyGetStamp] = useState(false);
  const [getStamp, setGetStamp] = useState(false);
  const [quiz, setQuiz] = useState(false);
  useEffect(() => {
    if (CanStamp(data.storage, data.point) === true) {
      /* スタンプ取得処理 */
      if (data.quiz) {
        setQuiz(true);
      } else {
        const save = SetStamp(data.storage, data.point);
        if (save === 0) {
          setGetStamp(true);
        } else {
          // エラー表示
        }
      }
    } else if (CanStamp(data.storage, data.point) === false) {
      /* すでにスタンプを取得している場合 */
      setAlreadyGetStamp(true);
      if (data.quiz) {
        setQuiz(true);
      }
      setGetStamp(true);
    } else {
      // エラー表示
    }
  }, [data.id, data.point, data.quiz, data.storage]);

  return quiz ? (
    <Layout pageTitle={data.name + "のクイズに挑戦"}>
      <Quiz data={data} alreadyGet={alreadyGetStamp} />
    </Layout>
  ) : getStamp ? (
    <Layout pageTitle={data.name + "のスタンプ獲得"}>
      <div className="mb-6 mx-5">
        <div className="mt-6">
          <Title title="スタンプを獲得しました！" />
        </div>
        {alreadyGetStamp ? (
          <div className="bg-green-50 shadow-center border-green-500 border-2 rounded-xl p-4 mt-5 w-full">
            <div className="flex justify-start items-center">
              <CheckCircleOutlineIcon className="text-green-500 mr-2" />
              <p>このスタンプは獲得済みです。</p>
            </div>
          </div>
        ) : null}
        <StampGet name={data.name} point={data.point} />
        <GetPageLink />
      </div>
    </Layout>
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
