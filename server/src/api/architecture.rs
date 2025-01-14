use crate::models::*;
use crate::utils;
use crate::AppData;
use actix_web::{delete, error, get, post, web, Error, HttpRequest, HttpResponse};
use actix_web_grants::proc_macro::has_any_role;
use anyhow::Result;

/// retrieve all architectures
#[get("/architecture")]
pub async fn get_all(req: HttpRequest, data: web::Data<AppData>) -> Result<HttpResponse, Error> {
    // pub async fn get_architectures(req: HttpRequest, json_data: web::Json<utils::Paginate>, data: web::Data<AppData>) -> Result<HttpResponse, Error>{
    // let (q_limit, q_offset) = utils::paginate_qs(req.query_string());
    let (limit, offset, q) = utils::handle_query_parameters(req.query_string());
    // let limit = json_data.size.unwrap_or(q_limit);
    // let offset = json_data.page.unwrap_or(q_offset);
    let conn = data.pool.get().expect("couldn't get db connection from pool");
    let response = web::block(move || DbArchitecture::find_all(&conn, limit, offset, q))
        .await
        .map_err(|e| {
            debug!("{}", e);
            error::ErrorInternalServerError(e)
        })?
        .map_err(|e| {
            debug!("{}", e);
            error::ErrorInternalServerError(e)
        })?;
    Ok(HttpResponse::Ok().json(response))
}

/// add an architecture
#[post("/architecture")]
#[has_any_role("ADMIN", "PACKAGE_ADMIN")]
pub async fn post(architecture: web::Json<NewArchitecture>, data: web::Data<AppData>) -> Result<HttpResponse, Error> {
    let conn = data.pool.get().expect("couldn't get db connection from pool");
    let response = web::block(move || DbArchitecture::create(&conn, architecture.code.clone()))
        .await
        .map_err(|e| {
            debug!("{}", e);
            error::ErrorInternalServerError(e)
        })?
        .map_err(|e| {
            debug!("{}", e);
            error::ErrorInternalServerError(e)
        })?;
    Ok(HttpResponse::Ok().json(response))
}

/// delete an architecture by id
#[delete("/architecture")]
#[has_any_role("ADMIN", "PACKAGE_ADMIN")]
pub async fn delete(post_data: web::Json<utils::IdType>, app_data: web::Data<AppData>) -> Result<HttpResponse, Error> {
    let conn = app_data.pool.get().expect("couldn't get db connection from pool");
    let response = web::block(move || DbArchitecture::delete(&conn, post_data.id))
        .await
        .map_err(|e| {
            debug!("{}", e);
            error::ErrorInternalServerError(e)
        })?
        .map_err(|e| {
            debug!("{}", e);
            error::ErrorInternalServerError(e)
        })?;
    Ok(HttpResponse::Ok().json(response))
}
