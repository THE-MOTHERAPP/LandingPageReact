import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
