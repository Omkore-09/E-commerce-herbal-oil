import React, { useEffect, useRef, useState } from "react";
import BannerOne from "../../assets/logo.jpg";
import BannerTwo from "../../assets/p4.jpg";
import BannerThree from "../../assets/s3.jpg";
import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleCheck,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { toast, useToast } from "@/hooks/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import AboutUs from "@/components/shopping-view/AboutUs";
import { useNavigate } from "react-router-dom";

import ReviewCarousel from "@/components/shopping-view/CustomerReviews";
import BeforeAfterSlider from "@/components/shopping-view/BeforeAfter";
import FullWidthImageSlider from "@/components/shopping-view/Slider";
import ShoppingHeader from "@/components/shopping-view/Header";
import welcomeImage from '../../assets/logo2bg.png';

// import { useToast } from "@/components/ui/use-toast";

const servicesProvided = [
  { id: "genuine", lable: "100% Genuine", icon: CircleCheck },
  { id: "chemifree", lable: "Chemical Free", icon: Leaf },
  { id: "quality", lable: "Quality Assured", icon: ShieldCheck },
  { id: "fastdelivery", lable: "Fast Delivery", icon: Truck },
];

const ShoppingHome = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector(
    (state) => state.shoppingProducts
  );
  
  const { user } = useSelector((state) => state.auth);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { toast } = useToast();

  const slides = [BannerOne, BannerTwo, BannerThree];

  function handleGetProductDetails(getCurrentProductId) {
    console.log(getCurrentProductId);
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(fetchAllFilteredProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  function handleAddToCart(getCurrentProductId) {
    if (!user) {
      navigate('/auth/login');
    } else {
      
    
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }
  }

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/shop/aboutus');
  };

  console.log(productList, "productlist");

  return (
    <div className="flex flex-col min-h-screen">
      <ShoppingHeader />
      {/* <div className="relative w-full mt-5 h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={` ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setcurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setcurrentSlide((nextSlide) => (nextSlide + 1) % slides.length)
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div> */}
      <FullWidthImageSlider />

      {/* about us  */}
      
      
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Adivasi Nilambari Herbal Hair Oil</h1>
      <img src={welcomeImage} alt="Welcome" className="w-full h-auto mb-6 object-cover rounded-lg" />
      <p className="text-lg mb-6">
        Discover our range of 100% natural hair oils crafted to nourish and strengthen your hair.
      </p>
      
      <button
        onClick={handleRedirect}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Learn More About Us
      </button>
    
    </div>
      

      <section className="py-12 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {" "}
            Our Services{" "}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesProvided.map((item) => (
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <item.icon className="w-12 h-12 mb-4 text-green-500 " />
                  <span className="font-bold text-center "> {item.lable} </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {" "}
            Featured products{" "}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    product={productItem}
                    handleGetProductDetails={handleGetProductDetails}
                    handleAddtoCart={handleAddToCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
                <BeforeAfterSlider />

                <h2 className="text-4xl font-bold text-center  mt-6 mb-8">
            {" "}
            Before and after using Adivasi Hair oil{" "}
          </h2>
                <ReviewCarousel />
                
      
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
};

export default ShoppingHome;
