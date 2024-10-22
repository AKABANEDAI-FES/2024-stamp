import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Image from "next/image";

import placeholder from "@/assets/800x600.png";
import { Title } from "@/components/Title";

const MapPage = () => {
  return (
    <div className="mb-6 mx-5">
      <div className="mt-6">
        <Title title="スタンプ設置場所" />
      </div>
      <div className="flex items-center mt-5">
        <MapOutlinedIcon className="text-xl mr-2" />
        <h2 className="text-lg font-semibold">全体マップ</h2>
      </div>
      <Image
        src={placeholder.src}
        width={placeholder.width}
        height={placeholder.height}
        alt="全体マップ"
        className="rounded-xl mt-5"
      />
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
    </div>
  );
};

export default MapPage;
