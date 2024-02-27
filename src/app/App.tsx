import { useEffect } from "react";
import "styles/App.css";
import Routing from "./Routing";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <Routing />;
}

export default App;
