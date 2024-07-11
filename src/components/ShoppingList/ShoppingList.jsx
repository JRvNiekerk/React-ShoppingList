import currentShoppingList from '../../data/CurrentShoppingList.json';
import shops from '../../data/Shops.json';
import ListSection from './ListSection/ListSection';

function ShoppingList() {
    if (currentShoppingList) {
        return shops.map((shop) => {
            const filteredList = currentShoppingList.filter(product => product.store === shop.name);
            if (filteredList) {
                return (
                    <ListSection
                        open={true}
                        sectionList={filteredList}
                        title={shop}
                    >
                    </ListSection>
                );
            }
        })
    } else {
        return (<h2>Shopping list is currently empty</h2>);
    }
}

export default ShoppingList