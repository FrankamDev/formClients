<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LeadController;
use App\Models\Lead;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;







Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/commencer', [ContactController::class, 'index'])->name('commencer');
Route::get('/dashboard/leads', [LeadController::class, 'index']);

Route::post('/lead', [LeadController::class, 'store']);

// Route::get('dashboard', function () {
//     return Inertia::render('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/dashboard', function () {
    $leads = Lead::latest()->paginate(10);

    return inertia('Dashboard', [
        'leads' => $leads,
        'totalLeads' => Lead::count(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
