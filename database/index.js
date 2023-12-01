const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const config = require('./config');

mongoose.connect(config.dbUrl, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(() => console.log('Connected to DB'))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.listen(config.port, () => {
 console.log(`Server running on port ${config.port}`);
});