function reducer(state={},action) {
    let data = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'ADD_NUMBER':
            data.number += action.number;
            return data;
        case 'S_NUMBER':
            data.number -= action.number;
            return data;
        case 'ADD_ARR':
            data.arr.push(action.number);
            return data;
        case 'GET_LIST':
            data = {...action.list};
            return data;
        default:
            return data;
    }
}
export default reducer 