import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Resource from "./components/Resource";
import { ResourcesContextProvider } from "./contexts/ResourcesContext";

function App() {
  return (
    <Router>
      <ResourcesContextProvider>
        <SearchBar />
        <Route path="/resources/:id" component={Resource} />
      </ResourcesContextProvider>
    </Router>
  );
}

export default App;
