const express = require( "express" );
const path = require( "path" );

const app = express();
const port = 3000;

const publicPath = path.resolve( __dirname, "./public" );
//console.log(publicPath)
app.use( express.static( publicPath ));

//app.listen( 3000, () =>{
//   console.log( "Servidor corriendo en el puerto 3000" );
//});

app.get( "/", (req, res) => {
    res.sendFile( path.resolve(__dirname, "./views/index.html" ));
})

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(process.env.PORT || port, () => console.log(`Ejemplo de app escuchando en http://localhost:${port}`));
