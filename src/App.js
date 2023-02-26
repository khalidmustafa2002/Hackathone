import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Index from './pages/Routes';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './contexts/AuthContext';
function App() {
  return (
    <>
    <AuthContextProvider>
      <Index />
    </AuthContextProvider>


      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
