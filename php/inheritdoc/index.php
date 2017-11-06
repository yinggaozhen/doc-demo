<?php

class PersonForInheritDoc
{
    /**
     * @desc 此方法注释被继承
     * @param string $stringVariable
     * @param array $arrayVariable
     */
    public function methodWithInherit($stringVariable, $arrayVariable)
    {

    }
}

class PersonForInheritDocImpl extends PersonForInheritDoc
{
    /**
     * @inheritDoc
     */
    public function methodWithInherit($stringVariable, $arrayVariable)
    {

    }
}

(new PersonForInheritDocImpl)->methodWithInherit('', []);