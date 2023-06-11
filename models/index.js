const Category=require('./Category');
const Product=require('./Product');
const ProductTag=require('./ProductTag');
const Tag=require('./Tag');

Category.hasMany(Product,{
    through:{
        model:Product,
        unique:false
    },
as: 'categories'
});



Product.belongsTo(Category,{
  through:{
    model:Category,
    unique:false
  },
  as: 'products'
  }  
);



Product.belongsToMany(Tag,{
    through:{
        model: ProductTag,
        unique:false
    },
    as: 'productTags'
});


Tag.belongsToMany(Product,{
    through:{
        model: ProductTag,
        unique:false
    },
    as: 'tagProduct'
});