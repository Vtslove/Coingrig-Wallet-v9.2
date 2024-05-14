import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();

let theme = {
  black: '#353333',
  foreground: '#353333', //4d3e36
  background: '#faf9f7',
  yellow: '#353333',
  inverse: 'white',
  darker: '#f7f6f2',
  lighter: '#756156',
  chart: 'rgba(53, 51, 51, 1)',
  card: 'white',
  brick: '#f5eacb',
  brickIcon: '#F9F7F1',
  border: '#f7f4ed',
  brickEnd: '#353333',
  wave: '#F9F7F1',
  pill: '#ded464',
  switchBackground: '#353333',
  switchForeground: '#F9F7F1',
  inputBackground: 'white',
  inputForeground: '#353333',
  switchBackground2: '#F9F7F1',
  switchForeground2: '#353333',
  stats: '#fff',
  door: '#262424',
  waveborder: '#c4bba7',
  splash: '#fff',
  external: 'white', //#f5f2eb',
  fade: '#D9CCB4',
  red: '#d9534f',
  green: '#5cb85c',
  bubble: '#f7f2e6',
  tabborder: '#f5f3ed',
  blue: '#007bff',
  dash: '#f2f0e6',
};
if (colorScheme === 'dark') {
  theme = {
    black: '#353333',
    foreground: '#f2eded', //f2eded
    background: '#353333',
    yellow: '#ded464',
    inverse: '#353333',
    darker: '#302f2f',
    lighter: '#ada5a5',
    chart: 'rgba(249, 247, 241, 1)',
    card: '#302f2f',
    brick: '#292727',
    brickIcon: '#353333',
    border: '#2b2a2a',
    brickEnd: '#ded464',
    wave: '#353333',
    pill: '#262424',
    switchBackground: '#F9F7F1',
    switchForeground: '#353333',
    inputBackground: '#383636',
    inputForeground: '#f2eded',
    switchBackground2: '#F9F7F1',
    switchForeground2: '#353333',
    stats: '#2e2c2c',
    door: '#262424',
    waveborder: '#1c1b1b',
    splash: '#000',
    external: '#2e2c2c',
    fade: '#D9CCB4',
    red: '#d9534f',
    green: '#5cb85c',
    bubble: '#2e2c2c',
    tabborder: '#302f2f',
    blue: '#0a84ff',
    dash: '#302f2f',
  };
}

export const Colors = theme;