import { usePatientStore } from "../store/store";
import { PatientDetails } from "./PatientDetails";
export const List = () => {
  const patients = usePatientStore((state) => state.patients);
  
  
  
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length? (
        <>
        <h2 className="font-black text-3xl text-center">Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {' '}
          <span className="font-bold text-indigo-600">Pacientes y Citas</span>
        </p>
        {patients.map((patient) => (
          <PatientDetails key={patient.id} patient={patient} />
        ))}
        </>
      ): (
        <>
        <h2 className="font-black text-2xl text-center">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comiemza agregando un paciente{' '}
          <span className="font-bold text-indigo-600">y aparecerna en este lugar</span>
        </p>
        </>
      )}
    </div>
  ) 

};
