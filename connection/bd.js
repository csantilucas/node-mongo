import mongoose from "mongoose";
import express from "express";
const router = express.Router()

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/Links')
        console.log('connetc to mongo')
        console.log(mongoose.BaseConnection)

        router.get("/title/:title", async (req, res) => {
            try {
                let title = req.params.title;
                let doc = await link.findOne({ title })
                res.redirect(doc.url)
            } catch (erro) {
                res.send(erro)
            }
        });

    } catch (error) {
        console.log(`erro ${error}`)
    }
}