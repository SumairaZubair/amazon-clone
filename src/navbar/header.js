import React from "react";
import "../navbar/header.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Input, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import {MenuFoldOutlined} from '@ant-design/icons'
// import CountrySelector from "../componenets/countrySelector";
import LanguageSelector from "../componenets/countrySelector.js";

const { Option } = Select;

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar-logo ">
        <div className="logo"></div>
      </div>
      <div className="add-icon">
        <p className="add-para">Deliver to</p>
        <div className="location">
          <EnvironmentOutlined />
          <span className="add-para-name">Pakistan</span>
        </div>
      </div>
      <div className="search">

      <Input.Group compact className="search-bar"> {/* Use the CSS class here */}
      <Select 
        defaultValue="all" 
        className="select" // Add the CSS class for select
      >
        <Option value="all">All</Option>
        <Option value="books">Books - Fiction & Non-fiction</Option>
        <Option value="electronics">Electronics & Gadgets</Option>
        <Option value="fashion">Men's & Women's Fashion</Option>
        {/* Add more categories as needed */}
      </Select>
      <Input 
        placeholder="Search Amazon..." 
        className="input" // Add the CSS class for input
      />
      <Button 
        type="primary" 
        icon={<SearchOutlined />} 
        className="button" // Add the CSS class for button
      />
    </Input.Group>
      </div>
   
     
     <div className="language-selector">
        <LanguageSelector/>
     </div>
     <div className="sign-in">
        <p className="sign-in-p">Hello,Sign in</p>
        <p className="sign-in-para">Account & Lists</p>
     </div>
     <div className="return">
        <p className="return-p">Returns</p>
        <p className="return-para">& Orders</p>
     </div>
     
     <div className="shopping-cart">
      <Badge count='0' style={{ backgroundColor: '#febd69', color: '#000' }}>
        <ShoppingCartOutlined className="cart-icon" />
        <span className="cart-span">Cart</span>
      </Badge>
    </div>
   
    </div>
    <div className="to-do">
     <div >
      <MenuFoldOutlined/>
      <span className="text"> All</span>
     </div>
     <ul className="list">
      <li><a>Today's Deals</a></li>
      <li><a>Customer Services</a></li>
      <li><a>Registery</a></li>
      <li><a>Gift Cards</a></li>
      <li><a>Sell</a></li>


     </ul>
    </div>
    </>
  );
};

export default Navbar;
