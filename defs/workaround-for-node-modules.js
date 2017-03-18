// Workaround to suppress flow errors of node_modules

declare module 'auth0-lock' {
  declare var exports: any;
}

// For styled-components

declare module 'danger' {
  declare var exports: any;
}

declare module 'expect' {
  declare var exports: any;
}

declare module 'react-native' {
  declare var exports: any;
}
