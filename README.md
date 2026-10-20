# Genadio Colinas · Landing de candidatura

Versión exportable de la candidatura para Wallbai / Wikita en Jaén. Incluye el diseño, la fotografía de portada, los cinco casos, las once experiencias, WhatsApp, el CV actualizado y el portfolio en PDF.

## Publicar en GitHub Pages

1. Crea un repositorio con rama principal `main`. Un nombre posible es `candidatura-wallbai`; no se presupone que ya exista.
2. Sube el contenido de esta carpeta al repositorio. `index.html` debe quedar en la raíz, junto con `assets/`, `tools/` y `.github/`. Incluye también los archivos que empiezan por punto.
3. En el repositorio, abre **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Abre **Actions → Publicar landing en GitHub Pages → Run workflow**. Las siguientes subidas a `main` actualizarán la web automáticamente.
5. La URL publicada aparece al terminar el despliegue y en **Settings → Pages**.

Con GitHub Free, GitHub Pages requiere un repositorio público. Los planes que permiten Pages desde repositorios privados figuran en la documentación oficial enlazada al final.

Un repositorio de proyecto tendrá una dirección como `https://tuusuario.github.io/candidatura-wallbai/`. Para usar la raíz de tu cuenta, el repositorio debe llamarse exactamente `tuusuario.github.io`.

## Añadir un dominio propio

El dominio y el alojamiento se pueden usar juntos. Puedes mantener el código y el alojamiento en GitHub y conectar un dominio que hayas comprado.

1. Registra el dominio que elijas tras comprobar su disponibilidad. Esta exportación no compra ni configura ningún dominio.
2. En **Settings → Pages → Custom domain**, introduce el dominio.
3. Añade los registros DNS indicados por GitHub en el proveedor del dominio y activa HTTPS cuando esté disponible.
4. Ejecuta de nuevo el workflow. Las etiquetas de dirección y la imagen para compartir se generarán con la URL de Pages configurada, incluido el dominio propio.

## Editar la landing

- Textos y estructura: `index.html`.
- Diseño: `styles.css`.
- Menú, filtros, comparación y casos: `script.js`.
- Fotografías, piezas y documentos: `assets/`.
- Publicación automática: `.github/workflows/pages.yml`.

No requiere npm, framework, base de datos ni claves externas para funcionar. La preparación del despliegue utiliza Python 3 y su biblioteca estándar.

La página exportada sigue siendo una candidatura específica para Wallbai / Wikita y conserva la indicación de no indexar en buscadores. Para convertirla en portfolio general conviene adaptar primero esos textos y después revisar la indexación.

## Documentación oficial

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
- https://github.com/actions/starter-workflows/blob/main/pages/static.yml

Esta exportación contiene los archivos de la web y la configuración para GitHub Pages. No incluye historial Git, credenciales ni configuración del alojamiento anterior.
