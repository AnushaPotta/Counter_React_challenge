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
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {list
          .filter((item) => item.includes(input))
          .map((item, index) => {
            return (
              <li
                key={index}
                style={{
                  margin: "8px 0",
                  padding: "5px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "left",
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
