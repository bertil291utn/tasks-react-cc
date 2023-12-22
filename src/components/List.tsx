
interface ElementProps {
  imageSrc: string;
  name: string;
}

const List: React.FC<ElementProps> = ({ name, imageSrc }) => {
  const defaultAvatar = process.env.PUBLIC_URL + '/avatar-1.png';
  return (
    <div>
      <img src={imageSrc || defaultAvatar} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default List;
