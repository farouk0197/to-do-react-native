const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const Item = require("./models/todoModel")


app.use(express.json())


// get all items
app.get('/items', async (req, res) => {
    
    try{
        const items = await Item.find({})
        res.status(200).json(items)
        console.log(items)
    } catch (err){
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
  })

// create item

app.post('/create', async (req, res) => {
    
    try{
        const createdItem = await Item.create(req.body)
        res.status(200).json(createdItem)
    } catch (err){
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
})

// edit item
app.put('/edit/:id', async(req, res) => {
    
    try{
        const {id} = req.params;
        const updatedItem = await Item.findByIdAndUpdate(id, req.body)
        if (!updatedItem){
            res.status(404).json({message: `can not find item with id ${id}`})
        }
        const newUpdateedItem = await Item.findById(id)
        res.status(200).json(newUpdateedItem)
    } catch (err){
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
})

// delete item
app.delete('/del/:id', async(req, res) => {

    try{
        const {id} = req.params;
        const deletedItem = await Item.findByIdAndDelete(id)

        if (!deletedItem){
            res.status(404).json({message: `can not find item with id ${id}`})
        }
        res.status(200).json(deletedItem)
    } catch (err){
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
})


main().catch(err => console.log(err));

async function main() {
  const data = await mongoose.connect('mongodb+srv://root:Password321@cluster0.pc8azgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  if (data){
    console.log("db connected to Mongodb!")
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    
  }
  
}