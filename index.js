class Estudiante {
    constructor(id_estudiante,apellido1,apellido2,id_grupo, ingreso, id_asignatura)
    {   this.id_estudiante=id_estudiante;
        this.apellido1=apellido1;
        this.apellido2=apellido2;
        this.id_grupo=id_grupo;
        this.ingreso=ingreso;
        this.id_asignatura=id_asignatura;
    }
}
function postEstudiante(){
    let estudiante =new Estudiante
   
        (document.getElementById("id_estudiante").value,
        document.getElementById("apellido1").value,
        document.getElementById("apellido2").value,
        document.getElementById("id_grupo").value,
        document.getElementById("ingreso").value,
        document.getElementById("id_asignatura").value
        )
    const url="http://127.0.0.1:3000/ESTUDIANTES"
    let param =
        {
            headers:{"Content-type": "application/json; charset UTF-8"},
            body: JSON.stringify(estudiante),
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
function getEstudiante()
{
    let id_estudiante =document.getElementById("id_estudiante").value;
    let url ="http://127.0.0.1:3000/ESTUDIANTES/?id_estudiante=" + id_estudiante;

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
        document.getElementById("mostrarEstudiante").innerHTML=`<p>Primer apellido: ${result[0].apellido1}</p>
                                                            <p>Segundo apellido: ${result[0].apellido2}</p>
                                                            <p>id_grupo: ${result[0].id_grupo}</p>
                                                            <p>Año de ingreso: ${result[0].ingreso}</p>
                                                            <p>id_asignatura: ${result[0].id_asignatura}</p>
                                                            `

    })
    .catch(function(error){
        console.log(error)
    })
}
function getEstudiantes(){
    
    let url="http://127.0.0.1:3000/ESTUDIANTES"
    
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
    for (let i=0; i< result.length;i++){
    document.getElementById("mostrarEstudiantes").innerHTML+= `<p>id_estudiante: ${result[i].id_estudiante}</p>
                                                         <p>Primer apellido: ${result[i].apellido1}</p>
                                                         <p>Segundo apellido: ${result[i].apellido2}</p>
                                                         <p>id_grupo: ${result[i].id_grupo}</p>
                                                         <p>Año de ingreso: ${result[i].ingreso}</p>
                                                         <p>id_asignaturas: ${result[i].id_asignatura}</p>
                                                         `
    }
    })

    .catch (function(error){
        console.log(error)
    })
}
//Borrar
function deleteEstudiante(){

    let id_estudiante=document.getElementById("id_estudiante").value;
    let url ="http://127.0.0.1:3000/ESTUDIANTES/?id_estudiante=" + id_estudiante;
    let paramid={
        id_estudiante:id_estudiante
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
//Modificar
function putEstudiante(){
  
    let estudiante=new Estudiante(
        document.getElementById("id_estudiante").value,
         document.getElementById("apellido1").value,
         document.getElementById("apellido2").value,
         document.getElementById("id_grupo").value,
         document.getElementById("ingreso").value,
         document.getElementById("id_asignatura").value,
         )
    
const url="http://127.0.0.1:3000/ESTUDIANTES"
let param ={
headers:{"Content-type": "application/json; charset= UTF-8"},
body: JSON.stringify(estudiante),
method:"PUT"}

fetch(url,param)
   
    .then(function(result){
        console.log(result)
    })
    .catch (function(error){
    console.log(error)
    })

}