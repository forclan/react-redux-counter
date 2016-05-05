export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const CLEAR_COUNTER = 'CLEAR_COUNTER';


export function counterAdd() {
  console.log('counterAdd');
  return {
    type: INCREASE,
  }
}

export function counterDecrease() {
  console.log('counterDecrease');
  return {
    type: DECREASE,
  }
}

export function counterClear() {
  console.log('counterClear');
  return {
    type: CLEAR_COUNTER,
  }
}