// import { combineReducers } from 'redux'

// --------------------------------------------------------------------------------
// State

// const NAP = 'napping'
// const EAT = 'eating'
// const PLAY = 'playing'
// const DROOL = 'drool'
// let NAME = 'Koa'

const initialState = {

    cats: {
        1001: {
            name: 'Milla',
            activity: 'drooling'
        },
        1002: {
            name: 'Oakley',
            activity: 'playing'
        }
    }

}

console.log("Cats IDs:", Object.keys(initialState.cats))
console.log("ID 1001 details:", initialState.cats['1001'])


// --------------------------------------------------------------------------------
// Action and Action Creators

// const ACTION_NAP = NAP
// const ACTION_EAT = EAT
// const ACTION_PLAY = PLAY
// const ACTION_DROOL = DROOL

// export function setActionNap() {
//     return{
//         type: ACTION_NAP
//     }
// }
// export function setActionEat() {
//     return{
//         type: ACTION_EAT
//     }
// }
// export function setActionPlay() {
//     return{
//         type: ACTION_PLAY
//     }
// }
// export function setActionDrool() {
//     return{
//         type: ACTION_DROOL
//     }
// }


// window.setActionNap = setActionNap
// window.setActionEat = setActionEat
// window.setActionPlay = setActionPlay



const ACTION_SET_NAME = 'ACTION_SET_NAME'
export function setName(id, name) {
    return{
        type: ACTION_SET_NAME, 
        payload: {
            id,
            name,
        }
    }
}
window.setName = setName


const ACTION_SET_ACTIVITY = 'ACTION_SET_ACTIVITY';
export function setActivity(id, activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            id,
            activity,
            
        }
    }
}
window.setActivity = setActivity

const ACTION_ADD_CAT = 'ACTION_ADD_CAT'
export function addCat(name, activity) {
    
    return {
        type: ACTION_ADD_CAT,
        payload: {
            name,
            activity
        }
    }
}
window.addCat = addCat

// const ACTION_SET_NAME_ACTIVITY = 'ACTION_SET_NAME_ACTIVITY'
// export function setBoth(activity, name) {
//     return {
//         type: ACTION_SET_NAME_ACTIVITY,
//         payload: {
//             activity,
//             name
//         }
//     }
// }
// window.setBoth = setBoth
// --------------------------------------------------------------------------------
// Reducer

// function setActivity( state=initialState.activity, action={type: 'napping'} ) {
//     switch(action.type) {
//         case ACTION_NAP:
//             return NAP
//         break;
//         case ACTION_EAT:
//             return EAT
//         break;
//         case ACTION_PLAY:
//             return PLAY
//         break;
//         case ACTION_DROOL:
//             return DROOL
//         break;
//         default:
//             return state
//         break
//     }
// }

// function setNewActivity( state=initialState.activity, action={type: ''}) {
//     switch(action.type) {
//         case ACTION_SET_ACTIVITY:
//             return action.payload.activity
//         break;
//         default:
//             return state
//         break;
//     }
// }

// function setCatName( state=initialState.name, action={type: ''} ) {
//     switch(action.type) {
//         case ACTION_SET_NAME:
//             return action.payload.name
//         break;
//         default:
//             return state
//         break
//     }
// }

export function setNameAndActivity( state=initialState.cats, action={type: ''} ) {
    console.log('state:',state)
    
    switch(action.type) {
        case ACTION_SET_NAME:
            let newState = {};

            Object.keys(state).forEach(id => {
                if (id === action.payload.id) {
                    newState[id]={
                        ...state[id],
                        name: action.payload.name
                    }
                } else {
                    newState[id]={
                        ...state[id],
                }
            }
            })
                return newState
        break;
        case ACTION_SET_ACTIVITY:
            let newState2 = {};
            Object.keys(state).forEach(id => {
                if (id === action.payload.id) {
                    newState2[id] = {
                        ...state[id],
                        activity: action.payload.activity
                    }
                } else {
                    newState2[id] = {
                        ...state[id]
                    }
                }
            });
                return newState2
        break;
        case ACTION_ADD_CAT:
            let id = Math.floor(Math.random() * 9999) + 1000
            console.log(id)
            return {
                ...state,
                [id]: {
                    name: action.payload.name,
                    activity: action.payload.activity,

                }
            }
        break;
        default:
            return state
        break;
    }
}


// export const rootReducer = combineReducers({
//     activity: action.type === ACTION_SET_ACTIVITY ? setNameAndActivity : null,
//     name: action.type === ACTION_SET_NAME ? setNameAndActivity: null,
// })
