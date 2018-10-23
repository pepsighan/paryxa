use actix_web::ResponseError;
use bcrypt::BcryptError;
use diesel::r2d2::PoolError;
use diesel::result::Error as DieselError;

#[derive(Debug, Fail)]
pub enum Error {
    #[fail(display = "DieselError: {}", _0)]
    Diesel(#[cause] DieselError),
    #[fail(display = "BcryptError: {}", _0)]
    Bcrypt(#[cause] BcryptError),
    #[fail(display = "PoolError: {}", _0)]
    R2D2(#[cause] PoolError),
    #[fail(display = "Password for the user is incorrect.")]
    IncorrectPassword
}

impl From<DieselError> for Error {
    fn from(err: DieselError) -> Error {
        Error::Diesel(err)
    }
}

impl From<BcryptError> for Error {
    fn from(err: BcryptError) -> Error {
        Error::Bcrypt(err)
    }
}

impl From<PoolError> for Error {
    fn from(err: PoolError) -> Error {
        Error::R2D2(err)
    }
}

impl ResponseError for Error {}

pub type SResult<T> = Result<T, Error>;
