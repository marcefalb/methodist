import { observer } from 'mobx-react-lite';
import {React, useState} from 'react';

import {ReactComponent as IcRefresh} from 'assets/icons/ic_restart.svg'
import {ReactComponent as IcAlert} from 'assets/icons/ic_alert.svg'
import LinkBtn from "components/Form/LinkBtn/LinkBtn"
import Modal from 'components/Form/Modal/Modal';

import store from 'store/store';

import './RUP.css';

const RUP = observer(() => {
  const pageStates = store.pageStates
  const [isOpen, setIsOpen] = useState(false)

  const onHelpBtnClick = () => {
    document.documentElement.style.overflow = "hidden";
    setIsOpen(true)
  }

  const modalAccept = () => {
    document.documentElement.style.overflow = "auto";
    setIsOpen(false);
  }

  const frezer = [
    [0.578125,     0.3984375, 0.234375,  0.1171875, 0.28125,  0,        0.0625],
    [0.421875,     0.421875,  0,         0,         0,        0.421875, 0],
    [0.046875,     0,         0,         0,         0,        0, 0],
    [0,            0.8203125, 0.234375,  0.1171875, 0.28125,  0.421875, 0.0625],
  ]
  const tokar = [
    [0.967032967032967,  0.4615384615384615, 0.6208791208791209, 0.1648351648351648, 0.1978021978021978, 0.0989010989010989, 0.0494505494505495],
    [0.0989010989010989, 0.0989010989010989, 0,                  0,                  0,                  0.0989010989010989, 0],
    [0.032967032967033,  0,                  0,                  0,                  0,                  0,                  0],
    [0,                  0.4615384615384615, 0.6208791208791209, 0.1648351648351648, 0.1978021978021978, 0.0989010989010989, 0.0494505494505495],
  ]
  const getValueByPercent = percent => Math.ceil((hours * percent))

  const percents = store.selectedSpecialityValue === 'Токарь' ? tokar : frezer
  const secondCol = store.selectedSpecialityValue === 'Токарь' ? 'Раздел 1. Изготовление изделий на токарных станках по стадиям технологического процесса в соответствии с требованиями охраны труда и экологической безопасности' : 'Раздел 1. Выполнение работ на зуборезных станках'
  const firstCol = store.selectedSpecialityValue === 'Токарь' ? 'ПК.1.1 – ПК.1.4, ОК1-ОК7, ОК9, ОК10' : 'ПК 1.1 – ПК 1.4, ОК1.1-1.5, ОК1.7-1.11'
  const hours = store.currentSliderValue

  if (!pageStates.isFormSended) return null
  return (
    <section className="rup">
      <div className="rup__header">
        <LinkBtn text="Начать сначала" icon={<IcRefresh />} place="left" onClick={() => window.location.reload()} />
        <LinkBtn text="Помощь" icon={<IcAlert />} place="left" onClick={() => onHelpBtnClick()} />
        <Modal header="Возникли вопросы?" isOpen={isOpen} onClick={() => modalAccept()} label="Свяжитесь с нами по почте: mgok@edu.mos.ru" isHelp={true} />
      </div>
        <h1>Предварительный РУП</h1>
      <div className='table__wrapper'>
        <table className='table'>
          <thead className='table__header'>
            <tr className='table__row'>
              <th className='table__cell cell__index' rowSpan='5'>Коды<br/> профессиональных<br/> общих<br/> компетенций</th>
              <th className='table__cell cell__name' rowSpan='5'>Наименование разделов<br/> профессианального<br/> модуля</th>
              <th className='table__cell bold' colSpan='6'>Объём профессианального модуля, ак. час.</th>
            </tr>
            <tr className='table__row'>
              <th className='table__cell cell__total-load' rowSpan='4'>Суммарный<br/> объём<br/> нагрузки</th>
              <th className='table__cell cell__practical-training' rowSpan='4'>В т.ч.<br/> в форме<br/> практ.<br/> подготовки</th>
              <th className='table__cell cell__work-with-teachers bold' colSpan='4'>Работа обучающихся во взаимодействии с преподавателям</th>
              <th className='table__cell cell__self-work' rowSpan='4'>Самостоятельная<br/> работа</th>
            </tr>
            <tr className='table__row'>
              <th className='table__cell cell__education-modules bold' colSpan='2'>Обучение по МДК</th>
              <th className='table__cell cell__practices' colSpan='2' rowSpan='2'>Практики</th>
            </tr>
            <tr className='table__row'>
              <th className='table__cell cell__total-lessons' rowSpan='2'>Всего</th>
              <th className='table__cell cell__laboratory-and-practice bold' rowSpan='2'>В том числе<br/> лабараторных и<br/> практических занятий</th>
            </tr>
            <tr className='table__row'>
              <th className='table__cell cell__education'>Учебная</th>
              <th className='table__cell cell__industry'>Производственая</th>
            </tr>
          </thead>
          <tbody className='table__body'>
            <tr className='table__row'>
              <td className='table__cell'>1</td>
              <td className='table__cell'>2</td>
              <td className='table__cell'>3</td>
              <td className='table__cell'>4</td>
              <td className='table__cell'>5</td>
              <td className='table__cell'>6</td>
              <td className='table__cell'>7</td>
              <td className='table__cell'>8</td>
              <td className='table__cell'>9</td>
            </tr>
            <tr className='table__row'>
              <td className='table__cell'>{firstCol}</td>
              <td className='table__cell'>{secondCol}</td>
              <td className='table__cell'>{getValueByPercent(percents[0][0])}</td>
              <td className='table__cell'>{getValueByPercent(percents[0][1])}</td>
              <td className='table__cell'>{getValueByPercent(percents[0][2])}</td>
              <td className='table__cell'>{getValueByPercent(percents[0][3])}</td>
              <td className='table__cell'>{getValueByPercent(percents[0][4])}</td>
              <td className='table__cell'></td>
              <td className='table__cell'>{getValueByPercent(percents[0][6])}</td>
            </tr>
            <tr className='table__row'>
              <td className='table__cell'></td>
              <td className='table__cell'>Производственая практика (по грифилю специальности, часов)</td>
              <td className='table__cell'>{getValueByPercent(percents[1][0])}</td>
              <td className='table__cell'>{getValueByPercent(percents[1][1])}</td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
              <td className='table__cell'>{getValueByPercent(percents[1][5])}</td>
              <td className='table__cell'></td>
            </tr>
            <tr className='table__row'>
              <td className='table__cell'></td>
              <td className='table__cell'>Промежуточная аттестация<br/>Экзамен по ПМ</td>
              <td className='table__cell'>{getValueByPercent(percents[2][0])}</td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
              <td className='table__cell'></td>
            </tr>
            <tr className='table__row'>
              <td className='table__cell'></td>
              <td className='table__cell'>Всего</td>
              <td className='table__cell'>{hours}</td>
              <td className='table__cell'>{getValueByPercent(percents[3][1])}</td>
              <td className='table__cell'>{getValueByPercent(percents[3][2])}</td>
              <td className='table__cell'>{getValueByPercent(percents[3][3])}</td>
              <td className='table__cell'>{getValueByPercent(percents[3][4])}</td>
              <td className='table__cell'>{getValueByPercent(percents[3][5])}</td>
              <td className='table__cell'>{getValueByPercent(percents[3][6])}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
})

export default RUP;