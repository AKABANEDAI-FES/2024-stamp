export const PointPanel = ({ point }: { point: number }) => {
  return (
    <div className="bg-white shadow-center rounded-xl p-6 py-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">景品交換ポイント</h2>
        <p className="text-xl font-semibold">
          <span className="text-3xl">{point}</span>P
        </p>
      </div>
    </div>
  );
};
