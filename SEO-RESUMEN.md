# Resumen de optimización SEO

## Proyecto

- Marca: **Starmy Networks**
- Dominio oficial: <https://starmy-networks.com/>
- Framework: React con Vite y React Router
- Despliegue: Vercel conectado con GitHub

## Cambios realizados

### `index.html`

- Se actualizó el título principal:
  - `Starmy Networks | Internet de fibra óptica`
- Se agregó una meta descripción natural sobre el servicio.
- Se agregó `robots` con `index, follow`.
- Se agregó la URL canónica:
  - <https://starmy-networks.com/>
- Se configuró el idioma del documento como español.
- Se agregaron etiquetas Open Graph para compartir el sitio en redes sociales.
- Se agregaron etiquetas Twitter Card.
- Se agregó Schema.org en formato JSON-LD con:
  - `Organization`
  - `WebSite`
- Se utilizaron únicamente datos existentes en el proyecto:
  - Marca Starmy Networks
  - Sitio web
  - Correo
  - Teléfono
  - Yucatán, México
  - Instagram
- Se conservó el favicon existente:
  - `/favicon-starmy.png`

### `src/components/Hero.jsx`

- Se mejoró el H1 principal para asociar la marca con el servicio:
  - `Starmy Networks: internet veloz para tu mundo`

### `public/robots.txt`

Se creó para permitir el rastreo del sitio:

```txt
User-agent: *
Allow: /

Sitemap: https://starmy-networks.com/sitemap.xml
```

### `public/sitemap.xml`

Se creó un sitemap con las rutas existentes:

- <https://starmy-networks.com/>
- <https://starmy-networks.com/nosotros>
- <https://starmy-networks.com/cobertura>
- <https://starmy-networks.com/precios>

## URLs importantes

- Sitio principal: <https://starmy-networks.com/>
- Robots: <https://starmy-networks.com/robots.txt>
- Sitemap: <https://starmy-networks.com/sitemap.xml>

## Verificaciones realizadas

- ESLint terminó correctamente.
- El build de producción terminó correctamente.
- `sitemap.xml` tiene XML válido.
- Las rutas existentes no fueron eliminadas.
- No se modificó el diseño visual.
- No se eliminaron funcionalidades.
- No se modificó DNS, Vercel ni la configuración del dominio.
- No se agregaron datos inventados.

## Pasos manuales en Google Search Console

1. Agregar y verificar la propiedad del dominio `starmy-networks.com`.
2. Abrir la sección **Sitemaps**.
3. Enviar esta URL:
   - `https://starmy-networks.com/sitemap.xml`
4. Usar la herramienta **Inspección de URL** para solicitar la indexación de:
   - `https://starmy-networks.com/`
5. Repetir la inspección para las páginas importantes:
   - `/nosotros`
   - `/cobertura`
   - `/precios`

## Configuración pendiente

No se requiere una modificación manual en DNS, Vercel u Hostinger para los cambios SEO realizados. La indexación depende de que el dominio esté correctamente verificado en Google Search Console y de que Google vuelva a rastrear el sitio.
