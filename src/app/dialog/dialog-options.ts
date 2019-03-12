import { Type } from '@angular/core';

export type DialogButtonColor = 'red' | 'green' | 'white' | 'black';

export interface DialogOptions<T> {
    /** Specifies whether the dialog must be disposed if clicked outside the dilog */
    isModel: boolean;
    compoent: Type<T>;
    title: string;
    enableClose: () => boolean;
    buttons: DialogButton[];
}

export interface DialogButton {
    label: string;
    function: () => void;
    color: DialogButtonColor;
}
