# ProyectoFinalBootcampDesde0

## Descripción proyecto

### Realización de un mostrador desde el que poder comprar productos de la tienda. Se mostrará en la página principal todos los productos y se podrán ir agregando a la cesta de la compra y modificando la cantidad que se quiera comprar. Se podrá eliminar cualquier producto de la cesta en cualquier momento. El coste total de la compra se irá mostrando cada vez que haya alguna modificación en la cesta.

## Estado del proyecto

### La realización del proyecto ha sido bastante caótica porque ha habido una planificación poco estudiada. Empecé a realizarlo cuando no disponía casi de tiempo (trabajo + hijo) y lo que mentalmente pensé que sería sencillo se fue complicando porque no había tenido en cuenta demasiadas cosas. Por ello, el código ha tenido que ser reescrito muchas veces con la consecuente pérdida de tiempo.

### Actualmente se puede arrastrar cualquier producto a la cesta de la compra y, si se desea, arrastrar el producto de la cesta a la papelera para eliminarlo.

### Está diseñado para que, dependiendo del dispositivo utilizado aparezca el mostrador de productos de una manera u otra. En cualquier caso, y para facilitar el diseño "drag and drop", el carrito de la compra queda fijado siempre en la parte superior de la pantalla para que podamos poner cualquier producto (sólo se aprecia cuando el ancho de la pantalla se reduce y no caben todos los productos en pantalla).

### Se ha añadido un nuevo rediseño a la página aprovechando los últimos días. En la parte superior derecha aparece siempre un display donde podemos ver siempre la cantidad de productos distintos que hay en la cesta y el coste total.

## Guía funcionamiento

### Se hace click en cualquier producto y se arrastra hasta el carrito de la compra. Una vez soltado aparecerá una fila con el producto a comprar, su imagen, coste unitario (o por Kg) y un campo donde debemos introducir la cantidad que queremos (por defecto pondrá 1). Se actualizará automáticamente tanto el precio del producto como el del coste total de la cesta. Si se quiere eliminar un producto se debe arrastrar la imagen del producto que está en la cesta y dejarlo en la imagen de la papelera. Se borrará el producto de la cesta y se actualizará el coste total de la compra.

## Tecnologías empleadas

### Para el desarrollo del proyecto he utilizado HTML5, CSS, Javascript y Bootstrap. Esta vez he usado Bootstrap solo para el diseño de la tabla y el diseño responsive del conjunto lo he realizado con CSS Grid y Flex.