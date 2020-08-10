import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('userIndex'));
userRouter.get('/edit', (req, res) => res.send('userEdiet'));
userRouter.get('/password', (req, res) => res.send('userPassword'));

export default userRouter;
