import User from '../../models/User'
import bcrypt from "bcrypt";

const changePassword = async (email: any, newPassword: any) => {
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Actualizar la contraseña del usuario en la base de datos
  const updatedUser = await User.findOneAndUpdate(
    { email },
    { password: hashedPassword },
    { new: true }
  );

  return updatedUser;
};

export default changePassword;