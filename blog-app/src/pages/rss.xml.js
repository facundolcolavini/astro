import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: 'Facundo Colavini | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
   /*  items: await pagesGlobToRssItems(import.meta.glob('../../pages/posts/*.md')), */
   items: posts.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    description: post.data.description,
    link: `/posts/${post.slug}/`,
  })),
    customData: `<language>es-ar</language>`,
  });
}