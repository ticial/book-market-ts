import { useEffect } from "react";
import Routing from "./Routing";
import { useLocation } from "react-router-dom";
import "styles/App.css";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <Routing />;
}

export default App;
