import { create } from "zustand";
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { Patient, DraftPatient } from "../interface/type";

type PatientSate = {
    patients: Patient[]
    patientsId: (Patient['id'])
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    editarPatient: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}
const createPatient = (patient: DraftPatient): Patient => {
    const { name, caretaker, email, date, symptoms, pattern } = patient
    return {
        id: Math.random().toString(36).substring(7),
        name,
        caretaker,
        email,
        date,
        symptoms,
        pattern
    }
}

export const usePatientStore = create<PatientSate>()(
    devtools(
        persist((set) => ({
        patients : [],
        patientsId: '',
        addPatient:(data)=>{
            const newData = createPatient(data)
            set((state)=>({
                patients:[...state.patients,newData]
            }))
        },
        deletePatient:(id)=>{
            set((state)=>({
                patients: state.patients.filter((persona)=> persona.id !== id)
            }))
        },
        editarPatient:(id)=>{
            set(()=> ({
                patientsId: id
            }))
        },
        updatePatient:(data)=>{
            set((state) => ({
                patients: state.patients.map(patient => 
                    patient.id === state.patientsId
                        ? { ...patient, ...data }  // mantiene las propiedades previas y actualiza las nuevas
                        : patient
                ),
                patientsId: ''  // Limpia `patientsId` después de la actualización si no se necesita
            }))
        }
    }),{
        //ES PERSISTENTE

        name: 'Patient-store',
        //ASI ES SI QUIERES GUARDAR EN LOCAL PERO NO ES NECESRIO DECLARARLO PORQUE VIENE POR DEFECTO
        //storage: createJSONStorage(()=> localStorage)

        //ESTO SE PONE SI SE QUIERE GUARDAR EN SESSIONSTORAGE
        //storage: createJSONStorage(()=> sessionStorage)
    })
))