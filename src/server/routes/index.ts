import { Router } from 'express';
import { UsersController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Ola, dev');
});

router.post('/login', UsersController.signInValidation  , UsersController.signIn);
router.post('/register',  UsersController.signUpValidation, UsersController.signUp);

export { router };
