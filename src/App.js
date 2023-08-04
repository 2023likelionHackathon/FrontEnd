import Main_page from "./pages/Main_page";
import Login_page from "./pages/Login_page";
import Feed_page from "./pages/Feed_page";
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
      <Feed_page/>
  );
}

export default App;
