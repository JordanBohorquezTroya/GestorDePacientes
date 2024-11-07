export interface Patient {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
    pattern: string

}

//Crea un nuevo type o interface pero sin el id con omit
export type DraftPatient = Omit<Patient, 'id'>