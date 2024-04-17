const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Product = require('./models/product.model.js');
const productroutes=require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); //to add by form instead of json in isomnia

const url="mongodb+srv://mandy:txejsDEPzJJRakRm@cluster0.yomujqq.mongodb.net/proj-1?retryWrites=true&w=majority&appName=Cluster0"

//route
app.use("/api/products", productroute);


app.listen(3001,()=>{
    console.log('server running');
});

// app.get('/',(req, res)=>{
//     res.send("hello get");
// });

app.get('/api/products', async(req,res)=>{
    try {
        const products=await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});        
    }
});

app.get('/api/products/:id', async(req,res)=>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});        
    }
});

app.put('/api/products/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            return res.status(404).json({message:"product not found"});
        }

        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/api/products',async (req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.delete('/api/products',async (req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product){
            return res.status(404).json({message:"product not found"});
        }

        res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.connect(url)
.then(()=>{
    console.log("connected to database");
})
.catch(()=>{
    console.log("not connected to database");
})