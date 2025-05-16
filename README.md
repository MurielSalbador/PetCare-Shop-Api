
---

## 📁 `PetCare-Shop-Api` (Backend)

# 🔧 PetCare Shop - Backend

Este repositorio contiene el backend del sistema **PetCare Shop**, diseñado para administrar la lógica del negocio, autenticación de usuarios, y gestión de productos en una tienda online especializada en mascotas.

## ⚙️ Características del Sistema

- Gestión de usuarios con roles: Usuario, Admin y Superadmin
- Autenticación segura con JWT
- CRUD de productos
- Control de permisos según rol
- Conexión con base de datos (MySQL o PostgreSQL)

## 🔐 Roles y Permisos

### Superadmin
- Crear, editar y eliminar productos
- Ver historial de usuarios
- Crear nuevos administradores
- Acceder a la configuración general del sistema

### Admin
- Crear y editar productos (stock/precio)
- Visualizar compras de usuarios (solo lectura)

### Usuario
- Registrarse e iniciar sesión
- Comprar productos
- Consultar pedidos y actualizar perfil

## 🧱 Tecnologías

- **Node.js** + **Express**
- **Base de datos**: MySQL o PostgreSQL
- **Autenticación**: JWT
- **ORM/Query builder**: Sequelize o Knex (según implementación)

## 🛠️ Estructura del Proyecto

- `/routes`: Define las rutas para auth, productos, usuarios
- `/controllers`: Lógica de cada ruta
- `/models`: Esquemas de la base de datos
- `/middleware`: Verificación de JWT, roles
- `/config`: Conexión a la base de datos y variables de entorno

## 📦 Instalación de dependencias

```bash

npm install express sequelize mysql2 jsonwebtoken bcryptjs cors
node server.js
