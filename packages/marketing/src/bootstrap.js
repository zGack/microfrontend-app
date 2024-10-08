import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate({ pathname: nexPathname }) {
            const { pathName } = history.location;

            if (pathName !== nexPathname) {
                history.push(nexPathname);
            }
        },
    };
};

// if we are in dev mode and isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are runnig throuhg container
// and we should export the mount function
export { mount };
