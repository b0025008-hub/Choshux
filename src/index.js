export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === "/api/status") {
            // Secretが設定されているか確認する
            const hasKey = Boolean(env.GEMINI_API_KEY);

            return new Response(
                hasKey
                    ? "Worker is running / Secret is configured"
                    : "Worker is running / Secret is missing",
                {
                    headers: {
                        "Content-Type": "text/plain; charset=utf-8",
                        "Cache-Control": "no-store"
                    }
                }
            );
        }

        return env.ASSETS.fetch(request);
    }
};