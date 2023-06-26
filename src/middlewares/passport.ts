import "dotenv/config";
// passport permite autenticar con redes sociales y otros
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt"
import User from '../models/User'

const JWT_SECRET = process.env.JWT_SECRET || ''


const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}

export default new Strategy(options, (payload, done)=>{// payload es el objeto que guardamos al crear el token en signin
  const user = User.findById(payload.id)

  try {
    if(user){
      // done(error, boolean)
      return done(null, user)
    }
    return done(null, false)
  } catch (err) {
    console.log(err)
  }
})