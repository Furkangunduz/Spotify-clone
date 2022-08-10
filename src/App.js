import SideBar from "components/SideBar";
import Content from "components/Content";
import BottomBar from "components/BottomBar";

function App() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
