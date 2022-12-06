import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Hotel from './Components/hotel/Hotel';
import List from './Components/list/List';

import './styles/app.scss'
import './styles/home.scss'
import './styles/header.scss'
import './styles/featured.scss'
import './styles/navbar.scss'
import './styles/propertylist.scss'
import './styles/featuredProperties.scss'
import './styles/maillist.scss'
import './styles/footer.scss'
import './styles/list.scss'
import './styles/hotel.scss'
import Login from './Components/Login';
import './styles/login.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
