const {Model,DataTypes, DECIMAL} = require('sequelize');
const sequelize=require('../config.connection');
class Product extends Model {}
Product.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        product_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:
        {
            type:DECIMAL,
            allowNull:false,
            validator: true,
        },
        stock:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:10,
            validator:true,
        },
        category_id:
        {   
            type: DataTypes.INTEGER,
            references:{
                model: 'Category',
                key:id
                
            }
        },
        

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName:true,
        underscored:true,
        modelName:'Product'
    },
);

module.exports= Product;