Prueba Tecnica Logika

el back corre en el puerto 8000. al momento de la entrega exiten 3 categorias

- Hogar
- Mascotas
- Tecnologia

para obtener los productos por categoria se debe realizar una peticion tipo GET al path /product/category/{category}, este endpoint nos retorna los productos por categoria

para obtener todos los productos se debe de hacer una peticion tipo GET al path /product, este endpoint nos retorna todos los productos

para crear un producto se debe realizar una peticion tipo POST al path /product/{role}

donde tenemos 2 tipos de roles

- Admin
- Viewver
- solo el rol Admin puede crear nuevos productos

el body debe tener la siguiente estructura

{ "name":"{nombre del producto}", "price": "{precio del producto}", "category": "{categoria del producto} "

}
