import { useState } from "react";
export default function Home() {
  const [text, setText] = useState("");
  const [isVisible, setisVisible] = useState(false);
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <input
        value={text}
        type={isVisible ? "text" : "password"}
        placeholder="Enter password"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setisVisible((prev) => !prev);
        }}
        style={{ marginLeft: "10px" }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
