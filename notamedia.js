function getMedia()
{
    let id_estudiantes=document.getElementById("id_estudiantes").value;
    let url ="http://127.0.0.1:3000/NOTAS/notaMedia/?id_estudiantes=" + id_estudiantes;

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
        document.getElementById("media").innerHTML=`<p>nota media: ${result}</p>                                                  `

    })
    .catch(function(error){
        console.log(error)
    })
}
function getApuntdas()
{
    let id_asignatura=document.getElementById("id_asignatura").value;
    let url ="http://127.0.0.1:3000/NOTAS/apuntadas/?id_asignatura=" + id_asignatura;

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
        document.getElementById("apuntadas").innerHTML=`<p>${result}</p>                                                  `

    })
    .catch(function(error){
        console.log(error)
    })
}
function getImpartidas()
{
    let id_asignatura=document.getElementById("id_asignatura").value;
    let url ="http://127.0.0.1:3000/NOTAS/apuntadas/?id_asignatura=" + id_asignatura;

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
        document.getElementById("impartidas").innerHTML=`<p>${result}</p>                                                  `

    })
    .catch(function(error){
        console.log(error)
    })
}