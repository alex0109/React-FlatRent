import { addManyFlatsAction } from "../flatReducer"

export const fetchFlats = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(json => dispatch(addManyFlatsAction(json)))
    }
}