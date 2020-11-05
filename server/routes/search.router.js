const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  search = req.body;
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.KEY_GIPHY}&q=${search}&limit=25&offset=0&rating=g&lang=en`)
  .then((response) => {
      console.log(response.data);
      res.send(response.data);
  }).catch((error) => {
      alert(error);
      res.sendStatus(500);
  })
})

module.exports = router;