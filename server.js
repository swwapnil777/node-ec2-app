import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js application hosted on AWS EC2!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
