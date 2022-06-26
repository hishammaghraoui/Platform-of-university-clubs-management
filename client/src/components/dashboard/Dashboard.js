import React, { Component } from "react";
import PropTypes from "prop-types";
import "./dashboard.css";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NavbarLoggedIn from "../layout/navbar/NavbarLoggedIn";
import { Button } from "antd";
import image from "../images/imageclub.png";
import { Link } from "react-router-dom";
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

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        
        <NavbarLoggedIn />
        <div className="image">
        <img className="" src={image}/>
        <br/> <br/> <br/> <br/><br/>
        </div>

        <div class="" >
          <div
          
           
          >
            <div className="row">
              <div className="">
                <h4 className="text">
                <br/> <br/> <br/><br/> 
                 <b> WELCOME TO PLATFORM OF <span className="span">E-CLUB </span></b> 

                </h4>
                
                <Button className="btn"   onClick={this.onSubmit}>
                <Link
                      to="/clubspage"
                      class="navbar-items2"
                      style={{ margin: "0px 50px" }}
                    >
                      Browse Clubs
                    </Link>
              </Button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
