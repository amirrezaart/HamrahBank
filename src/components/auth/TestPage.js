// import React, { Component } from "react";
// import { spring, AnimatedSwitch } from "react-router-transition";
// import { withRouter, BrowserRouter as Router, Switch } from "react-router-dom";
// import A from "./A";
// import B from "./B";
// import C from "./C";

// // we need to map the `scale` prop we define below
// // to the transform style property
// function mapStyles(styles) {
//   return {
//     opacity: styles.opacity,
//     transform: `scale(${styles.scale})`
//   };
// }

// // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//   return spring(val, {
//     stiffness: 330,
//     damping: 22
//   });
// }

// // child matches will...
// const bounceTransition = {
//   // start in a transparent, upscaled state
//   atEnter: {
//     opacity: 0,
//     scale: 1.2
//   },
//   // leave in a transparent, downscaled state
//   atLeave: {
//     opacity: bounce(0),
//     scale: bounce(0.8)
//   },
//   // and rest at an opaque, normally-scaled state
//   atActive: {
//     opacity: bounce(1),
//     scale: bounce(1)
//   }
// };
// class testPage extends Component {
//   render() {
//     return (
//       <AnimatedSwitch
//         atEnter={bounceTransition.atEnter}
//         atLeave={bounceTransition.atLeave}
//         atActive={bounceTransition.atActive}
//         mapStyles={mapStyles}
//         className="route-wrapper"
//       />
//     );
//   }
// }

// export default withRouter(testPage);
import React from "react";

import { withRouter } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

class SignIn extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(isValid);
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          {/* <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          /> */}
          <input
            type="text"
            name="name"
            id="username"
            onChange={this.handleChange}
            value={this.state.name}
            className="validate left-align "
            required=""
            aria-required="true"
            autoComplete="off"
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default withRouter(SignIn);
