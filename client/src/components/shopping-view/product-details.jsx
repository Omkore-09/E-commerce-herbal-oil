import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { StarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { toast } from "@/hooks/use-toast";
import { setProductDetails } from "@/store/shop/products-slice";

const ProductDetailsDialog = ({ open, setOpen, productDetails }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

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

  function handleDialogClose() {
    setOpen(false);
    dispatch(setProductDetails());
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 sm:p-6 p-4 max-w-full sm:max-w-[80vw] lg:max-w-[70vw]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            {productDetails?.title}
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl mb-3 sm:mb-5 mt-3 sm:mt-4">
            {productDetails?.description}
          </p>
          <div className="flex items-center justify-between mb-3 sm:mb-5">
            <p
              className={`text-2xl sm:text-3xl font-bold text-primary ${productDetails?.salePrice > 0 ? "line-through" : ""
                }`}
            >
              ₹{productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 && (
              <p className="text-xl sm:text-2xl font-bold text-muted-foreground">
                ₹{productDetails?.salePrice}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-5">
            <div className="flex items-center gap-0.5">
              {Array(5).fill('').map((_, idx) => (
                <StarIcon key={idx} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary" />
              ))}
            </div>
            <span className="text-muted-foreground">(4.5)</span>
          </div>
          <Button className="w-full mb-3 sm:mb-5" onClick={() => handleAddToCart(productDetails?._id)}>Add To Cart</Button>
          <Separator className="mb-3 sm:mb-5" />
          <div className="max-h-[200px] sm:max-h-[300px] overflow-auto">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Reviews</h2>
            <div className="grid gap-4 sm:gap-6">
              {['Om kore', 'Om kore', 'Om kore'].map((reviewer, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border">
                    <AvatarFallback>{reviewer[0]}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <h3 className="font-bold">{reviewer}</h3>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array(5).fill('').map((_, idx) => (
                        <StarIcon key={idx} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">This is an Awesome product</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 flex gap-2">
              <Input placeholder="Write a review..." />
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
