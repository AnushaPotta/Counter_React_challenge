import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    marginLeft: "10px",
    marginTop: "3rem",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <p>Count: {count}</p>

      <div>
        <button
          style={buttonStyle}
          onClick={() => setCount((prev) => prev + 1)}
        >
          + Increase
        </button>

        <button
          disabled={count === 0}
          style={{
            ...buttonStyle,
            cursor: count === 0 ? "not-allowed" : "pointer",
          }}
          onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
        >
          - Decrease
        </button>

        <button style={buttonStyle} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
