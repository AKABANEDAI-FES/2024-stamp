import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Link from "next/link";
import { useEffect, useState } from "react";

import { AttentionButton } from "@/components/AttentionButton";
import { HowToPlayButton } from "@/components/HowToPlayButton";
import Layout from "@/components/Layout";
import { PointPanel } from "@/components/PointPanel";
import { List as StampList } from "@/components/stamp/List";
import {
  AlreadyExchanged,
  GetPoints,
  GetStamps,
  Initialize,
} from "@/utils/stamp";

export default function Home() {
  const [point, setPoint] = useState(0);
  const [stampList, setStampList] = useState<{ [key: string]: number }>({});
  const [exchanged, setExchanged] = useState(false);

  useEffect(() => {
    Initialize();
    const fetchedPoints = GetPoints();
    setPoint(fetchedPoints);
    const fetchedStampList = GetStamps();
    setStampList(fetchedStampList);
    const fetchedExchanged = AlreadyExchanged();
    setExchanged(fetchedExchanged);
  }, []);

  const handleExchange = () => {
    const fetchedExchanged = AlreadyExchanged();
    setExchanged(fetchedExchanged);
  };

  return (
    <Layout pageTitle="ホーム">
      <div className="mb-6 mx-5">
        <div className="grid grid-cols-2 gap-5 mt-6">
          <HowToPlayButton />
          <AttentionButton />
        </div>
        <div className="flex items-center mt-6">
          <VerifiedOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">スタンプ</h2>
        </div>
        <div className="mt-5">
          <StampList stampList={stampList} />
        </div>
        <div className="flex items-center mt-5">
          <RedeemOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">景品交換</h2>
        </div>
        <div className="mt-5">
          <PointPanel
            point={point}
            exchanged={exchanged}
            onExchange={handleExchange}
          />
        </div>
        <div className="mt-5">
          <Link
            href="/prize"
            className="bg-primary shadow-center rounded-xl mt-5 py-3 w-full flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              <RedeemOutlinedIcon className="text-white me-2" />
              <p className="text-lg underline text-white">景品について ＞</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
