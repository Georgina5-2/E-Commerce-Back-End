const router=require('express').Router();
const {Category,Product,ProductTag,Tag}=require('../../models');

router.get('/',async(req,res)=>{
    try{
        const categoryData= await Category.findAll({
        include:[{model:Product}]
        });
        res.status(200).json(categoryData);
    }
    
    catch(err){
        res.status(400).json.err;
    }
    }
);

router.get('/:id',async(req,res)=>{
    try{
        const categoryData=await Category.findByPk(req.params.id,{
            include:[{model:Product}]
        })
        if(!categoryData)
        {
            res.status(400).json({message:'No category found with this id'});
            return;
        }
        res.status(200).json(categoryData);
    }
    catch(err){
        res.status(500).json.err;
    }
    
});

router.post('/', async(req,res)=>{
   try{
    const categoryData=await Category.create(req.body);
    res.status(200).json(categoryData);
   } 
   catch(err)
   {
    res.status(400).json.err;
   }
});

router.delete('/:id',async(req,res)=>{
    try{
        const categoryData=await Category.destroy({
            where:{
                id:req.params.id
            },
        });
        if(!categoryData)
        {
            res.status(400).json({message:'no category of that id is found'});
            return;
        }
        res.status(200).json({message:`Category with id:${req.params.id} has been deleted`});
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

module.exports=router;