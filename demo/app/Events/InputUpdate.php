<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use function Illuminate\Log\log;

class InputUpdate implements ShouldBroadcast
 {
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    /**
     * Create a new event instance.
     */
    public function __construct(string $message)
    {
        log("Event fired with message: $message");
        $this->message = $message;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('shared-input'),
        ];
    }

    // Optional: control the event name Echo listens for
    public function broadcastAs(): string
    {
        return 'InputUpdate';
    }

    // Format the data sent with the broadcast
    public function broadcastWith(): array
    {
        return [
            'message' => $this->message,
        ];
    }
}

