const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode: 'sandbox',
    client_id : 'AR2Q8__YrIERPGWDOa7imrfVQIsuWx01PKOJGQ6ocSn-ruXarifA_NvCZySeP1SIiqWM5R2fKg74q-_H',
    client_secret : 'EBq1ykYKabJvIBMjsPUPTwC-TKUieX7khIJIeU2fz6DKI0F1z5AxJ713MJxI2OsgoRgTR0l9p48dBFUO'
})

module.exports = paypal ;
