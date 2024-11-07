document.addEventListener("DOMContentLoaded",function(e){
    updateUsers();
imprimirNombres();
    });
    

    var datosBD;
    
async function updateUsers(){


 var bd= await fetch("http://localhost:5000/getall")
    .then(function(res){
         return res.json()
         })
    .then(function(datos){

        if(datos.response =="success"){
            const usuarios=datos.data;
            datosBD=usuarios;

    var elementosUsuarios="";

            usuarios.forEach(function(usuario){
                console.log(usuario.nombre);
                
                elementosUsuarios+="<div class='usuario' id='"+usuario._id+"'>"+usuario.nombre+"</div>";
                document.querySelector(".lista-usuarios").innerHTML = elementosUsuarios;
            })
        }
    });


imprimirNombres();


    }

    function imprimirNombres(){
        console.log(datosBD);
    }
   
  /*document.querySelector("#formulario").addEventListener("submit", function(e){
    e.preventDefault();
    const usuario =document.querySelector("#usuario").value;
    const correo =document.querySelector("#correo").value;
    if(usuario=="" && correo==""){
        return false;
    }
    else{
        fetch("http://localhost:5000/add",
            {
                method:"POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify({usuario:usuario, correo:correo})
            }
        )
        .then(function(res){
            return res.json();
        })
        .then( function(data){
            if(data.response=="success"){
                updateUsers();
            }
        })
    }
    });
 function traerPuntos(){

    }

    fetch("http://localhost:5000/add",
        {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({usuario:usuario, correo:correo})
        }
    )
    .then(function(res){
        return res.json();
    })
    .then( function(data){
        if(data.response=="success"){
            updateUsers();
        }
    });
 
  */  

  