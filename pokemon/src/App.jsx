import { Search } from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <h1>Hello..! This is your pokemon search</h1>
        <h2>⏬⏬⏬⏬⏬⏬⏬</h2>
        <Search />
      </Router>
    </>
  );
}

export default App;
