const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3010;

app.use(morgan('dev'));
app.use('/songs/:id', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/songs/:id', (req, res) => {
//   console.log(req.params.id);
//   const id = req.params.id;

// })

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
