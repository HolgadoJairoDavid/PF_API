import Donation from '../../models/Donation'

const getAllDonations = async () => {

  const donations = await Donation.find()

  return donations
}

export default getAllDonations