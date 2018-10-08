/**
 * Text.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform Text abstraction.
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { FocusArbitratorProvider } from '../common/utils/AutoFocusHelper';
import { Text as TextBase, Types } from '../common/Interfaces';
export interface TextContext {
    isRxParentAText: boolean;
    focusArbitrator?: FocusArbitratorProvider;
}
export declare class Text extends TextBase {
    static contextTypes: {
        focusArbitrator: PropTypes.Requireable<any> & PropTypes.Validator<any>;
    };
    context: TextContext;
    static childContextTypes: React.ValidationMap<any>;
    private _isMounted;
    getChildContext(): {
        isRxParentAText: boolean;
    };
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _getStyles(): Types.TextStyleRuleSet;
    blur(): void;
    requestFocus(): void;
    focus(): void;
    getSelectedText(): string;
}
export default Text;
