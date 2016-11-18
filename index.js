'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port',(process.env.PORT || 5000))
// Allow process data
app.use(bodyParser.urluncoded({extended:false}))
app.use(bodyParser.json())

//route
app.get('/',function(req,res){
res.send("Hello i am a chat bot")

})
// Facebook
app.get('http://720bc31f.ngrok.io',function(){
if(req.query['hub.verify_token'] === "passworld"){
res.send(req.query['hub.challenge'])
}
res.send("Wrong token")
})

app.listen(app.get('port'),function(){
	console.log("running: port")
})