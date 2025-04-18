import { SvelteComponentTyped } from "svelte";
import type { Color, Components } from './type/types';
declare const __propDef: {
    props: {
        components?: Partial<Components>;
        /**
             * Customization properties
             */ isAlpha?: boolean;
        isInput?: boolean;
        isPopup?: boolean;
        isOpen?: boolean;
        toRight?: boolean;
        color?: Color;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ColorPickerProps = typeof __propDef.props;
export declare type ColorPickerEvents = typeof __propDef.events;
export declare type ColorPickerSlots = typeof __propDef.slots;
export default class ColorPicker extends SvelteComponentTyped<ColorPickerProps, ColorPickerEvents, ColorPickerSlots> {
}
export {};
