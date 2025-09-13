import { useState } from "react";
import { useEchoPublic } from "@laravel/echo-react";

export default function SharedInput() {

  console.log("Rendering SharedInput component");
  
  const [value, setValue] = useState("");

  // Subscribe to public channel "shared-input"
  useEchoPublic("shared-input", ".InputUpdate", (e: { message: string }) => {
    console.log("New channel payload:", e);
    setValue(e.message ?? "no message");
  }).listen();

  // Handle input changes and send updates to the server
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => { 
    const newValue = e.target.value; setValue(newValue); 
    await fetch("/api/update-input", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ message: newValue }), }); 
    };

  return (
    <div className="p-6 max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full border p-2 rounded-xl"
        placeholder="Type here..."
      />

      <p className="mt-4 text-gray-700">
        Last update: <strong>{value}</strong>
      </p>

    </div>
  );
}
