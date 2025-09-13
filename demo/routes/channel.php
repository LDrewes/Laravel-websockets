<?php

use Illuminate\Support\Facades\Broadcast;

// Enable guests to listen to the channel
Broadcast::channel('shared-input', function () {
    return true;
});


