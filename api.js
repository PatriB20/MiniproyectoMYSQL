let mysql= require("mysql2")
const express = require ("express")
const app = express()
const cors = require ("cors")

let connection = mysql.createConnection
(
    {
        host : "localhost",
        user: "root",
        password: "12345678",
        database:"CODENOTCH"
    }
);

connection.connect(function(error)
{
    if (error)
        console.log(error);
    else 
        console.log("Conexion correcta")
});

app.use(cors())
app.use (express.urlencoded({extended:false}))
app.use(express.json());

//get Estudiante
app.get("/ESTUDIANTES",
        function(request,response)
        {
            let sql;
            if(request.query.id_estudiante== null)
                sql= "SELECT * FROM ESTUDIANTES";
            else
                sql="SELECT * FROM ESTUDIANTES WHERE id_estudiante=" + request.query.id_estudiante;
            connection.query(sql, function(err, result)
            {
                if (err)
                    console.log(err)
                else
                {
                    response.send(result)
                }
            })
        }    
        );

// get nota
app.get("/NOTAS",
        function(request,response)
        {
            let sql;
            if(request.query.id_notas== null)
                sql= "SELECT * FROM NOTAS";
            else
                sql="SELECT * FROM NOTAS WHERE id_notas=" + request.query.id_notas;
            connection.query(sql, function(err, result)
            {
                if (err)
                    console.log(err)
                else
                {
                    response.send(result)
                }
            })
        }    
        );
//postEstudiantes
app.post("/ESTUDIANTES",
        function(request,response)
        {
            console.log(request.body);
            let sql = "INSERT INTO ESTUDIANTES (apellido1, apellido2, id_grupo, ingreso, id_asignatura)" +
            "VALUES ('" + request.body.apellido1 + "', '"+
                          request.body.apellido2+ "', '"+
                          request.body.id_grupo+ "', '"+
                          request.body.ingreso+ "', '"+
                          request.body.id_asignatura+ "') ";
            console.log(sql);
            connection.query(sql, function(err,result)
            {
                if(err)
                    console.log(err);
                else
                {
                    console.log(result);
                    if(result.insertId)
                        response.send(String(result.insertId));
                    else
                        response.send("-1")
                }
            })
                          
        }
)
//postNotas
app.post("/NOTAS",
        function(request,response)
        {
            console.log(request.body);
            let sql = "INSERT INTO NOTAS (id_notas, id_estudiantes, id_asignatura, fecha, nota)" +
            "VALUES ('" + request.body.id_notas + "', '"+
                          request.body.id_estudiantes+ "', '"+
                          request.body.id_asignatura+ "', '"+
                          request.body.fecha+ "', '"+
                          request.body.nota+ "') ";
            console.log(sql);
            connection.query(sql, function(err,result)
            {
                if(err)
                    console.log(err);
                else
                {
                    console.log(result);
                    if(result.insertId)
                        response.send(String(result.insertId));
                    else
                        response.send("-1")
                }
            })
                          
        }
)

app.put('/ESTUDIANTES', function (request, response) {
    if(request.body.id_estudiante==null){
        console.log("Introduce id_estudiante")
    }else{
        let sql = "UPDATE ESTUDIANTES  SET " +
            "apellido1="+"'"+request.body.apellido1+"',"+
            "apellido2="+"'"+request.body.apellido2+"',"+
            "id_grupo="+"'"+request.body.id_grupo+"',"+
            "ingreso="+"'"+request.body.ingreso +"',"+
            "id_asignatura="+"'"+request.body.id_asignatura+"'"+" WHERE id_estudiante=" +request.body.id_estudiante;
        console.log(sql);
            connection.query(sql,function (err, result) {
        
                if(err){
                    console.log(err);
                }else{
                    response.send(result)
                }
            }); 
    }
});

//putNotas
app.put('/NOTAS', function (request, response) {
    if(request.body.id_notas==null){
        console.log("Introduce id_notas")
    }else{
        let sql = "UPDATE NOTAS  SET " +
            "id_estudiantes="+"'"+request.body.id_estudiantes+"',"+
            "id_asignatura="+"'"+request.body.id_asignatura+"',"+
            "fecha="+"'"+request.body.fecha+"',"+
            "nota="+"'"+request.body.nota+"'"+" WHERE id_notas=" +request.body.id_notas;
        console.log(sql);
            connection.query(sql,function (err, result) {
        
                if(err){
                    console.log(err);
                }else{
                    response.send(result)
                }
            }); 
    }
});


//deleteEstudiantes
app.delete("/ESTUDIANTES",
        function(request,response)
        {
            console.log(request.body);
            let sql = "DELETE FROM ESTUDIANTES WHERE id_estudiante=" + request.body.id_estudiante ;
            console.log(sql);
            connection.query(sql, function(err,result)
            {
                if(err)
                    console.log(err);
                else
                {
                        response.send(result)
                }
            })
                          
        }
)
//DeleteNotas
app.delete("/NOTAS",
        function(request,response)
        {
            console.log(request.body);
            let sql = "DELETE FROM NOTAS WHERE id_notas=" + request.body.id_notas ;
            console.log(sql);
            connection.query(sql, function(err,result)
            {
                if(err)
                    console.log(err);
                else
                {
                        response.send(result)
                }
            })
                          
        }
)

//nota media
app.get('/NOTAS/notaMedia', function (request, response) {
    let sql;

    if(request.query.id_estudiantes== null)
       console.log("Introduce id_estudiantes")
    else
        sql = "SELECT AVG(nota) FROM NOTAS WHERE id_estudiantes=" + request.query.id_estudiantes;
    connection.query(sql,function (error, result) {
        
        if(error){
            response.send(error);
        }else{
            response.send(result);
        }
    })
});
//Estudiantes segun asignatura apuntada
// app.get('/NOTAS/apuntadas', function (request, response) {

//     if(request.query.id_estudiante== null)
//        let sql=  "SELECT apellido1 , apellido2 , titulo FROM ESTUDIANTES AS estu INNER JOIN NOTAS AS ntas ON (estu.id_estudiante =ntas.id_estudiantes) INNER  JOIN ASIGNATURAS AS asig ON (ntas.id_asignatura=asig.id_asignaturas)"
//     else
//         let sql ="SELECT apellido1 , apellido2 , titulo FROM ESTUDIANTES AS estu INNER JOIN NOTAS AS ntas ON (estu.id_estudiante =ntas.id_estudiantes) INNER  JOIN ASIGNATURAS AS asig ON (ntas.id_asignatura=asig.id_asignaturas) WHERE asig.id_estudiante ="  + req.query.id_estudiante;
        
//     connection.query(sql,function (error, result) {
        
//         if(err){
//             response.send(error);
//         }else{
//             response.send(result);
//         }
//     })
// }); 

//segun asignaturas impartidas
app.get('/impartidas', function (request, response) {
 

    if(request.query.id_profesor== null)
       let sql=  "SELECT apellido1, apellido2,titulo FROM PROFESORES INNER JOIN  ASIGNATURAS ON (PROFESORES.id_asignatura = ASIGNATURAS.id_asignaturas)"
    else
       let sql = "SELECT apellido1, apellido2,titulo FROM PROFESORES INNER JOIN  ASIGNATURAS ON (PROFESORES.id_asignatura = ASIGNATURAS.id_asignaturas) WHERE PROFESORES.id_asignatura="+ request.query.id_asignatura;
    
    connection.query(sql,function (error, result) {
        
        if(err){
            response.send(error);
        }else{
            response.send(result);
        }
    })
});
app.listen(3000);
