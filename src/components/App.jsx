import { useState } from 'react';
import ShoppingList from "./ShoppingList/ShoppingList"
import ProductList from "./ProductList/ProductList"
import BottomMenu from "./BottomMenu/BottomMenu";
import '../index.css'

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage.toLowerCase()) {
            case 'home':
                return <ShoppingList />;
            case 'products':
                return <ProductList />;
            // case 'settings':
            //     return <Settings />;
            default:
                return <ShoppingList />;
        }
    };

    return(
        <>
            {renderPage()}
            <BottomMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    );
}

export default App
