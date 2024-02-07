import { Router } from 'express';
import { UsersController } from '../controllers';
import { cardsController } from '../controllers/allCards';
import { CollectionController } from '../controllers/collection';
import { ItemCollectionControllers } from '../controllers/collection/collectionItems';
import { findLackingControllers } from '../controllers/findLacking';
import { PublicCollectionsControllers } from '../controllers/publicCollections';
import { roleControllers } from '../controllers/roles';
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
    '/api/collections/:collectionId',
    ensureAuthenticated,
    ItemCollectionControllers.addItemToCollectionValidation,
    ItemCollectionControllers.addItemToCollection
);
router.delete(
    '/api/collections/:collectionId/:cardId',
    ensureAuthenticated,
    ItemCollectionControllers.removeItemCollectionValidation,
    ItemCollectionControllers.removeItemCollection
);
router.get(
    '/api/collections/:collectionId',
    ensureAuthenticated,
    ItemCollectionControllers.getAllCollectionItemsValidation,
    ItemCollectionControllers.getAllCollectionItems
);
router.patch(
    '/api/collections/:collectionId/:cardId',
    ensureAuthenticated,
    ItemCollectionControllers.modifyItemQuantityValidation,
    ItemCollectionControllers.modifyItemQuantity
);

//LACKING LIST

router.post(
    '/api/lacking-list/:collectionId/',
    ensureAuthenticated,
    findLackingControllers.createLackingCollection
);

//ROLES

router.post(
    '/api/create-role',
    ensureAuthenticated,
    roleControllers.createValidation,
    roleControllers.create
);

export { router };
