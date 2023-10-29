import {BrowserRouter as Router, Routes, Routes} from "react-router-dom";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import New from "./Pages/New";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Index from "./Pages/Index";

import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <h1>Tuner App</h1>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
