import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialColor = {
    color: "",
    code: {
      hex: ""
    },
    id: Date.now()
}

const AddColor = props => {
    const [newColor, setNewColor] = useState(initialColor);

    const changeHandler = e => {
        setNewColor({
            ...newColor,
            [e.target.name]: e.target.value
        })
    }

    const addColor = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/api/colors`, newColor)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('Error adding color', err))
    }

    return (
        <div className='addForm'>
            <h2>Add New Color</h2>
            <form onSubmit={addColor}>
                <input
                 required
                 type='text'
                 name='color'
                 placeholder='Color Name'
                 onChange={changeHandler}
                 value={newColor.color}
                />
                <input
                 required
                 type='text'
                 name='hexcode'
                 placeholder='Hex Code'
                 onChange={changeHandler}
                 value={newColor.code.hex}
                />
                <button className='addColor'>Add Color</button>
            </form>
        </div>
    )
}

export default AddColor;