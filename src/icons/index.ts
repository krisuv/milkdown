import UndoIcon from '@mui/icons-material/Undo';
import { SvgIconProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import ReplayIcon from '@mui/icons-material/Replay';
import {ThemeIcon, ThemeManager } from '@milkdown/core';

/**
 * It takes a Material UI icon and returns a string containing the SVG markup for that icon
 * @param icon - OverridableComponent<SvgIconTypeMap<{}, "svg">>
 */
export const createIcon = (icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>): string => (
    `<svg width="24" height="24">
        <path d="${(icon as any).type.render().props.children.props.d}" fill="white" />
    </svg>`
);


/**
 * It takes a custom icon, a theme manager, a key, and a label, and then it changes the default icon for that key to the
 * custom icon
 * @param customIcon - The icon you want to use.
 * @param {ThemeManager} manager - The theme manager
 * @param {string} key - The key of the icon you want to change.
 * @param {string} label - The label that will be displayed when the user hovers over the icon.
 */
export const changeDefaultIcon = (
    customIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    manager: ThemeManager,
    key: string,
    label: string) => {

    const originalGet = manager.getSlice(ThemeIcon);

    manager.set(ThemeIcon, (icon) => {
        if(icon === key){
            const icon = document.createElement('span');
            icon.innerHTML = createIcon(customIcon);
            return {
                dom: icon,
                label,
            };
        }
        return originalGet(icon);
    });
}