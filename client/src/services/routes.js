import DashboardLayout from "../layouts/DashboardLayout";
import Inbox from "../pages/dashboard/Inbox";
import Compose from "../pages/dashboard/Compose";
import Aux from "../layouts/Aux";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const routes = [
    {
        layout: Aux,
        component: Login,
        path: '/login',
        private: false,
        exact: false,
    },
    {
        layout: Aux,
        component: Register,
        path: '/register',
        private: false,
        exact: false,
    },
    {
        layout: DashboardLayout,
        component: Inbox,
        path: '/',
        private: true,
        exact: true,
    },
    {
        layout: DashboardLayout,
        component: Compose,
        path: '/compose',
        private: true,
        exact: false,
    },
]

export default routes