import axios from "axios";

class FetchProfSkillsId {
  async fetchProfSkillsId(idsArray) {
    return (
      await axios.post(
        `http://jn.mgok.moscow/public/api/professional_qualities/calculate_number_of_hours`,
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