# Proyecto de React con Vite y API de Países

Este proyecto es una aplicación web desarrollada en React con Vite que utiliza la API de países [restcountries.com](https://restcountries.com/v3.1/). La aplicación permite a los usuarios:

- ### Ver todos los países de la API en la página de inicio.
- ### Buscar un país mediante un campo de entrada.
- ### Filtrar países por región.
- ### Hacer clic en un país para ver información más detallada en una página aparte.
- ### Hacer clic en los países fronterizos en la página de detalles.
- ### Ver el diseño óptimo de la interfaz en función del tamaño de la pantalla de su dispositivo.
- ### Ver los estados "hover" y "focus" de todos los elementos interactivos de la página.
- ### Alternar la combinación de colores entre el modo claro y el oscuro.

## Uso
Una vez que la aplicación esté en funcionamiento, puedes interactuar con ella para ver los países, buscar, filtrar y explorar detalles sobre cada país. Además, puedes cambiar entre los modos claro y oscuro y experimentar con la interfaz en diferentes tamaños de pantalla.

## Configuración

1. Clona este repositorio en tu máquina local con SSH con el siguiente comando:

   ```shell
   git clone git@github.com:DIOLINK/challenge-chaindots.git
   ```

2. Navega al directorio del proyecto colonado:
    ```shell
   cd challenge-chaindots
   ```

3. Instala las dependencies con cualquiera de los siguientes comandos:

   - ### npm
      ```shell
      npm install
      ```

   - ### pnpm
      ```shell
      pnpm install
      ```

4. En la raiz del proyecto encontraras un archivo con el nombre de `tempolate.env` el cual deberas renombra a `.env`.
   
5. Inicia la aplicación en modo de desarrollo:
       
      - ### npm
        ```shell
        npm run dev
        ```

      - ### pnpm
        ```shell
        pnpm dev
        ```