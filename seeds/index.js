const seedCategories=require('./categorySeedData.json');
const seedProducts=require('./productSeedData.json');
const seedProductTags=require('./productTagSeedData.json');
const seedTags=require('./tagSeedData.json');
const sequelize=require('../config/connection')
const seedAll=async()=>{
    await sequelize.sync({force:true});
    await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};
seedAll();