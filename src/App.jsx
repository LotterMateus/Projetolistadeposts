import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/post" />} />
      <Route path="/post" element={<Posts />} />
      <Route path="/dados/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
