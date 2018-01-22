const express = require('express');


const app = express();
app.use(express.static('client.html'));

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(process.env.PORT || 3000);