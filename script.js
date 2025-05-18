const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
};

const logger = time => console.log(`resolved after ${time}ms`);

delay(2000).then(logger); 
delay(1000).then(logger); 
delay(1500).then(logger); 


const userList = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserActivity = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedList = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedList);
  });
};

const printUsers = updatedList => console.table(updatedList);

toggleUserActivity(userList, 'Mango').then(printUsers);
toggleUserActivity(userList, 'Lux').then(printUsers);



const getRandomDelay = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const processTransaction = transaction => {
  const transactionDelay = getRandomDelay(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (success) {
        resolve({ id: transaction.id, time: transactionDelay });
      } else {
        reject(transaction.id);
      }
    }, transactionDelay);
  });
};

const showSuccess = ({ id, time }) => {
  console.log(`transaction ${id} processed in ${time}ms`);
};

const showError = id => {
  console.warn(`error processing transaction ${id}`);
};

processTransaction({ id: 70, amount: 150 }).then(showSuccess).catch(showError);
processTransaction({ id: 71, amount: 230 }).then(showSuccess).catch(showError);
processTransaction({ id: 72, amount: 75 }).then(showSuccess).catch(showError);
processTransaction({ id: 73, amount: 100 }).then(showSuccess).catch(showError);
