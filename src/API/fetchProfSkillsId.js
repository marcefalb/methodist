import axios from "axios";

class FetchProfSkillsId {
  async fetchProfSkillsId(idsArray) {
    return (
      await axios.post(
        `https://elmetod-backend.herokuapp.com/api/professional_qualities/calculate_number_of_hours`,
        {
          professional_qualities_ids: idsArray
        },
        )
      
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )
  }
}

export default new FetchProfSkillsId();