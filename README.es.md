# Portfolio de QA Automation — Playwright + TypeScript

¿Necesitás revisar una versión antes de publicarla? [Ver el servicio piloto de revisión web y API](SERVICIOS.es.md) y el [caso demostrativo](CASE-STUDY.es.md).

Ejemplo de portfolio creado de forma independiente para mostrar automatización de pruebas web y API. Prueba la tienda demo pública SauceDemo y realiza validaciones de solo lectura contra JSONPlaceholder. No es trabajo para un cliente ni está afiliado a esos servicios.

## Cobertura

- Inicio de sesión válido, usuario bloqueado y validación de campos requeridos.
- Cantidad de productos y ordenamiento por precio.
- Agregado al carrito y validación de su contenido.
- Validación del checkout y confirmación de compra.
- API: estado HTTP, tipo de contenido, estructura de respuesta y recurso inexistente.
- Page objects y fixtures reutilizables, TypeScript estricto e integración continua con evidencia de fallos.

## Tecnologías

Playwright Test · TypeScript · Node.js · GitHub Actions

## Ejecución local

Requisitos: Node.js 22 o superior y npm.

```bash
npm ci
npx playwright install chromium
npm run typecheck
npm test
npm run report
```

Comandos útiles: `npm run test:e2e`, `npm run test:api`, `npm run test:smoke` y `npm run test:ui`.

## Configuración

Por defecto usa `https://www.saucedemo.com` y `https://jsonplaceholder.typicode.com`. Se pueden reemplazar con `BASE_URL` y `API_BASE_URL`. No se necesitan secretos. Las credenciales del archivo `src/data/credentials.ts` son credenciales públicas de demo, no cuentas privadas.

## Estructura

- `src/data`: datos de prueba de la demo.
- `src/fixtures`: fixtures compartidos de Playwright.
- `src/pages`: page objects.
- `tests/e2e`: recorridos de interfaz.
- `tests/api`: verificaciones de contrato API.
- `.github/workflows/ci.yml`: ejecución automática en GitHub Actions.

## CI y límites

GitHub Actions instala Chromium, valida tipos, corre la suite y guarda el informe HTML y artefactos de fallos. Las pruebas corren contra servicios demo externos y pueden verse afectadas por cambios o interrupciones. Es una muestra acotada: no afirma cubrir exhaustivamente el producto ni incluye pruebas de rendimiento, seguridad, accesibilidad o aplicaciones móviles nativas. Ver [TEST-STRATEGY.md](TEST-STRATEGY.md) y [BUG-REPORT-TEMPLATE.md](BUG-REPORT-TEMPLATE.md).
