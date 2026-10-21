# Caso demostrativo: revisión automatizada de una tienda web y una API

Este es un proyecto independiente de portfolio de Sergio Moyano. Usa la tienda pública de demostración SauceDemo y la API de datos ficticios JSONPlaceholder. No es un trabajo para un cliente ni está afiliado con esos servicios.

## Problema que ilustra

Antes de publicar cambios en un producto digital, un equipo necesita saber si sus recorridos esenciales siguen funcionando y recibir evidencia útil cuando algo falla. Esta muestra plantea un conjunto pequeño y repetible de comprobaciones de interfaz y API.

## Alcance definido

| Área | Comprobaciones implementadas |
| --- | --- |
| Acceso | Inicio de sesión correcto, usuario bloqueado y campos obligatorios vacíos |
| Catálogo | Visualización de productos y ordenamiento por precio |
| Carrito | Agregado de un producto y verificación de su contenido |
| Checkout | Validación de campos obligatorios y confirmación del pedido demo |
| API | Estado HTTP, tipo y estructura de respuesta, y recurso inexistente |

Se implementaron 9 pruebas con Playwright y TypeScript. Las pruebas web corren en Chromium. La API se consulta en modo lectura. La configuración de GitHub Actions ejecuta comprobación de tipos y pruebas, y conserva evidencias cuando una prueba falla.

## Evidencia verificable

- [Código y documentación del proyecto](https://github.com/smoyano88/qa-automation-portfolio)
- [Estrategia y límites de prueba](TEST-STRATEGY.md)
- [Ejecución correcta en GitHub Actions del 21 de octubre de 2026](https://github.com/smoyano88/qa-automation-portfolio/actions/runs/39538757311)

Una ejecución local del 21 de octubre de 2026 terminó con 9/9 pruebas aprobadas y la comprobación de TypeScript sin errores. Es el resultado de esa ejecución, no una garantía sobre el estado futuro de los servicios demo.

## Qué demuestra y qué no

La muestra enseña cómo delimito recorridos críticos, automatizo comprobaciones repetibles y dejo evidencia técnica. No constituye una auditoría integral del sitio, una evaluación de seguridad, accesibilidad o rendimiento, ni un reporte de defectos reales del cliente. Para un proyecto comercial, primero acordaría los flujos, entornos y criterios de aceptación propios del producto.
