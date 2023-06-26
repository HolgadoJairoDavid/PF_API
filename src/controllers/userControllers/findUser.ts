// encuentra un usuario segun los datos proporcionados
// retorna una lista de usuarios
import User from '../../models/User'

const findUser = async (userProps: object) => {
  const users = await User.find(userProps)

  return users
}

export default findUser