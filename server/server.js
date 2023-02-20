const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const connectDB = require('./utils/db');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ limit : '10mb'}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , 'uploads')));


app.use('/api/Admin' , require('./routes/adminRoutes'));
app.use('/api/NA' , require('./routes/NA_Routes'));
app.use('/api/PP' , require('./routes/PP_Routes'));
app.use('/api/UC' , require('./routes/UC_Routes'));
app.use('/api/blockCodes' , require('./routes/blockCodeRoutes'));
app.use('/api/block-incharge' , require('./routes/blockInchargeRoutes'));
app.use('/api/servey' , require('./routes/serveyRoutes'));
app.use('/api/member' , require('./routes/memberRoutes'));

app.use(require('./middlewares/errorHandler'));

const PORT = process.env.PORT || 8000;
app.listen(PORT , () => console.log(`Server is listening on port ${PORT}`));