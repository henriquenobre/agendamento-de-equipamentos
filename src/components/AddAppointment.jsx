import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ({onSendAppointment, lastId}) => {
  const clearData = {
    responsible: '',
    equipments:'',
    Date: '',
    Time: '',
    Notes: ''
  }
  let [toggleForm, setToggleForm] = useState(false)
  let [formData, setFormData] = useState(clearData)

  const formDataPublish = () => {
    const appointmentInfo = {
    id: lastId + 1,  
    responsible: formData.responsible,
    equipments: formData.equipments,
    Date: formData.Date + ' ' + formData.Time,
    Notes: formData.Notes
    }
    onSendAppointment(appointmentInfo)
    setFormData(clearData)
    setToggleForm(!toggleForm)
  }

  return (
    <div>
      <button onClick={() => setToggleForm(!toggleForm)} className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm ? 'rounded-t-md' : 'rounded-md' }`}>
        <div><BiCalendarPlus className="inline-block align-text-top" />  Adcionar Agendamento</div>
      </button>
      { toggleForm &&
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="responsible" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Responsável
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="responsible" id="responsible"
            onChange={(event) => {setFormData({...formData, responsible: event.target.value})}} value={formData.responsible}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="equipments" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Equipamento
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="equipments" id="equipments"
            onChange={(event) => {setFormData({...formData, equipments: event.target.value})}} value={formData.equipments}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="Date" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Data
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="date" name="Date" id="Date"
            onChange={(event) => {setFormData({...formData, Date: event.target.value})}} value={formData.Date}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="Time" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Hora
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="time" name="Time" id="Time"
            onChange={(event) => {setFormData({...formData, Time: event.target.value})}} value={formData.Time}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="Notes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Observações
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="Notes" 
            onChange={(event) => {setFormData({...formData, Notes: event.target.value})}} value={formData.Notes}
            name="aptNotes" rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Informações do agendamento"></textarea>
          </div>
        </div>


        <div className="pt-5">
          <div className="flex justify-end">
            <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Adcionar
            </button>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default AddAppointment