/**
 * "@constructor" : 构造函数
 */

/**
 * @constructor
 */
function TagConstructor()
{
}
// PASS.
new TagConstructor();

// WARN.由于被标记为构造函数，所以应该`new`进行实例化
TagConstructor();
