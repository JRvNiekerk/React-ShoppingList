import React, { useState } from 'react';
import style from './ListItem.module.css';

function ListItem({product, isNewCat, catColour}) {
    const [quantity, setQuantity] = useState(product.quantity);
    
    const handleSelectedItem = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1);
        }
    };

    const isDone = quantity == 0;

    return (
        <li key={`P${product.id}`} className={`${style.listItems} ${isDone ? style.strikeout : ''}`} style=
            {{
                backgroundColor: isDone ? 'grey' : catColour,
                borderTop: isNewCat ? 'var(--border-size)' : 'none',
            }}
            onClick={handleSelectedItem}
        >
            {product.name}
            <label className={style.quantityIndicator}>x {quantity}</label>
        </li>
    );
}

export default ListItem;