import axios from "axios";

class FetchDirections {
  async fetchToDirections(specialityId) {
    return (
      await axios.get(`https://elmetod-backend.herokuapp.com/public/api/specialities/${specialityId}/directions`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchDirections();