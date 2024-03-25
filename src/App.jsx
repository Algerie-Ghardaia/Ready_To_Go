
// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Header />
        <hr/>
        <Section/>
      </div>
    </>
  );
}

export default App;
