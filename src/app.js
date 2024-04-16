import express from 'express';
import ProductManager from './desafio2async.js';

const port = 3000;
const app = express();
const fileJson = './file2.json'
const manager = new ProductManager(fileJson);

app.get('/products', async (req,res) => {
    const limit = parseInt(req.query.limit) || 0;
    const products = await manager.getProducts(limit)
    res.send({ status: 1, payload: products})
});

app.get('/products/:pid', async(req,res) => {
    const productId = parseInt(req.params.pid);
    const product = await manager.getProductsById(productId)
    res.send({ status: 1, payload: product})
})

app.listen(port, ()=>{console.log(`Servidor activo en puerto ${port}`)});