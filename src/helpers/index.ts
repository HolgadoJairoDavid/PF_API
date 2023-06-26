import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || ''

export function createToken(logInfo:object) {
  return jwt.sign(logInfo, JWT_SECRET, {
    expiresIn: 60 //un día: 86400
  })
}