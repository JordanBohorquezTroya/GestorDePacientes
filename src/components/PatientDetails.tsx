import{toast} from 'react-toastify'
import { Patient } from "../interface/type";
import { usePatientStore } from "../store/store";
import { PatientItemDetails } from "./PatientItemDetails";
type PatientDetailsProps ={
    patient:Patient
}
export const PatientDetails = ({patient}:PatientDetailsProps) => {
    const deletePatient = usePatientStore((state) => state.deletePatient)
    const editarPatient= usePatientStore((state) => state.editarPatient)

    const handleDelete = () =>{
        deletePatient(patient.id)
        toast.error('Paciente Eliminado', {className: 'small-toast'} )
    }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientItemDetails labels="ID" data={patient.id} />
        <PatientItemDetails labels="Nombre" data={patient.name} />
        <PatientItemDetails labels="Propietario" data={patient.caretaker} />
        <PatientItemDetails labels="Email" data={patient.email} />
        <PatientItemDetails labels="Fecha Alta" data={patient.date.toString()} />
        <PatientItemDetails labels="Síntomas" data={patient.symptoms} />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button 
            onClick={()=>editarPatient(patient.id)}
            type="button"
            className="bg-indigo-600 py-3 px-10 text-white uppercase font-bold rounded-lg hover:bg-indigo-700 cursor-pointer transition-colors">
                Editar
            </button>
            <button 
            onClick={handleDelete}
            type="button"
            className="bg-red-600  py-3 px-10 text-white uppercase font-bold rounded-lg hover:bg-red-700 cursor-pointer transition-colors">
                Eliminar
            </button>
        </div>
    </div>
  )
}
