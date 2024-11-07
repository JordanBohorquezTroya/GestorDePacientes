import { create } from "zustand";
import { Patient, DraftPatient } from "../interface/type";

type PatientSate = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
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

export const usePatientStore = create<PatientSate>((set) => ({
    patients : [],
    addPatient:(data)=>{
        const newData = createPatient(data)
        set((state)=>({
            patients:[...state.patients,newData]
        }))
    }
    
})) 