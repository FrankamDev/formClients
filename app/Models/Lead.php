<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
    'name',
    'email',
    'phone',
    'company',
    'city',
    'website_type',
    'budget',
    'deadline',
    'features',
    'message',
];

protected $casts = [
    'features' => 'array',
];
}
