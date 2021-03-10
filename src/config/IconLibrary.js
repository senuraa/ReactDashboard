import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faLock,
  faEnvelope,
  faUsers,
  faHome,
  faFileAlt,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export const addIcons = () =>
  library.add(
    faUser,
    faLock,
    faEnvelope,
    faUsers,
    faHome,
    faFileAlt,
    faSignOutAlt,
    faBars
  );
