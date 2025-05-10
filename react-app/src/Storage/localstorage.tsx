const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

sessionStorage.setItem('uid', userId);
localStorage.setItem('user', JSON.stringify(user));

const extractedId = sessionStorage.getItem('uid');
const userData = localStorage.getItem('user');
const extractedUser = userData ? JSON.parse(userData) : null;
console.log(extractedUser);
if (extractedId) {
    console.log('Got the id - ' + extractedId);
} else {
    console.log('Could not find id.');
}
