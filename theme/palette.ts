// Define what props.theme will look like
import { blocksTheme } from '../blocks/theme/Theme';

export const themeLight = {
  scheme: 'light',

  // theme for the new blocks design system
  blocksTheme: blocksTheme.light,

  // Default Background Theme
  defaultBG: '#FFFFFF',

  headerIconsBg: '#FFFFFF',

  background: {
    default: '#FFFFFF',
    secondary: '#F4F5FA',
    tooltip: '#E5E8F6',
    timeFilter: '#F4F5FA',
    card: '#FFFFFF',
    border: '#BAC4D6',
    headerIcon: '#FFFFFF',
    optionlist: '#FFFFFF',
  },

  text: {
    primary: '#000000',
    secondary: '#657795',
    leaderboardHeader: '#657795',
    leaderboardText: '#000000',
    link: '#9C9CBE',
  },

  graph: {
    line: '#DF4FA3',
    divider: '#BAC4D6',
    primaryLabel: '#657795',
    secondaryLabel: '#000000',
    legendText: '#657795',
    axis: '#BAC4D6',
    grantsAndPIPColors: ['#CF1C84', '#F9BFE0'],
    grantsProposals: ['#CF1C84', '#E479CC', '#F9BFE0'],
    pgpCategories: [
      '#DF4FA3',
      '#AB7FEA',
      '#C66BD3',
      '#D874D7',
      '#E479CC',
      '#F16CB3',
      '#F982AC',
      '#FF95A7',
    ],

    barchartColorSet: [
      '#DF4FA3',
      '#AB7FEA',
      '#B477E4',
      '#C66BD3',
      '#C66BD3',
      '#D874D7',
      '#E479CC',
      '#F16CB3',
      '#F982AC',
      '#FF95A7',
    ],
  },
};

export const themeDark = {
  scheme: 'dark',
  // theme for the new blocks design system
  blocksTheme: blocksTheme.dark,
  
  // Default Background Theme
  defaultBG: '#17181B',

  headerIconsBg: '#282A2E',

  background: {
    default: '#17181B',
    secondary: '#404650',
    tooltip: '#2F3137',
    timeFilter: '#404650',
    card: '#404650',
    border: '#4A4F67',
    headerIcon: '#282A2E',
    optionlist: '#282A2E',
  },

  text: {
    primary: '#FFFFFF',
    secondary: '#B6BCD6',
    leaderboardHeader: '#787E99',
    leaderboardText: '#B6BCD6',
    link: '#B6BCD6',
  },

  graph: {
    line: '#DF4FA3',
    divider: '#787E99',
    primaryLabel: '#B6BCD6',
    legendText: '#B6BCD6',
    secondaryLabel: '#FFFFFF',
    axis: '#B6BCD6',
    grantsAndPIPColors: ['#CF1C84', '#F9BFE0'],
    grantsProposals: ['#CF1C84', '#E479CC', '#F9BFE0'],
    pgpCategories: [
      '#DF4FA3',
      '#AB7FEA',
      '#C66BD3',
      '#D874D7',
      '#E479CC',
      '#F16CB3',
      '#F982AC',
      '#FF95A7',
    ],

    barchartColorSet: [
      '#DF4FA3',
      '#AB7FEA',
      '#B477E4',
      '#C66BD3',
      '#C66BD3',
      '#D874D7',
      '#E479CC',
      '#F16CB3',
      '#F982AC',
      '#FF95A7',
    ],
  },
};
