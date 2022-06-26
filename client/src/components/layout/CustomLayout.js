import React from "react";
import { Layout } from "antd";
import ToggleNavbar from "./navbar/ToggleNavbar";
import "./customlayout.css";

const { Content, Footer } = Layout;
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
class CustomLayout extends React.Component {
  render() {
    return (
      <div>
           
        <Layout className="layout">
       
          <ToggleNavbar />
        
          <Content style={{ 
           
            paddingRight: "30px",
            paddingLeft: "30px",
            paddingBottom: "50px",
             backgroundColor: "#F2F2F6" ,
              }}>
         
            <div style={{ background: "#F2F2F6",
              paddingTop: "50px",
              paddingRight: "30px",
              paddingLeft: "30px",
              paddingBottom: "50px",
             minHeight: 280 ,backgroundImage:`url(${images["club.png"]})` ,
             backgroundRepeat: 'no-repeat',
             backgroundPosition: '800px 400px',
             backgroundSize : "350px",
            }}>
                
              {this.props.children}
           
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default CustomLayout;
