const express = require('express');
const app = express();
const port = 3000;

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

// Inicia el servidor
app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});