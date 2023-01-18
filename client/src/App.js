import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Card
import Search from "./components/card/Search";
// Page
import LandingPage from "./components/page/LandingPage";
import LoginPage from "./components/page/LoginPage";
import SignUpPage from "./components/page/SignUpPage";
import Navbar from "./components/layouts/Navbar";
// import ProductPage from "./components/page/ProductPage";

// Layout



// Page Admin
import HomeAdmin from "./components/page/admin/HomeAdmin";
import ManageUser from "./components/page/admin/ManageUser";
//Category
import CreateCategory from "./components/page/admin/category/CreateCategory";
import UpdateCategory from "./components/page/admin/category/UpdateCategory";
//Product
import CreateProduct from "./components/page/admin/product/CreateProduct";
import UpdateProduct from "./components/page/admin/product/UpdateProduct";

// Page Member
import HomeMember from "./components/page/member/HomeMember";
import Shop from "./components/page/member/Shop";

//functions
import { currentUser } from "./components/functions/auth";

//redux
import { useDispatch } from "react-redux";
import NavbarLogin from "./components/layouts/NavbarLogin";

//Routes
import UserRoutes from "./components/routes/UserRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";

function App() {
  const dispatch = useDispatch();

  //token
  const idtoken = localStorage.token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            username: res.data.username,
            role: res.data.role,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* <NavbarLogin /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<LandingPage />} />
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/product-page" element={<ProductPage />} /> */}
          <Route path="/search" element={<Search />} />



          <Route path="/shop" element={<Shop />} />


          <Route path="/admin/manage-user" element={<ManageUser />} />
          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route path="/admin/update-category/:id" element={<UpdateCategory />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
          


          <Route path="/admin/index" 
          element={
            <AdminRoutes>
          <HomeAdmin />
          </AdminRoutes>
          } />

          <Route
            path="/member/index"
            element={
              <UserRoutes>
                <HomeMember />
              </UserRoutes>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
