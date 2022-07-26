import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from "components/Navbar";
import Home from 'pages/Home';
import Listing from 'pages/Listing';
import Form from 'pages/Fom';

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
      </Routes>
    </BrowserRouter>

  );
}

export default App;
