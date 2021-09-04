require('../src/db/mongoose');
const { findByIdAndUpdate } = require('../src/models/user');
const User = require('../src/models/user');

// User.findByIdAndUpdate('612d53ffe1615b6b42d4b7dc', { age: 1 }).then(user => {
//   console.log(user);
//   return User.countDocuments({ age: 1 })
// }).then(user => {
//   console.log(user);
// }).catch(err => {
//   console.log(err);
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
}

updateAgeAndCount('612d53ffe1615b6b42d4b7dc', 2).then(count => {
  console.log(count);
}).catch(err => {
  console.log(err);
})