// import axios from "axios";
// import { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CakeContainer2 from "./components/CakeContainer2";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ImageContainer from "./components/ImageContainer";
import ItemContainer from "./components/ItemContainer";
import PostContainer from "./components/PostContainer";
import UserContainer from "./components/UserContainer";
import { store } from "./redux/store";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <ImageContainer />
        <PostContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <CakeContainer2 />
        <ItemContainer />
        <ItemContainer cake />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
