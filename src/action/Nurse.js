export const ADD_NURSE = 'ADD_NURSE'

export function addNurse(nurse) {
  return {
    type: ADD_NURSE,
    nurse
  }
}
