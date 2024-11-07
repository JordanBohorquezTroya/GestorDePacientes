import { usePatientStore } from "../store/store";
export const List = () => {
  const patients = usePatientStore((state) => state.patients);
  console.log(patients);
  return <div>List</div>;
};
