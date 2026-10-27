export async function GET() {
  return Response.json(
    {
      technical: {
        languages: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
        backend: ['Node.js', 'Express.js', 'FastAPI'],
        frontend: ['Next.js', 'React', 'Tailwind CSS'],
        ml_dl: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
        databases: ['PostgreSQL', 'MongoDB', 'Firebase'],
        tools: ['Git', 'Docker', 'VS Code', 'Linux'],
      },
      softSkills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Continuous Learning'],
      proficiency: {
        expert: ['Python', 'React', 'Next.js'],
        advanced: ['Machine Learning', 'Backend APIs', 'Databases'],
        intermediate: ['DevOps', 'Mobile Development'],
      },
    },
    { status: 200 }
  );
}
