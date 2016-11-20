import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, SUCCESS } from '../constants'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})
/*
const defaultState = new Map({
    entities: arrayToMap(normalizedComments, comment => new CommentModel(comment)),
    loading: false,
    loaded: false
})
*/
const defaultState = new Map({
    entities: new Map({})
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            console.log('!!! response...', response)
            return comments.update('entities', entities =>
                entities.merge(arrayToMap(response, comment => new CommentModel(comment))))
    }

    return comments
}