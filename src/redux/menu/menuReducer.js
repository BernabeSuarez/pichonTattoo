import { MENU_TOGGLE } from "./menu-actions"

const INITIAL_STATE = {
    hidden: true,
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return {
                ...state,
                hidden: !state.hidden,
            };
        default:
            return state
    }
}

export default menuReducer