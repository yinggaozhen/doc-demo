/**
 * @description 入参默认值
 *
 * 此标签推荐使用PhpStorm/WebStorm进行阅读,可以能直观体现标签的作用
 *
 * @param {Boolean|null} [enable = true] - 定义入参enable是可选参数，默认值为true
 */
function TagParamByDefault(enable) {
    if (enable === null) {
        enable = true;
    }
}

TagParamByDefault();