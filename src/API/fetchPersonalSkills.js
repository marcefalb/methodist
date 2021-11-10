import axios from "axios";

class FetchPersonalSkills {
  async fetchToPersonalSkills() {
    return (
      await axios.get('http://elmetod-backend.herokuapp.com/api/personal_qualities')
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchPersonalSkills();