import questionMark from "./Vector.png";

const ToolTip = () => {
  return (
    <div className="h-[56%] mr-[2.36%] flex flex-col justify-between">
      <img src={questionMark} alt="Info" className="w-6 h-6" />
      <div className="flex">
        <div className="grid grid-cols-2 w-5 h-[1.875rem]">
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
