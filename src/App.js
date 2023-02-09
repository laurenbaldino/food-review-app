import React from "react";
import "./App.css";
import Card from "./components/Card";
import { Menu, Button, Carousel } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  StarOutlined,
  EditOutlined,
  AppstoreOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";

const contentStyle = {
  height: "500px",
  width: "1350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const restaurants = [
  {
    name: "Tacolicious",
    coverArt:
      "https://s3-media0.fl.yelpcdn.com/bphoto/5TkjIrHFNRmhmULzob0wbg/o.jpg",
    description: "Best tacos in the world! Shrimp tacos are bomb.",
  },
  {
    name: "Little Delhi",
    coverArt:
      "https://www.thespruceeats.com/thmb/gCSpcfckdjrH3cCZ8YYHVXQBCNE=/940x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg",
    description: "Butter chicken is delectable. Huge portions and great naan.",
  },
  {
    name: "Cafe Tiramisu",
    coverArt: "https://images.otstatic.com/prod1/42843364/3/huge.png",
    description:
      "Hidden gem italian food with rotating menu and old men who speak italian.",
  },
  {
    name: "Gioia",
    coverArt:
      "data:image/jpeg;base64,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",
    description: "Bomb Za and Ranch",
  },
  {
    name: "Dumpling Time",
    coverArt:
      "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/npeaubry/78612f8c-a3e6-44fd-868e-f83cc94cbf84.jpeg",
    description: "Average.",
  },
];

function App() {
  return (
    <div>
      <div>
        <Menu mode="horizontal" defaultSelectedKeys={["edit"]}>
          <img
            style={{ height: "50px", width: "100px" }}
            src="data:image/png;base64,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"
          ></img>
          <Menu.Item key="edit" icon={<EditOutlined />}>
            <Link to="/home">Create New Review</Link>
          </Menu.Item>
          <Menu.Item key="star" icon={<StarOutlined />}>
            <Link to="/myReviews">My Reviews</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="SubMenu"
            title="Explore Reviews"
            icon={<GlobalOutlined />}
          >
            <Menu.Item key="two" icon={<AppstoreOutlined />}>
              By Catagory
            </Menu.Item>
            <Menu.Item key="three" icon={<AppstoreOutlined />}>
              By Location
            </Menu.Item>
            <Menu.ItemGroup title="Item Group">
              <Menu.Item key="four" icon={<AppstoreOutlined />}>
                Navigation Four
              </Menu.Item>
              <Menu.Item key="five" icon={<AppstoreOutlined />}>
                Navigation Five
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <MenuItem style={{ marginLeft: "auto" }}>
            <Button
              type="primary"
              style={{ backgroundColor: "Red", border: "Red" }}
            >
              Sign In
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              type="primary"
              style={{ backgroundColor: "Red", border: "Red" }}
            >
              Create Account
            </Button>
          </MenuItem>
        </Menu>
      </div>
      <Switch>
        <Route path="/myReviews">
          <MyReviews />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function MyReviews() {
  return (
    <div className="App">
      {restaurants.map((restaurant) => (
        <Card
          name={restaurant.name}
          description={restaurant.description}
          coverArt={restaurant.coverArt}
        />
      ))}
    </div>
  );
}

function Home() {
  return (
    <Carousel autoplay afterChange={onChange}>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={contentStyle}
            src="https://www.westend61.de/images/0000814113pw/two-business-people-having-lunch-in-a-restaurant-SUF00349.jpg"
          ></img>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={contentStyle}
            src="https://st.focusedcollection.com/14026668/i/1800/focused_181040042-stock-photo-people-greeting-each-other-business.jpg"
          ></img>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={contentStyle}
            src="https://st2.depositphotos.com/1518767/10327/i/950/depositphotos_103274800-stock-photo-waiter-serving-salad-to-business.jpg"
          ></img>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={contentStyle}
            src="https://st2.depositphotos.com/1518767/10901/i/950/depositphotos_109010544-stock-photo-concentrated-male-chef-garnishing-food.jpg"
          ></img>
        </div>
      </div>
    </Carousel>
  );
}

export default App;
