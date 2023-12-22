import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TasksScreen from './components/TasksScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksScreen />} />
          {/* <Route path="/listado" element={<ListadoScreen />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
