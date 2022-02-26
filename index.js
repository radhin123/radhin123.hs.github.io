__path = process.cwd();
let express = require('express')
let cors = require('cors')
let secure = require('ssl-express-www');
let PORT = process.env.PORT || 8070 || 3000
let { color } = require('./lib/color.js')

let mainrouter = require('./routes/main'),
     apirouter = require('./routes/api')

let app = express()

app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);


app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT ,'green'))
})

module.exports = app
