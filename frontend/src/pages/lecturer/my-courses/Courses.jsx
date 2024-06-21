import {
  Box,
  Table,
  TableRow,
  Typography,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme, styled, alpha } from "@mui/material/styles";
import ViewIcon from "assets/view-icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseTableRow from "./components/CourseTableRow";

const Courses = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginY: 5,
      }}
    >
      <Typography variant="subtitle1">My Courses</Typography>
      <Box
        sx={{
          width: "80%",
          marginTop: 3,
        }}
      >
        <TableContainer
          sx={{
            borderRadius: "10px",
            backgroundColor: theme.palette.common.white,
            boxShadow: theme.customShadows.z8,
          }}
        >
          <Table>
            <TableHead
              sx={{
                backgroundColor: theme.palette.grey[300],
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    width: "20%",
                  }}
                >
                  Faculty/Department
                </TableCell>
                <TableCell>Course Code</TableCell>
                <TableCell
                  sx={{
                    width: "30%",
                  }}
                >
                  Course Name
                </TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Semester</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <CourseTableRow
                course={{
                  faculty: "BM",
                  courseCode: "BLM-2001",
                  courseName: "Algorithm 2",
                  year: "2024",
                  semester: "Spring",
                }}
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default Courses;
