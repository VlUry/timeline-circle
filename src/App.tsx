import MainLayout from "./components/MainLayout";

import "./App.scss";

function App() {
  return (
    <>
      <div className="background-container">
        <div className="background-container_upper"></div>
        <div className="background-container_upper"></div>
        <div className="background-container_lower"></div>
      </div>
      <MainLayout />
    </>
  );
}

export default App;
