<?php

class ClassForReturn
{

    public function hello() {}
}

class InstanceForReturn
{

    /**
     * @return mixed
     */
    public function methodWithReturnAll()
    {
    }

    /**
     * @return string
     */
    public function methodWithReturnString()
    {
    }

    /**
     * @return array
     */
    public function methodWithReturnArray()
    {
    }

    /**
     * @return ClassForReturn
     */
    public function methodWithReturnClass()
    {
    }

    /**
     * @return ClassForReturn|array
     */
    public function methodWithReturnMixed()
    {
    }
}

$personInstance = new InstanceForReturn();

// TODO
$personInstance->methodWithReturnAll();
// TODO
$personInstance->methodWithReturnString();
// TODO
$personInstance->methodWithReturnArray();
// TODO
$personInstance->methodWithReturnClass();
// TODO
$personInstance->methodWithReturnMixed();
