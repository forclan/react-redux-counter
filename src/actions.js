// 导出的事件类型
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const CLEAR_COUNTER = 'CLEAR_COUNTER';

/*
  用户操作的‘actions’，每一项都与component组件中的一个onClick绑定
*/
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

/* async add 操作, 由于dispatch接收的数据为一个对象
    : {type: XXX, data:}
   在直接采用 :
    var asyncSayActionCreator_0 = function (message) {
      setTimeout(function () {
          return {
              type: 'SAY',
              message
          }
      }, 2000)
    }
    sayncSayActionCreator_0('acync say');
    // undefined
   这样的函数时，虽然有了异步的操作，但这个函数的返回值确实undefined
   无法有dispatch接收。
   所以需要将异步的函数修改为一个“返回函数的函数”,如下所示:
*/
export function counterAsyncAdd() {
  // 这里多了一个dispatch
  return function (dispatch) {
    setTimeout(function() {
      console.log('dispatch', dispatch);
      // 这里直接调用dispatch
      dispatch({
        type: INCREASE
      })
    }, 2000);
  }
}
