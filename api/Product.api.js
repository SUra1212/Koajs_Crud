//import  methods in dal 
const  {removeByID,editProduct,getProductByID,GetAllProduct,create} = require("../dal/Products.dao")


//map create method

const createProduct = async({name , description, price})=>{

    //create object
    const product ={
        name , 
        description, 
        price

    }
    return await create(product);
}


//get all methods 
const GetAll = async ()=>{

    return await GetAllProduct();
}


//get by id

const getProductID = async id=>{

    return await getProductByID(id);
}


//delete product
const removeProductID = async id =>{
    
return await removeByID(id);
}

//update 
const UpdateProduct = async(id,{name , description, price})=>{

    return await editProduct(id,{name , description, price});
}


//export to routes
module.exports={
    removeProductID, 
    UpdateProduct,
    GetAll,
    createProduct,
    getProductID

}
