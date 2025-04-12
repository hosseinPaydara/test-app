import NavBar from "./component/navbar/Navbar";
import Home from './pages/home/Home'
import { Routes, Route } from "react-router-dom";
import About from './pages/about/About'
import LoginPage from './pages/login/LoginPage'
import ArticlePage from './pages/articlePage/ArticlePage'
import TablePage from './pages/table/TablePage'
import NotFound from "./pages/notFound/NotFound";
import Weather from "./pages/weather/Weather";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/loginPage' element={<LoginPage />} />
        <Route path='/articlePage/:id' element={<ArticlePage/>}/>
        <Route path='/tablePage' element={<TablePage/>}/>
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </div>
  );
}

export default App;
