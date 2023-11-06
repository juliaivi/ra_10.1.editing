import {nanoid} from "nanoid";
import { ADD_ITEM, REMOVE_ITEM, SAVE_EDITED_ITEM } from "../actions/actionTypes";

const initialState = [
    { id: nanoid(), name: "Замена стекла", price: 21000 },
    { id: nanoid(), name: "Замена дисплея", price: 25000 },
  ];

  export default function itemListReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: // создание элемта
            const {name, price} = action.payload;
            return [...state, {id: nanoid(), name: name, price: Number(price)}];
        case REMOVE_ITEM: // удаление эдлемента
            const {id} = action.payload;
            return state.filter((item) => item.id !== id);
        case SAVE_EDITED_ITEM: // внесение и сохранение новых значений
        debugger
            const editedName = action.payload.name;
            const editedPrice = action.payload.value;
            const editedId = action.payload.editedID;
            state = state.map((item) => {
                if (item.id === editedId) {
                    item.name = editedName;
                    item.price = editedPrice;
                }
                return item;
            })
            return state;
        default:
            return state;
    }

  }
