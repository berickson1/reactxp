/**
 * AnimateListEdits.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Each time the component receives new children, animates insertions, removals,
 * and moves that occurred since the previous render.
 */
import * as React from 'react';
import { Edits } from './MonitorListEdits';
import { Types } from '../../common/Interfaces';
export interface AnimateListEditsProps {
    animateChildEnter?: boolean;
    animateChildLeave?: boolean;
    animateChildMove?: boolean;
}
export declare class AnimateListEdits extends React.Component<AnimateListEditsProps, Types.Stateless> {
    _handleWillAnimate(edits: Edits, done: () => void): void;
    render(): JSX.Element;
}
export default AnimateListEdits;
