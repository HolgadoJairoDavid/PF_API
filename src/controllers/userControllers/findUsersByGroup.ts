// encuentra los usuarios que no fueron borrado según un grupo
// y solo devuelve algunas propiedades
// retorna una lista de usuarios
import User from '../../models/User'

const findUsersByGroup = async (group: string) => {
  const users = await User.find({group, isDeleted: false})

  return users.map((user) => {
    return {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      group: user.group,
      isConnected: false,
      socketID: ''
    }
  })

}

export default findUsersByGroup