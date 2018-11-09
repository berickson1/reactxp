/**
 * RootView.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * The top-most view (rendered into window.body) that's used for proper
 * layering or modals, etc. in the web implementation of the ReactXP
 * cross-platform library.
 */
import * as React from 'react';
import FocusManager from './utils/FocusManager';
import { Types } from '../common/Interfaces';
import PopupContainerView from './PopupContainerView';
export declare class PopupDescriptor {
    popupId: string;
    popupOptions: Types.PopupOptions;
    constructor(popupId: string, popupOptions: Types.PopupOptions);
}
export interface RootViewProps extends Types.CommonProps {
    mainView?: React.ReactNode;
    modal?: React.ReactElement<Types.ViewProps>;
    activePopup?: PopupDescriptor;
    cachedPopup?: PopupDescriptor[];
    autoDismiss?: boolean;
    autoDismissDelay?: number;
    onDismissPopup?: () => void;
    keyBoardFocusOutline?: string;
    mouseFocusOutline?: string;
    writingDirection?: 'auto' | 'rtl' | 'ltr';
}
export interface RootViewState {
    isMeasuringPopup: boolean;
    popupWidth: number;
    popupHeight: number;
    anchorPosition: Types.PopupPosition;
    anchorOffset: number;
    popupTop: number;
    popupLeft: number;
    constrainedPopupWidth: number;
    constrainedPopupHeight: number;
    focusClass: string | undefined;
}
export interface MainViewContext {
    isInRxMainView?: boolean;
}
export declare class MainViewContainer extends React.Component<Types.CommonProps, Types.Stateless> implements React.ChildContextProvider<MainViewContext> {
    static childContextTypes: React.ValidationMap<any>;
    getChildContext(): MainViewContext;
    render(): string | number | boolean | {} | React.ReactElement<any> | React.ReactNodeArray | React.ReactPortal | React.ReactNode[] | (string & {}) | (string & React.ReactElement<any>) | (string & React.ReactNodeArray) | (string & React.ReactPortal) | (string & React.ReactNode[]) | (number & {}) | (number & React.ReactElement<any>) | (number & React.ReactNodeArray) | (number & React.ReactPortal) | (number & React.ReactNode[]) | (false & {}) | (false & React.ReactElement<any>) | (false & React.ReactNodeArray) | (false & React.ReactPortal) | (false & React.ReactNode[]) | (true & {}) | (true & React.ReactElement<any>) | (true & React.ReactNodeArray) | (true & React.ReactPortal) | (true & React.ReactNode[]) | (React.ReactElement<any> & string) | (React.ReactElement<any> & number) | (React.ReactElement<any> & false) | (React.ReactElement<any> & true) | (React.ReactElement<any> & React.ReactNodeArray) | (React.ReactElement<any> & React.ReactPortal) | (React.ReactElement<any> & React.ReactNode[]) | (React.ReactNodeArray & string) | (React.ReactNodeArray & number) | (React.ReactNodeArray & false) | (React.ReactNodeArray & true) | (React.ReactNodeArray & React.ReactElement<any>) | (React.ReactNodeArray & React.ReactPortal) | (React.ReactNodeArray & React.ReactNode[]) | (React.ReactPortal & string) | (React.ReactPortal & number) | (React.ReactPortal & false) | (React.ReactPortal & true) | (React.ReactPortal & React.ReactElement<any>) | (React.ReactPortal & React.ReactNodeArray) | (React.ReactPortal & React.ReactNode[]) | null | undefined;
}
export declare class RootView extends React.Component<RootViewProps, RootViewState> {
    static childContextTypes: React.ValidationMap<any>;
    private _mountedComponent;
    private _hidePopupTimer;
    private _respositionPopupTimer;
    private _clickHandlerInstalled;
    private _keyboardHandlerInstalled;
    private _focusManager;
    private _isNavigatingWithKeyboardUpateTimer;
    private _shouldEnableKeyboardNavigationModeOnFocus;
    private _applicationIsNotActive;
    private _applicationIsNotActiveTimer;
    private _prevFocusedElement;
    private _updateKeyboardNavigationModeOnFocusTimer;
    constructor(props: RootViewProps);
    getChildContext(): {
        focusManager: FocusManager;
    };
    private _getInitialState;
    componentWillReceiveProps(prevProps: RootViewProps): void;
    componentDidUpdate(prevProps: RootViewProps, prevState: RootViewState): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private _renderPopup;
    render(): JSX.Element;
    protected _onMount: (component: PopupContainerView | null) => void;
    private _tryClosePopup;
    private _determineIfClickOnElement;
    private _onMouseDownCapture;
    private _onKeyDownCapture;
    private _onFocusIn;
    private _onFocusOut;
    private _requestApplicationIsNotActive;
    private _cancelApplicationIsNotActive;
    private _updateKeyboardNavigationState;
    private _onKeyDown;
    private _onKeyUp;
    private _onMouseEnter;
    private _onMouseLeave;
    private _startHidePopupTimer;
    private _stopHidePopupTimer;
    private _dismissPopup;
    private _startRepositionPopupTimer;
    private _stopRepositionPopupTimer;
    private _recalcPosition;
    private _recalcInnerPosition;
}
export default RootView;
