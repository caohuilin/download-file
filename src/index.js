import React from "react";
import ReactDOM from "react-dom";
import FileSaver from "file-saver";

import "./styles.css";

class App extends React.Component {
  download = () => {
    var blob = new Blob(
      [JSON.stringify({ text: "gffg", bb: { kk: 1, ff: [1, 2, 3] } })],
      {
        type: "text/plain;charset=utf-8"
      }
    );
    FileSaver.saveAs(blob, "hello world.json");
  };

  render() {
    return (
      <div className="App">
        <a onClick={this.download}>下载</a>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
