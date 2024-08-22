const Router = require("@koa/router");
const {loginUsers,getAllUsersList,RegisterUser} = require("../api/UserApi");


//perfix

const router = new Router({
    prefix:"/user"
})


//create user

router.post("/register" , async(ctx)=>{

    let data = ctx.request.body;
    var user = await RegisterUser(data);

    ctx.response.status = 200;
    ctx.body=user
})

//get all users
router.get("/getAllUsers" , async(ctx)=>{
    ctx.body= await getAllUsersList();
})

//login

router.post('/login' , async(ctx)=>{
    let data = ctx.request.body;
    let logins = await loginUsers(data);

    ctx.response.status = 200;
    ctx.body=logins;
})

//delete account 
//router.delete("/remove-User/:id" , async(ctx)=>{
 //   const id  = ctx.params.id;
 //   var data = await del
//})



module.exports = router;