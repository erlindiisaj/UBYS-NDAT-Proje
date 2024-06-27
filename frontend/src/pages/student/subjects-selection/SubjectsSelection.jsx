import { useEffect, useState } from "react";

import axios from "axios";

import { Box } from "@mui/material";

import InfoHeader from "./components/InfoHeader";
import SelectCourses from "./components/SelectCourses";
import HighlightedCourses from "./components/HighlightedCourses";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "store/user/user.selector";
import { selectProgram } from "store/program/program.selector";
import { setSelectedSubjects } from "store/selected-subjects/selected-subjects.action";

const SubjectsSelection = () => {
  const token = useSelector(selectUserToken);
  const department = useSelector(selectProgram);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [details, setDetails] = useState();

  useEffect(() => {
    axios
      .get(
        "http://localhost:5158/api/University/Faculty/Department/Semester/Student/Courses/Selected",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { DepartmentName: department },
        }
      )
      .then((res) => {
        dispatch(setSelectedSubjects(res.data.selectedCourses));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "http://localhost:5158/api/University/Faculty/Department/Semester/Student/Courses/Available",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { DepName: department },
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "http://localhost:5158/api/University/Faculty/Departments/Student/Details",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <InfoHeader details={details} />
      <Box
        display="flex"
        sx={{ justifyContent: "center", alignItems: "flex-start" }}
      >
        <HighlightedCourses />
        <SelectCourses data={data} />
      </Box>
    </Box>
  );
};

export default SubjectsSelection;
