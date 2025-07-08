import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '200.html' // ⚠️ Crée une copie de index.html et renomme-la 200.html après le build
    }),
    alias: {
      $lib: 'src/lib'
    }
  }
};