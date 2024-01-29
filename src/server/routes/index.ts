import { Router } from 'express';
import { UsersController } from '../controllers';
import { cardsController } from '../controllers/allCards';
import { CollectionController } from '../controllers/collection';
import { WishListControllers } from '../controllers/wishList';
import { ensureAuthenticated } from '../shared';

const router = Router();
//LOGIN
router.post('/api/login', UsersController.signInValidation, UsersController.signIn);
router.post('/api/register', UsersController.signUpValidation, UsersController.signUp);

//ALL-CARDS
router.get('/api/naruto-cards', cardsController.getAllValidation, cardsController.getAll);
router.get('/api/naruto-cards/:cardId', cardsController.getByIdValidation, cardsController.getById);

//WISHLIST
router.get('/api/wishList', ensureAuthenticated, WishListControllers.getAllValidation, WishListControllers.getAll);
router.post(
    '/api/wishList/:cardId',
    ensureAuthenticated,
    WishListControllers.addWishlistItemValidation,
    WishListControllers.addWishlistItem
);
router.delete(
    '/api/wishList/:cardId',
    ensureAuthenticated,
    WishListControllers.removeWishlistItem,
    WishListControllers.addWishlistItem
);

//COLLECTION
router.post(
    '/api/collections',
    ensureAuthenticated,
    CollectionController.createValidation,
    CollectionController.create
);
router.get(
    '/api/collections',
    ensureAuthenticated,
    CollectionController.getCollectionsValidation,
    CollectionController.getCollections
);
router.delete(
    '/api/collections/:collectionId',
    ensureAuthenticated,
    CollectionController.deleteCollectionValidation,
    CollectionController.deleteCollection
);

export { router };
