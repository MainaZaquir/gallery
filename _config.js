var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:q3zTRuuorQ7xne5H@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:q3zTRuuorQ7xne5H@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:q3zTRuuorQ7xne5H@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    cloudconnector: 'mongodb+srv://mzaquir58:q3zTRuuorQ7xne5HC@cluster0.c9j4kcz.mongodb.net/?retryWrites=true&w=majority'
}
module.exports = config;
