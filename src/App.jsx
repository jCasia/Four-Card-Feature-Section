import "./App.scss";
import Cards from "./components/Card";

function App() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-heading-text-container">
          <h1 className="main__heading">
            <span className="main__heading-light">
              Reliable, effecient delivery
            </span>
            <span className="main__heading-bold">Powered by Technology</span>
          </h1>
          <p className="main__text">
            Our artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <Cards />
      </div>
    </main>
  );
}

export default App;
