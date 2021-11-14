class Notas {
    constructor(id_notas,id_estudiantes,id_asignatura ,fecha, notas )
    {   this.id_notas=id_notas;
        this.id_estudiantes=id_estudiantes;
        this.id_asignatura=id_asignatura;
        this.fecha=fecha;
        this.notas=notas;
        
    }
}
function postNotas(){
    let nota =new Notas
   
        (document.getElementById("id_notas").value,
        document.getElementById("id_estudiantes").value,
        document.getElementById("id_asignatura").value,
        document.getElementById("fecha").value,
        document.getElementById("notas").value,
       
        )
    const url="http://127.0.0.1:3000/NOTAS"
    let param =
        {
            headers:{"Content-type": "application/json; charset UTF-8"},
            body: JSON.stringify(nota),
            method:"POST"
        }
     fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        console.log(result)
    })
     .catch (function(error){
        console.log(error)
    })
}
//Mostrar
function getNota()
{
    let id_notas =document.getElementById("id_notas").value;
    let url ="http://127.0.0.1:3000/ESTUDIANTES/?id_notas=" + id_notas;

    let param=
    {
        headers:{"Content-type": "application/json; charset UTF-8"},
        method:"GET"
    }
    fetch(url,param)
    .then(function(data)
            {
                return data.json()
            }
        )
    .then(function(result)
    {
        document.getElementById("mostrarNota").innerHTML=`<p>id_notas: ${result[0].id_notas}</p>
                                                            <p>id_estudiantes: ${result[0].id_estudiantes}</p>
                                                            <p>id_asignatura: ${result[0].id_asignatura}</p>
                                                            <p>Fecha: ${result[0].fecha}</p>
                                                            <p>Nota: ${result[0].nota}</p>
                                                            
                                                            `

    })
    .catch(function(error){
        console.log(error)
    })
}
function getNotas(){
    
    let url="http://127.0.0.1:3000/NOTAS"
    
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method:"GET"
    }
    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result)
    {
    for (let i=0; i< result.length;i++)
    {
        document.getElementById("mostrarNotas").innerHTML+= `<p>id_notas: ${result[0].id_notas}</p>
                                                            <p>id_estudiantes: ${result[0].id_estudiantes}</p>
                                                            <p>id_asignatura: ${result[0].id_asignatura}</p>
                                                            <p>Fecha: ${result[0].fecha}</p>
                                                            <p>Nota: ${result[0].nota}</p>
                                                             `
    }
    })

    .catch (function(error){
        console.log(error)
    })
}
//Borrar
function deleteNota(){

    let id_notas=document.getElementById("id_notas").value;
    let url ="http://127.0.0.1:3000/NOTAS/?id_notas=" + id_notas;
    let paramid={
        id_notas:id_notas
    }
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(paramid),
        method:"DELETE"}
        
       
    fetch(url,param)
        .then(function(data){
            return data
        })
        .then(function(result){
          console.log(result) 
        })
        .catch (function(error){
         console.log(error)
        })
}
//Añadir notas
function putNotas(){
  
    let nota=new Notas(
        document.getElementById("id_notas").value,
         document.getElementById("id_estudiante").value,
         document.getElementById("id_asignatura").value,
         document.getElementById("fecha").value,
         document.getElementById("nota").value,
         )
    
const url="http://127.0.0.1:3000/NOTAS"
let param ={
headers:{"Content-type": "application/json; charset= UTF-8"},
body: JSON.stringify(nota),
method:"PUT"}

fetch(url,param)
   
    .then(function(result){
        console.log(result)
    })
    .catch (function(error){
    console.log(error)
    })

}