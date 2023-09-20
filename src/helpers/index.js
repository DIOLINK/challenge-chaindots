export const THEME = {
  dark: 'dark',
  light: 'light',
  dataTheme: 'data-theme',
  changeMode(mode) {
    return mode === this.light ? this.dark : this.light;
  },
  isDark(mode) {
    return mode === this.dark;
  },
};
