var fms = require('fms')

fms.run({
    port: 3002,
    view: {
        templateDir: './view/',
        server: "http://127.0.0.1:1236"
    },
    static: './output'
})

fms.view({
    url: '/',
    template: "index.php"
})