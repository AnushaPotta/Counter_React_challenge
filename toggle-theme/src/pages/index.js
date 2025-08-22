import { useState } from "react";
export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        textAlign: "center",
        paddingTop: "50px",
        height: "100vh",
        width: "100vw",
      }}
    >
      <p>Click the toggle button and see the magic:)</p>
      <button
        style={{ marginTop: "30px" }}
        value={isDark}
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark === false ? "Toggle to dark mode" : "Toggle to light mode"}
      </button>
    </div>
  );
}
