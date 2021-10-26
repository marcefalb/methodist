import axios from "axios";

class FetchSpecialities {

  async fetchToSpecialities(name) {
    return (
      await axios.get('http://jn.mgok.moscow/public/api/specialities')
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchSpecialities();