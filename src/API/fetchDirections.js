import axios from "axios";

class FetchDirections {
  async fetchToDirections(specialityId) {
    return (
      await axios.get(`http://elmetod-backend.herokuapp.com/api/specialities/${specialityId}/directions`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchDirections();