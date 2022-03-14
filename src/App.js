import './App.css';
import './project/app.css'
import { Route,BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Main from './project/Main';
import Home from './project/Home';
import Tourism from './project/Tourism';
import Technology from './project/Technology';
import Fitness from './project/Fitness';
import Bollywood from './project/Bollywood';
import Food from './project/Food';
import { ArticleProvider } from './project/ArticleContext';
import Article from './project/Article';

function App() {
  return (
    <ArticleProvider>
    <div className="App">
      <Router>
        <Main/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="Category/Tourism" element={<Tourism/>}/>
          <Route path="Category/Fitness" element={<Fitness/>}/>
          <Route path="Category/Technology" element={<Technology/>}/>
          <Route path="Category/Bollywood" element={<Bollywood/>}/>
          <Route path="Category/Food" element={<Food/>}/>
          <Route path='/article/:ids' element={<Article />} />
        </Routes>
      </Router>
    </div>
    </ArticleProvider>
  );
}

export default App;
