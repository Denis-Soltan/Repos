import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        aligItemsItems: 'center',
        padding: '.6rem 1rem',
        border: '2px solid #4f4f4f',
        marginBottom: '.5rem',
        borderRadius: '5px'
    },
    input: {
        marginRight: '1.5rem'
    }
}

 function ListItem({repo, i, onChange}) {
    const {removeRepo} = useContext(Context)

    return(
  <li style = {styles.li}>
      <span>
      <strong>{i + 1}</strong>
          &nbsp;
      {repo.title}
      </span>
      <button className = 'but' onClick = {removeRepo.bind(null, repo.id) }>
          &times;
      </button>
  </li>
    )
}

ListItem.propTypes = {
     repo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired

}


export default ListItem;