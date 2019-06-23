const config = {
    /**
     * @member {Array}
     */
    array : [],
};

// FIXME.@member定义类型为{Array},但是实际赋值类型为{String},会产生一个警告
config.array = 'not array';
