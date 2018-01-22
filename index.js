const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let myString = 'hello world';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('client', { myString });
});

app.post('/', (req,res) => {
	let string = req.body.string;
	let arr = [...string].sort();
  
	myString = arr.join('');
  res.render('client', { myString });
});
app.listen(process.env.PORT || 3000);