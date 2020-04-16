const express = require('express');
const recipesRouter = require('./recipes/recipesRouter');

const server = express();
server.use(express.json());
server.use('/recipes', recipesRouter);

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));