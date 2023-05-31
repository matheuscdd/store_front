import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { RoutesMain as Routes } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  

  return (
    <>
      <GlobalStyle/>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Header/>
      <Routes/>
    </>
  )
}


