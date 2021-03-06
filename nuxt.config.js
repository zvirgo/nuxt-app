import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - nuxt-app',
        title: 'nuxt-app',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'My first Nuxt application' },
            { name: 'format-detection', content: 'telephone=no' },
            // Twitter
            // Test on: https://cards-dev.twitter.com/validator
            {
                hid: 'twitter:card',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
            {
                hid: 'twitter:url',
                name: 'twitter:url',
                content: 'https://nuxtjs.org'
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: 'My amazing Nuxt application'
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'The amazing Nuxt application that teaches me all the cool features of Nuxt'
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: 'https://nuxtjs.org/nuxt-card.png'
            },

            // Open Graph
            // Test on: https://developers.facebook.com/tools/debug/
            { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://nuxtjs.org'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'My amazing Nuxt application'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'The amazing Nuxt application that teaches me all the cool features of Nuxt'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://nuxtjs.org/nuxt-card.png'
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: 'https://nuxtjs.org/nuxt-card.png'
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: 'NuxtJS'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~assets/tooltip.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~plugins/vue-calendar.js', mode: 'client' },
        { src: '~plugins/v-tooltip.js', mode: 'client' },

    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}