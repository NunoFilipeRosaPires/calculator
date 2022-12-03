export const Button = ({ name, type }: { name: any; type: string }) => {
  return (
    <button className={`button button-${type}`} onClick={() => console.log(name)}>
      {name}
    </button>
  );
};
