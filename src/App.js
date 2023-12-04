import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Dashboard from "./views/Dashboard";
import { Provider } from "react-redux";
import store from "./app/store";
import AppRoutes from "./AppRoutes";
import Footer from "./layouts/main/components/Footer/Footer";
import Topbar from "./layouts/main/components/Topbar/Topbar";
import Sidebar from "./layouts/main/components/Sidebar/Sidebar";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Topbar />
      <Provider store={store}>
        <Router>
          <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "20px" }}>
              <AppRoutes />
            </div>
          </div>
        </Router>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
