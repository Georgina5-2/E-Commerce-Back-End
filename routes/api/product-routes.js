const router=require('express').Router();
const {Category,Product,ProductTag,Tag}=require('../../models');

router.get('/',async(req,res)=>{
    try{
        const productData= await Product.findAll();
        res.status(200).json.productData;
    }
    catch(err){
        res.status(500).json.err;
    }
    }
);

router.get('/:id',async(req,res)=>{
    try{
        const productData=await Product.findByPk(req.params.id,{
            include:[{model:Category,through:Product, as:'products'}]
        })
        if(!productData)
        {
            res.status(404).json({message:'No product found with this id'});
            return;
        }
        res.status(200).json(productData);
    }
    catch(err){
        res.status(500).json.err;
    }
    
});

router.post('/', async(req,res)=>{
   try{
    const productData=await Product.create(req.body);
    res.status(200).json.productData;
   } 
   catch(err)
   {
    res.status(400).json.err;
   }
});

router.delete('/:id',async(req,res)=>{
    try{
        const productData=await Product.destroy({
            where:{
                id:req.params.id
            }
        })
        if(!productData)
        {
            res.status(404).json({message:'no product of that id is found'});
            return;
        }
        res.status(200).json.productData;
    }
    catch(err)
    {
        res.status(400).json.err;
    }
})

module.exports=router;