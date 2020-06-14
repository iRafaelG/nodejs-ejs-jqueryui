// import node modules
const { Router } = require('express');

// import models
const Product = require('../models/Product');

// initialization
const router = Router();

// routes
router.get('/', async (req, res) => {
    let products = await Product.find().sort('disposition');
    res.render('index', {products: products});
});
router.post('/add-product', async (req, res) => {
    let product = new Product(req.body);
    await product.save();
    res.redirect('/');
});
router.post('/products/ordering', async (req, res) => {
    let ids = req.body.id;
    for(let i in ids){
        let product = await Product.findById(ids[i]);
        product.disposition = i;
        await product.save();
    }
    res.send('ordered!');
});

module.exports = router;