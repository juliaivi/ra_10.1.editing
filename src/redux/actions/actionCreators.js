import {REMOVE_ITEM, ADD_ITEM, EDIT_ITEM, SAVE_EDITED_ITEM, CHANGE_ITEM_FILED, CHANGE_EDITED_ID} from "./actionTypes";

export function addItem (name, price) {
    return {type: ADD_ITEM, payload: {name, price}};
}

export function editItem (nameItem, priceItem) {
    return {type: EDIT_ITEM, payload: {nameItem, priceItem}};
}

export function saveEditedItem (name, value, editedID) {
    return {type: SAVE_EDITED_ITEM, payload: {name, value, editedID}};
}

export function removeItem (id) {
    return {type: REMOVE_ITEM, payload: {id}};
}

export function changeItemFiled (name, value, editedID) {
    return {type: CHANGE_ITEM_FILED, payload: {name, value, editedID}};
}

export function changeEditedId (editedId) {
    return {type: CHANGE_EDITED_ID, payload: {editedId}};
}