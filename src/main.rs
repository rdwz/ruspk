#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate diesel;
extern crate serde;
extern crate serde_json;
#[macro_use]
extern crate serde_derive;
extern crate chrono;

use actix_web::{middleware, web, App, HttpServer};
use diesel::r2d2::{self, ConnectionManager};

pub mod models;
pub mod routes;
pub mod synopackagelist;

#[cfg(feature = "sqlite")]
#[path = "schemas/sqlite/schema.rs"]
pub mod schema;
#[cfg(feature = "mysql")]
#[path = "schemas/mysql/schema.rs"]
pub mod schema;
#[cfg(feature = "postgres")]
#[path = "schemas/postgres/schema.rs"]
pub mod schema;

#[cfg(feature = "sqlite")]
type Connection = diesel::sqlite::SqliteConnection;
#[cfg(feature = "mysql")]
type Connection = diesel::mysql::MysqlConnection;
#[cfg(feature = "postgres")]
type Connection = diesel::pg::PgConnection;

#[cfg(feature = "mysql")]
type Db64 = u64;
#[cfg(feature = "postgres")]
type Db64 = i64;
#[cfg(feature = "mysql")]
type Db32 = u32;
#[cfg(feature = "postgres")]
type Db32 = i32;
#[cfg(feature = "mysql")]
type Db8 = u8;
#[cfg(feature = "postgres")]
type Db8 = i8;

type DbPool = r2d2::Pool<ConnectionManager<Connection>>;
type DbConn = diesel::r2d2::PooledConnection<diesel::r2d2::ConnectionManager<Connection>>;

const URL: &str = "http://packages.synocommunity.com";

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=info,diesel=debug");
    env_logger::init();
    dotenv::dotenv().ok();
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL");
    let manager = ConnectionManager::<Connection>::new(db_url);
    let pool = r2d2::Pool::builder().build(manager).expect("Failed to create pool.");
    let bind = "127.0.0.1:8080";
    println!("Starting server at: {}", &bind);

    // Start HTTP server
    HttpServer::new(move || {
        App::new()
            // set up DB pool to be used with web::Data<Pool> extractor
            .data(pool.clone())
            .wrap(middleware::Logger::default())
            .service(web::resource("/hello/").route(web::get().to(routes::index)))
            .service(web::resource("/hello/{name}").route(web::get().to(routes::index)))
            .service(web::resource("/").route(web::get().to(routes::syno)))
            .service(web::resource("/").route(web::post().to(routes::syno)))
            .service(web::resource("/package").route(web::get().to(routes::list_packages)))
    })
    .bind(&bind)?
    .run()
    .await
}
