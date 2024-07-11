import React, { useState } from 'react';

import ListItem from './ListItem/ListItem';
import categories from '../../../data/Categories.json';
import style from './ListSection.module.css';

let categoriesAdded = new Set();

function ListSection ({open, sectionList, title}) {
    const [isOpen, setIsOpen] = useState(open);

    const handleCollapsing = () => {
        setIsOpen((prev) => !prev);
    };

    const categoryColors = categories.reduce((acc, category) => {
        acc[category.name] = category.color;
        return acc;
    }, {});

    return(
        <React.Fragment key={title.id}>
            <h2 onClick={handleCollapsing} className={style.heading}>{title.name}</h2>
            {isOpen && <ul>{createList(sectionList, categoryColors)}</ul>}   
        </React.Fragment>
    );
}
function createList(list, catColours){
    categoriesAdded.clear();
    return list.map(product => {
        const isNewCategory = !categoriesAdded.has(product.category);

        if (isNewCategory) {
            categoriesAdded.add(product.category);
        }

        return(
            <ListItem key={product.id}
                product={product}
                isNewCat={isNewCategory}
                catColour={catColours[product.category]}
            ></ListItem>
        );
    })
}

export default ListSection;