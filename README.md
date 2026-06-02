# 🖥️ Innovatech Frontend Despachos

Aplicación web desarrollada con **React 18 + Vite** para la gestión de órdenes de despacho y ventas de la empresa Innovatech Chile. Forma parte de un sistema de microservicios junto a `innovatech-backend-ventas` e `innovatech-backend-despachos`.

---

## 📋 Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos previos](#requisitos-previos)
- [Ejecución con Docker](#ejecución-con-docker)
- [Ejecución local](#ejecución-local)
- [Proxy de desarrollo](#proxy-de-desarrollo)
- [Componentes principales](#componentes-principales)
- [Pipeline CI/CD](#pipeline-cicd)

---

## 🛠 Tecnologías

| Tecnología | Versión |
|---|---|
| React | 18.2.0 |
| Vite | 5.2.0 |
| React Router DOM | 6.24.1 |
| React Hook Form | 7.52.1 |
| Axios | 1.6.8 |
| SweetAlert2 | 11.11.0 |
| React Icons | 5.1.0 |
| Tailwind CSS | 3.4.3 |
| Node.js | 20.x |
| Docker | 20.x+ |

---

## 📁 Estructura del proyecto

```
innovatech-frontend-despachos/
├── src/
│   ├── components/
│   │   ├── CrudAdmin/       # Componentes de formularios y tablas de administración
│   │   └── Layouts/         # Componentes de estructura y navegación
│   └── routes/              # Definición de rutas de la aplicación
├── public/
├── Dockerfile
├── docker-compose.yml
├── vite.config.js
└── package.json
```

---

## ✅ Requisitos previos

Para ejecutar con Docker:
- [Docker](https://www.docker.com/) 20.x+
- [Docker Compose](https://docs.docker.com/compose/) v2+

Para ejecutar localmente sin Docker:
- Node.js 20.x
- npm 9.x+

---

## 🐳 Ejecución con Docker

Este es el método recomendado. Sirve la aplicación mediante nginx en el puerto `5173`.

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/innovatech-frontend-despachos.git
cd innovatech-frontend-despachos
```

### 2. Levantar el contenedor

```bash
docker compose up --build -d
```

### 3. Verificar que el contenedor esté corriendo

```bash
docker compose ps
```

Deberías ver el contenedor activo:

```
NAME                STATUS
test-frontend       Up
```

La aplicación estará disponible en: `http://localhost:5173`

### 4. Ver logs

```bash
docker compose logs -f frontend
```

### 5. Detener el servicio

```bash
docker compose down
```

---

## 💻 Ejecución local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### Otros comandos disponibles

```bash
# Compilar para producción
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar linter
npm run lint
```


## 🧩 Componentes principales

### `FormDespacho`
Formulario para registrar una nueva orden de despacho asociada a una venta existente. Permite ingresar la fecha de despacho y la patente del camión. Al enviarse, actualiza el estado de la venta (`despachoGenerado: true`) en el backend de ventas y crea el registro en el backend de despachos.

### `FormCierreDespacho`
Formulario para editar y cerrar un despacho existente. Permite actualizar el número de intentos de entrega y marcar el despacho como entregado.

---

## 🏗 Pipeline CI/CD

Este repositorio incluye un pipeline de GitHub Actions que se activa automáticamente al hacer `push` sobre la rama `deploy`.

El pipeline ejecuta los siguientes pasos:
1. **Build** — construye la imagen Docker del frontend
2. **Push** — publica la imagen en [Docker Hub](https://hub.docker.com/) bajo el tag `alonsoravanal/innovatech-frontend-despachos:latest`
3. **Deploy** — despliega la imagen actualizada en la instancia correspondiente

Las credenciales de Docker Hub se gestionan como **GitHub Secrets** (`DOCKER_USERNAME`, `DOCKER_PASSWORD`) y nunca se exponen en el código.