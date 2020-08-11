import express from 'express';
import routers from '../routers';

const userRouter = express.Router();

userRouter.get(routers.users, (req, res) => res.send('users'));
userRouter.get(routers.userDetail, (req, res) => res.send('userDetail'));
userRouter.get(routers.editProfile, (req, res) => res.send('editProfile'));
userRouter.get(routers.changePassword, (req, res) => res.send('changePassword'));

export default userRouter;
