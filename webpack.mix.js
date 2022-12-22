let mix = require('laravel-mix')

mix.disableSuccessNotifications()

mix.ts('src/index.ts', 'dist/gmodal.js').sass('src/styles/style.scss', 'dist')
