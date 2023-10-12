import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PageRoute from './routes/PageRoute';
import './app.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageRoute />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
