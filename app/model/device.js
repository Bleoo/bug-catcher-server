'use strict';

function Device(manufacturer, model, sdkVersion, appVersion, appBuild) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.sdkVersion = sdkVersion;
    this.appVersion = appVersion;
    this.appBuild = appBuild;
}