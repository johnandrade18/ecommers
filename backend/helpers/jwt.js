import jwt from 'jwt-simple';
import moment from 'moment';

const createToken = (user) => {
    const payload = {
        sub: user.id,
        nombres:user.nombres,
        apellidos:user.apellidos,
        email:user.email,
        iat: moment().unix(),
        exp: moment().add(7, 'days').unix(),
    }
    return jwt.encode(payload, process.env.TOKEN_SECRET);
}

export default createToken;