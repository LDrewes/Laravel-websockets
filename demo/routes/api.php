<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Events\InputUpdate;

use function Illuminate\Log\log;

// Handle input update and broadcast event
Route::post('/update-input', function (Request $request) {
    log('Input received in route: ' . $request->message);
    event(new InputUpdate($request->message));
    return ['status' => 'ok'];
});

