"use strict";
/**
 * Image.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform Image abstraction.
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var RN = require("react-native");
var SyncTasks = require("synctasks");
var Image_1 = require("../common/Image");
var Styles_1 = require("./Styles");
var _styles = {
    defaultImage: Styles_1.default.createImageStyle({
        flex: 0,
        overflow: 'hidden',
        width: undefined,
        height: undefined
    })
};
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mountedComponent = null;
        _this._onMount = function (component) {
            _this._mountedComponent = component;
        };
        _this._onLoad = function (e) {
            if (!_this._mountedComponent) {
                return;
            }
            _this._nativeImageWidth = e.nativeEvent.source.width;
            _this._nativeImageHeight = e.nativeEvent.source.height;
            if (_this.props.onLoad) {
                _this.props.onLoad({ width: _this._nativeImageWidth, height: _this._nativeImageHeight });
            }
        };
        _this._onError = function (e) {
            if (!_this._mountedComponent) {
                return;
            }
            if (_this.props.onError) {
                _this.props.onError(new Error(e.nativeEvent.error));
            }
        };
        return _this;
    }
    Image.prefetch = function (url) {
        return SyncTasks.fromThenable(RN.Image.prefetch(url));
    };
    Image.getMetadata = function (url) {
        return SyncTasks.fromThenable(Image.prefetch(url)).then(function (success) {
            if (!success) {
                return SyncTasks.Rejected("Prefetching url " + url + " did not succeed.");
            }
            else {
                var defer_1 = SyncTasks.Defer();
                RN.Image.getSize(url, function (width, height) {
                    defer_1.resolve({ width: width, height: height });
                }, function (error) {
                    defer_1.reject(error);
                });
                return defer_1.promise();
            }
        });
    };
    Image.prototype._getAdditionalProps = function () {
        return {};
    };
    Image.prototype.render = function () {
        var styles = this.getStyles();
        var extendedProps = {
            source: this._buildSource(),
            tooltip: this.props.title
        };
        var props = __assign({ accessibilityLabel: this.props.accessibilityLabel, resizeMethod: this.props.resizeMethod, resizeMode: this._buildResizeMode(), testID: this.props.testId, onError: this._onError, onLoad: this.props.onLoad ? this._onLoad : undefined, ref: this._onMount }, this._getAdditionalProps(), extendedProps);
        /**
         * The <RN.Image> component cannot contain "children" elements.
         * This functionality was removed in the version 0.50.0 - @see https://github.com/facebook/react-native/releases/tag/v0.50.0,
         * The following changes add similar functionality as <RN.ImageBackground>, to continue support previous and new versions of RN
         */
        if (this.props.children) {
            return (React.createElement(RN.View, { style: styles },
                React.createElement(RN.Image, __assign({ style: RN.StyleSheet.absoluteFill }, props)),
                this.props.children));
        }
        return (React.createElement(RN.Image, __assign({ style: styles }, props)));
    };
    Image.prototype.setNativeProps = function (nativeProps) {
        if (this._mountedComponent) {
            this._mountedComponent.setNativeProps(nativeProps);
        }
    };
    Image.prototype.getChildContext = function () {
        // Let descendant RX components know that their nearest RX ancestor is not an RX.Text.
        // Because they're in an RX.View/etc, they should use their normal styling rather than their
        // special styling for appearing inline with text.
        return { isRxParentAText: false };
    };
    Image.prototype.getStyles = function () {
        return [_styles.defaultImage, this.props.style];
    };
    Image.prototype._buildResizeMode = function () {
        var _a = this.props.resizeMode, resizeMode = _a === void 0 ? Image_1.DEFAULT_RESIZE_MODE : _a;
        if (resizeMode === 'auto') {
            return 'center';
        }
        // Prevents unknown resizeMode values
        var isValidResizeModeValue = ['contain', 'cover', 'stretch', 'repeat'].indexOf(resizeMode) >= 0;
        if (isValidResizeModeValue) {
            return resizeMode;
        }
        return Image_1.DEFAULT_RESIZE_MODE;
    };
    Image.prototype._buildSource = function () {
        // Check if require'd image resource
        if (typeof this.props.source === 'number') {
            return this.props.source;
        }
        var source = { uri: this.props.source };
        if (this.props.headers) {
            source.headers = this.props.headers;
        }
        return source;
    };
    // Note: This works only if you have an onLoaded handler and wait for the image to load.
    Image.prototype.getNativeWidth = function () {
        return this._nativeImageWidth;
    };
    Image.prototype.getNativeHeight = function () {
        return this._nativeImageHeight;
    };
    Image.childContextTypes = {
        isRxParentAText: PropTypes.bool.isRequired,
    };
    return Image;
}(React.Component));
exports.Image = Image;
exports.default = Image;
