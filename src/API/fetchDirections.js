import axios from "axios";

class FetchDirections {
  async fetchToDirections(specialityId) {
    return (
      await axios.get(`http://jn.mgok.moscow/api/specialities/${specialityId}/directions`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchDirections();