import "./App.css";
import Form from "./Form";
import WeatherData from "./WeatherData";
import Footer from "./Footer";

function App() {
  return (
    <div className="container WeatherApp">
      <div className="border">
        <Form />
        <h1>London</h1>
        <h6>Last updated: Sunday, 18:50</h6>
        <WeatherData />

        <div id="insert-forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
