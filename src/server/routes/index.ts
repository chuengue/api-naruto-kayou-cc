import { Router } from 'express';
import { UsersController } from '../controllers';
import { cardsController } from '../controllers/allCards';

const router = Router();

router.post('/api/login', UsersController.signInValidation  , UsersController.signIn);
router.post('/api/register',  UsersController.signUpValidation, UsersController.signUp);
router.get('/api/naruto-cards',  cardsController.getAllValidation, cardsController.getAll);
router.get('/api/naruto-cards/:cardId',  cardsController.getByIdValidation, cardsController.getById);


export { router };
