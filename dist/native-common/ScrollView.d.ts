/**
 * ScrollView.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform ScrollView abstraction.
 */
import * as RX from '../common/Interfaces';
import ViewBase from './ViewBase';
export declare class ScrollView extends ViewBase<RX.Types.ScrollViewProps, RX.Types.Stateless> implements RX.ScrollView {
    private _scrollTop;
    private _scrollLeft;
    protected _nativeView: any;
    protected _render(props: RX.Types.ScrollViewProps): JSX.Element;
    render(): JSX.Element;
    private _onScroll;
    setScrollTop(scrollTop: number, animate?: boolean): void;
    setScrollLeft(scrollLeft: number, animate?: boolean): void;
    addToScrollTop(deltaTop: number, animate?: boolean): void;
    addToScrollLeft(deltaLeft: number, animate?: boolean): void;
    static useCustomScrollbars(): void;
}
export default ScrollView;
