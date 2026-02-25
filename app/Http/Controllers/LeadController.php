<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{

public function index()
{
    $leads = Lead::latest()->get();

    return inertia('Dashboard/LeadsIndex', [
        'leads' => $leads
    ]);
}
    public function store(Request $request)
    {
        $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'phone' => 'nullable|string|max:20',
        'company' => 'nullable|string|max:255',
        'city' => 'nullable|string|max:255',
        'website_type' => 'required|string',
        'budget' => 'nullable|string',
        'deadline' => 'nullable|date',
        'features' => 'nullable|array',
        'message' => 'required|string',
    ]);

    Lead::create($validated);

    return back()->with('success', 'Lead enregistré avec succès.');
    }
}
