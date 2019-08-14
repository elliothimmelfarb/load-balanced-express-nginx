const express = require('express');
const app = express();

app.get('/', (req, res) =>  {      
   console.log('I just received a GET request on port 3000!');
   res.send('Hello World!');
});

app.get('/instance', (req, res) => {
    res.send(`Hello from instance: ${process.env.INSTANCE}`)
})

app.listen(3000, () => console.log('I just connected on port 3000!'));