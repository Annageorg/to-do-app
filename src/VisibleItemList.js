import { connect } from 'react-redux'
import { toggleItem } from './actions'
import { removeItem } from './actions'
import VisibleItems from './VisibleItems'

const getVisibleItems = (items, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return items.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return items.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return items
    }
}

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: id => {
            dispatch( toggleItem(id) )
        },
        removeClick: id => {
            dispatch( removeItem(id) )
        }
    }
}
const VisibleItemList = connect(mapStateToProps, mapDispatchToProps)(VisibleItems)

export default VisibleItemList;