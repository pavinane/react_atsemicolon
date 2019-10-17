import React from "react";
import "./form.scss";

const Title = () => (
  <div className="title">
    <div className="head">
      <h1>Schedule a Call</h1>
      <h3>Programs</h3>
    </div>
    <MainButton />
  </div>
);

class MainButton extends React.Component {
  state = {
    text: "",
    options: false
  };
  click = show => {
    this.setState({ text: show, options: true });
  };
  click2 = () => this.setState({ text: "", options: false });
  render() {
    const { text, options } = this.state;
    return (
      <div className="option">
        {options ? (
          <div className="main-btn">
            <button type="button" onClick={this.click2}>
              {text}
            </button>
          </div>
        ) : (
          <div className="sh-btn">
            <button className="button" onClick={() => this.click("Design")}>
              Design
            </button>
            <button
              className="button"
              onClick={() => this.click(" Mobile Dev")}
            >
              Mobile Dev
            </button>
            <button className="button" onClick={() => this.click("Front-End")}>
              Front-End
            </button>
            <button className="button" onClick={() => this.click(" Iot")}>
              Iot
            </button>
            <button className="button" onClick={() => this.click(" Back-End")}>
              Back-End
            </button>
            <button
              className="button"
              onClick={() => this.click(" FullStackDev")}
            >
              FullStackDev
            </button>
            <button
              className="button"
              onClick={() => this.click("   Machine Learning")}
            >
              Machine Learning
            </button>
            <button
              className="button"
              onClick={() => this.click("  Data Science")}
            >
              Data Science
            </button>
          </div>
        )}
      </div>
    );
  }
}

const Form = () => (
  <div className="form">
    <Title />
  </div>
);

export default Form;
