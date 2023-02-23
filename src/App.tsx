import MainLayout from "./components/MainLayout";

import "./App.scss";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="upper-container">
          <div className="big-text-block">Исторические даты</div>
        </div>
        <div className="upper-container"></div>
        <div className="lower-container"></div>
        <MainLayout />
      </div>
    </>
  );
}

export default App;
