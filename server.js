const express = require('express');
const routes = require('./routes');
const sequelize = require("./config/connection");
//const path=require('path');
const app=express();
const PORT=process.env.PORT||3001;
app.use(json());
app.use(urlencoded({extended:true}));
//app.use(expresss.static(path.join(_dirname,'public')));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})
