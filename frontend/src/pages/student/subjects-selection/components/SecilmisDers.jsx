import { useDispatch, useSelector } from "react-redux";

import { Box, IconButton, Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import { removeSubjectFromStore } from "store/selected-subjects/selected-subjects.action";
import { selectSelectedSubjects } from "store/selected-subjects/selected-subjects.selector";

const SecilmisDers = ({ data, index }) => {
  const { courseCode, courseName, akts, type } = data;

  const dispatch = useDispatch();

  const selectedSubjects = useSelector(selectSelectedSubjects);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeSubjectFromStore(selectedSubjects, data));
  };

  return (
    <Box
      sx={{
        backgroundColor:
          type === "success"
            ? "success.light"
            : "Mandatory"
            ? "success.light"
            : "failed"
            ? "error.light"
            : "success.light",
        height: "50px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1.75fr 4fr 1fr 1fr",
        gridTemplateRows: "1fr",
        alignItems: "center",
        paddingLeft: 2,
      }}
    >
      {" "}
      <Typography variant="caption">{index + 1}</Typography>
      <Typography color="info.main" variant="caption">
        {courseCode}
      </Typography>
      <Typography variant="caption">{courseName}</Typography>
      <Typography variant="caption">{akts}</Typography>
      <IconButton onClick={handleRemove}>
        <DeleteForeverRoundedIcon fontSize="small" color="error" />
      </IconButton>
    </Box>
  );
};

export default SecilmisDers;
