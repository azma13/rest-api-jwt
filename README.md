# Simple REST API using JWT for authentication

## How to use

1. `git clone https://github.com/azmash/rest-api-jwt.git`
2. `cd rest-api-jwt`
3. `npm install`
4. run migration script and seeders
5. make a directory `config` in `api/v1/db` that contain config.json. the file will be like:
    ```
    {
      "development": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": "mysql"
      },
    }
    ```
6. `npm start`

## End Point

Route | HTTP Method | Description
--- | --- | ---
/api/v1/signup | `POST` | signup with `name` and `password`
/api/v1/signin | `POST` | signin with `name` and `password`
/api/v1/user| `GET` | Hello + token
/api/v1/user/data| `GET` | Get a data

## Save JWT token

Save your token that have been generate by JWT in headers