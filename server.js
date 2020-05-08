// create a server and start it listening


const express = require('express');
const server = express();
const hubsRouter = require('./hubs/hubs-router');
// const usersRouter = require('./users/users-router.js');

server.use(express.json());
server.use('/api/hubs', hubsRouter);
server.use('/myapi/thehubs', hubsRouter);
// server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  const { name = 'noone' } = req.query;
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome ${name} to the Lambda Hubs API</p>
  `);
});


module.exports = server;