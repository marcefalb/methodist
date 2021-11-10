import axios from "axios";

class FetchPersonalSkills {
  async fetchToPersonalSkills() {
    return (
      await axios.get('https://elmetod-backend.herokuapp.com/public/api/personal_qualities')
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchPersonalSkills();