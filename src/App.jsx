import "./App.css";
import ErrorBoundary from "./utils/ErrorBoundary";
import Home from "./views/HomeComponent/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<p>Box Box</p>}>
        <Home />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
