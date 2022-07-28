import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from "components/Navbar";
import Home from 'pages/Home';
import Listing from 'pages/Listing';
import Form from 'pages/Fom';
import Pagination from 'components/Pagination';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing'>
          <Route path=':movieId' element={<Listing />} />
        </Route>
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
        <Route path='/Pagination'>
          <Route path=':body' element={<Pagination />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
