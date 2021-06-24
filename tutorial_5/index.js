import express from 'express';
import userRoutes from './routes/users.js';
const port = process.env.PORT || 3000

const app = express();
app.use(express.json({ extended: true }));

app.use('/', userRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));