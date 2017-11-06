<?php

/**
 * @property string name
 * @property int    age
 */
class ClassForProperty
{
    /**
     * @var string 测试名称
     */
    private $_name = 'jack';

    /**
     * @var int 测试年龄
     */
    private $_age  = 18;

    public function __get($name)
    {
        $property = "_{$name}";

        return $this->$property;
    }
}

echo (new ClassForProperty)->name, (new ClassForProperty)->age;