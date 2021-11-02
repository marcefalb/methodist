import axios from "axios";

class FetchPersonalSkills {
  async fetchToPersonalSkills() {
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

export default new FetchPersonalSkills();