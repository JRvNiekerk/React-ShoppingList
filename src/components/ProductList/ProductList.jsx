import ProductOptions from '../../data/ProductOptions.json';
import categories from '../../data/Categories.json';

function ProductList() {
    return(
        <ul>
            {
                ProductOptions.map(product => {
                    <li key={product.id}></li>
                })
            }
        </ul>
    )
}

export default ProductList;