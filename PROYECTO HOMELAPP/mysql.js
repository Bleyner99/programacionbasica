
const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'Bleyner',
    password: '123456',
    database: 'usuarios',

})

conection.connect( (err) =>{
    if(err) throw err
    console.log('La conexión funciona')
   
})


// const insertar = "INSERT INTO login (id,nombre) VALUES(NULL, 'ALDAX')"
// conection.query(insertar,(err, rows)=>{
//     if(err) throw err

// })
   


conection.query('SELECT * from login', (err, rows) => {
  if(err) throw err
  console.log('Los datos de la tabla son estos') 
  console.log(rows)
  console.log(rows)
  console.log('La cantidad de resultados es:')
  console.log(rows.length)
  const usuarioUno = rows  [0]
  console.log(`El usuario se llama ${usuarioUno.nombre} y tiene el id ${usuarioUno.ID}`)

//   if(usuarioUno == 0){
//       alert("bien");
//   }

})


conection.query('SELECT * FROM `login` WHERE 1 ' , (err, rows) => {
    if(err) throw err
     

})


conection.end()
 