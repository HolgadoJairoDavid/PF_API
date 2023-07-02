// Encuentra el grupo de usuarios según un email
// y solo devuelve algunas propiedades
// retorna una lista de usuarios
import User from '../../models/User'

const findUsersGroupByEmail = async (email: string) => {
  // por el momento no importa que esté eliminado
  const user = await User.findOne({email})

  if(!user) return []

  // const users = await User.find({group: user.group, isDeleted: false})

  // por el momento no restringimos el grupo
  const users = [user]

  return users.map((user) => {
    return {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      cohort: user.cohort,
      group: user.group,
      // isConnected: false,
    }
  })

}

export default findUsersGroupByEmail