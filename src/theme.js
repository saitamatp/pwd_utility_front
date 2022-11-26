import {
    createTheme
} from "@fluentui/react";

export default function myTheme(){

    return createTheme({
        palette: {
            themePrimary: '#9800d4',
            themeLighterAlt: '#faf3fd',
            themeLighter: '#edd0f8',
            themeLight: '#dda9f2',
            themeTertiary: '#be5ce5',
            themeSecondary: '#a31ad9',
            themeDarkAlt: '#8900be',
            themeDark: '#7300a1',
            themeDarker: '#550077',
            neutralLighterAlt: '#0b0b0b',
            neutralLighter: '#151515',
            neutralLight: '#252525',
            neutralQuaternaryAlt: '#2f2f2f',
            neutralQuaternary: '#373737',
            neutralTertiaryAlt: '#595959',
            neutralTertiary: '#c8c8c8',
            neutralSecondary: '#d0d0d0',
            neutralSecondaryAlt: '#d0d0d0',
            neutralPrimaryAlt: '#dadada',
            neutralPrimary: '#ffffff',
            neutralDark: '#f4f4f4',
            black: '#f8f8f8',
            white: '#000000',
        },
    });
}