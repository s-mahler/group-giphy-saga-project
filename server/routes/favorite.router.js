const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${KEY_GIPHY}&q=${SEARCH_GOES_HERE}&limit=25&offset=0&rating=g&lang=en`)
  .then((response) => {
      console.log(response.data);
      res.send(response.data);
  }).catch((error) => {
      alert(error);
      res.sendStatus(500);
  })
})

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
