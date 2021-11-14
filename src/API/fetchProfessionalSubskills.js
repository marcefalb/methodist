import axios from "axios";

class FetchProfessionalSkills {
  async fetchToProfessionalSubskills(skillGroupId) {
    return (
      await axios.get(`https://elmetod-backend.herokuapp.com/api/professional_qualities_groups/${skillGroupId}/professional_qualities`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new  FetchProfessionalSkills();