import {BrowserRouter as Router, Routes, Routes} from "react-router-dom";









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
