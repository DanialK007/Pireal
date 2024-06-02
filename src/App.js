import './App.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import LoadingScreen from './Layout/Components/LoadingScreen';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000); // Set loading to false after 0.5s
    };

    handleRouteChange();
  }, [location]);

  return (
    <>
      {loading && <LoadingScreen />}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
