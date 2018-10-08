"use strict";
/**
 * Popup.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * React Native implementation of the cross-platform Popup abstraction.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RX = require("../common/Interfaces");
var FrontLayerViewManager_1 = require("./FrontLayerViewManager");
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.show = function (options, popupId, delay) {
        if (!popupId) {
            throw new Error("popupId must be a non-empty string. Actual: " + popupId);
        }
        if (!options || !options.getAnchor || !options.getAnchor()) {
            throw new Error("options must have a valid getAnchor().");
        }
        return FrontLayerViewManager_1.default.showPopup(options, popupId, delay);
    };
    Popup.prototype.autoDismiss = function (popupId, delay) {
        if (!popupId) {
            throw new Error("popupId must be a non-empty string. Actual: " + popupId);
        }
        setTimeout(function () {
            FrontLayerViewManager_1.default.dismissPopup(popupId);
        }, delay || 0);
    };
    Popup.prototype.dismiss = function (popupId) {
        if (!popupId) {
            throw new Error("popupId must be a non-empty string. Actual: " + popupId);
        }
        FrontLayerViewManager_1.default.dismissPopup(popupId);
    };
    Popup.prototype.dismissAll = function () {
        FrontLayerViewManager_1.default.dismissAllPopups();
    };
    Popup.prototype.isDisplayed = function (popupId) {
        return FrontLayerViewManager_1.default.isPopupDisplayed(popupId);
    };
    return Popup;
}(RX.Popup));
exports.Popup = Popup;
exports.default = new Popup();
