import React, { useCallback, useRef, useState } from "react";
import produce from "immer";

const numRows = 50;
const numCols = 50;

function App() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      console.log("Not running");
    } else {
      console.log("Running");
    }
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center", padding: "2.5rem" }}>
      <button
        style={{ marginBottom: 10, padding: `5px 10px`, cursor: "pointer" }}
        onClick={() => {
          setRunning(!running);
          runningRef.current = !running;
          runSimulation();
        }}
      >
        {running ? "STOP" : "START"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols},20px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "pink" : undefined,
                border: "solid 1px black",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
