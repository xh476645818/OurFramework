/**
 *type是aciton的状态类型
 * value是传值，比如有些不需要异步的，可以把值直接发给某组件，如果是需要saga处理的，可以不传value,传空
 */

export const actionCreate = (type, value) => ({
    type: type,
    value: value
})