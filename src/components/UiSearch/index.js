import * as React from 'react'
//eslint-disable-next-line
import '../../styles/index.css';

const Searchbar = (props) => {
    const { serachBar, searchHandler } = props;
    return (
        <>
             <input
                placeholder="Please Search Here"
                margin="normal"
                value={serachBar}
                onChange={searchHandler} 
                className="globalSearch"
             />
        </>
    )
}
export default Searchbar;