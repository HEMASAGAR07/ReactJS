import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './TaskDetails';
import NotFound from './NotFound';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem('darkMode');
    if (mode === 'enabled') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
