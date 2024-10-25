import Image from "next/image";

import onePoint from "@/assets/banesuta1p.png";
import twoPoint from "@/assets/banesuta2p.png";
import zeroPoint from "@/assets/nostamp.png";

export const Panel = ({ name, point }: { name: string; point: number }) => {
  return (
    <div className="bg-white shadow-center rounded-xl py-3 w-full flex flex-col items-center justify-center">
      <p className="font-semibold mb-2">{name}</p>
      {point == 0 ? (
        <Image
          src={zeroPoint.src}
          width={120}
          height={120}
          alt={"zero point"}
        />
      ) : point == 1 ? (
        <Image src={onePoint.src} width={120} height={120} alt={"one point"} />
      ) : point >= 2 ? (
        <Image src={twoPoint.src} width={120} height={120} alt={"two point"} />
      ) : null}
    </div>
  );
};
