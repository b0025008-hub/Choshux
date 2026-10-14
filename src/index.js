export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/api/status") {
            return new Response("Worker is running", {
                headers: {
                    "Content-Type": "text/plain; charset=utf-8",
                    "Cache-Control": "no-store"
                }
            });
        }

        return env.ASSETS.fetch(request);
    }
};