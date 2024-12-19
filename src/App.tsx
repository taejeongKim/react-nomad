import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieHome from './routs/MovieHome';
import Detail from './routs/Detail';

// import Counter from './Counter';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
