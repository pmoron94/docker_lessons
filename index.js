import express from 'express'
import mongoose from 'mongoose'
import animal from '@fakerjs/animal';
import firstname from '@fakerjs/firstname';

const Pet = mongoose.model('Pet', new mongoose.Schema({
    name: String,
    type: String
}))

const app = express()

app.get('/', async (req, res) => {
    console.log('Listing...')
    const pets = await Pet.find()
    return res.json(pets)
})

app.get('/create', async (req, res) => {
    console.log('Creating...')
    const new_pet = await new Pet({
        name: firstname(),
        type: animal({ type: 'pet' })
    }).save()
    return res.json(new_pet)
})

app.listen(3000, async () => {
    try {
        // mongoose connection string
        // [protocol]://[user]:[password]@[host]:[port]/[data_base]?[options_query_params]
        /*
        For local MongoDB databases, we recommend using 127.0.0.1 instead of localhost.
        That is because Node.js 18 and up prefer IPv6 addresses, which means, on many machines, Node.js will resolve localhost to the IPv6 address ::1 and Mongoose will be unable to connect.
        Unless the mongodb instance is running with ipv6 enabled.
        */
        // For localhost
        await mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/pets?authSource=admin')

        // For docker_example app container
        // For docker_example build, switch connections
        // await mongoose.connect('mongodb://admin:admin@mongo_container:27017/pets?authSource=admin')

        console.log('Server running on http://localhost:3000')
    } catch (error) {
        console.log(error)
    }
})
