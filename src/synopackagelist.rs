extern crate serde_with;
use crate::DbConn;
use anyhow::Result;
use crate::models::*;
use crate::routes::KEYRING;
use crate::URL;

#[derive(Serialize, Default)]
pub struct SynoResponse {
    keyrings: Option<Vec<String>>,
    packages: Vec<Package>,
}
impl SynoResponse {
    fn set_key(&mut self, key: String) -> &Self {
        let mut k = self.keyrings.clone().unwrap_or(Vec::new());
        k.push(key);
        self.keyrings = Some(k);
        self
    }
}


#[serde_with::skip_serializing_none]
#[derive(Serialize)]
pub struct Package {
    // #[serde(skip_serializing_if = "is_false")]
    pub beta: bool,
    pub changelog: Option<String>,
    pub conflictpkgs: Option<String>,
    pub deppkgs: Option<String>,
    pub desc: Option<String>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub snapshot: Vec<String>,
    pub distributor: String,
    pub distributor_url: String,
    pub dname: Option<String>,
    pub download_count: usize,
    pub link: String,
    pub maintainer: String,
    pub maintainer_url: String,
    pub package: String,
    pub qinst: bool,
    pub qstart: bool,
    pub qupgrade: bool,
    pub recent_download_count: usize,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub thumbnail: Vec<String>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub thumbnail_retina: Vec<String>,
    pub version: String,
    pub md5: Option<String>,
    pub size: Option<i32>,
}

impl Package {
    fn new(
        beta: bool,
        changelog: Option<String>,
        conflictpkgs: Option<String>,
        deppkgs: Option<String>,
        desc: Option<String>,
        distributor: String,
        distributor_url: String,
        dname: Option<String>,
        link: String,
        maintainer: String,
        maintainer_url: String,
        package: String,
        qinst: bool,
        qstart: bool,
        qupgrade: bool,
        version: String,
        md5: Option<String>,
        size: Option<i32>,
    ) -> Self {
        Package {
            beta,
            changelog,
            conflictpkgs,
            deppkgs,
            desc,
            snapshot: Vec::new(),
            distributor,
            distributor_url,
            dname,
            download_count: 0,
            link,
            maintainer,
            maintainer_url,
            package,
            qinst,
            qstart,
            qupgrade,
            recent_download_count: 0,
            thumbnail: Vec::new(),
            thumbnail_retina: Vec::new(),
            version,
            md5,
            size,
        }
    }
}

impl Default for Package {
    fn default() -> Self {
        Package {
            beta: false,
            changelog: None,
            conflictpkgs: None,
            deppkgs: None,
            desc: None,
            snapshot: Vec::new(),
            distributor: "Syno Community".to_string(),
            distributor_url: "https://synocommunity.com/".to_string(),
            dname: None,
            download_count: 0,
            link: String::new(),
            maintainer: "Syno Community".to_string(),
            maintainer_url: "https://synocommunity.com/".to_string(),
            package: String::new(),
            qinst: false,
            qstart: false,
            qupgrade: true,
            recent_download_count: 0,
            thumbnail: Vec::new(),
            thumbnail_retina: Vec::new(),
            version: String::new(),
            md5: None,
            size: None,
        }
    }
}

pub fn get_packages_for_device_lang(
    conn: &DbConn,
    lang: &String,
    arch: &String,
    build: u64,
    package_update_channel: &Option<String>,
    major: u8,
    micro: u8,
    minor: u8,
) -> Result<SynoResponse> {
    let mut beta = false;
    if let Some(package_update_channel) = package_update_channel {
        if package_update_channel == "beta" {
            beta = true;
        }
    }

    let mut sr = SynoResponse {
        packages: Vec::new(),
        ..Default::default()
    };
    sr.set_key(KEYRING.to_string());

    let packages = DbPackage::get_packages(&lang, &arch, build, beta, major, micro, minor, &conn)?;
    // println!("{}", serde_json::to_string_pretty(&packages).unwrap());

    for package in packages.iter() {
        let mut p = Package::new(
            package.beta,
            package.changelog.clone(),
            package.conflictpkgs.clone(),
            package.deppkgs.clone(),
            package.desc.clone(),
            package.distributor.clone().unwrap_or(String::new()),
            package.distributor_url.clone().unwrap_or(String::new()),
            package.dname.clone(),
            format!(
                "{}/{}/{}/{}",
                URL.to_string(),
                package.package.clone(),
                package.revision,
                package.link.clone().unwrap_or(String::new()),
            ),
            package.maintainer.clone().unwrap_or(String::new()),
            package.maintainer_url.clone().unwrap_or(String::new()),
            package.package.clone(),
            package.qinst.unwrap_or(false),
            package.qstart.unwrap_or(false),
            package.qupgrade.unwrap_or(false),
            format!("{}-{}", package.upstream_version, package.revision),
            Some(package.md5.clone()),
            Some(package.size),
        );
        p.thumbnail = DbIcon::paths(
            DbIcon::from_version(package.version_id, &conn),
            format!(
                "{}/{}",
                package.dname.clone().unwrap_or(String::new()),
                package.revision
            ),
        );
        p.thumbnail_retina = DbIcon::retina_from_version(package.version_id, &conn)
            .iter()
            .map(|icon| {
                format!(
                    "{}/{}/{}/{}",
                    URL.to_string(),
                    package.package.clone(),
                    package.revision,
                    icon.path.clone()
                )
            })
            .collect::<Vec<_>>();
        p.snapshot = DbScreenshot::from_package(package.package_id, &conn)
            .iter()
            .map(|screenshot| {
                format!(
                    "{}/{}/{}/{}",
                    URL.to_string(),
                    package.package.clone(),
                    package.revision,
                    screenshot.path.clone()
                )
            })
            .collect::<Vec<_>>();
        sr.packages.push(p);
    }
    // sr.packages.push(Package::default());
    Ok(sr)
}