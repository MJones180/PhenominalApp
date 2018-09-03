export const graphqlBase = __DEV__ ? 'http://localhost:4000' : 'https://phenominal-production-server.herokuapp.com/';
export const image = route => require(`images/${route}`);
