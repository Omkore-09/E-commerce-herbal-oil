import { HousePlug, LogOut, Menu, ShoppingCart, UserCog, Vegan } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { fetchCartItems } from "@/store/shop/cart-slice";
import logo from '../../assets/logobg.png';

function HeaderRightContent() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const { cartItems } = useSelector((state) => state.shopCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCartItems(user.id));
    }
  }, [dispatch, user?.id]);

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      {isAuthenticated ? (
        <>
          <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
            <Button onClick={() => setOpenCartSheet(true)} variant="outline" size="icon">
              <ShoppingCart className="w-6 h-6" />
              <span className="sr-only">User cart</span>
            </Button>
            <UserCartWrapper
              setOpenCartSheet={setOpenCartSheet}
              cartItems={cartItems && cartItems.items && cartItems.items.length > 0 ? cartItems.items : []}
            />
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="bg-black">
                <AvatarFallback className="bg-black text-white font-extrabold">
                  {user?.userName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
              <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/shop/account")}>
                <UserCog className="mr-2 h-4 w-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Button onClick={() => navigate('/auth/login')} variant="outline">
          Login
        </Button>
      )}
    </div>
  );
}

const ShoppingHeader = () => {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background bg-green-700">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <img src={logo} alt="Ecommerce Logo" className="h-8 w-10" />
          <span className="font-bold text-white">Adivasi Herbal Hair Oil</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
              <Link className="text-sm font-medium" to="/home">Home</Link>
              <Link className="text-sm font-medium" to="/listing">Products</Link>
              <Link className="text-sm font-medium" to="/aboutus">About Us</Link>
              <Link className="text-sm font-medium" to="/product-benefits">Product Benefits</Link>
              <Link className="text-sm font-medium" to="/ingredients">Ingredients</Link>
              <Link className="text-sm font-medium" to="/contact-us">Contact Us</Link>
            </nav>
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block text-white text-2xl">
          <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
            <Link className="text-sm font-medium" to="/home">Home</Link>
            <Link className="text-sm font-medium" to="/listing">Products</Link>
            <Link className="text-sm font-medium" to="/aboutus">About Us</Link>
            <Link className="text-sm font-medium" to="/product-benefits">Product Benefits</Link>
            <Link className="text-sm font-medium" to="/ingredients">Ingredients</Link>
            <Link className="text-sm font-medium" to="/contact-us">Contact Us</Link>
          </nav>
        </div>
        <div className="hidden lg:block text-green-700">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
};

export default ShoppingHeader;
