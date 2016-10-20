import { Map } from 'immutable'

export function getRelation(entity, relation, storeState) {
    console.log('!!! entity', entity)
    if (!entity[relation] || !storeState[relation]) return []
    return entity[relation].map(id => storeState[relation].get(id))
}

export function arrayToMap(arr, mapper = (f) => f) {
    //return arr.reduce((acc, entity) => ({...acc, [entity.id]: entity}), {})
    return arr.reduce((acc, entity) => acc.set(entity.id, mapper(entity)), new Map({}))
}