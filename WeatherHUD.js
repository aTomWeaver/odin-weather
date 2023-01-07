"use strict";

const e = React.createElement;

class Conditions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello</h1>;
  }
}

const domContainer = document.querySelector("#HUD-ctr");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Conditions));
