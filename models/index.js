import Category, { hasMany } from './Category.js';
import Product, { belongsTo, belongsToMany } from './Product.js';
import ProductTag from './ProductTag.js';
import Tag, { belongsToMany as _belongsToMany } from './Tag.js';

// Products belongsTo Category
belongsTo(Category, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  })
  
  // Categories have many Products
  hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  })
  
  // Products belongToMany Tags (through ProductTag)
  _belongsToMany(Tag, {
    through: {
      model: ProductTag,
      unique: false,
    },
    as: "tagIds",
  })
  
  // Tags belongToMany Products (through ProductTag)
  _belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false,
    },
    as: "productIds",
  })

export default {
    Product,
    Category,
    Tag,
    ProductTag,
  };