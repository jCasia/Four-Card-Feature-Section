import "./App.scss";
import Cards from "./components/Card";

function App() {
  const headContent = {
    headingLight: "Reliable, effecient delivery",
    headingBold: "Powered by Technology",
    headingText:
      "Our artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",
  };

  return (
    <main className="main">
      <div className="main-container">
        <div className="main-heading-text-container">
          <h1 className="main__heading">
            <span className="main__heading-light">
              {headContent.headingLight}
            </span>
            <span className="main__heading-bold">
              {headContent.headingBold}
            </span>
          </h1>
          <p className="main__text">{headContent.headingText}</p>
        </div>
        <Cards />
      </div>
    </main>
  );
}

export default App;
