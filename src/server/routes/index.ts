import { RequestHandler, Router } from 'express';

import { UsersController } from '../controllers';
import { cardsController } from '../controllers/allCards';
import { CollectionController } from '../controllers/collection';
import { ItemCollectionControllers } from '../controllers/collection/collectionItems';
import { findLackingControllers } from '../controllers/findLacking';
import { PublicCollectionsControllers } from '../controllers/publicCollections';
import { RaritiesControllers } from '../controllers/rarities';
import { roleControllers } from '../controllers/roles';
import { WishListControllers } from '../controllers/wishList';
import { checkUserRole, ensureAuthenticated } from '../shared';
import { usersRoleControllers } from './../controllers/usersRole/index';

const yourMiddlewareHere : RequestHandler = async (req, res, next) => {
    // Adicione um atraso de 2 segundos (2000 milissegundos) para teste
    setTimeout(() => {
        // Aqui você pode realizar qualquer lógica de middleware necessária
        // Depois de concluído, chame next() para continuar com o próximo middleware ou rota
        next();
    }, 2000); // Ajuste o tempo conforme necessário
};


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

//WHOAMI

router.get('/api/whoami', ensureAuthenticated, UsersController.whoami);

//ALL-CARDS
router.post(
    '/api/naruto-cards',
    cardsController.getAllValidation,
    cardsController.getAll
);
router.get(
    '/api/naruto-cards/:cardId',
    cardsController.getByIdValidation,
    cardsController.getById
);
router.post(
    '/api/naruto-cards',
    ensureAuthenticated,
    checkUserRole(['admin', 'super_admin']),
    cardsController.CreateCardValidation,
    cardsController.createCard
);
router.delete(
    '/api/naruto-cards/:cardId',
    ensureAuthenticated,
    checkUserRole(['admin', 'super_admin']),
    cardsController.deleteCardValidation,
    cardsController.deleteCard
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

router.patch(
    '/api/collections',
    ensureAuthenticated,
    CollectionController.changeCollectionValidation,
    CollectionController.changeCollectionPrivacy
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
    '/api/role',
    ensureAuthenticated,
    checkUserRole(['super_admin']),
    roleControllers.createValidation,
    roleControllers.create
);
router.delete(
    '/api/role/:id',
    checkUserRole(['super_admin']),
    ensureAuthenticated,
    roleControllers.deleteValidation,
    roleControllers.deleteRole
);

//USERSROLES

router.post(
    '/api/users-role/:userId/:roleId',
    checkUserRole(['super_admin']),
    ensureAuthenticated,
    usersRoleControllers.addUserRolesValidation,
    usersRoleControllers.addUserRoles
);

// RARITIES
router.get(
    '/api/rarities',
    RaritiesControllers.getAllRarities
);

router.post(
    '/api/rarities',
    ensureAuthenticated,
    checkUserRole(['admin', 'super_admin']),
    RaritiesControllers.create
);


router.delete(
    '/api/rarities/:id',
    ensureAuthenticated,
    checkUserRole(['admin', 'super_admin']),
    RaritiesControllers.deleteRarity
);


export { router };
