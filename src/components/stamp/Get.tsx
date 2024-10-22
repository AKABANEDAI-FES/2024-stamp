import { BigPanel } from "@/components/stamp/BigPanel";
import { Title } from "@/components/Title";

export const StampGet = ({ name, point }: { name: string; point: number }) => {
  return (
    <>
      <div className="mt-6">
        <Title title="スタンプを獲得しました！" />
      </div>
      <div className="mt-5">
        <BigPanel name={name} point={point} />
      </div>
    </>
  );
};
