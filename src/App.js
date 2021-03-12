import React, { useCallback, useRef, useState } from "react";
import produce from "immer";

const numRows = 50;
const numCols = 50;
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const generateGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

function App() {
  const [grid, setGrid] = useState(() => {
    return generateGrid();
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let liveNeighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                liveNeighbors += g[newI][newK];
              }
            });

            if (liveNeighbors < 2 || liveNeighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && liveNeighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center", padding: "2.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button
          style={{ margin: 10, padding: `5px 10px`, cursor: "pointer" }}
          onClick={() => {
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
            setRunning(!running);
          }}
        >
          {running ? "STOP" : "START"}
        </button>
        <button
          style={{ margin: 10, padding: `5px 10px`, cursor: "pointer" }}
          onClick={() => {
            setRunning(false);
            setGrid(() => generateGrid());
          }}
        >
          CLEAR
        </button>
        <button
          style={{ margin: 10, padding: `5px 10px`, cursor: "pointer" }}
          onClick={() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
              );
            }
            setGrid(rows);
          }}
        >
          RANDOM !!
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
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
                backgroundColor: grid[i][k] ? "#00FF33" : undefined,
                border: "solid 0.1px #fff",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
