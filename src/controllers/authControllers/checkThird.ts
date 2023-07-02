import User from '../../models/User'
import {createToken} from '../../helpers'
import bcrypt from "bcrypt"
import { userHaveAccess } from './authUtils'

const checkThird = async (userData:any) => {
  const {email} = userData

  const accessResult = await userHaveAccess(email)

  // Si no tiene acceso pero el usuario puede existir o no
  if(!accessResult.access) return accessResult
  if(!accessResult.user) return accessResult // comprobaccion extra para que no se queje typescript
  
  // El usuario existe y tiene acceso (no esta eliminado/baneado)
  const {user, group} = accessResult
  return {access: true, token: createToken({id: user._id, email: user.name}), user: {...user._doc, groupDetail: group}}
}

export default checkThird