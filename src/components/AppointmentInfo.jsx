import { useState } from "react"
import { BiTrash, BiCaretDown } from "react-icons/bi"

const DropDown = ({ toggle, setUse, setToggleUse }) => {

  const handleUse = () =>{
    setUse('Em uso')
    setToggleUse(false)
  }
  const handleReturned = () =>{
    setUse('Devolvido')
    setToggleUse(false)
  }
  
  if (!toggle) {
    return null
  }
  return (
    <div className="origin-top-right w-15
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div
        onClick={handleUse}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Em uso</div>
        <div
        onClick={handleReturned}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Devolvido</div>
      </div>
    </div>
  )
}

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  const [toggleUse, setToggleUse] = useState(false)
  const [use, setUse] = useState('Disponível');
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={() => onDeleteAppointment(appointment.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{appointment.equipments}</span>
          <span className="flex-grow text-right mr-5">{appointment.Date}</span>
        </div>
        <div><b className="font-bold text-blue-500">Responsável:</b> {appointment.responsible}</div>
        <div className="leading-tight">{appointment.Notes}</div>
      </div>
      <div>
        <button type="button" onClick={() => { setToggleUse(!toggleUse) }}
          className="justify-center w-25 px-4 py-2 bg-blue-400 border-10 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
          {use} <BiCaretDown className="ml-2" />
        </button>
        <DropDown toggle={toggleUse} setUse={setUse} setToggleUse={setToggleUse} />
      </div>
    </li>
  )
}

export default AppointmentInfo