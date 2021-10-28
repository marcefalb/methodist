import React from "react";
import { observer } from "mobx-react-lite";

import PersonalSkill from "../../components/Form/PersonalSkill/PersonalSkill";
import Select from "../../components/Form/Select/Select";
import skills from "../../store/skills";
import { ReactComponent as IcSearch } from "../../assets/icons/ic_search.svg";
import "./PersonalSkillsList.css";

const PersonalSkillsList = observer(() => {
  return (
    <div className="personal-skills">
      <span className="personal-skills__title title">Личностные качества</span>
      <div className="personal-skills__input">
        <input
          value={skills.inputValue}
          onKeyDown={(event) => {
            skills.addSkill(skills.inputValue, event);
          }}
          onChange={(event) => {
            skills.setValue(event.target.value);
          }}
          type="text"
          placeholder="Навык, например “Работа в команде”"
        />
        {/* <Select
          name={'skill'}
          title={''}
          options={store.specialitiesList}
          onChange={(event) => {
            store.setIsDisabled()
            store.fetchToDirections(event.value)
          }}
        /> */}
        <div className="personal-skills__search">
          <IcSearch />
        </div>
      </div>
      <span className="personal-skills__title title">Рекомендуемые навыки</span>
      <ul className="personal-skills__recommended-list">
        {skills.recommendedPersonalSkills.map((el) => {
          return <PersonalSkill skill={el} skillType="recommended" />;
        })}
      </ul>
      {skills.selectedPersonalSkills.length !== 0 && (
        <ul className="personal-skills__apply-list">
          {skills.selectedPersonalSkills.map((el) => {
            return <PersonalSkill skill={el} skillType="selected" />;
          })}
        </ul>
      )}
    </div>
  );
});

export default PersonalSkillsList;
