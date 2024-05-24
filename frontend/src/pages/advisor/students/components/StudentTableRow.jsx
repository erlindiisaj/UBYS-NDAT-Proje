import { Box, Button, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import avatar1 from "assets/avatar1.png";
import { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const StudentTableRow = ({ data }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    id,
    name,
    stateDetail,
    number,
    program,
    status,
    sinif,
    dept,
    state,
    gano,
  } = data;

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
        borderLeft: `1px solid ${theme.palette.grey[500]}`,
        borderBottom: `1px solid ${theme.palette.grey[500]}`,
        borderRight: `1px solid ${theme.palette.grey[500]}`,
        width: "100%",
        display: "grid",
        height: "50px",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns:
          "0.8fr 1.5fr 2.5fr 3fr 1.2fr 1fr 1fr 1fr 1.2fr 1fr 1fr",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Avatar sx={{ width: 24, height: 24 }} src={avatar1} />
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{number}</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{name}</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{program}</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography textAlign="center" variant="caption">
          {status}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{sinif}. Sınıf</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{dept} TL</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{state}</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography textAlign="center" variant="caption">
          {stateDetail}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Typography variant="caption">{gano}</Typography>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          onClick={handleClick}
          sx={{ height: "30px" }}
          variant="outlined"
          color="primary"
        >
          Detay
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              navigate(`/home/transcript/${number}`);
              handleClose();
            }}
            disableRipple
          >
            <HistoryEduRoundedIcon />
            Transkriptini Görüntüle
          </MenuItem>

          <MenuItem
            onClick={() => {
              navigate(`/home/students-information/${number}`);
              handleClose();
            }}
            disableRipple
          >
            <PersonOutlineTwoToneIcon />
            Öğrenci Bilgileri
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />

          <MenuItem
            onClick={() => {
              navigate(`/home/subjects-registration/${number}`);
              handleClose();
            }}
            disableRipple
          >
            <InsertDriveFileRoundedIcon />
            Ders Kayıtlanması
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate(`/home/registration-control/${number}`);
              handleClose();
            }}
            disableRipple
          >
            <AssignmentRoundedIcon />
            Ders Kayıtlanma Kontrol Sayfası
          </MenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
};

export default StudentTableRow;
