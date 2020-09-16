import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component.jsx";
import "./App.css";

const HatsPage = (props) => {
  console.log("====================================");
  console.log(props);
  console.log("====================================");
  return (
    <div>
      <h1>HATS PAGE</h1>
      <Link to={`${props.match.url}/10`}>To Hat 10</Link>
      <Link to={`${props.match.url}/12`}>To Hat 12</Link>
      <Link to={`${props.match.url}/14`}>To Hat 14</Link>

    </div>
  );
};

const HatsPageDetail = (props) => {
  console.log("====================================");
  console.log(props);
  console.log(props.match.params.hatsId);
  console.log("====================================");
  return (
    <div>
      <h1>HATS DETAILS PAGE</h1>
      <p>{props.match.params.hatsId}</p>
      <button onClick={() => props.history.push("/hats")}>To Hats 2</button>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <Homepage/> */}
      {/* The difference between using Link and <a></a> tag is that React is a SPA and we borrow the URL to tell it what to render rather than having to redirect using a tag */}
      <Link to="/hats">To Hats</Link>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats/" component={HatsPage} />
        <Route path="/hats/:hatsId" component={HatsPageDetail} />
      </Switch>
    </div>
  );
}

export default App;
