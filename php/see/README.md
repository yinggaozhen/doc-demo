@see
=======

`@see` : 此标签可以引导你到指定的**外部跳转链接**/**内部程序**.

**此标签推荐使用PhpStorm进行阅读,可以能直观体现标签的作用**

语法
=======

> `@see [URI | FQSEN] [<description>]`

描述
=======

该标签可以有两个跳转选项

- `@外部跳转链接` : 必须是满足[RFC2396](https://www.ietf.org/rfc/rfc2396.txt)的跳转链接,例如[http://github.com/yinggaozhen](http://github.com/yinggaozhen)
- `@内部程序链接` : 可以跳转到制定的类/方法/变量，如class::method

和@link的区别
=======

| - | @see | @link |
|---|---|---|
|外部链接 | √ | √ |
|内部程序 | √ | X |

