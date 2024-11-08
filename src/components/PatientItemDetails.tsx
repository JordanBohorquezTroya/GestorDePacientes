type PatientItemDetailsProps = {
 labels:string
 data:string
};

export const PatientItemDetails = ({ labels, data }: PatientItemDetailsProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {"   "}
      {labels }
      <span className="font-normal normal-case"> {data}</span>
    </p>
  );
};
