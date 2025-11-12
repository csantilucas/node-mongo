import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
})

const link = mongoose.model('Link', linkSchema)

export default link

// let newlink = new link({
//     title:'youtube',
//     description: 'meu github',
//     url: 'https://www.youtube.com'
// })


// newlink.save() .then(doc => console.log(doc)).catch(erro => console.log(erro))

