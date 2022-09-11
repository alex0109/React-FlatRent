const ADD_FLAT = "ADD_FLAT"
const ADD_MANY_FLATS = "ADD_MANY_FLATS"
const DELETE_FLAT = "DELETE_FLAT"

const initialState = {
    flats: [
        {
            id: 1,
            title: 'First flat',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.',
            price: 130000
        },
        {
            id: 2,
            title: 'Mansard in city center',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.',
            price: 190000
        },
        {
            id: 3,
            title: 'Flat above the skies',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi eros, pharetra ut sagittis vitae, volutpat eget dolor. Curabitur vehicula vitae sem fringilla euismod. Fusce sodales rutrum nunc, et auctor lectus luctus vel. Suspendisse nibh ipsum, condimentum vel lacus nec, pharetra feugiat lacus. Fusce eu mollis risus, vitae feugiat enim. Phasellus sed ligula eget nibh pellentesque bibendum a ut mi. Aenean nec sodales tellus. Mauris sit amet mi ut felis sagittis convallis vitae sit amet libero.',
            price: 560000
        },
    ]
}

const flatReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FLAT:
            return{
                flats: [{
                    id: action.payload.id,
                    title: action.payload.title,
                    body: action.payload.body,
                    price: action.payload.price
                },
                ...state.flats ]
            }
        case ADD_MANY_FLATS:
            return {...state, flats: [...state.flats, ...action.payload]}
        case DELETE_FLAT:
            return {...state, flats: state.flats.filter(flat => flat.id !== action.payload)}
        default:
            return state
    }
}

export const addFlatAction = (id, title, body, price) => ({
    type: ADD_FLAT,
    payload: {id, title, body, price}
})

export const addManyFlatsAction = (payload) => ({
    type: ADD_MANY_FLATS,
    payload
})

export const deleteFlatAction = (payload) => ({
    type: DELETE_FLAT,
    payload
})

export default flatReducer;