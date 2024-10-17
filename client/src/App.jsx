import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import AuthLogin from "./pages/auth/Login"
import AuthRegister from "./pages/auth/Register"
import AdminLayout from "./components/admin-view/Layout"
import AdminDashboard from "./pages/admin-view/Dashboard"
import AdminFeatures from "./pages/admin-view/Features"
import AdminOrders from "./pages/admin-view/Orders"
import AdminProducts from "./pages/admin-view/Products"
import ShoppingLayout from "./components/shopping-view/Layout"
import NotFound from "./pages/not-found/Index"
import ShoppingHome from "./pages/shopping-view/Home"
import ShoppingListing from "./pages/shopping-view/Listing"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import ShoppingAccount from "./pages/shopping-view/Account"
import CheckAuth from "./components/common/CheckAuth"
import UnauthPage from "./pages/unauth-page/Index"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./store/auth-slice"
import { Skeleton } from "@/components/ui/skeleton"
import AboutUs from "./components/shopping-view/AboutUs"
import ProductBenefits from "./components/shopping-view/ProductBenefits"
import IngredientsPage from "./components/shopping-view/IngredientsPage"
import ContactUs from "./components/shopping-view/ContactUs"
import PaypalReturnPage from "./pages/shopping-view/paypal-return"
import PaymentSuccessPage from "./components/shopping-view/payment-success"



function App() {
 
 

  const {user ,isAuthenticated , isLoading} =useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if(isLoading) return <Skeleton className="w-full bg-black h-[600px] " />



  return (
    <div className="flex flex-col overflow-hidden bg-white">
    {/* common components 
    <h1> Header components</h1> */}

    <Routes>

     <Route path="/" element={
        <ShoppingHome />
      } >
          <Route path="home"  element={<ShoppingHome />} />
        <Route path="listing" element={<ShoppingListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="account" element={<ShoppingAccount />} />
      </Route>

      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user} >
          <AuthLayout />
        </CheckAuth>
      } >
          {/* /auth/login */}
          <Route path="login" element={<AuthLogin/>}/>   
          <Route path="register"  element={<AuthRegister/>} />

      </Route>

        <Route path="/shop/aboutus" element={<AboutUs />} />
        <Route path="/shop/product-benefits" element={<ProductBenefits />} />
        <Route path="/shop/ingredients" element={<IngredientsPage />} />
        <Route path="/shop/contact-us" element={<ContactUs />} />
        
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

      {/* shopping routes  */}
      <Route path="/shop" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user} >
          <ShoppingLayout />
        </CheckAuth>
      } >

        <Route path="home"  element={<ShoppingHome />} />
        <Route path="listing" element={<ShoppingListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="account" element={<ShoppingAccount />} />

      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="/unauth-page" element={<UnauthPage />} />
    </Routes>
    </div>
  )
}

export default App
