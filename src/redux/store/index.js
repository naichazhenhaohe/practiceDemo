import { createStore } from 'redux'
import reducer from '@/redux/reducer'

//这个是配合谷歌浏览器的插件使用的
// import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
  menuName: '首页'
}
const configureStore = () => createStore(reducer, initialState);

export default configureStore;