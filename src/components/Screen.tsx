export const Screen = ({ value }: { value: string }) => {
  return (
    <div className="screen background">
      <div className="screen-value">{value}</div>
    </div>
  );
};
