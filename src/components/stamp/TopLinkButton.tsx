import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Link from "next/link";

export const TopLinkButton = () => {
  return (
    <Link
      href="/"
      className="bg-primary shadow-center rounded-xl py-3 w-full flex flex-col items-center justify-center"
    >
      <VerifiedOutlinedIcon className="text-white" fontSize="large" />
      <p className="mt-2 underline text-white">
        集めたスタンプ
        <br />
        を見る ＞
      </p>
    </Link>
  );
};
