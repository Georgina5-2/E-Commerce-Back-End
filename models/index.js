const Category=require('./category');
const Product=require('./product');
const ProductTag=require('./productTag');
const Tag=require('./tag');

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