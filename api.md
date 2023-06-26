# Endpoints
// AUTH :::::::::::::::::::::::::::::::::::::::::::::::

POST /auth/signup
  Crea un nuevo usuario
  Recibe por body los datos del usuario, por el momento 'email' y 'password' son obligatorios
  Si todo sale bien devuelve el Usuario creado


POST /auth/signin
  Recibe por body 'email' y 'password'
  Si corresponden con los datos de un usuario devuelve un objeto de la forma
    {access: true}
  Caso contrario devuelve un error


// USER :::::::::::::::::::::::::::::::::::::::::::::::

POST /user/update
  Recibe por body el _id y los datos del usuario que se quieren modificar
  Devuelve el Usuario modificado


DELETE /user/:id
  (Borrado lógico)
  Recibe por params el id del usuario que se desea eliminar
  Devuelve el Usuario con la propiedad 'isDeleted' en true


GET /user/:id
  Devuelve un User según el id
  Recibe el valor del id por params


POST /user/find
  Devuelve un array de Users que coincidan con la propiedad buscada
  Las propiedades se pasan por body
  {
  "name": "Clark",
  "lastname": "Kent"
  }
  Con ese objeto devolverá todos los Users que coincidan con esas propiedades


GET /user/all
  Devuelve un array con todos los usuarios (Que no fueron borrados)


GET /user/exists?email=some@email.com
  Devuelve TRUE O FALSE si el EMAIL pasado por query existe
  El objeto devuelto es de la siguiente forma:

  {
    "exists": true
  }


// COHORT :::::::::::::::::::::::::::::::::::::::::::::::
GET /cohort/all
  Devuelve un array con todos los Cohorts (Que no fueron borrados)

POST /cohort
  Crea un Cohort
  Los datos se pasan por el body
  por el momento se envia el name
  {
    "name": "webft37a"
  }


GET /cohort/:id
  Devuelve un Cohort deacuerdo al id pasado por params


POST /cohort/update
  Actualiza un Cohort
  Los datos se pasan por body,
  Es necesario proveer el _id
  {
    "_id":"6488a06ea452dffaec7b3cb0",
    "name": "webft37a new"
  }


DELETE /cohort/:id
  (Borrado lógico)
  Recibe por params el id del Cohort que se desea eliminar
  Devuelve el Cohort con la propiedad 'isDeleted' en true


POST /cohort/find
  Devuelve un array de Cohort que coincidan con la propiedad buscada
  Las propiedades se pasan por body
  {
    "name": "webft37a new"
  }
  Con ese objeto devolverá todos los Cohort que coincidan con esas propiedades



// GROUP :::::::::::::::::::::::::::::::::::::::::::::::
GET /group/all
  Devuelve un array con todos los Groups (Que no fueron borrados)


POST /group
  Crea un Group
  Los datos se pasan por el body
  por el momento se envia el name
  {
    "name": "11"
  }


GET /group/:id
  Devuelve un Group deacuerdo al id pasado por params


POST /group/update
  Actualiza un Group
  Los datos se pasan por body,
  Es necesario proveer el _id
  {
    "_id":"6488a06ea452dffaec7b3cb0",
    "name": "12"
  }


DELETE /group/:id
  (Borrado lógico)
  Recibe por params el id del Group que se desea eliminar
  Devuelve el Group con la propiedad 'isDeleted' en true

POST /group/find
  Devuelve un array de Group que coincidan con la propiedad buscada
  Las propiedades se pasan por body
  {
    "name": "001"
  }
  Con ese objeto devolverá todos los Group que coincidan con esas propiedades
