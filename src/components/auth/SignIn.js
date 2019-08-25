import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import image from "../../media/logo/login-logo.png";
import "../../loginform.css";
import Modal from "./Modal";
import M from "materialize-css";

const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};

class SignIn extends Component {
  state = initialState;

  // componentDidMount() {
  //   const options = {
  //     onOpenStart: () => {
  //       console.log("Open Start");
  //     },
  //     onOpenEnd: () => {
  //       console.log("Open End");
  //     },
  //     onCloseStart: () => {
  //       console.log("Close Start");
  //     },
  //     onCloseEnd: () => {
  //       console.log("Close End");
  //     },
  //     inDuration: 250,
  //     outDuration: 250,
  //     opacity: 0.5,
  //     dismissible: false,
  //     startingTop: "4%",
  //     endingTop: "10%"
  //   };
  //   M.Modal.init(this.Modal, options);

  //   // let instance = M.Modal.getInstance(this.Modal);
  //   // instance.open();
  //   // instance.close();
  //   // instance.destroy();
  // }

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
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    } else {
      console.log("this.state");
    }
  };

  render() {
    return (
      <div
        className="Login-component"
        style={{
          backgroundImage:
            "url(" + require("../../media/logo/backgroung.jpg") + ")"
        }}
      >
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <img src={image} alt="" />
            <h5 className="amber-text text-lighten-1">همراه بانک ملت</h5>
            <div className="Row">
              <div className="input-field col s12">
                <label htmlFor="username" className="white-text">
                  نام کاربری
                </label>

                <input
                  type="text"
                  name="name"
                  id="username"
                  onChange={this.handleChange}
                  value={this.state.name}
                  className="validate left-align white-text"
                  required=""
                  aria-required="true"
                  autoComplete="off"
                  data-target="modal1"
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
                </div>
              </div>
            </div>
            <div className="Row">
              <div className="input-field col s12">
                <label htmlFor="password" className="white-text">
                  رمز ورود
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  // onChange={this.handleChange}
                  // value={this.state.password}
                  className="validate left-align white-text"
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.passwordError}
                </div>
                <button
                  className="btn waves-effect waves-light red"
                  type="submit"
                  name="action"
                >
                  ورود
                </button>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  data-target="modal1"
                >
                  Modal
                </a>
                <div
                  ref={Modal => {
                    this.Modal = Modal;
                  }}
                  id="modal1"
                  className="modal"
                >
                  {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
                  <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>لطفا مقادیر را وارد کنید</p>
                  </div>
                  <div className="modal-footer">
                    <a className="modal-close waves-effect waves-red btn-flat">
                      Disagree
                    </a>
                    <a className="modal-close waves-effect waves-green btn-flat">
                      Agree
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field" />
          </form>
        </div>
        {/* <div class="style_panel_2EeNE ">
          <div class="style_panel_header_Npu6t" role="button">
            <div class="style_panel_header_Npu6t">
              <div class="style_searchIcon_19Gp9">
                <span class="style_icon_2qDiL sf-magnifier lg " />
              </div>
              <div class="style_tab_35BEV   ">
                <span class="style_icon_2qDiL sf-filter lg " />
                <span class="">
                  <span>فیلتر</span>
                </span>
              </div>
              <div class="style_tab_35BEV   ">
                <span class="style_icon_2qDiL sf-arrow-up-down lg " />
                <span class="">
                  <span>مرتب سازی</span>
                </span>
              </div>
              <div class="style_tab_35BEV   ">
                <span class="style_icon_2qDiL sf-bag lg " />
                <span class="">
                  <span>خدمات</span>
                </span>
              </div>
            </div>
          </div>
          <div class="style_panel_body_2WEJF" />
          <div class="style_panel_footer_31OAC" />
        </div> */}
      </div>
    );
  }
}

export default withRouter(SignIn);
