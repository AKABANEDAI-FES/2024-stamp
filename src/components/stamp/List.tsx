import { Panel } from "@/components/stamp/Panel";

import { MapLinkButton } from "./MapLinkButton";

export const List = ({
  stampList,
}: {
  stampList: { [key: string]: number };
}) => {
  const locations = [
    { name: "アピレ", key: "Apire" },
    { name: "イトーヨーカドー", key: "Ito" },
    { name: "ビビオ", key: "Bivio" },
    { name: "ビーンズ", key: "Beans" },
    { name: "赤羽台キャンパス", key: "Campus" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {locations.map((location) => (
        <Panel
          key={location.key}
          name={location.name}
          point={stampList[location.key]}
        />
      ))}
      <MapLinkButton />
    </div>
  );
};
