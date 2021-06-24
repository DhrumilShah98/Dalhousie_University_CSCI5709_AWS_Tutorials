import express from 'express';
import { getUsers, getUser, addUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/users', getUsers);

router.get('/user/:id', getUser);

router.post('/add', addUser);

router.put('/update/:id', updateUser);

export default router;