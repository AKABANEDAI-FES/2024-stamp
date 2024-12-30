import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
{
  /*import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";*/
}
import Image from "next/image";

import placeholder from "@/assets/banesutamap.png";
import { HomeLinkButton } from "@/components/HomeLinkButton";
import Layout from "@/components/Layout";
import { Title } from "@/components/Title";

const MapPage = () => {
  return (
    <Layout pageTitle="スタンプ設置場所">
      <div className="mb-6 mx-5">
        <div className="mt-6">
          <Title title="スタンプ設置場所" />
        </div>
        <div className="flex items-center mt-5">
          <MapOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">全体マップ</h2>
        </div>
        <div className="bg-yellow-50 shadow-center border-yellow-500 border-2 rounded-xl p-4 mt-5 w-full">
          <div className="flex justify-start items-center">
            <WarningAmberIcon className="text-yellow-500 mr-2" />
            <p>
              キャンパスのスタンプは、大学祭期間中の開催時間内のみ獲得できます。
            </p>
          </div>
        </div>

        <Image
          src={placeholder.src}
          width={placeholder.width}
          height={placeholder.height}
          alt="全体マップ"
          className="rounded-xl mt-5"
        />
        {/*
        <div className="flex items-center mt-5">
          <StorefrontOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">アピレ</h2>
        </div>
        <div className="flex items-center mt-5">
          <StorefrontOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">イトーヨーカドー</h2>
        </div>
        <div className="flex items-center mt-5">
          <StorefrontOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">ビビオ</h2>
        </div>
        <div className="flex items-center mt-5">
          <StorefrontOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">ビーンズ</h2>
        </div>
        <div className="flex items-center mt-5">
          <StorefrontOutlinedIcon className="text-xl mr-2" />
          <h2 className="text-lg font-semibold">赤羽台キャンパス</h2>
        </div>
        */}
        <div className="mt-5">
          <HomeLinkButton />
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
