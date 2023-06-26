import User from '../../../models/User'


export async function  userHaveAccess(email:string) {
  const user = await User.findOne({email})

  // El usuario no existe
  if(!user) return {access: false, user:null}

  // El usuario existe pero está eliminado/baneado
  if(user.isDeleted) return {access: false, user}

  // Indicamos online

  user.status = 'online'
  await user.save()

  // el usuario existe y no esta eliminado/baneado
  return {access: true, user}
}