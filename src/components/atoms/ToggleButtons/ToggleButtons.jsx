import { useState } from "react";

const ToggleButtons = () => {
  const [active, setActive] = useState("Personal"); // default: personal aktif

  return (
    <div className="buttonbox box-border border text-white bg-black/10 p-1 rounded-full">
      {/* Button Personal */}
      <button
        onClick={() => setActive("Personal")}
        className={`px-2 py-2 rounded-full transition duration-400
          ${active === "Personal" ? "text-black bg-gray-100" : ""}`}
      >
        Personal
      </button>

      {/* Button Business */}
      <button
        onClick={() => setActive("Business")}
        className={`px-2 py-2 rounded-full transition duration-400
          ${active === "Business" ? "text-black bg-gray-100" : ""}`}
      >
        Business
      </button>
    </div>
  );
}

export default ToggleButtons;
