import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";

import ProfileTab from "./ProfileTab";

import { selectUserData } from "store/user/user.selector";
import { setUserData, setUserToken } from "store/user/user.action";

import Transitions from "components/Transitions";

import avatar1 from "assets/avatar1.png";
import {
  setFetchedSubjects,
  setSelectedSubjects,
} from "store/selected-subjects/selected-subjects.action";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const anchorRef = useRef(null);
  // eslint-disable-next-line
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectUserData);
  const { firstName, lastName, role } = currentUser;

  //LogOut Button Function
  const handleLogout = () => {
    try {
      dispatch(setUserData(null));
      dispatch(setUserToken(null));
      dispatch(setSelectedSubjects(null));
      dispatch(setFetchedSubjects(null));
      localStorage.removeItem("userData"); //Storing User Data in Local Storage
      localStorage.removeItem("token"); //Storing User Data in Local Storage

      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = "grey.300";

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          backgroundColor: open ? iconBackColorOpen : "transparent",
          borderRadius: 1,
          "&:hover": { backgroundColor: "action.hover" },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? "profile-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Typography color="text.primary" variant="subtitle1">
            {firstName + " " + lastName}
          </Typography>
          <Avatar
            alt="profile user"
            src={avatar1}
            sx={{ width: 40, height: 40 }}
          />
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper
                sx={{
                  boxShadow: theme.customShadows.z1,
                  width: 290,
                  minWidth: 240,
                  maxWidth: 290,
                  [theme.breakpoints.down("md")]: {
                    maxWidth: 250,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Paper elevation={0} border={"false"} content={"false"}>
                    <CardContent sx={{ px: 2.5, pt: 3 }}>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Stack
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                          >
                            <Avatar
                              alt="profile user"
                              src={avatar1}
                              sx={{ width: 40, height: 40 }}
                            />
                            <Stack>
                              <Typography variant="subtitle1">
                                {firstName + " " + lastName}
                              </Typography>
                              <Typography
                                color="text.secondary"
                                variant="body2"
                              >
                                {role}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                    {open && (
                      <>
                        <Box
                          sx={{ borderBottom: 1, borderColor: "divider" }}
                        ></Box>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ProfileTab handleLogout={handleLogout} />
                        </TabPanel>
                      </>
                    )}
                  </Paper>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
