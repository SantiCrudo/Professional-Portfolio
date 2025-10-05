export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  console.log("Nuevo mensaje:", { name, email, message });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
