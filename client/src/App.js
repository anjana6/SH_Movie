import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
import PageRoute from './routes/PageRoute';
import './app.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageRoute />
    </BrowserRouter>
  );
}

export default App;
