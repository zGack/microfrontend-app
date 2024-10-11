import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// if we are in dev mode and isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_dashboard-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// We are runnig throuhg container
// and we should export the mount function
export { mount };
