const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./router/UserRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb://myproject:faculty22@ac-lhw1lfh-shard-00-00.dvhrjty.mongodb.net:27017,ac-lhw1lfh-shard-00-01.dvhrjty.mongodb.net:27017,ac-lhw1lfh-shard-00-02.dvhrjty.mongodb.net:27017/?ssl=true&replicaSet=atlas-d0oq3x-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});