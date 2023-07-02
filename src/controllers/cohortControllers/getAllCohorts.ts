import User from "../../models/User";

const getAllCohorts = async () => {
  const users = await User.find();
  const cohorts: any[] = new Array();
  for (let i = 0; i < users.length; i++) {
    if (!cohorts.includes(users[i].cohort)) {
      cohorts.push(users[i].cohort);
    }
  }
  return cohorts;
};

export default getAllCohorts;
