const express = require('express');
const helmet = require('helmet')
const path = require('path');


connectDB = require('./database/db');

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(helmet());
app.use(express.json());


//app.get('/', (req, res) => res.send('API running'));
//Routes

app.use('/api/users', require('./routes/users'));

app.use('/api/auth', require('./routes/auth'));

app.use('/api/survey', require('./routes/survey'));

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
