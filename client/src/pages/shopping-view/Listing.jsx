


import ProductDetailsDialog from '@/components/shopping-view/product-details'
import ShoppingProductTile from '@/components/shopping-view/product-tile'
import { toast } from '@/hooks/use-toast'
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice'
import { fetchAllFilteredProducts, fetchProductDetails } from '@/store/shop/products-slice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ShoppingListing = () => {
    const {user} = useSelector(state=>state.auth)
    const {cartItems} =useSelector(state => state.shopCart)
    const dispatch = useDispatch()
    const {productList , productDetails} = useSelector(state => state.shoppingProducts)
    const [openDetailsDialog , setOpenDetailsDialog] = useState(false);
    

    useEffect(()=>{
        dispatch(fetchAllFilteredProducts())
    }, [dispatch]) ;

    function handleGetProductDetails(getCurrentProductId) {
        console.log(getCurrentProductId);
        dispatch(fetchProductDetails(getCurrentProductId));
      }

useEffect(()=>{

    if(productDetails !== null ) setOpenDetailsDialog(true)

}, [productDetails])

function handleAddtoCart(getCurrentProductId, getTotalStock) {
    console.log(cartItems);
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          toast({
            title: `Only ${getQuantity} quantity can be added for this item`,
            variant: "destructive",
          });

          return;
        }
      }
    }

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


    

  return (
    <div className="flex flex-col items-center">
    <h2 className="text-2xl font-bold my-4">All Products</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {
            productList && productList.length > 0
                ? productList.map(productItem => <ShoppingProductTile 
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem} key={productItem.id} 
                    handleAddtoCart={handleAddtoCart}
                    />)
                : null
        }
    </div>

        <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails} />

</div>

  )
}

export default ShoppingListing
