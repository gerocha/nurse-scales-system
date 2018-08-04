import {
  ADD_NURSE
} from '../action/Nurse'

export default function nurseList(state=[], action) {
  if(action.type === ADD_NURSE) {
    return [ ...state, action.nurse ]
  }

  return state
}
