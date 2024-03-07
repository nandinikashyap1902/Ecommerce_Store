const app = require("./index")
const {connectDb} = require("./config/db")
const PORT = 5454;

 app.listen(PORT, async()=>{
    await connectDb();
    console.log("app is running:",PORT)
})