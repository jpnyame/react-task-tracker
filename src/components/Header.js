import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    const text = showAdd ? 'Close' : 'Add'
    const color = showAdd ? 'red' : 'green'

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={color} text={text} onAdd={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// CSS In JS

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header
