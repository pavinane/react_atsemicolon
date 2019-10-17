import React from "react";
import "./contact.scss";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    education: ""
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { name, email, number, education } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
          placeholder="name"
        />
        <input
          name="email"
          type="text"
          value={email}
          onChange={this.handleChange}
          placeholder="email"
        />
        <input
          name="number"
          type="text"
          value={number}
          onChange={this.handleChange}
          placeholder="mobile number"
        />
        <input
          name="name"
          type="text"
          value={education}
          onChange={this.handleChange}
          placeholder="educations"
        />
      </form>
    );
  }
}

export default Contact;
