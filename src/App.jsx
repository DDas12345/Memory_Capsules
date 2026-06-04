import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [capsules, setCapsules] = useState([]);

  const addCapsule = (newCapsule) => {
    setCapsules([...capsules, newCapsule]);
  };

  const deleteCapsule = (id) => {
    setCapsules(
      capsules.filter(
        (capsule) => capsule.id !== id
      )
    );
  };

  return (
    <Home
      capsules={capsules}
      addCapsule={addCapsule}
      deleteCapsule={deleteCapsule}
    />
  );
}

export default App;