const Category=require('./Category');
const Product=require('./Product');
const ProductTag=require('./ProductTag');
const Tag=require('./Tag');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  })
  
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  })
  
  // Products belongToMany Tags (through ProductTag)
  Product.belongsToMany(Tag, {
    through: {
      model: ProductTag,
      unique: false,
    },
    as: "tagIds",
  })
  
  // Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false,
    },
    as: "productIds",
  })

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };