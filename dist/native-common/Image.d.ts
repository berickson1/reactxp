/**
 * Image.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform Image abstraction.
 */
import * as React from 'react';
import * as RN from 'react-native';
import * as SyncTasks from 'synctasks';
import { Types } from '../common/Interfaces';
export interface ImageContext {
    isRxParentAText?: boolean;
}
export declare class Image extends React.Component<Types.ImageProps, Types.Stateless> implements React.ChildContextProvider<ImageContext> {
    static childContextTypes: React.ValidationMap<any>;
    static prefetch(url: string): SyncTasks.Promise<boolean>;
    static getMetadata(url: string): SyncTasks.Promise<Types.ImageMetadata>;
    protected _mountedComponent: RN.Image | null;
    private _nativeImageWidth;
    private _nativeImageHeight;
    protected _getAdditionalProps(): RN.ImageProperties | {};
    render(): JSX.Element;
    protected _onMount: (component: RN.Image | null) => void;
    setNativeProps(nativeProps: RN.ImageProps): void;
    getChildContext(): {
        isRxParentAText: boolean;
    };
    protected getStyles(): Types.StyleRuleSetRecursive<Types.StyleRuleSet<Types.ImageStyle>>[];
    private _buildResizeMode;
    private _onLoad;
    private _onError;
    private _buildSource;
    getNativeWidth(): number | undefined;
    getNativeHeight(): number | undefined;
}
export default Image;
