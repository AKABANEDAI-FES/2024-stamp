import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Link from "next/link";

export const HowToPlayButton = () => {
  return (
    <Link
      href="/howtoplay"
      className="bg-primary shadow-center rounded-xl py-4 w-full flex items-center justify-center"
    >
      <HelpOutlineIcon className="text-white me-2" />
      <p className="underline text-white">あそびかた ＞</p>
    </Link>
  );
};
