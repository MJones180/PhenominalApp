export const graphqlBase = __DEV__ ? 'http://localhost:4000' : '';
export const image = route => require(`images/${route}`);
