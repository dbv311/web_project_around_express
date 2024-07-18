const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');

const filename = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  fs.readFile(filename).then((content) => {
    const cardsData = JSON.parse(content.toString());
    res.send(cardsData);
  });
});

module.exports = router;
