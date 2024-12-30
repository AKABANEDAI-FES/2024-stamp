import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export const HomeLinkButton = () => {
  return (
    <Link
      href="/"
      className="bg-primary shadow-center rounded-xl py-3 w-full flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <HomeIcon className="text-white me-2" />
        <p className="text-lg underline text-white">最初のページにもどる ＞</p>
      </div>
    </Link>
  );
};
