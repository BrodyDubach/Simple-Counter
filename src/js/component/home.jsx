import React from "react";

function Home(props) {
  return (
    <div className="container">

      <h1 className="num">
        {Math.floor(props.sec / 100000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 10000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 1000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 100) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 10) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(props.sec / 1) % 10}
      </h1>
    </div>
  );
}

export default Home;