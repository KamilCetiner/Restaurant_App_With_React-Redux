
export function reducer (state, action){
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            const newList = [...state.favoriteList];
            const newItem = action.payload.selectedRestaurant;
            newList.indexOf(newItem) > -1 ? null : newList.push(newItem) ;
            state.favoriteList = newList;
            return {...state}

            // return {
                
            //     ...state,
            //     favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
            // }
            case 'ADD_HEART':
                state.heart_color = action.payload.new_color
                return {...state}



        default:
            return state;
    }
    
}