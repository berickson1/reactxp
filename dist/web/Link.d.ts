/**
 * Link.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform Link abstraction.
 */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSProperties } from 'react';
import { FocusArbitratorProvider } from '../common/utils/AutoFocusHelper';
import { Types } from '../common/Interfaces';
export interface LinkContext {
    focusArbitrator?: FocusArbitratorProvider;
}
export declare class Link extends React.Component<Types.LinkProps, Types.Stateless> {
    static contextTypes: {
        focusArbitrator: PropTypes.Requireable<any> & PropTypes.Validator<any>;
    };
    context: LinkContext;
    private _isMounted;
    private _longPressTimer;
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    requestFocus(): void;
    focus(): void;
    blur(): void;
    _getStyles(): CSSProperties;
    private _onClick;
    private _onMouseDown;
    private _onMouseUp;
    private _onContextMenu;
}
export default Link;
