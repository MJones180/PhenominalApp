export default `
  user(where: {username: $username} ) {
    bio
    createdAt
    nameFirst
    nameLast
    picture
    username
  }
  userDots(username: $username)
  userLoops(username: $username)
`;
