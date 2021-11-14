import axios from "axios";

class FetchProfessionalSkills {
  async fetchToProfessionalSkills(directionId) {
    return (
      await axios.get(`https://elmetod-backend.herokuapp.com/api/directions/${directionId}/professional_qualities_groups`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new  FetchProfessionalSkills();