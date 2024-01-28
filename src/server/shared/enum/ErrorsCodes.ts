export enum GenericErrors {
    ResourceNotFound = 1005,
    InternalServerError = 1006,
    DatabaseConnectionError = 1007,
    RecordNotFound = 1008,
    OperationNotAllowed = 1009,
    InvalidRequest = 1011,
    ValidationFailed = 1012,
    RateLimitExceeded = 1013,
    InvalidAccessToken = 1014,
    ExternalServiceFailure = 1015,
    CountError = 2002,
}

export enum LoginErrors {
    InvalidEmailOrPassword = 1001,
    UserNotFound = 1002,
    AuthenticationFailure = 1003,
    PermissionDenied = 1004,
    UserNotAuthenticated = 1010,
    AccountDisabled = 1016,
    TokenRenewalError = 1017,
    PasswordExpired = 1018,
    AuthenticationRequestExpired = 1019,
    VerifyErrorToken = 1025,
}

export enum RegisterErrors {
    EmailAlreadyRegistered = 1009,
    AccountCreationError = 1020,
    EmailVerificationSendingError = 1021,
    EmailValidationFailure = 1022,
    VerificationCodeGenerationError = 1023,
    UserAuthenticationVerificationError = 1024,
}

export enum CardsErrors {
    EmptyListCard = 2001,
    NotFountCardId = 2007
}
export enum WishListErrors {
    AlreadyExistsWishlist = 3001,
    ErrorAddingItemWishlist = 3002,
    ErrorGetWishlist = 3006

}
export type AppErrors =
    | GenericErrors
    | LoginErrors
    | RegisterErrors
    | CardsErrors
    | WishListErrors
