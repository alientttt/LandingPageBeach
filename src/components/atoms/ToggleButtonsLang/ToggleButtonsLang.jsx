import { useState } from "react";

const ToggleButtonsLang = () => {
  const [active, setActive] = useState("EN");

  return (
    <div className="bg-black/10 p-1 border rounded-full flex gap-1">
      {/* Button EN */}
      <button
        onClick={() => setActive("EN")}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-normal transition
          ${active === "EN" ? "bg-gray-100 text-black" : "text-white"}`}
      >
        EN
      </button>

      {/* Button IN */}
      <button
        onClick={() => setActive("IN")}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition
          ${active === "IN" ? "bg-gray-100 text-black" : "text-white"}`}
      >
        IN
      </button>
    </div>
  );
};

export default ToggleButtonsLang;
