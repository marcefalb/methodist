import axios from "axios";

class FetchProfessionalSkills {
  async fetchToProfessionalSkills() {
    return (
      await axios.get('')
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new  FetchProfessionalSkills();