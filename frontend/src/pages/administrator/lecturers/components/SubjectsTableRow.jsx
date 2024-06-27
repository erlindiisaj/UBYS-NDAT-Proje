import { useTheme } from "@mui/material/styles";

import { useEffect, useState } from "react";
import { Button, TableCell, TableRow } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addSubjectToStore } from "store/selected-subjects/selected-subjects.action";
import { selectSelectedSubjects } from "store/selected-subjects/selected-subjects.selector";

const SubjectsTableRow = ({ subject, toControl }) => {
  const {
    courseCode,
    courseName,
    semester,
    departmentName,
    facultyName,
    kredi,
    akts,
  } = subject;

  const theme = useTheme();

  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const selectedSubjects = useSelector(selectSelectedSubjects);

  useEffect(() => {
    let found = false;
    selectedSubjects.forEach((item) => {
      if (item.courseCode === courseCode) found = true;
    });
    setIsSelected(found);
    // eslint-disable-next-line
  }, [toControl, selectedSubjects]);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addSubjectToStore(selectedSubjects, subject));
  };

  return (
    <TableRow
      sx={{
        backgroundColor: isSelected ? theme.palette.grey[200] : null,
      }}
    >
      <TableCell size="small">{courseCode}</TableCell>
      <TableCell size="small">{courseName}</TableCell>
      <TableCell size="small">{departmentName + " / " + facultyName}</TableCell>
      <TableCell size="small">{semester}</TableCell>
      <TableCell size="small">{kredi}</TableCell>
      <TableCell size="small">{akts}</TableCell>
      <TableCell size="small">
        <Button
          onClick={handleAdd}
          sx={{
            color: theme.palette.common.white,
          }}
          size="small"
          color="success"
          variant="contained"
          disabled={isSelected}
        >
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SubjectsTableRow;
