/**
 * TextInput.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN Windows-specific implementation of the cross-platform TextInput abstraction.
 */
import * as RN from 'react-native';
import { FocusManagerFocusableComponent } from '../native-desktop/utils/FocusManager';
import { TextInput as TextInputBase } from '../native-common/TextInput';
import { ImportantForAccessibilityValue } from '../native-common/AccessibilityUtil';
export declare class TextInput extends TextInputBase implements FocusManagerFocusableComponent {
    protected _render(props: RN.TextInputProps, onMount: (textInput: any) => void): JSX.Element;
    private _onFocusEx;
    onFocus(): void;
    getTabIndex(): number;
    getImportantForAccessibility(): ImportantForAccessibilityValue | undefined;
    updateNativeAccessibilityProps(): void;
}
export default TextInput;
