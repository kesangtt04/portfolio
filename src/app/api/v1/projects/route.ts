export async function GET() {
  return Response.json(
    {
      total: 4,
      projects: [
        {
          id: 1,
          title: 'Computer Vision Object Detection',
          description: 'Real-time object detection system using YOLOv8 and Python',
          technologies: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV'],
          status: 'completed',
          year: 2026,
        },
        {
          id: 2,
          title: 'NLP Text Classification API',
          description: 'RESTful API for multi-class text classification using Transformers',
          technologies: ['Python', 'FastAPI', 'Transformers', 'PostgreSQL'],
          status: 'completed',
          year: 2026,
        },
        {
          id: 3,
          title: 'Portfolio Website',
          description: 'Modern portfolio with dark/light theme, i18n, and interactive terminal',
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
          status: 'in-progress',
          year: 2026,
        },
        {
          id: 4,
          title: 'ML Pipeline Optimization',
          description: 'Optimized ML pipeline for image classification with 95% accuracy',
          technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Docker'],
          status: 'completed',
          year: 2026,
        },
      ],
    },
    { status: 200 }
  );
}
