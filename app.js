const express = require('express');
 
const app = express();

app.get('/', (req, res) => {
    res.send('hello from tekkon technologies test3');
});

app.listen(4000, () => console.log('Gator app listening on port 4000!'));
