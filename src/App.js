import React from "react";
import "./App.css";
// import ProductList from "./Ex3/ProductList";

// import ProductList from "./components/ProductList";
// import StudentList from "./components/StudentList";
// import MoviesList from "./components/MoviesList";
// import DemoDataBinding from "./components/DemoDataBinding";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./Ex1/Home";
// import BaiTapLayOut from "./BaiTapThucHanhLayout/Home";
// import HomeEx2 from "./Ex2/Home";
import ShopGlass from "./Ex2/ShopGlass"
// import Home from "./Ex4/Home"

class App extends React.Component {
  render() {
    return (
      //các thẻ này gọi là react element, các thẻ này sẽ build thành từng obj, tất cả object thì gọi chung là virtual DOM (DOM ảo), sau khi chuyển thành DOM ảo thì sẽ build ra cây DOM thật (real DOM). Hồi đó giờ chúng ta dùng document.getelementById nghĩa là chúng ta đang tương tác với cây DOM thật, ví dụ: khi sửa 1 thuộc tính thẻ a, chúng ta .style = "color: red", mặc dù chỉ sửa 1 thẻ a nhưng sẽ render lại toàn bộ giao diện WEB, còn bên React lúc này sẽ sửa mỗi cái đối tượng thẻ a bên virtual DOM, sau đó nó so sánh với Real DOM và render lại đúng thẻ a

      <div>
        {/* <button className="btn">test style module</button> */}
        {/* <DemoDataBinding /> */} {/* mấy cái ở đây là các component */}
        {/* <Home /> */}
        {/* <BaiTapLayOut /> */}
        {/* <HomeEx2 /> */}
        <ShopGlass />
        {/* <ProductList /> */}
        {/* <MoviesList /> */}
        {/* <StudentList /> */}
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
