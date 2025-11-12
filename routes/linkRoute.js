import express from 'express'
const router = express.Router()
import link from '../models/link.js';

router.get("/title/:title", async (req, res) => {
            try {
                let title = req.params.title;
                let doc = await link.findOne({ title })

                res.redirect(doc.url)
            } catch (erro) {
                res.send(erro)
            }
        });

        
router.get('/', (req, res) => {
    res.send('hello server')
})


export default router