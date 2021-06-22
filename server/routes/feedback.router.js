const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('GET /api/feedback');
  pool
    .query('SELECT * from "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error GET /api/feedback', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  let survey = req.body;
  console.log(req.body);
  let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  pool
    .query(sqlText, [
      survey.feeling,
      survey.understanding,
      survey.support,
      survey.comments,
    ])
    .then((result) => {
      console.log(result.data);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('There was a problem with the POST', error);
      res.sendStatus(500);
    });
});

module.exports = router;
