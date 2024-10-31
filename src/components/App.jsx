import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./LandingPage"
import SignUp from "./SignUp"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Goods from "./Goods";
import goods from "../Goods.js";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
//function App() {
//  return <div>
//    <LandingPage />
//    <SignUp />
//    <Login />
 //   <ForgotPassword />
 //   <Header />
//    <Search />
//    <div className="design">
//      <Goods 
//      imgURL = {goods[0].imgURL}
//     alt = {goods[0].alt}
//      name = {goods[0].name}
//      price = {goods[0].price}
//      />
//      <Goods 
//      imgURL = {goods[1].imgURL}
//      alt = {goods[1].alt}
//      name = {goods[1].name}
//      price = {goods[1].price}
//      />
//    </div>
//    <div className="design">
//      <Goods
//      imgURL = {goods[2].imgURL}
//      alt = {goods[2].alt}
 //     name = {goods[2].name}
 //     price = {goods[2].price}
//      />
//      <Goods
  //    imgURL = {goods[3].imgURL}
  //    alt = {goods[3].alt}
  //    name = {goods[3].name}
   //   price = {goods[3].price}
 //     />
//   </div>
//    <Footer />
//  </div>
//};

//export default App;