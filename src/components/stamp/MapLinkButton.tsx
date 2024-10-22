import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Link from "next/link";

export const MapLinkButton = () => {
  return (
    <Link
      href="/map"
      className="bg-primary shadow-center rounded-xl py-3 max-w-md w-full flex flex-col items-center justify-center"
    >
      <PlaceOutlinedIcon className="text-white" fontSize="large" />
      <p className="mt-2 underline text-white">
        スタンプ設置場所
        <br />
        を調べる ＞
      </p>
    </Link>
  );
};
