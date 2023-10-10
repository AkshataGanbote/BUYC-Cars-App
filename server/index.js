const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/users'));
app.use('/cars', require('./routes/cars'));

// mongoose.connect('mongodb+srv://akshataganbote398:aksha398@cluster0.b5isjkm.mongodb.net/?retryWrites=true&w=majority',
// {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }
// );

mongoose.connect('mongodb://127.0.0.1:27017/buyc')


app.listen(3002, () => {
    console.log("Server listining on http://localhost:3002");
});