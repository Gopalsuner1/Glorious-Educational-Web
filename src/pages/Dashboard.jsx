import {
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import Card2 from "../components/UI/Card2";
import StudentCard from "../components/UI/StudentCard";
import { searchStudent } from "../api/studentapi";

const Dashboard = () => {
  const [scholarType, setScholarType] = useState("REGULAR");
  const [searchBy, setSearchBy] = useState("101");
  const [searchText, setSearchText] = useState("");
  const [students, setStudents] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim().length < 2) return; // avoid useless calls

    const data = {
      scholar_status: scholarType,
      search_id: searchBy,
      session_id: "2025",
      value: value,
    };

    try {
      const res = await searchStudent(data);
      setStudents(res.data); // adjust if API response differs
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-[95%] mx-auto p-4 flex flex-col gap-6">

        {/* Header */}
        <div>
          <h1 className="font-black text-3xl">
            Glorious Educational Academy
          </h1>
          <p className="text-gray-600">School • Indore</p>
        </div>

        {/* Stats */}
        <div className="flex gap-4 flex-wrap">
          <Card2 header="Total Students" value="50" />
          <Card2 header="Total Teachers" value="10" />
        </div>

        {/* Search Section */}
        <div className="border bg-white p-4 rounded-lg flex flex-col gap-4">

          <div className="flex gap-8 flex-wrap">

            {/* Scholar Type */}
            <FormControl>
              <FormLabel>Scholar Type</FormLabel>
              <RadioGroup
                row
                value={scholarType}
                onChange={(e) => setScholarType(e.target.value)}
              >
                <FormControlLabel value="REGULAR" control={<Radio />} label="Regular" />
                <FormControlLabel value="EX" control={<Radio />} label="Ex" />
              </RadioGroup>
            </FormControl>

            {/* Search By */}
            <FormControl>
              <FormLabel>Search By</FormLabel>
              <RadioGroup
                row
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <FormControlLabel value="101" control={<Radio />} label="First Name" />
                <FormControlLabel value="102" control={<Radio />} label="Last Name" />
                <FormControlLabel value="103" control={<Radio />} label="Father" />
                <FormControlLabel value="104" control={<Radio />} label="Mother" />
                <FormControlLabel value="105" control={<Radio />} label="Scholar No" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Search Input */}
          <TextField
            size="small"
            fullWidth
            label="Search"
            placeholder="Enter keyword"
            value={searchText}
            onChange={handleSearch}
          />

          {/* Results */}
          <div>
            <h2 className="font-semibold mb-3">Search Results</h2>

            <div className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            ">
              {students.length === 0 ? (
                <p className="text-gray-500">No students found</p>
              ) : (
                students.map((student, index) => (
                  <StudentCard key={student.id || index} data={student} />
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
