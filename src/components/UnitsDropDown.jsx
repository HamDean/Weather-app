import IconDropDown from '../assets/images/icon-dropdown.svg'
import SettingIcon from '../assets/images/icon-units.svg'

const UnitsDropDown = ({handleClick}) => {
  return (
    <div onClick={handleClick} aria-label='click button to view units' role='button' className="unit-btn">
        <img src={SettingIcon} alt="" />
         Units
        <img src={IconDropDown} alt="" />
      </div>
  )
}
export default UnitsDropDown