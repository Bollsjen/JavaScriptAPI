const express = require('express')
const fs = require('fs');
const app = express()
const PORT = 8080

const path = "/api"

app.use(express.json())

const commandFiles = fs.readdirSync('./controllers/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const controller = require(`./controllers/${file}`);
    for(let i in controller.gets){
        app.get(path + controller.gets[i][1], (req, res) => controller[controller.gets[i][0]](req, res))
    }

    for(let i in controller.posts){
        app.post(path + controller.posts[i][1], (req, res) => controller[controller.posts[i][0]](req, res))
    }
}

app.listen(
    PORT,
    () => {
        console.log(`Server starteed on http://localhost${PORT}`)
    }
)