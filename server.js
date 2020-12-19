const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Oauth = require('./api/oauth');

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api', Oauth);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
