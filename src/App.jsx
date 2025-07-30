import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import HamburgerMenu from "./components/hamburgermenu";
import CustomizePizza from "./components/customizePizza";
import MainLayout from "./layout/mainLayout";
import NoHeaderLayout from "./layout/noHeaderLayout";
import Dashboard from "./components/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<HamburgerMenu />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="/*" element={<Navigate to={"Error"} />}></Route> */}
        </Route>

        <Route element={<NoHeaderLayout />}>
          <Route path="/customizePizza" element={<CustomizePizza />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
