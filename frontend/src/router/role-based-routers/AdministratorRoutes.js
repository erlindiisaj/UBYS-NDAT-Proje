import EditProfile from "pages/edit-profile/EditProfile";
import MainScreenCategories from "pages/MainScreenCategories";
import Lecturers from "pages/administrator/lecturers/Lecturers";

import LecturerSubjects from "pages/administrator/lecturers/detail-pages/LecturerSubjects";
import LecturerSubjectRegistration from "pages/administrator/lecturers/detail-pages/LecturerSubjectRegistration";

const AdministratorRoutes = [
  {
    path: "",
    element: <MainScreenCategories />,
  },

  {
    path: "lecturers",
    element: <Lecturers />,
  },
  {
    path: "edit-profile",
    element: <EditProfile />,
  },
  {
    path: "courses/:id",
    element: <LecturerSubjects />,
  },
  {
    path: "course-assignments/:id",
    element: <LecturerSubjectRegistration />,
  },
];

export default AdministratorRoutes;
