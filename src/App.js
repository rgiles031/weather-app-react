import "./App.css";
import Form from "./Form";
import WeatherData from "./WeatherData";
import Footer from "./Footer";

function App() {
  return (
    <div className="container WeatherApp">
      <div className="border">
        <Form />
        <div id="insert-forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
