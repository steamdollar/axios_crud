const axios = require('axios')

exports.Auth = async (req, res, next) => {
    const { token } = req.cookies
    const body = {
        token
    }
    const option = {
        'Content-type': 'application/json',
        withCredentials : true
    }

    const response = await axios.post('http://localhost:4001/api/auth', body, option)

    if(response.data === true) {
        next()
    }
    else {
        res.render('tokenError.html')
    }
}