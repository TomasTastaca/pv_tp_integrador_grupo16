# pv_tp_integrador_grupo16

## Integrantes del Grupo16
- **[Tastaca Gutierrez Tomas Leandro](https://github.com/TomasTastaca "Tastaca Gutierrez Tomas Leandro")**
- **[Galan Brenda Nahir](https://github.com/brenda-galan04 "Galan Brenda Nahir")**
- **[Timo Marcelo Hernan](https://github.com/marcelohfrt-ops "Timo Marcelo Hernan")**
- **[Velasquez Choque Sara](https://github.com/sarav2313-hue "Velasquez Choque Sara")**
- **[Pablo Frabricio Gaspar](http://github.com/PabloFabricioGaspar26 "Pablo Fabricio Gaspar")**


## Descripción del proyecto integrador:  Panel de Control de Clientes

El proyecto consiste en el desarrollo de una aplicación web realizada con *React, **Vite, **JavaScript, **React Router DOM* y *Material UI (MUI)*.

Su objetivo principal es implementar un *Panel de Control de Clientes* conectado a la API pública *FakeStoreAPI*, permitiendo gestionar el acceso de administradores, visualizar información de clientes, realizar búsquedas, registrar nuevos usuarios y consultar fichas detalladas con distintos niveles de acceso según el sector del administrador.

---

## Funcionalidades

### Módulo A: Gestión del Estado Global y Autenticación

Este módulo controla el acceso a la aplicación mediante un sistema de autenticación para administradores.

Al iniciar la aplicación, el acceso a las secciones privadas permanece restringido hasta que el usuario inicia sesión. Para ingresar, el administrador debe escribir su nombre y seleccionar su sector, que puede ser *Soporte* o *Gerencia*.

Una vez autenticado, la sesión se mantiene activa incluso si la página se recarga, y desde el encabezado es posible cerrar sesión para volver a la pantalla de inicio.

---

### Módulo B: Vista de Clientes

La pantalla principal obtiene la información de los clientes desde la API pública:

https://fakestoreapi.com/users

Los clientes se presentan en una interfaz organizada mostrando información como el nombre, correo electrónico, teléfono y ciudad.

Además, la aplicación incorpora un buscador que permite filtrar clientes por apellido o ciudad, junto con indicadores visuales durante la carga de datos y mensajes de error en caso de problemas de conexión.

---

### Módulo C: Alta de Clientes

Este módulo permite registrar nuevos clientes mediante un formulario.

Al completar los datos y enviarlos, la información se envía a la API y, si el registro se realiza correctamente, la aplicación muestra una notificación confirmando la operación e indicando el identificador asignado al nuevo cliente.

---

### Módulo D: Ficha del Cliente y Control de Permisos

Cada cliente cuenta con una ficha individual accesible desde una ruta dinámica.

En esta vista se muestra información más detallada, como la dirección completa, nombre de usuario y credenciales.

Además, el sistema aplica permisos según el sector del administrador:

* *Soporte:* puede consultar la información del cliente.
* *Gerencia:* además de visualizar los datos, puede eliminar clientes mediante una operación simulada sobre la API.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


