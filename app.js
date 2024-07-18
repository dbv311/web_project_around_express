const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;

const usersRoutes = require('./routes/users');

const cardsRoutes = require('./routes/cards');

app.use(usersRoutes);

app.use(cardsRoutes);

app.get('/*', (req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
