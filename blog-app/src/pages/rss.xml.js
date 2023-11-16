import rss, { pagesGlobToRssItems } from '@astrojs/rss';


export async function GET(context) {
  return rss({
    title: 'Facundo Colavini | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('../../pages/posts/*.md')),
    customData: `<language>es-ar</language>`,
  });
}