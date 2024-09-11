/* eslint-disable react/prop-types */
const Tabs = ({ activeTab, onTabClick }) => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-lg h-full">
      <div className="flex justify-between bg-black p-1 rounded-full">
        {["aboutMe", "experiences", "recommended"].map((tab) => (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`w-full py-2 px-4 rounded-full transition duration-300 ${
              activeTab === tab
                ? "bg-black text-white shadow-md"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="text-gray-300 mt-4 text-center pt-5">
        {activeTab === "aboutMe" && (
          <p>Hello! I am Dave, your sales rep here from Salesforce...</p>
        )}
        {activeTab === "experiences" && (
          <p>Here are some of my experiences in sales and marketing...</p>
        )}
        {activeTab === "recommended" && (
          <p>Here are some recommended resources for improving your sales...</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
