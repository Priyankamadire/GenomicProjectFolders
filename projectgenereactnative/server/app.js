// const express = require('express');
// require('dotenv').config();
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true

// }).then(()=>{
//     console.log('our db');
// }).catch(err => console.log(err.message))
// const app = express();
// app.get('/',(req,res)=>{
//     res.send("hello world");
// })
// app.listen(8000,()=>{
//     console.log("Server is running on port ");
// });


const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');

const User = require('./models/user');

const app = express();

// app.use((req, res, next) => {
//   req.on('data', chunk => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

app.use(express.json());
app.use(userRouter);

// const test = async (email, password) => {
//   const user = await User.findOne({ email: email });
//   const result = await user.comparePassword(password);
//   console.log(result);
// };

// test('niraj@email.com', 'niraj12');

app.get('/test', (req, res) => {
  res.send('Hello world');
});
// app.post('/create-user',async(req,res)=>{
//     const user = await User({
//         fullname : 'Priya',
//         email: 'johndoe@example.com',
//         password : '1234'
//     });
//     res.json(user);
// });
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

app.listen(8000, () => {
  console.log('port is listening');
});