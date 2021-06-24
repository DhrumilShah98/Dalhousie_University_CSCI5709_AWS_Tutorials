import express from 'express';
import userRoutes from './routes/users.js';

const app = express();
app.use(express.json({ extended: true }));

app.use('/', userRoutes);

app.listen(3000, () => console.log('Server running on port: 3000'));