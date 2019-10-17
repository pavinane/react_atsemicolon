import React from "react";
import "./time.scss";
import Fetch from "./Fetch";
class Time extends React.Component {
  state = {
    text: ""
  };

  click = show => this.setState({ text: show });

  render() {
    return (
      <div className="day">
        <div className="hour">
          {console.log(this.state)}
          <button type="button" onClick={() => this.click("parttime")}>
            part-time
          </button>
          <button type="button" onClick={() => this.click("fulltime")}>
            full-time
          </button>
          <button type="button" onClick={() => this.click("online")}>
            online
          </button>
        </div>
        <div className="min">
          <Fetch />
        </div>
      </div>
    );
  }
}
export default Time;
