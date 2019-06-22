@param
=======

`@param` : 可以记录函数/方法的单个入参的信息.

**此标签推荐使用PhpStorm进行阅读,可以能直观体现标签的作用**

语法
=======

> `@param [Type] [name] [<description>]`

变量列表
=======
| 变量类型 | 说明 |
|---|---|
|string | 字符串|
|integer/int | number/int类型 |
|boolean/bool | false/true |
|float/double | number/浮点数 |
|object | 对象实例|
|specifiedType | 指定类 |
|mixed | 任意类型|
|array/specifiedType[] | 数组，可以指定成指定类型的数组|
|resource | 文件资源类型|
|void | 无返回值|
|null | -|
|callable | 可执行的回调函数|
|function | 不一定能执行的方法|
|self/$this | 当前实例|

标签效果
=======

![demo.jpg](./docs/demo.png)
