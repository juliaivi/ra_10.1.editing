import { CHANGE_ITEM_FILED, EDIT_ITEM, CHANGE_EDITED_ID } from "../actions/actionTypes";

const initialState = {
    name: '',
    price: '',
    editedId: 'null',
};
//action - обычный объект у которого может быть 1-2 атрибута(стандартно - принято это type(название) и action.payload - то что ввел пользователь)
export default function  addItemReducer(state = initialState, action) {
    switch (action.type) { // инструкции как менять глобальный стейт
        case CHANGE_ITEM_FILED: //ИЗМЕНИТЬ ЭЛЕМЕНТ dв заполненой форме
            const {name, value} = action.payload;
            return {...state, [name]:value};
        case CHANGE_EDITED_ID: // очистка
            const { editedId } = action.payload;
            return {...state, editedId};
        case EDIT_ITEM: //редактирование (внесение данных в форму)
            const { nameItem, priceItem} = action.payload;
            return {...state, name: nameItem, price: priceItem};
        default:
            return state;
    }
}