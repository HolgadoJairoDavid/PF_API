import User from '../../models/User'
import {createToken} from '../../helpers'

const thirdSignIn = async (userData: any) => {
  // crear al usuario y loguearlo
  // si ya está creado agregar el nuevo (si lo es) método de logueo a authMethod

  // formatear data
  userData.authMethod = {
    type: userData.type,
    token: userData.token,
  }
  // FALTA deberiamos buscar si existe, no permitir que cree con un email que ya existe
  // si existe añadir el nuevo método de autenticacion o cambiar el ya guardado, sin bor

  // CREAR
  let user = await User.create(userData)

  user.status = 'online'
  await user.save()

  return {access: true, token: createToken({id: user._id, email: user.name}), user: user}
}

export default thirdSignIn