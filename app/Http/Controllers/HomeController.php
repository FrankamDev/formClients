<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Fortify\Features;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home/HomeIndex', [
            'canRegister' => Features::enabled(Features::registration()),
        ]);
    }
}
