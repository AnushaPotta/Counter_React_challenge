import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea
        value={text}
        rows="10"
        cols="20"
        placeholder="Enter text here..."
        onChange={(e) => setText(e.target.value)}
        maxLength={100}
      ></textarea>
      <p style={{ color: text.length === 100 ? "red" : "green" }}>
        {text.length === 100
          ? "Character limit reached!"
          : `Characters left: ${100 - text.length}`}
      </p>
    </div>
  );
}
