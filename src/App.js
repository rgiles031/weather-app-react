import "./App.css";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="container WeatherApp">
      <div className="border">
        <Form defaultCity="London" />
        <div id="insert-forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
