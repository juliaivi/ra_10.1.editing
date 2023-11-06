import {
    combineReducers,
    compose,
    legacy_createStore
  } from "redux";
  // хранилище и редьюсер
//   import numberReducer from './numberReducer'; // редьюсер это своеобразный аналог сет стейта который позволяет передать инструкции как глобальный стейт поменять и он поменяет глобальный стейт
import addItemReducer from "./reducers/addItemReducer";
import itemListReducer from "./reducers/ItemList";


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // специальный инструмент для разработчика который позволяет удобно с редаксом работать
  
// настройка стейта
function configureStore() {
    return legacy_createStore(// НУЖНО ПЕРЕДАТЬ РЕДЬЮСЕР
      combineReducers({// ОБЪЕДИНЕНИЕ ВСЕХ РЕЬЮСЕРОВ (ГЛОБАЛЬНЫЙ СТЕЙТ РАЗБИТ НА МАЛЕНЬКИЕ ЧАСТИ)
        itemAdd: addItemReducer,//РЕДЬЮСЕР1 - функция которая меняет определенную часть 
        itemList: itemListReducer,//РЕДЬЮСЕР2
      }),
      undefined,
      compose( // чтоб было удобно работать
      ReactReduxDevTools,
    )
  );
}
  
export default configureStore;
