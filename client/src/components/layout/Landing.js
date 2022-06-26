import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Button, Row, Col } from "antd";
import "./landing.css";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

/* const onMouseOver = event => {
  const el = event.target;
  el.style.color = "#40E0D0";
};

const onMouseOut = event => {
  const el = event.target;
  el.style.color = "#707070";
}; */

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: "80px",
          height: "150vh",
          backgroundColor: "#F2F2F6",
        }}
      >
        <Row style={{ marginRight: "50px", marginLeft: "80px", width: "auto" }}>
          <Col xs={24} sm={8} md={12}>
            <h1

             
            >
              Club Management Webesite.
            </h1>
            <p
              className="flow-text white-text text-darken-1"
              style={{
                fontFamily: "Avenir Next",
                color : "#0A0A0A",
                fontSize: "20px",
                fontWeight : "40px",
              }}
            >
              Create a club, join your favorite group, and interact with members
              in ways you never thought were possible.
            </p>
            <Button className="button-27" id="register1">
              <Link
                
                to="/register"
               
              >
                Register
              </Link>
            </Button>
            <Button className="button-27" id = "login1">
              <Link
                
                to="/login"
              >
                Login
              </Link>
            </Button>
          </Col>
          <Col xs={24} sm={16} md={12}>
            <img
              alt="some alt"
              src={images["landing.png"]}
              style={{
                width: "95%",
                height: "auto",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} md={12}></Col>
        </Row>
        {/* <div
          className="row"
          style={{
            height: "100vh",
            backgroundColor: "#40E0D0",
            paddingTop: "220px"
          }}
        >
          <div className="column center-align">
            <h1
              style={{
                fontFamily: "Avenir Next",
                fontSize: "62px",
                fontWeight: "520"
              }}
            >
              Connect with your <br />
              members like never
              <br /> before.
            </h1>
            <p
              className="flow-text white-text text-darken-1"
              style={{
                fontFamily: "Avenir Next",
                fontSize: "16px"
              }}
            >
              Create a club, join your favorite group, and interact with
              <br />
              members in ways you never thought were possible.
            </p>
            <br />
            <Button>
              <Link
                className="btn waves-effect waves-light hoverable black-text white accent-3"
                to="/register"
                style={{
                  fontFamily: "Avenir Next",
                  fontSize: "16px",
                  width: "250px",
                  borderRadius: "100px",
                  letterSpacing: "1.5px",
                  textTransform: "none",
                  position: "relative"
                }}
              >
                Create a Club
              </Link>
            </Button>
            <Button>
              <Link
                className="btn waves-effect waves-light hoverable black-text white accent-3"
                to="/login"
                style={{
                  fontFamily: "Avenir Next",
                  fontSize: "16px",
                  width: "250px",
                  borderRadius: "100px",
                  letterSpacing: "1.5px",
                  textTransform: "none"
                }}
              >
                Join a Club
              </Link>
            </Button>
          </div>
          <div className="column">
            <img
              alt="some alt"
              src={images["laptopandphone.png"]}
              style={{
                position: "relative",
                width: "1200px",
                height: "1100px",
                right: "300px",
                bottom: "430px"
              }}
            />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Landing;
