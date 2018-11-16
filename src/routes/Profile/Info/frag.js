export default `
  user(where: {username: $username} ) {
    bio
    createdAt
    nameFirst
    nameLast
    picture
    username
  }
  grabDots(username: $username) {
    total
  }
  grabLoops(username: $username) {
    count
  }
`;
