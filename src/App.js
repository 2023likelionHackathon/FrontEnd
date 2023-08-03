import Main_page from "./pages/Main_page";
import Login_page from "./pages/Login_page";
import "./App.css";
import react, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import Display from "./display";
import { getUser } from "./lib/api";

function App() {
  // const axios_get = () => {
  //   axios
  //     .get("http://172.16.105.153:8080/board/viewAll")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const user = null;
  // const handleGetUser = async () => {
  //   const user = await getUser();
  // };
  // useEffect(() => {
  //   handleGetUser();
  // });
  // console.log(user.getUser);
  return (
    <div className="backGround">
      <div className="mobileWeb">안녕</div>
      <Link to=".BottomBar">바텀바!</Link>
      console.log(
      <getUser />
      );
      <Login_page />
    </div>
  );
}

export default App;
