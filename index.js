const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




const app = express();


//------CONEXIÓN BD

const nombreBd="clase";
const uri="mongodb+srv://pisak93:pisak093@cluster0.vsffz.mongodb.net/"+nombreBd+"?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open",function(){
console.log("CONECTADO A LA BBDD");
});


connection.on("error",function(err){
console.log("ERROR: "+err);
});
//------FIN CONEXIÓN BD


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/public"));




const PORT = 5000;

app.listen(PORT, function(){
    console.log("Escuchando al puerto: "+PORT);
});

//MODELO

const Usuario = mongoose.model("Usuario",{nombre:String });
//const Usuario = mongoose.model("Usuario",{nombre:String, apellido:String, edad:Number, activo:Boolean });
//const Chat = mongoose.model("Chat",{usuario:String, fecha:Date, mensaje:String, likes:Number});



// FUNCION PARA ENVIAR

app.post("/add",function(req,res){

    const usuario = new Usuario({nombre:req.body.usuario});

    usuario.save()
    .then(function(doc){
console.log("Ingresado: "+doc);
res.json({response:"success"});
//res.redirect("back");
      //  res.location(req.get("Referrer") || "/");
    })
    .catch(function(err){
console.log("ERROR: "+err);
    });


});


//FUNCION PARA TRAER

app.get("/getall", function(req,res){
    
    Usuario.find({},"nombre")
    .then(function(doc){
    res.json({response:"success",data:doc});
    })
    .catch(function(err){
        console.log("ERROR: "+err);
            });
    });
    
