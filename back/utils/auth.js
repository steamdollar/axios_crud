const { createSignature } = require('./jwt.js')

exports.Auth = (req, res, next) => {
    
    
    try {
        const {token} = req.body
        
        if (token == undefined) { throw new Error('no token exist')}
        const [ header, payload, sign ] = token.split('.')
        const signature = createSignature(header, payload)

        if (sign !== signature) { throw new Error('invalid token') }
        
        const user = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'))
        console.log(user)
        req.user = { 
            ...user
        }
        
    }

    catch (e) {
        console.log(e.message)
    }

    next()
}
