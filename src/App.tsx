import Slider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="upper-container">
          <div className="big-text-block">Исторические даты</div>
        </div>
        <div className="upper-container">
          <div className="big-dates-block">
            <span>2015</span>
            <span>2022</span>
          </div>
        </div>
        <div className="lower-container">
          <div className="circle-navigation">
            <div className="circle-navigation_up">
              <span>06</span>/<span>06</span>
            </div>
            <div className="circle-navigation_bottom">
              <button className="circle-navigation-button">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                    stroke="#42567A"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button className="circle-navigation-button">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                >
                  <path
                    d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                    stroke="#42567A"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="slider-container">
            <Slider />
          </div>
        </div>
        <div className="circle-container">
          <div className="circle">
            <button className="circle-button"></button>
            <button className="circle-button"></button>
            <button className="circle-button"></button>
            <button className="circle-button"></button>
            <button className="circle-button"></button>
            <button className="circle-button active">
              6 <span>Наука</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
