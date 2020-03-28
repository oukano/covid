<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    //
    public function casesByRegion()
    {
        return $this->hasMany('App\CaseByRegion');
    }
}
