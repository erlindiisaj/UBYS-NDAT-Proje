import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Assignments from "./tab-components/Assignments";
import CustomTabPanel from "components/CustomTabPanel";
import GeneralInformation from "./tab-components/GeneralInformation";
import WeekContents from "./tab-components/WeekContents";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserToken } from "store/user/user.selector";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SubjectDetails = () => {
  const param = useParams();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const token = useSelector(selectUserToken);
  const [courseDetails, setCourseDetails] = useState({});

  useEffect(() => {
    axios
      .get(
        "http://localhost:5158/api/University/Faculty/Department/Course/Details",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            CourseDetailsId: param.id,
          },
        }
      )
      .then((res) => {
        setCourseDetails({ ...res.data, code: param.courseCode });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginX: 6,
        marginY: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
        }}
      >
        <Box
          sx={{
            marginRight: 6,
            paddingBottom: 2,
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Tabs
            sx={{
              marginTop: 0,
            }}
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="vertical tabs"
            TabIndicatorProps={{
              style: {
                left: 0,
              },
            }}
          >
            <Tab
              data-variant="settings"
              iconPosition="start"
              label="General Information"
              {...a11yProps(0)}
            />
            <Tab
              data-variant="settings"
              iconPosition="start"
              label="Week Contents"
              {...a11yProps(1)}
            />{" "}
            <Tab
              data-variant="settings"
              iconPosition="start"
              label="Assignments"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <CustomTabPanel value={value} index={0}>
            <GeneralInformation details={courseDetails} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <WeekContents details={courseDetails} />
          </CustomTabPanel>{" "}
          <CustomTabPanel value={value} index={2}>
            <Assignments />
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default SubjectDetails;
