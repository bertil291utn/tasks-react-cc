import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/tasks">
        <button data-testid="ir-tasks">Ir a la sección de Tasks</button>
      </Link>
      <Link to="/listado">
        <button data-testid="ir-listado">Ir a la sección de Listado</button>
      </Link>
    </div>
  );
};

export default Home;
