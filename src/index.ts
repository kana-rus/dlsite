import express from 'express'
import bodyParser from 'body-parser'

const port = process.env.PORT || 8000

const api = express()
api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())

api.post("/", (req, res) => {
    const dataURL = req.body['dataURL']
    res.send(`
        <h1>Downloaded.</h1>
        <h2>(Go back to LINE)</h2>
        <a download="KaTeX.png" href=${dataURL}></a>
        <script>
        window.onload = function(){
            document.getElementsByTagName("a")[0].click()
        }
        </script>
    `)
})
api.listen(port)