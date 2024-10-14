const Product = require("../../models/Product");


const getFilteredProducts = async(req , res)=>{

    try {
        
        const products = await Product.find({})

        res.status(200).json({
            success : true,
            data : products
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message : "some error occured"
        })
    }
}

const getProductDetails = async(req , res)=>{
    try {

        const {id} = req.params;
        const product = await Product.findById(id);

        if(!product) return res.status(404).json({
            success : false,
            message : "product not found"
        })
        

        res.status(200).json({
            success : true,
            data : product
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message : "some error occured"
        })
    }
}

module.exports ={getFilteredProducts , getProductDetails}