// devuelve true o false si existe el usuario
import User from '../../models/User'

const existsUserEmail = async (email: any) => {
  
  const user = await User.findOne({email})

  return {exists: !!user}
}

export default existsUserEmail