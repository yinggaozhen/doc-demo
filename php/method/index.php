<?php

/**
 * @method void get()
 * @method static void staticGet()
 */
class ClassForMethod
{
    private function _get() {}

    private static function _staticGet() {}

    function __call($name, $arguments)
    {
        $method = "_{$name}";

        $this->$method();
    }

    static function __callStatic($name, $arguments)
    {
        $method = "_{$name}";

        static::$method();
    }
}

(new ClassForMethod())->get();

ClassForMethod::staticGet();