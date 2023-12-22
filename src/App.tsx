import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import TasksScreen from './layouts/TasksScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ListadoScreen from './layouts/ListadoScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksScreen />} />
          <Route path="/listado" element={<ListadoScreen />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
