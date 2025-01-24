import { useState } from "react";

function Buttons() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="content__header flex space-x-10 p-4">
      {["For You", "Following", "Step 1", "Step 2", "Step 3"].map(
        (text, index) => (
          <button
            key={index}
            id={`btn-${index}`}
            className={`w-32 h-12 font-bold text-sm tracking-wide rounded-3xl shadow-md ease-in transition-all duration-300  flex justify-center items-center 
              ${
                activeButton === index
                  ? "bg-inherit text-white border-[3px] border-[#7158e2]" // Active styles
                  : "bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500 hover:text-indigo-100"
              }`}
            onClick={() => handleButtonClick(index)}
          >
            {text}
          </button>
        )
      )}
    </div>
  );
}

export default Buttons;
