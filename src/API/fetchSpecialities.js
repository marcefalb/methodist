import axios from "axios";

class FetchSpecialities {
  async fetchToSpecialities() {
    return (
      await axios.get('https://elmetod-backend.herokuapp.com/api/specialities')
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchSpecialities();