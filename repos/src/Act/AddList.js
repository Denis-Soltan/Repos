import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";


const styles = {
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    }
}

function AddList(props) {
    return(
<ul style = {styles.list}>
    {props.repos.map((repo, i) => {
        return <ListItem repo = {repo}
                         key = {repo.id}
                         i = {i}
                         onChange = {props.onEV}
        />
    })}
</ul>
    )
}

AddList.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEV: PropTypes.func.isRequired

}

export default AddList;