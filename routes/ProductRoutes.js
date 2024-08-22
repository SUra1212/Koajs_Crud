const Router = require("@koa/router");

const { removeProductID,UpdateProduct, GetAll, createProduct, getProductID} = require ("../api/Product.api");


//define perfix
const router = new Router({
    prefix:'/products'
})
//get all products

router.get('/all', async ctx=>{

    ctx.body = await GetAll();

})

//add product

router.post('/add', async ctx=>{

    let product = ctx.request.body;
    product = await createProduct(product);

    ctx.response.status = 200;
    ctx.body = product;

})


//get item by id
router.get('/:id' , async ctx=>{

    const id =  ctx.params.id;
    ctx.body = await getProductID(id);

} )

//delete product
router.delete('/:id' , async ctx=>{

    const id = ctx.params.id;
    await removeProductID(id);
    ctx.response.status = 200;
    
})


//update

router.put('/:id' , async ctx=>{

    const id = ctx.params.id;
    let product = ctx.request.body;

    product = await UpdateProduct(id,product);
    ctx.response.status = 200;
    ctx.body = product;


})

module.exports = router;