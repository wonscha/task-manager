require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('612ae8ad81c273779e9f07a1').then(task => {
//   console.log(task);
//   return Task.countDocuments({ completed: false })
// }).then(result => {
//   console.log(result);
// }).catch(err => {
//   console.log(err);
// })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
}

deleteTaskAndCount('612d76b7ea90ff682dfdfeef').then(count => {
  console.log(count);
}).catch(err => {
  console.log(err);
})