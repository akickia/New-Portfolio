import Layout from './styles/Layout';
import { Header } from './components/base/Header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Start } from './components/pages/Start/start';
import { Error } from './components/pages/Error/error';
import "./styles/main.scss"
import { Footer } from './components/base/Footer/footer';

function App() {

  return (
    <div className="App">
      <Layout>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
