const express = require('express');
const router = express.Router();
const Item=require('../models/Item');

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);

router.get('/:id', async (req, res) => {
    try {
        const items=await item.find()
        const item = items.find(i => i.id === parseInt(req.params.id));
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);         
    }

    router.delete('/:id',async(req,res))
    