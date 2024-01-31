import { Router } from 'express';
import { UsersController } from '../controllers';
import { cardsController } from '../controllers/allCards';
import { CollectionController } from '../controllers/collection';
import { ItemCollectionControllers } from '../controllers/itemCollection';
import { PublicCollectionsControllers } from '../controllers/publicCollections';
import { WishListControllers } from '../controllers/wishList';
import { ensureAuthenticated } from '../shared';

const router = Router();
//LOGIN
router.post(
    '/api/login',
    UsersController.signInValidation,
    UsersController.signIn
);
router.post(
    '/api/register',
    UsersController.signUpValidation,
    UsersController.signUp
);

//ALL-CARDS
router.get(
    '/api/naruto-cards',
    cardsController.getAllValidation,
    cardsController.getAll
);
router.get(
    '/api/naruto-cards/:cardId',
    cardsController.getByIdValidation,
    cardsController.getById
);

//WISHLIST
router.get(
    '/api/wishList',
    ensureAuthenticated,
    WishListControllers.getAllValidation,
    WishListControllers.getAll
);
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

// PUBLIC COLLECTIONS
router.get(
    '/api/public-collections',
    PublicCollectionsControllers.getAllPublicCollectionValidation,
    PublicCollectionsControllers.getAllPublicCollection
);

//COLLECTIONS
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
router.put(
    '/api/collections/:collectionId',
    ensureAuthenticated,
    CollectionController.updateCollectionValidation,
    CollectionController.updateCollection
);

//COLLECTION ITEMS
router.post(
    '/api/collections/:collectionId/:cardId',
    ensureAuthenticated,
    ItemCollectionControllers.addItemToCollectionValidation,
    ItemCollectionControllers.addItemToCollection
);
export { router };
