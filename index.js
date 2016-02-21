var feathers = require("feathers");
var bodyParser = require("body-parser");
var rest = require("feathers-rest");
var socketio = require("feathers-socketio");
var memory = require("feathers-memory");

var app = feathers()
    .configure(rest())
    .configure(socketio())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    

app.use('/components/feathers-element', feathers.static(__dirname));
app.use('/components', feathers.static(__dirname + "/bower_components"));
app.use('/api/memory',memory());

app.listen(8080);

console.log("Feathers is listening port 8080");

    
