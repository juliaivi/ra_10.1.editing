import { useSelector, useDispatch } from 'react-redux';
import { addItem, changeItemFiled, saveEditedItem, changeEditedId } from '../redux/actions/actionCreators';

export default function AddItem () {
  const item = useSelector(state => state.itemAdd);
  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(changeItemFiled('name', ''));
    dispatch(changeItemFiled('price', ''));
    dispatch(changeItemFiled('editedId ', 'null'));
  }

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch(changeItemFiled(name, value));
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addItem(item.name, item.price));
    clearInputs();
  }

  const handleUpdate = event => {
    event.preventDefault()
    dispatch(saveEditedItem(item.name, item.price, item.editedId));
    dispatch(changeEditedId(null));
    clearInputs();
  }

  const handleCancel = () => {
    dispatch(changeEditedId(null));
    clearInputs();
  }

  return(
    <form className="form" onSubmit={item.editedId !== null ? handleUpdate : handleSubmit}>
      <input className="form__name" type="text" name='name' onChange={handleChange} value={item.name}/>
      <input className="form__price"  type="number" name='price' onChange={handleChange} value={item.price}/>
      <button className="form__button" type='submit'>Save</button>
      {item.name !== "" || item.price !== "" ? 
        <button className="form__cancel" onClick={handleCancel} type='button'>Cancel</button> : null}
     
    </form>
  )
}