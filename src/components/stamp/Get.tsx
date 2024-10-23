import { BigPanel } from "@/components/stamp/BigPanel";

export const StampGet = ({ name, point }: { name: string; point: number }) => {
  return (
    <>
      <div className="mt-5">
        <BigPanel name={name} point={point} />
      </div>
    </>
  );
};
