<?php

class BeiException extends Exception {}
class HuException extends Exception {}

class ClassForThrows
{
    /**
     * @throws BeiException
     */
    public static function throwBeiException()
    {
        throw new BeiException();
    }

    /**
     * @param boolean $type
     * @throws BeiException|HuException
     */
    public static function throwMixedException($type)
    {
        if ($type) {
            throw new BeiException();
        }

        throw new HuException();
    }
}

ClassForThrows::throwBeiException();

ClassForThrows::throwMixedException(true);