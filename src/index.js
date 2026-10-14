export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/api/status") {
            return new Response("Worker is running");
        }

        return env.ASSETS.fetch(request);
    }
};