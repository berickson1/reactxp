/**
 * ModuleInterface.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Defines a common base module type information set for all platforms to implement.
 */
import * as React from 'react';
import * as RX from './Interfaces';
export declare module ReactXP {
    type Accessibility = RX.Accessibility;
    var Accessibility: RX.Accessibility;
    type ActivityIndicator = RX.ActivityIndicator;
    var ActivityIndicator: typeof RX.ActivityIndicator;
    type Alert = RX.Alert;
    var Alert: RX.Alert;
    type App = RX.App;
    var App: RX.App;
    type Button = RX.Button;
    var Button: typeof RX.Button;
    type Picker = RX.Picker;
    var Picker: typeof RX.Picker;
    type Clipboard = RX.Clipboard;
    var Clipboard: RX.Clipboard;
    type GestureView = RX.GestureView;
    var GestureView: typeof RX.GestureView;
    type Image = RX.Image;
    var Image: RX.ImageConstructor;
    type Input = RX.Input;
    var Input: RX.Input;
    type International = RX.International;
    var International: RX.International;
    type Link = RX.Link;
    var Link: typeof RX.Link;
    type Linking = RX.Linking;
    var Linking: RX.Linking;
    type Location = RX.Location;
    var Location: RX.Location;
    type Modal = RX.Modal;
    var Modal: RX.Modal;
    type Network = RX.Network;
    var Network: RX.Network;
    type Platform = RX.Platform;
    var Platform: RX.Platform;
    type Popup = RX.Popup;
    var Popup: RX.Popup;
    type ScrollView = RX.ScrollView;
    var ScrollView: RX.ScrollViewConstructor;
    type StatusBar = RX.StatusBar;
    var StatusBar: RX.StatusBar;
    type Storage = RX.Storage;
    var Storage: RX.Storage;
    type Styles = RX.Styles;
    var Styles: RX.Styles;
    type Text = RX.Text;
    var Text: typeof RX.Text;
    type TextInput = RX.TextInput;
    var TextInput: typeof RX.TextInput;
    type UserInterface = RX.UserInterface;
    var UserInterface: RX.UserInterface;
    type UserPresence = RX.UserPresence;
    var UserPresence: RX.UserPresence;
    type View = RX.View;
    var View: typeof RX.View;
    type WebView = RX.WebView;
    var WebView: RX.WebViewConstructor;
    type Animated = RX.Animated;
    var Animated: RX.Animated;
    export import CommonProps = RX.Types.CommonProps;
    export import CommonStyledProps = RX.Types.CommonStyledProps;
    export import Types = RX.Types;
    export import Component = React.Component;
    var createElement: typeof React.createElement;
    var Children: typeof React.Children;
    var __spread: any;
}
