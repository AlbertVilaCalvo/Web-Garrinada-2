import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.garrinada.cat',
  build: {
    // We don't want trailing slashes (ie /contact/). Netlify adds a trailing
    // slash if we generate /contact/index.html instead of /contact.html, see
    // https://answers.netlify.com/t/support-guide-how-can-i-alter-trailing-slash-behaviour-in-my-urls-will-enabling-pretty-urls-help/31191
    format: 'file',
    // Enable CSS inlining for stylesheets less than 4kb, see
    // https://astro.build/blog/astro-260/#css-inlining
    // https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets
    // https://github.com/withastro/roadmap/blob/main/proposals/0036-inline-stylesheets.md
    inlineStylesheets: "auto",
  },
})
