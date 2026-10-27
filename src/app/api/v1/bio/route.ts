export async function GET() {
  return Response.json(
    {
      name: 'Nguyễn Kế Sang',
      title: 'AI/ML Developer',
      bio: 'Full-stack AI/ML Developer with 6+ months experience in Computer Vision, NLP, and production ML systems.',
      email: 'kesangtt04@gmail.com',
      phone: '+84 376 556 259',
      location: 'Ho Chi Minh City, Vietnam',
      github: 'https://github.com/kesangtt04',
      linkedin: 'https://linkedin.com',
    },
    { status: 200 }
  );
}
