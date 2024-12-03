# FINAL TP2

# Profesor: Osvaldo OJEDA
# Alumno: Gianmarco  ZODDA


## 🛠️ Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- [Node.js](https://nodejs.org): JavaScript runtime para el backend. (v20.11.1)
- [Express](https://expressjs.com/): Framework web para Node.js.  (^4.21.1)

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/GianmarcoZodda/BE-TP2-FINAL-ZODDA-GIANMARCO.git

2. Instala las dependencias:
   ```bash
   npm install

3. Ejecuta el proyecto:
   ```bash
   Abre la terminar desde VS Code y escribe el comando: npm run dev


##  AYUDA

crear juego
POST: http://localhost:su_puerto/create

{
    "nombre": "ajedrez",
    "categoria": "estrategia",
    "precio": 10,
    "stock": 1
}

listar juegos
http://localhost:su_puerto/get


vender
http://localhost:3000/vender

{
    "id": 1,
    "cantidad": 2
}

agregar los json en el body de la request



