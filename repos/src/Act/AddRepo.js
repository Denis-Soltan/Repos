import React, {useState} from 'react';
import PropTypes from 'prop-types';


function AddRepo({onCreate}) {
    const [value, setValue] = useState('')
    function subHandler(event) {
       event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={subHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type = 'submit'>Add repositories</button>
        </form>
    )
}

AddRepo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddRepo;