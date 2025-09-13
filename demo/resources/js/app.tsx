import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
<<<<<<< HEAD
import { configureEcho } from '@laravel/echo-react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Configure Laravel Echo with Pusher
configureEcho({
  broadcaster: "pusher",
  key: import.meta.env.VITE_REVERB_APP_KEY,
  wsHost: import.meta.env.VITE_REVERB_HOST ?? "localhost",
  wsPort: Number(import.meta.env.VITE_REVERB_PORT ?? 8080),
  wssPort: Number(import.meta.env.VITE_REVERB_PORT ?? 8080),
  forceTLS: false,
  enabledTransports: ["ws"],
  cluster: "mt1",
});


=======

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

>>>>>>> affdfd6a0e907bcbd3ec9d380b681a8878174851
createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
