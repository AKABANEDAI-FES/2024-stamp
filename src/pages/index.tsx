import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout";
import { PointPanel } from "@/components/PointPanel";
import { List as StampList } from "@/components/stamp/List";
import { GetPoints, GetStamps, Initialize } from "@/utils/stamp";

export default function Home() {
  const [point, setPoint] = useState(0);
  const [stampList, setStampList] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    Initialize();
    const fetchedPoints = GetPoints();
    setPoint(fetchedPoints);
    const fetchedStampList = GetStamps();
    setStampList(fetchedStampList);
  }, []);

  return (
    <Layout pageTitle="ホーム">
      <div className="mb-6 mx-5">
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
          <PointPanel point={point} />
        </div>
      </div>
    </Layout>
  );
}
