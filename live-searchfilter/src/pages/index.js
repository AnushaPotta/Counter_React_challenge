import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const list = ["apple", "banana", "pear", "cherry", "kiwi", "watermelon"];
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <input
        value={input}
        placeholder="Enter input text..."
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      {list.filter((i) => i.includes(input))}
    </div>
  );
}
