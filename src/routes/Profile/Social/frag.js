export default `
  user(where: {username: $username} ) {
    circles {
      id
      name
    }
    followedCharities {
      ein
      name
    }
  }
`;