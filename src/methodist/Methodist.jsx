import React from "react";
import { observer } from "mobx-react-lite";

import StartPage from "./StartPage/StartPage";
import ContactsForm from "./ContactsForm/ContactsForm";
import RUP from "./RUP/RUP";


const Methodist = observer(() => {
  return (
    <main className="main">
      <div className="wrapper main__wrapper">
        <StartPage />
        <ContactsForm />
        <RUP />
      </div>
    </main>
    // <main className="main">
    //   {!store.isSend && (<div className="wrapper main__wrapper">
    //     <div className="main__header">
    //       {store.isNext && (<button className="main__header-btn" onClick={() => store.setIsNext()}>
    //         <IcArrow />
    //         <span>Вернуться</span>
    //       </button>
    //       )}
    //       <h1>Запрос на специалиста</h1>
    //     </div>
    //     {!store.isNext && (
    //       <div className="main__content">
    //         <Select
    //           name={"speciality"}
    //           title={"Профессия"}
    //           options={store.specialitiesList}
    //           onChange={(event) => specialityOnChange(event)}
    //         />
    //         <Select
    //           name={"direction"}
    //           title={"Компетенция "}
    //           options={store.directionsList}
    //           onChange={(event) => directionOnChange(event)}
    //           isDisabled={store.isDisabled}
    //           selectValue={store.selectedDirectionValue}
    //         />
    //         {(!store.isContinue && (
    //           <BtnNext
    //             onClick={() => store.setIsContinue()}
    //             isShow={store.isShowBtn}
    //           />
    //         )) || (
    //           <div className="skills">
    //             <PersonalSkillsList />
    //             <ProfessionalSkillsList />
    //             <FormButtons onClick={() => {
    //               store.setIsFormed()
    //               setTimeout((() => {
    //                 window.scroll({
    //                   top: 1200,
    //                   behavior: "smooth"
    //                   })
    //               }), 100)
    //             }}/>
    //           </div>
    //         )}
    //         {(store.isFormed && (
    //           <EducationPlan />
    //         ))}
    //       </div>
    //     ) || (
    //       <div className="main__content">
    //         <ContactsForm />
    //       </div>
    //     )}
    //   </div>
    //   ) || (
    //     <div className="main__table-wrapper">
    //       <div className="main__table-tools">
    //         <a className="main__table-btn" href="/">
    //           <IcRestart />
    //           <span>Вернуться</span>
    //         </a>
    //         <button className="main__table-btn" onClick={() => {
    //           document.documentElement.style.overflow = "hidden";
    //           setIsOpen(true)
    //         }}>
    //           <IcAlert />
    //           <span>Помощь</span>
    //         </button>
    //         {isOpen && (
    //           <Modal
    //             header="Возникли вопросы?"
    //             label="Свяжитесь с нами по почте: mgok@edu.mos.ru"
    //             onClick={() => onClick()}
    //             isHelp={true}
    //           />
    //         )}
    //       </div>
    //       <h2>Предварительный РУП</h2>
    //       <RUP />
    //     </div>
    //   )}
    // </main>
  );
});

export default Methodist;
