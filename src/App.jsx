import RightSection from "./components/RightSection";
function App() {
  return (
    <div className="grid grid-cols-2 h-screen w-full bg-gray-900 px-10 py-4">
      <div className="hidden lg:block"></div>

      <div className="">
        <RightSection />
      </div>
    </div>
  );
}

export default App;
