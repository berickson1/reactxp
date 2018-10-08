/**
 * Link.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform Link abstraction.
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as RN from 'react-native';
import * as RX from '../common/Interfaces';
import { FocusArbitratorProvider } from '../common/utils/AutoFocusHelper';
export interface LinkContext {
    focusArbitrator?: FocusArbitratorProvider;
    isRxParentAText?: boolean;
}
export declare class LinkBase<S> extends React.Component<RX.Types.LinkProps, S> {
    static contextTypes: {
        focusArbitrator: PropTypes.Requireable<any> & PropTypes.Validator<any>;
        isRxParentAText: PropTypes.Requireable<any> & PropTypes.Validator<any>;
    };
    context: LinkContext;
    protected _mountedComponent: RN.ReactNativeBaseComponent<any, any> | null;
    protected _isMounted: boolean;
    setNativeProps(nativeProps: RN.TextProps): void;
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected _render(internalProps: RN.TextProps, onMount: (text: any) => void): JSX.Element;
    protected _onMount: (component: any) => void;
    protected _onPress: (e: RX.Types.SyntheticEvent) => void;
    protected _onLongPress: (e: RX.Types.SyntheticEvent) => void;
    requestFocus(): void;
    focus(): void;
    blur(): void;
}
export declare class Link extends LinkBase<{}> {
}
export default Link;
