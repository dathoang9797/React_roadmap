const dbRequest = indexedDB.open('StorageDummy', 1);


dbRequest.onsuccess = () => {
    console.log('Database opened successfully');
};

dbRequest.onupgradeneeded = () => {
    const db = dbRequest.result;
    const objStore = db.createObjectStore('products', { keyPath: 'id' });

    objStore.transaction.oncomplete = function () {
        const productStore = db
            .transaction('products', 'readwrite')
            .objectStore('products');

        productStore.add({
            id: 'p1',
            title: 'A First product',
            price: 12.99,
            tags: ['Expensive', 'Luxury']
        })
    }
}

dbRequest.onerror = function () {
    console.log("ERROR");
}

window.addEventListener('click', () => {
    if (!dbRequest)
        return;

    const productStore = dbRequest.result
        .transaction('products', 'readwrite')
        .objectStore('products');

    productStore.add({
        id: 'p2',
        title: 'A Second product',
        price: 122.99,
        tags: ['Expensive', 'Luxury']
    })
})