<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CovidStatus extends Model
{
    //
    protected $fillable = [
        "confirmed",
        "recovered",
        "deaths",
        "negative",
        "created_at",
        "updated_at"
    ];
}
