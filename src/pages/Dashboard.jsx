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

const Dashboard = () => {
  const [scholarType, setScholarType] = useState("regular");
  const [searchBy, setSearchBy] = useState("first");
  const [searchText, setSearchText] = useState("");

  // temporary dummy results
  const students = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15];

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

        {/* Stats Cards */}
        <div className="flex gap-4 flex-wrap">
          <Card2 header="Total Students" value="50" />
          <Card2 header="Total Teachers" value="10" />
        </div>

        {/* Search Section */}
        <div className="border bg-white p-4 rounded-lg flex flex-col gap-4">

          {/* Filters */}
          <div className="flex gap-8 flex-wrap">

            {/* Scholar Type */}
            <FormControl>
              <FormLabel>Scholar Type</FormLabel>
              <RadioGroup
                row
                value={scholarType}
                onChange={(e) => setScholarType(e.target.value)}
              >
                <FormControlLabel value="regular" control={<Radio />} label="Regular" />
                <FormControlLabel value="ex" control={<Radio />} label="Ex" />
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
                <FormControlLabel value="first" control={<Radio />} label="First Name" />
                <FormControlLabel value="last" control={<Radio />} label="Last Name" />
                <FormControlLabel value="father" control={<Radio />} label="Father" />
                <FormControlLabel value="mother" control={<Radio />} label="Mother" />
                <FormControlLabel value="scholar" control={<Radio />} label="Scholar No" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Search Input */}
          <TextField
            size="small"
            fullWidth
            label={`Search by ${searchBy}`}
            placeholder={`Enter ${searchBy}`}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Search Results */}
          <div>
            <h2 className="font-semibold mb-3">Search Results</h2>

            <div className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            ">
              {students.map((_, index) => (
                <StudentCard key={index} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
