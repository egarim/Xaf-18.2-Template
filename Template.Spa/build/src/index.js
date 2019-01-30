import * as React from "react";
import * as ReactDOM from "react-dom";

import "core-js/fn/array/find-index";
import "core-js/fn/array/find"

import { App } from "app-player-react";
import { patchAppConfig } from "xaf-app-module";

import modules from "./modules";
import registerServiceWorker from "./registerServiceWorker";

import * as urlJson from './url.json';

// Uncomment and grab value for update app-configs.json
//import * as mainDemo from "./configs/app";
//var mainDemoJson = JSON.stringify(mainDemo.mainDemoConfigs);

function appConfigSource(device) {
    let host = window.location.origin;
    let applicationUrl = urlJson.applicationUrl

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        host = applicationUrl.substring(0, applicationUrl.length - 1);
    }

    let appConfigUrl = host + "/metadata/appconfig?url=" + host + "&device=" + device;

    return fetch(appConfigUrl).then((response) => {
        return response.json();
    }).then((appConfig) => {
        let result = undefined;
        let errorMessage = appConfig.Message;
        if(errorMessage !== undefined) {
            alert(errorMessage);
        } else {
            result = patchAppConfig(device, appConfig[device], host + '/');
        }
        return result;
    });
}

ReactDOM.render(
    <App appConfigSource={appConfigSource} modules={modules} onLoaded={window.completeProgress} />,
    document.getElementById("root")
);
registerServiceWorker();
