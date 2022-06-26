import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 2, span: 16 }
};
class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div >
        <div className="container" >
        <Button style={{marginTop:"10px" , marginLeft:"10px" ,color :"white" , backgroundColor:"#3E60C4" , fontWeight : "bold"}}>
            <Link to="/" className="btn-flat waves-effect">
              Back to home
            </Link>
          </Button>
          <div className="col s12" >
            <h1 className="title">
              <b>Register</b>
            </h1>

          </div>
          
              <Form
                className="Form"
                
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <div className="border-form">
                <Form.Item
                className="input-field"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input your first name!" }
                  ]}
                >
                  <Input id="firstName" placeholder="First Name" onChange={this.onChange} />
                  <span className="red-text">{errors.firstName}</span>
                </Form.Item>

                <Form.Item
                className="input-field"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your last name!" }
                  ]}
                >
                  <Input id="lastName" placeholder="Last Name" onChange={this.onChange} />
                  <span className="red-text">{errors.lastName}</span>
                </Form.Item>

                <Form.Item
                className="input-field"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your username!" }
                  ]}
                >
                  <Input id="name" placeholder="Username" onChange={this.onChange} />
                  <span className="red-text">{errors.name}</span>
                </Form.Item>

                <Form.Item
                className="input-field"
                  name="email"
                  rules={[{ required: true, message: "Please input your email!" }]}
                >
                  <Input id="email" placeholder="Email" error={errors.email} onChange={this.onChange} />
                  <span className="red-text">{errors.email}</span>
                </Form.Item>

                <Form.Item
                className="input-field"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" }
                  ]}
                >
                  <Input.Password placeholder="Password"  id="password" onChange={this.onChange} />
                  <span className="red-text">{errors.password}</span>
                </Form.Item>

                <Form.Item
                className="input-field"
                  name="password2"
                  rules={[
                    { required: true, message: "Please confirm your password!" }
                  ]}
                >
                  <Input.Password placeholder="Confirm Password"  id="password2" onChange={this.onChange} />
                  <span className="red-text">{errors.password2}</span>
                </Form.Item>

                <Form.Item  className="input-field" name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button className="submit" type="primary" block htmlType="submit" onClick={this.onSubmit}>
                    Submit
                  </Button>
                </Form.Item>
                </div>
                <p className="grey-text text-darken-1">
                  Already have an account?{" "}
                  
                    <Link to="/login">Log in</Link>
                  
                </p>

              </Form>
          
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
