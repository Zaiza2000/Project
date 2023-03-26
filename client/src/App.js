import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Card
import Search from "./components/card/Search";

// Page
import Home from "./components/page/Home";
import LoginPage from "./components/page/LoginPage";
import SignUpPage from "./components/page/SignUpPage";
import Navbar from "./components/layouts/Navbar";
import Product from "./components/page/Product";
import Cart from "./components/page/Cart";

// Layout

// Page Admin
import HomeAdmin from "./components/page/admin/HomeAdmin";
import ManageUser from "./components/page/admin/ManageUser";
import Requisition from "./components/page/admin/Requisition";
import RequisitionDetails from "./components/page/admin/RequisitionDetails";
import HistoryRequisition from "./components/page/admin/HistoryRequisition";
import HistoryOrder from "./components/page/admin/HistoryOrder";
import RequisitionPDF from "./components/page/admin/RequisitionPDF";


//Category
import CreateCategory from "./components/page/admin/category/CreateCategory";
import UpdateCategory from "./components/page/admin/category/UpdateCategory";
//Product
import CreateProduct from "./components/page/admin/product/CreateProduct";
import UpdateProduct from "./components/page/admin/product/UpdateProduct";

// Page Member
import HomeMember from "./components/page/member/HomeMember";
import Shop from "./components/page/member/Shop";
import OrderUser from "./components/page/member/OrderUser";


//functions
import { currentUser } from "./components/functions/auth";

//redux
import { useDispatch } from "react-redux";

//Routes
import UserRoutes from "./components/routes/UserRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";
import CheckOut from "./components/page/CheckOut";
// Drawer
import SideDrawer from "./components/drawer/SideDrawer";
import AdminSideDrawer from "./components/drawer/AdminSideDrawer";
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
            token: idtoken,
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
        <Navbar />
        <SideDrawer/>
        {/* <AdminSideDrawer/> */}
        {/* <NavbarLogin /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/product-page" element={<ProductPage />} /> */}
          <Route path="/search" element={<Search />} />

          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/member/index/OrderUser" element={<OrderUser />} />
          <Route path="/checkOut" element={<CheckOut />} />

          <Route path="/checkout" element={<CheckOut />} />

          <Route path="/admin/manage-user" element={<ManageUser />} />
          <Route path="/admin/requisition" element={<Requisition />} />

          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route
            path="/admin/update-category/:id"
            element={<UpdateCategory />}
          />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
          <Route path="/requisitionDetails" element={<RequisitionDetails />} />
          <Route path="/HistoryRequisition" element={<HistoryRequisition />} />
          <Route path="/RequisitionPDF" element={<RequisitionPDF />} /> 
          <Route path="/HistoryOrder" element={<HistoryOrder />} />
          
          <Route
            path="/admin/index"
            element={
              <AdminRoutes>
                <HomeAdmin />
              </AdminRoutes>
            }
          />

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
