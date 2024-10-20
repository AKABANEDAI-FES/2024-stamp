import Image from "next/image";

import banesuta from "@/assets/banesuta-white.webp";

export const Header = () => {
  return (
    <header className="bg-primary p-4 pb-5 flex flex-col items-center sticky top-0 w-full z-10">
      <h1 className="text-center text-white text-xs">
        東洋大学赤羽台祭 デジタルスタンプラリー
      </h1>
      <Image
        src={banesuta.src}
        width={131}
        height={40}
        alt=""
        className="mx-auto mt-2"
      />
    </header>
  );
};
