@method
=======

`@method` : 此标签可告诉类有哪些魔术方法可以调用.

**此标签推荐使用PhpStorm进行阅读,可以能直观体现标签的作用**

语法
=======

> `@method [modifier] [return type] [name]([[type] [parameter]<, …>]) [<description>]`

使用场景
=======
当一个类用魔术方法`__call`去代理执行类成员方法时，对于调用方来讲是很迷茫的，因为调用方是无法知道具体有哪些方法可以调用.
通过引入`@method`可以解决这个问题，可以在类注释添加`@method`，定义魔术方法可调用的方法，这样调用法可以通过查看注释即可知道如何调用魔术方法，部分IDE可直接识别`@method`标签从而实现自动填充以及类型判断．

标签效果
=======

IDE自动提示
=======

![demo.jpg](./docs/demo1.jpg)

最终效果
=======

![demo.jpg](./docs/demo2.jpg)
