# Mi Portafolio — Editor de Video & Miniaturas

Sitio de una sola página, sin frameworks, listo para GitHub Pages.

## Estructura del proyecto

```
portfolio/
├── index.html          → la página en sí (secciones, texto fijo)
├── css/style.css        → todos los estilos
├── js/script.js         → tus DATOS (creadores, miniaturas, contactos) + la lógica
└── assets/               → poné acá tus imágenes reales (thumbnails, etc.)
```

**Nunca necesitás tocar el HTML o el CSS para cargar contenido nuevo.**
Todo lo que cambia seguido (videos, miniaturas, contactos) vive arriba del todo
en `js/script.js`, en tres listas: `CREADORES`, `MINIATURAS` y `CONTACTOS`.

---

## Paso 1 — Crear el repositorio en GitHub

1. Entrá a [github.com](https://github.com) y logueate (o creá una cuenta).
2. Arriba a la derecha, click en el **+** → **New repository**.
3. Nombre del repositorio: **`tu-usuario.github.io`** (reemplazá "tu-usuario"
   por tu usuario real de GitHub, tal cual). Este nombre exacto hace que tu
   página quede en `https://tu-usuario.github.io` directamente, sin carpetas.
   - Si preferís que tu portafolio viva en una sub-ruta (ej.
     `tu-usuario.github.io/portafolio`), podés ponerle cualquier otro nombre;
     simplemente cambia la URL final.
4. Dejalo en **Public**.
5. Click en **Create repository**.

## Paso 2 — Subir los archivos

**Opción fácil (sin usar la terminal):**
1. En la página del repo recién creado, click en **"uploading an existing file"**.
2. Arrastrá las carpetas `css/`, `js/`, `assets/` y el archivo `index.html`
   y `README.md`.
3. Abajo, click en **Commit changes**.

**Opción con git (si querés ir practicando):**
```bash
cd portfolio
git init
git add .
git commit -m "Primer commit del portafolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
git push -u origin main
```

## Paso 3 — Activar GitHub Pages

1. En el repo, andá a **Settings** → **Pages** (menú izquierdo).
2. En "Build and deployment" → "Source", elegí **Deploy from a branch**.
3. En "Branch", elegí **main** y la carpeta **/ (root)**. Guardá.
4. Esperá 1-2 minutos y arriba te va a aparecer el link de tu página
   publicada (algo como `https://tu-usuario.github.io`).

Listo, tu portafolio ya está online. Cada vez que subas cambios al
repositorio (Paso 2), la página se actualiza sola en un par de minutos.

---

## Cómo cargar tus videos reales

Abrí `js/script.js`. Vas a ver algo así por cada creador:

```js
{
  nombre: "ChinaSSJ",
  rol: "Edición de contenido",
  videos: [
    { titulo: "Video 1 — poné el título real", youtubeId: "" },
  ]
}
```

Para cada video:
1. Andá al video en YouTube y copiá el ID de la URL. Ejemplo:
   `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → el ID es `dQw4w9WgXcQ`.
2. Pegalo entre las comillas de `youtubeId`.
3. Cambiá `titulo` por el título real que quieras mostrar.
4. Podés agregar más videos copiando el bloque `{ titulo: ..., youtubeId: ... }`
   dentro de la lista `videos`, separado por coma.
5. Si querés agregar un creador nuevo, copiá un bloque completo (desde `{
   nombre:` hasta el `}` que lo cierra) y pegalo dentro de la lista
   `CREADORES`, separado por coma.

## Cómo cargar tus miniaturas reales

1. Poné tus imágenes dentro de `assets/thumbnails/` (creá esa carpeta si no
   existe). Nombralas simple, sin espacios ni acentos: `mini-01.jpg`,
   `mini-02.jpg`, etc.
2. En `js/script.js`, en la lista `MINIATURAS`, completá el campo `src` con
   la ruta:

```js
{ titulo: "Thumbnail para video de terror", src: "assets/thumbnails/mini-01.jpg" },
```

3. Mientras `src` esté vacío (`""`), se muestra una placa de relleno
   automática para que veas cómo queda el acomodo del grid.
4. Agregá o sacá miniaturas agregando o borrando líneas de esta lista — el
   diseño se acomoda solo.

## Cómo cambiar tus contactos

En la lista `CONTACTOS` (también en `js/script.js`), reemplazá los `href`
por tus links reales (tu email, tu Instagram, etc.) y el `label` por lo que
quieras que diga el botón.

---

## Ideas para más adelante (opcional)

- Agregar un dominio propio (ej. `tunombre.com`) apuntándolo a GitHub Pages
  desde Settings → Pages → Custom domain.
- Agregar una foto/logo tuyo en el header.
- Separar cada creador en su propia página si la lista crece mucho.

Cualquier cosa que quieras ajustar del diseño (colores, tipografía, textos),
avisame y lo modificamos juntos.
