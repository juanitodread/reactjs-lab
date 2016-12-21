import React from 'react';
import ReactDOM from 'react-dom';

const sayHello = <h1>Hello, world!</h1>;

ReactDOM.render(
  sayHello,
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById("interval")
  );
}

setInterval(tick, 5000);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const wlcm = <Welcome name="Juan" />;
ReactDOM.render(wlcm, document.getElementById("wlcm"));
