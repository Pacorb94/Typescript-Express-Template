import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router: Router = Router();
router.route('/')
    .post(userController.create)
    .get(userController.getUsers)
    .put(userController.update)
    .delete(userController.deleteUser);

export default router;