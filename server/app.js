const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');

const usersRouter = require('./routers/users');



const app = express();

app.use(cors())
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.status(200).json({
      title: "Educational Quizes",
      description: "Api working page"
    })
  })

app.use("/users", usersRouter);

module.exports = app;