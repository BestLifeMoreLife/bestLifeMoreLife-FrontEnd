import React from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: ""
    }
  };

  formChangeHandler = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    api.auth.login(this.state.fields).then(data => {
      console.log("response is", data);
      if (data.error) {
        this.setState({ error: true });
      } else {
        this.props.handleLogin(data);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return;
  }
}

export default LoginPage;
