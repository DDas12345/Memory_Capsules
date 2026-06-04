import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [capsules, setCapsules] = useState(() => {
    const savedCapsules = localStorage.getItem("capsules");

    return savedCapsules
      ? JSON.parse(savedCapsules)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "capsules",
      JSON.stringify(capsules)
    );
  }, [capsules]);

  const addCapsule = (newCapsule) => {
    setCapsules((prev) => [
      ...prev,
      newCapsule,
    ]);
  };

  const deleteCapsule = (id) => {
    setCapsules((prev) =>
      prev.filter(
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