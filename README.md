# Aplicación NativeScript con Angular

Proyecto desarrollado con NativeScript y Angular a partir de una plantilla con navegación mediante Side Drawer.

Este repositorio corresponde a la primera entrega del proyecto y contiene la implementación de nuevas funcionalidades utilizando componentes, módulos, enrutamiento, servicios, estilos específicos por plataforma y recursos para Android.

## Primera entrega

Durante esta etapa se realizaron las siguientes implementaciones:

1. Uso de una estructura basada en Side Drawer con navegación modularizada.
2. Creación de dos nuevos componentes:
   - `RegistroComponent`
   - `DetalleComponent`
3. Creación del módulo de funcionalidad `RegistroModule`.
4. Implementación de `RegistroRoutingModule` para administrar las rutas del nuevo módulo.
5. Integración de la opción **Registro** en el Side Drawer principal.
6. Creación de `RegistroService` y configuración mediante inyección de dependencias a nivel global.
7. Uso de `*ngFor` para mostrar los elementos obtenidos desde el servicio.
8. Implementación de estilos específicos para Android e iOS mediante:
   - `registro.component.android.css`
   - `registro.component.ios.css`
9. Personalización del ícono de la aplicación en los recursos de Android dentro de `App_Resources`.
10. Uso de `isAndroid` para asignar una variable únicamente cuando la aplicación se ejecuta en Android.

## Navegación implementada

Desde el Side Drawer se puede acceder al módulo **Registro**.

Dentro de este módulo, el componente principal muestra información obtenida desde `RegistroService` y permite navegar al componente **Detalle** mediante el botón **Ir a Detalle**.

## Tecnologías utilizadas

- NativeScript
- Angular
- TypeScript
- HTML
- CSS
- Android

## Ejecución del proyecto

Instalar las dependencias:

```bash
npm install

Ejecutar la aplicación en Android:

```powershell
tns run android
```