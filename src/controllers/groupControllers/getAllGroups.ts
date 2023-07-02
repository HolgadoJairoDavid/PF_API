import User from '../../models/User'

const getAllGroups = async (cohort: string) => {

    const users = await User.find({cohort: cohort});
    const groups: any[] = new Array();
    for (let i = 0; i < users.length; i++) {
      if (!groups.includes(users[i].group)) {
        groups.push(users[i].group);
      }
    }
    return groups;
  
}

export default getAllGroups