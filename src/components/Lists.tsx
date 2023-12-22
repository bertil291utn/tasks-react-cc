import { useSelector } from 'react-redux';

import { listSelector } from '../redux/selectors';
import List from './List';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const Lists: React.FC = () => {
  const lists = useSelector(listSelector); 

  if (!lists) {
    return <LoadingSpinner />;
  }

  return (
    <div>
       <Link to="/">Volver a la pantalla principal</Link>
      {lists.map((list) => (
        <List
          key={`list-${list.id}`}
          name={list.name}
          imageSrc={list.imgSrc}
        />
      ))}
    </div>
  );
};

export default Lists;
