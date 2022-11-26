import {
    createTheme
} from "@fluentui/react";

export default function myTheme(){

    return createTheme({
        palette: {
            themePrimary: '#cc00ff',
            themeLighterAlt: '#08000a',
            themeLighter: '#210029',
            themeLight: '#3d004d',
            themeTertiary: '#7a0099',
            themeSecondary: '#b400e0',
            themeDarkAlt: '#d119ff',
            themeDark: '#d83dff',
            themeDarker: '#e270ff',
            neutralLighterAlt: '#0b0000',
            neutralLighter: '#150202',
            neutralLight: '#250505',
            neutralQuaternaryAlt: '#2f0909',
            neutralQuaternary: '#370c0c',
            neutralTertiaryAlt: '#591f1f',
            neutralTertiary: '#f5f0f0',
            neutralSecondary: '#f6f2f2',
            neutralPrimaryAlt: '#f8f5f5',
            neutralPrimary: '#f0e9e9',
            neutralDark: '#fbfafa',
            black: '#fdfcfc',
            white: '#000000',
        }
    });
}
