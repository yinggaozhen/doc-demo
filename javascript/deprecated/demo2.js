/**
 * "@deprecated" : 被此标记的函数或者成员方法表示下个版本将会被废弃，告知适用方不再推荐使用此方法
 */

/**
 * 过气的接口1.0版本,请使用最新接口V2
 *
 * @see apiV2
 * @deprecated 3.0.0 此方法以被废弃，请使用最新方法v2
 */
function apiV1()
{
}

/**
 * V1已经过时了，我就是最靓的V2方法
 */
function apiV2()
{
}

// WARN. API V1已经被标记deprecated，请使用apiV2
apiV1();
