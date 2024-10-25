export const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <div className="w-2 h-6 bg-primary mr-2"></div>
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};
