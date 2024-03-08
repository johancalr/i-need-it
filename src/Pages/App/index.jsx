import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export { App };
