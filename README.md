# camarero-digital

Este es mi proyecto final para el CFGS de desarrollo de aplicaciones web. Está desarrollado con Vue.js y se apoya en una API desarrollada en NodeJS, Express y Mongoose, que puedes ver en este [repositorio](https://github.com/berguntin/camarero-virtual-api).

La app es una evolución del sistema que muchos restaurantes han adoptado tras la pandemia, en donde puedes acceder a una carta en pdf escaneando un código QR.

El sistema autentica al usuario mediante un JWT tras verificar que la mesa solicitada existe en la base de datos.

Permite realizar pedidos y hacer el seguimiento del estado del mismo, para lo que implementa un método en la api que simula la interacción con la cocina del local.

Está diseñada bajo el enfoque "Mobile-first", pero la experiencia de usuario es  igualmente excelente en Desktop.


## Acceso a la app
Puedes acceder a la app a través de los códigos QR: <br/>


### Códigos qr
| Mesa 1                                 | Mesa 2                                 | Mesa 3                                 |
|----------------------------------------|----------------------------------------|----------------------------------------|
| ![QR enlace a mesa 1](resources/qrCodes/mesa_1.png) | ![QR enlace a mesa 2](resources/qrCodes/mesa_2.png) | ![QR enlace a mesa 3](resources/qrCodes/mesa_3.png) |

