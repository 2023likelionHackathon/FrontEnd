import Main_page from "./pages/Main_page";
import Login_page from "./pages/Login_page";
import Feed_main from "./components/Feed/Feed_main";
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
      <Feed_main/>
  );
}

export default App;
