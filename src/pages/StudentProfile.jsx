import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StudentProfile = () => {

    const location = useLocation();
  const { state } = location;
//   const { scholarNo } = useParams();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     getStudentByScholar(scholarNo).then(res => setStudent(res.data));
//   }, [scholarNo]);

//   if (!student) return <p>Loading...</p>;

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold">
        {student.firstName} {student.lastName}
      </h1>

       */}
       
    </div>
  );
};

export default StudentProfile;
