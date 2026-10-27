export async function GET() {
  return Response.json(
    {
      email: 'kesangtt04@gmail.com',
      phone: '+84 376 556 259',
      location: 'Ho Chi Minh City, Vietnam',
      social: {
        github: 'https://github.com/kesangtt04',
        linkedin: 'https://linkedin.com',
        facebook: 'https://www.facebook.com/sangzxje',
      },
      availability: 'Open to opportunities',
      timezone: 'UTC+7 (Vietnam)',
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, send email here
    console.log('Message received:', { name, email, subject, message });

    return Response.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
