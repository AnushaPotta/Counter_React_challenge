import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <p>Count: {count}</p>
      <div>
        <button
          style={{ marginLeft: "10px", marginTop: "3rem", padding: "5px 5px" }}
          onClick={() => setCount(count + 1)}
        >
          + Increase
        </button>

        <button
          disabled={count === 0}
          style={{ marginLeft: "10px", marginTop: "3rem", padding: "5px 5px" }}
          onClick={() => setCount(count - 1)}
        >
          - Decrease
        </button>
        <button
          style={{ marginLeft: "10px", marginTop: "3rem", padding: "5px 5px" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
