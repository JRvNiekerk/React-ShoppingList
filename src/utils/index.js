import { promises as fs } from 'fs';
import currentShoppingList from '../data/CurrentShoppingList.json'

const refreshList = () => {
    currentShoppingList.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            if (a.category < b.category) {
                return -1;
            } else if (a.category > b.category) {
                return 1;
            } else {
                return 0;
            }
        }
    });

    fs.writeFile('../data/CurrentShoppingList.json', JSON.stringify(currentShoppingList), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('File successfully written!');
        }
    });
}

export {refreshList};