const router=require('express').Router();
const sequelize=require('./config/connection');
//const path=require('path');
const app=express();
const PORT=process.env.PORT||3001;
app.use(express(json));
app.use(express.urlencoded({extended:true}));
//app.use(expresss.static(path.join(_dirname,'public')));
app.use(routes);
app.listen(PORT,()=>
{
    console.log(`Listening on Port ${PORT}!`);
});