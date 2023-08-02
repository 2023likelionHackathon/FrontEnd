import Main_page from "./pages/Main_page";
import Login_page from "./pages/Login_page";
import react from "react";
import axios from "axios";
function App() {
  const axios_get = () => {
    axios
      .get("http://172.16.105.153:8080/board/viewAll")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Login_page />
    </div>
  );
}

export default App;
