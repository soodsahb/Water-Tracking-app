import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialRemainingGlasses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [remainingGlasses, setRemainingGlasses] = useState(
    () =>
      JSON.parse(localStorage.getItem("remainingGlasses")) ||
      initialRemainingGlasses
  );
  const [drankGlasses, setDrankGlasses] = useState(
    JSON.parse(localStorage.getItem("drankGlasses")) || []
  );

  const handleAddGlass = () => {
    if (remainingGlasses.length > 0) {
      const poppedElement = remainingGlasses[remainingGlasses.length - 1];
      let newRemainingGlasses = remainingGlasses.slice(0, -1);
      setDrankGlasses((prevGlasses) => [...prevGlasses, poppedElement]);
      setRemainingGlasses(newRemainingGlasses);
    }
  };

  const handleRemoveGlass = () => {
    if (drankGlasses.length > 0) {
      const poppedElement = drankGlasses[drankGlasses.length - 1];
      let newDrankGlasses = drankGlasses.slice(0, -1);
      setRemainingGlasses((prevGlasses) => [...prevGlasses, poppedElement]);
      setDrankGlasses(newDrankGlasses);
    }
  };

  useEffect(() => {
    localStorage.setItem("remainingGlasses", JSON.stringify(remainingGlasses));
  }, [remainingGlasses]);

  useEffect(() => {
    localStorage.setItem("drankGlasses", JSON.stringify(drankGlasses));
  }, [drankGlasses]);

  return (
    <div className="container">
      <div className="glass-section">
        <h1>Remaining Glasses</h1>
        <div className="all-glasses">
          {remainingGlasses.map((glass) => (
            <img
              className="empty-glass"
              src={glass === 0 ? "" : "/emptyglass_121617.png"}
              alt={`empty-glass-${glass}`}
              key={glass}
            />
          ))}
        </div>
        {remainingGlasses.length > 0 && (
          <button className="add-glass" onClick={handleAddGlass}>
            Add Glass
          </button>
        )}
      </div>

      <div className="glass-section">
        <h1>Drank Glasses</h1>
        <div className="all-glasses">
          {drankGlasses.map((glass) => (
            <img
              src="/652212-200.png"
              alt={`drank-glass-${glass}`}
              className="drank-glass"
              key={glass}
            />
          ))}
        </div>
        {drankGlasses.length > 0 && (
          <button className="remove-glass" onClick={handleRemoveGlass}>
            Remove Glass
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
