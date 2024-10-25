import Image from "next/image";

import onePoint from "@/assets/banesuta1p.png";
import twoPoint from "@/assets/banesuta2p.png";
import zeroPoint from "@/assets/nostamp.png";

export const BigPanel = ({ name, point }: { name: string; point: number }) => {
  return (
    <div className="bg-white shadow-center rounded-xl pt-6 pb-7 w-full flex flex-col items-center justify-center">
      <p className="text-xl font-semibold mb-3">{name}</p>
      {point == 0 ? (
        <Image src={zeroPoint.src} width={250} height={250} alt={""} />
      ) : point == 1 ? (
        <Image src={onePoint.src} width={250} height={250} alt={""} />
      ) : point >= 2 ? (
        <Image src={twoPoint.src} width={250} height={250} alt={""} />
      ) : null}
    </div>
  );
};
