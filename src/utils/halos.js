export default (key) => {
  const halos = {
    '31415a': ['Looper', 1, 'Gain a Loops score of 5.'],
    '31415b': ['Looper', 2, 'Gain a Loops score of 25.'],
    '31415c': ['Looper', 3, 'Gain a Loops score of 100.'],
  };
  return halos[key];
};

// (tier) constraint [dots]
//
// Looper
//   Gain a Loop score of ___.
//     (1) 5 [x]
//     (2) 25 [x]
//     (3) 100 [x]
//
// ?
//   Be a member for _______.
//     (1) 1 month [x]
//     (2) 6 months [x]
//     (3) 1 Year [x]
//
// ?
//
