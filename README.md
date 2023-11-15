# Astro

En este repositorio, exploraremos los principios y fundamentos de Astro, una herramienta para la construcción de sitios web. Puedes encontrar la [documentación oficial aquí](https://docs.astro.build/es/getting-started/).

Astro es un framework cuya premisa principal es el rendimiento y la facilidad de construcción de sitios web. Para lograrlo, ha adoptado la iniciativa de reducir la complejidad y el costo asociado con la construcción de sitios web en el lado del cliente. Propone el renderizado y la ejecución del código en el lado del servidor para evitar la lógica del lado del cliente, permitiendo así aprovechar mejor el rendimiento. Otorga al desarrollador la capacidad de manejar la hidratación de los componentes de cada página con dinamismo, permitiendo hidratar solo lo necesario en la página y dejando el resto del sitio como HTML estático.

## Características principales de Astro

- **Renderizado del lado del servidor:** Astro realiza el renderizado del lado del servidor, evitando la construcción de páginas con JavaScript en el cliente.
  
- **Componentes Interactivos (Astro Islands):** Permite la creación de componentes interactivos, denominados "Astro Islands".

- **Integración con cualquier Componente UI de cualquier framework:** Astro se integra fácilmente con componentes UI de diversos frameworks, como React, Preact, Svelte, entre otros.

## Ventajas

- **Carga de JavaScript solo para componentes deseados:** Astro carga JavaScript en el cliente solo para los componentes que lo requieran, optimizando el rendimiento general del sitio.

- **Alto rendimiento:** La estructura del framework y su enfoque en el lado del servidor contribuyen a un alto rendimiento en la construcción y carga de páginas web.

- **Hidratación de forma aislada y carga en paralelo de los componentes:** Permite la hidratación selectiva de componentes, cargando de forma aislada y en paralelo aquellos que son necesarios.

- **Configuración personalizada del renderizado de cada componente:** Astro ofrece la flexibilidad de configurar cuándo y cómo renderizar cada componente, brindando un mayor control al desarrollador.
