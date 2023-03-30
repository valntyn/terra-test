import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Homepage } from './Pages/Homepage';
import { PageNotFound } from './Pages/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path=":id" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
