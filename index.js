const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'ejemplo'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos como id ' + connection.threadId);
});

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.get('/jajaxd', (req, res) => {
    res.json({
        id: 1,
        producto: 'producto 1',
        precio: 1
    });
});

// Ruta que obtiene datos de la base de datos
app.get('/ejemplo', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error.stack);
            res.status(500).send('Error al obtener datos');
            return;
        }
        res.json(results);
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
