import Signup from "./src/pages/Auth/Signup/Signup";
import Community from "./src/pages/Community/Community";
import Map from "./src/pages/Community/Map";
import Events from "./src/pages/Events/Events";
import Landing from "./src/pages/Landing/Landing";
import Leaders from "./src/pages/Leaders/Leaders";
import Notifications from "./src/pages/Notifications/Notifications";
import UpdateProfile from "./src/pages/User/UpdateProfile";

export const routeConfig = [
    {
        path: "/",
        element: Landing,
        name: "Home",
        showOnNav: true,
    },
    {
        path: "/community",
        element: Community,
        name: "Community",
        showOnNav: true,
    },
    // {
    //     path: "/community-leaders",
    //     element: Leaders,
    //     name: "Community Leaders",
    //     showOnNav: true,
    // },
    {
        path: '/upcoming-events',
        element: Events,
        name: "Upcoming Events",
        showOnNav: true,
    },
    {
        path: "/auth/login",
        element: Signup,
        name: "Login",
        showOnNav: false,
        protected: true,
    },
    {
        path: "/auth/signup",
        element: Signup,
        name: "Sign Up",
        showOnNav: false,
        protected: true,
    },
    {
        path: "/update-profile",
        element: UpdateProfile,
        name: "Update Profile",
        showOnNav: false,
        protected: true,
        onlyWhenUser: true,
    },
    {
        path: "/notifications",
        element: Notifications,
        name: "Notifications",
        showOnNav: false,
        protected: true,
        onlyWhenUser: true,
    },
    {
        path: "/map",
        element: Map,
        name: "Map",
        showOnNav: false,
        protected: true,
        onlyWhenUser: true,
    }
]