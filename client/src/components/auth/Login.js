import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      
      

       
        <div className="container1">

        <Button style={{marginLeft:"15px" , color :"white" , backgroundColor:"#3E60C4" , fontWeight : "bold"}}>
            <Link to="/" className="btn-flat waves-effect">
              Back to home
            </Link>
          </Button>
          <div className="col s12" >
          
            <h1 className="title">
              <b>Login </b>
            </h1>

          </div>
          <Form
          className="Form"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <div className=" col s12 ">
              <Form.Item
              className="input-field"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email"  id="email" onChange={this.onChange} />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </Form.Item>
            </div>
            <div className="col s12">
              <Form.Item
              className="input-field"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password"  id="password" onChange={this.onChange} />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </Form.Item>
            </div>

            <Form.Item >

              <Button className="submit" block type="primary" htmlType="submit" onClick={this.onSubmit}>
                Submit
              </Button>
            </Form.Item>
            <p className="grey-text text-darken-1">
              Don't have an account?{" "}
                <Link to="/register">Register</Link>
            
            </p>
          </Form>
        </div>
     
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
