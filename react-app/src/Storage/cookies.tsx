const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

const testCookie = 'cook';
document.cookie = `uid=${testCookie}; expires=`;
document.cookie = `user=${JSON.stringify(user)}`;

console.log(document.cookie)
const createMap = document.cookie.split(";");
const data = createMap.map(i => i.trim());
console.log(createMap);
console.log(data)
console.log(data[0].split('=')[1]);// value