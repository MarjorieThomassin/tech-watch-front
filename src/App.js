// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import SearchBar from "./components/SearchBar";
// eslint-disable-next-line no-unused-vars
import { ResourcesContextProvider } from "./contexts/ResourcesContext";
import Resource from "./components/Resources";
// eslint-disable-next-line no-unused-vars

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
