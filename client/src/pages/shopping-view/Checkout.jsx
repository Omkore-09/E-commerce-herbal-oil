import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Address from "@/components/shopping-view/address";
import img from "../../assets/about.jpg";
import UserCartItemsContent from "@/components/shopping-view/cart-items-content";
import { Button } from "@/components/ui/button";
import { createNewOrder } from "@/store/shop/order-slice";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react"; // Use Lucide React icon

function ShoppingCheckout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const { approvalURL } = useSelector((state) => state.shopOrder);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [isPaymentStart, setIsPaymentStart] = useState(false);
  const [isCOD, setIsCOD] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalCartAmount = cartItems && cartItems.items && cartItems.items.length > 0
    ? cartItems.items.reduce(
        (sum, currentItem) =>
          sum +
          (currentItem?.salePrice > 0 ? currentItem?.salePrice : currentItem?.price) *
            currentItem?.quantity,
        0
      )
    : 0;

  useEffect(() => {
    if (orderConfirmed) {
      setTimeout(() => {
        navigate("/home");
      }, 3000); // Redirect to home after 3 seconds
    }
  }, [orderConfirmed, navigate]);

  function handleInitiatePayment(paymentMethod) {
    if (cartItems.length === 0) {
      toast({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });
      return;
    }
    if (currentSelectedAddress === null) {
      toast({
        title: "Please select one address to proceed.",
        variant: "destructive",
      });
      return;
    }
    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((singleCartItem) => ({
        productId: singleCartItem?.productId,
        title: singleCartItem?.title,
        image: singleCartItem?.image,
        price: singleCartItem?.salePrice > 0 ? singleCartItem?.salePrice : singleCartItem?.price,
        quantity: singleCartItem?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: paymentMethod,
      paymentStatus: paymentMethod === "cod" ? "pending" : "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };

    dispatch(createNewOrder(orderData)).then((data) => {
      if (data?.payload?.success) {
        if (paymentMethod === "paypal") {
          setIsPaymentStart(true);
        } else {
          setIsCOD(true);
          setOrderConfirmed(true);
        }
      } else {
        setIsPaymentStart(false);
      }
    });
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img src={img} className="h-full w-full object-cover object-center" alt="Header" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.items && cartItems.items.length > 0
            ? cartItems.items.map((item) => (
                <UserCartItemsContent key={item.productId} cartItem={item} />
              ))
            : null}
          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">${totalCartAmount}</span>
            </div>
          </div>
          <div className="mt-4 w-full space-y-4">
            <Button onClick={() => handleInitiatePayment('paypal')} className="w-full">
              {isPaymentStart ? "Processing Paypal Payment..." : "Checkout with Paypal"}
            </Button>
            <Button onClick={() => handleInitiatePayment('cod')} className="w-full">
              {isCOD ? "Processing COD Order..." : "Checkout with Cash on Delivery"}
            </Button>
          </div>
          {orderConfirmed && (
            <div className="flex flex-col items-center mt-5">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <p className="text-xl font-semibold text-green-500 mt-2">Order Confirmed!</p>
              <p className="text-gray-500">Redirecting to home page...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCheckout;
