import { Reducer,Effect } from "umi"
import {addTodos} from './service'

export interface Type{
    data : {}
    status: 'success' | 'failed'
}
export interface ModelType{
    namespace:string,
    state: Type,
    effects:{
        Todo_add:Effect
    }
    reducers?:{
        add : Reducer<Type>
    }
}

const Model = {
    namespace:'Todo',
    state : {
        data : {},
        status : null
    },
    effects:{
      *Todo_add({payload},{call,put}){
        console.log("Calling .. ")
        const response = yield call(addTodos,payload)
        if(response.status == 'ok'){
            yield put({
                type:'add',
                payload:response
            })
        }else{
            console.log("Effecting,......")
        }
      }
    },
    reducers:{
        add(state,{payload}){
            console.log("Adding ..........")
        }
    }

}
export default Model;