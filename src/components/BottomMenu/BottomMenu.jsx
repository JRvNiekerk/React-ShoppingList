import style from './BottomMenu.module.css'
import navOptions from '../../data/NavOptions.json'
import {refreshList} from '../../utils'

function BottomMenu({currentPage, setCurrentPage}) {

    let i = 1;
    const size = `${Math.ceil(100 / navOptions.length)}%`

    return (
        <footer className={style.footer}>
            {
                navOptions.map((navItem, index) => {
                    let buttonSyle = { width: size };

                    if (index != navOptions.length - 1) {
                        buttonSyle.borderRight = 'var(--border-size)';
                    }

                    return <button key={i++} style={buttonSyle} onClick={() => refreshList}><img src={navItem.src} alt={navItem.alt} /></button>
                })
            }
        </footer>
    )
}

export default BottomMenu;