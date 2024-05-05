import Layout from './styles/Layout';
import { Header } from './components/base/Header/header';
import { Route, Routes } from 'react-router-dom';
import { Start } from './components/pages/Start/start';
import { Error } from './components/pages/Error/error';
import { Footer } from './components/base/Footer/footer';
import { Projects } from './components/pages/Projects/Projects';
import { EduExp } from './components/pages/EduExp/EduExp';
import { About } from './components/pages/About/About';
import { useState } from 'react';

function App() {
  const [isHomePage, setIsHomePage] = useState(false);
  return (
    <div className="App">
      <Layout isHomePage={isHomePage}>
        <Header />
        <Routes>
          <Route
            path="/"
            index
            element={<Start setIsHomePage={setIsHomePage} />}
          />
          <Route
            path="projects"
            element={<Projects setIsHomePage={setIsHomePage} />}
          />
          <Route
            path="edu-exp"
            element={<EduExp setIsHomePage={setIsHomePage} />}
          />
          <Route
            path="about"
            element={<About setIsHomePage={setIsHomePage} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
