import { MapLinkButton } from "@/components/stamp/MapLinkButton";
import { TopLinkButton } from "@/components/stamp/TopLinkButton";

export const GetPageLink = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-5 h-40">
        <TopLinkButton />
        <MapLinkButton />
      </div>
    </div>
  );
};
