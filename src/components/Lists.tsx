import { useSelector } from 'react-redux';

import { listSelector } from '../redux/selectors';
import List from './List';
import LoadingSpinner from './LoadingSpinner';

const Lists: React.FC = () => {
  const lists = useSelector(listSelector); 

  if (!lists) {
    return <LoadingSpinner />;
  }

  return (
    <div>
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
