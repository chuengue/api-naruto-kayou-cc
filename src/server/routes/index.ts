import { Router } from 'express';
import { UsersController } from '../controllers';
import { cardsController } from '../controllers/allCards';
import { WishListControllers } from '../controllers/wishList';
import { ensureAuthenticated } from '../shared';

const router = Router();

router.post('/api/login', UsersController.signInValidation  , UsersController.signIn);
router.post('/api/register',  UsersController.signUpValidation, UsersController.signUp);

router.get('/api/naruto-cards',  cardsController.getAllValidation, cardsController.getAll);
router.get('/api/naruto-cards/:cardId',  cardsController.getByIdValidation, cardsController.getById);


router.post('/api/wishList/:cardId',ensureAuthenticated, WishListControllers.addWishlistItemValidation , WishListControllers.addWishlistItem);
router.get('/api/wishList',ensureAuthenticated , WishListControllers.getAll);

export { router };
