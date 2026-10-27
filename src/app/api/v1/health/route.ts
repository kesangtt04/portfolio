export async function GET() {
  return Response.json(
    {
      status: 'online',
      message: 'Portfolio API is running',
      environment: 'production',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
