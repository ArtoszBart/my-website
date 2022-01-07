import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Footer from './components/fragments/Footer';
import Header from './components/fragments/Header';
import MainContent from './components/other/MainContent';
import Contact from './components/other/Contact'
import SocialMenu from './components/fragments/SocialMenu';
import AboutMe from './components/other/AboutMe';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainContent />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<AboutMe />} />
      </Routes>
      <SocialMenu />
      <Footer />
    </Router>
  );
}

export default App;
