// GPayComponent.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import scannerImage from "../../assets/scanner.jpg"; // Add your scanner image here
import ShoppingHeader from "@/components/shopping-view/Header";
import Footer from "@/components/shopping-view/Footer";

function GPayComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount } = location.state || { totalAmount: 0 }; // Get total amount from location state
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  function handleScreenshotUpload(event) {
    setScreenshot(event.target.files[0]);
  }

  function handlePaymentConfirmation() {
 
    setPaymentConfirmed(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }

  return (
    <>
    <ShoppingHeader />
    <div className="flex flex-col items-center mt-[4rem] p-5">
      <div className="bg-green-50 shadow-lg rounded-lg p-5 w-full max-w-md">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-green-800">GPay Payment</h1>
          <p className="text-gray-500">Complete your payment using GPay</p>
          <div className="font-bold text-xl text-green-800">Total: ₹{totalAmount}</div>
        </div>
        <img
          src={scannerImage}
          alt="Scanner"
          className="mx-auto mb-4 w-3/4 max-w-xs rounded-lg shadow-md" // Responsive image styling
        />
        <div className="flex flex-col items-center gap-4">
          <label className="text-green-800 font-semibold">Upload Screenshot</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleScreenshotUpload}
            required
            className="border-2 border-green-300 rounded-md p-2 w-full focus:outline-none focus:border-green-600 transition duration-300"
          />
          <label className="text-green-800 font-semibold">Transaction ID</label>
          <input
            type="text"
            placeholder="Enter Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
            className="border-2 border-green-300 rounded-md p-2 w-full focus:outline-none focus:border-green-600 transition duration-300"
          />
          <Button
            onClick={handlePaymentConfirmation}
            className="w-full bg-green-600 text-white hover:bg-green-700 transition duration-300"
          >
            Confirm Payment
          </Button>
        </div>
        {paymentConfirmed && (
          <div className="flex flex-col items-center mt-5">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <p className="text-xl font-semibold text-green-500 mt-2">Payment Successful!</p>
            <p className="text-gray-500">Redirecting to home page...</p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    
    </>
  );
}

export default GPayComponent;
