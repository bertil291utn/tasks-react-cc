
interface ElementProps {
  imageSrc: string;
  name: string;
}

const List: React.FC<ElementProps> = ({ name, imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default List;
