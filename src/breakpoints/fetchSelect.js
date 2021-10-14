import axios from "axios";

class FetchSelect {

  static async select(name) {
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