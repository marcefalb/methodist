import axios from "axios";

class FetchProfessionalSkills {
  async fetchToProfessionalSubskills(skillGroupId) {
    return (
      await axios.get(`http://jn.mgok.moscow/public/api/professional_qualities_groups/${skillGroupId}/professional_qualities`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new  FetchProfessionalSkills();