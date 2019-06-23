# PHP Doc Demo 

PHP注释标签范例，每个标签我都制作了**相关图文信息**，助你能更好理解每个注释标签的作用

[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/yinggaozhen/doc-demo/blob/master/LICENSE)

:heart::heart::heart:标签会不定期持续更新，欢迎各位**fork & star**:heart::heart::heart:

## PHP相关标签

||||||
|---|---|---|---|---|
|[@author](./author)|[@deprecated](./deprecated)|@example|[@inheritdoc](./inheritdoc)|[@link](./link)|
|[@method](./method)|@mixin|[@param](./param)|[@property](./property)|[@return](./return)|
|[@see](./see)|[@throws](./throws)|[@var](./var)|[@internal](./internal)|@version|
| @copyright | @license| @since |@package |@todo |

## PHP注释规范
- 对于引用了全局变量的函数，必须使用@glboal标记
- 对于变量，必须用@var标记其类型(int,string,bool…)
- 函数必须通过@param和@return标记指明其参数和返回值
- 对于出现两次或两次以上的关键字，要通过@ingore忽略掉多余的，只保留一个即可
- 调用了其他函数或类的地方，要使用@link或其他标记链接到相应的部分，便于文档的阅读。
- 必要的地方使用非文档性注释，提高代码易读性。
- 描述性内容尽量简明扼要，尽可能使用短语而非句子。
- 全局变量，静态变量和常量必须用相应标记说明

## 阅读姿势

你可以采用以下两种方法查阅

### 1. 安装浏览器扩展octotree

需要在浏览器上安装对应的github阅读插件**octotree**，安装成功之后重新刷新github工程即可.

**插件下载地址**

- chrome : [https://chrome.google.com/webstore/detail/octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)
- firefox : [https://addons.mozilla.org/en-US/firefox/addon/octotree/](https://addons.mozilla.org/en-US/firefox/addon/octotree/)

### 2. 使用Jetbrains全家桶阅读

所谓[Jetbrains](https://www.jetbrains.com/)全家桶，即`PHP -> PhpStorm`， `Javascript -> (PhpStorm/WebStorm)`.

理由是强大的**Jetbrains**已经很贴心为我们集成各个语言的标签识别，可以更快速的帮助我们理解每个标签的含义.

当然如果你觉得**Jetbrains**全家桶过于臃肿，也没关系，我们为每个标签都制作了详细的**图文信息**，放置于每个标签下的README.

*毕竟注释标签只是各个语言各自约定一套通用规则，无关乎于IDE* 

## 相关参考资料

- PHPDoc : [https://docs.phpdoc.org/](https://docs.phpdoc.org/)

## 特别感谢

感谢以下同学给出的宝贵意见与指导

- @popo1h
