// TypeScript interfaces and data for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: "Vision-Language" | "Robotics" | "ML Research" | "Software";
  liveUrl?: string;
  githubUrl?: string;
  details: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  dates: string;
  description: string;
  achievements: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: "Patent" | "Paper" | "Conference" | "Presentation";
  pdfUrl?: string;
  arXivUrl?: string;
  abstract: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

// ── Real data from resume ──

export const experiences: ExperienceItem[] = [
  {
    id: "agile-lead",
    company: "Agile Robots SE",
    location: "Munich, Germany",
    role: "Tech Lead – Foundation Models for Intelligent Agents",
    dates: "Aug 2025 – Present",
    description:
      "Leading technical strategy for VLA models, pre-training infrastructure, and data strategy for next-gen robotic agents.",
    achievements: [
      "Pioneered a novel VLA architecture by attaching action-decoding heads to pre-trained Vision-Language Models (VLMs), enabling zero-shot generalization across complex manipulation tasks.",
      "Orchestrated end-to-end pre-training on AWS SageMaker HyperPod across distributed GPU clusters. Implemented advanced data and model parallelism to maximize throughput, achieving >85% GPU utilization.",
      "Managed a 75TB multimodal dataset (video, sensor streams, language). Engineered data loading pipelines with intelligent caching and S3 optimization, eliminating I/O bottlenecks and reducing data loading latency by 60%.",
      "Resolved convergence issues in massive-scale cluster training (100+ GPUs) using gradient accumulation, mixed-precision training, and custom learning rate scheduling.",
      "Led the transition of research models to production, optimizing via ONNX and quantization for real-time inference and implementing drift detection monitoring.",
    ],
  },
  {
    id: "agile-senior",
    company: "Agile Robots SE",
    location: "Munich, Germany",
    role: "Senior Deep Learning Engineer",
    dates: "Dec 2023 – Aug 2025",
    description:
      "Spearheaded initiatives in Imitation Learning and Generative AI while building robust data infrastructure.",
    achievements: [
      "Engineered a production-grade Robot Transformer policy with causal masking, enabling agents to generalize tasks from limited demonstrations (5-20 shots). Achieved 85%+ success rates on unseen tasks, outperforming behavior cloning baselines.",
      "Designed an internal RAG knowledge management system using ChatGPT API, LangChain, and RAG. Reduced research information retrieval time by 65% via semantic search and prompt engineering.",
      "Built a production-ready validation framework using GYM and ZeroMQ. Integrated ReRun API for interactive visual validation, ensuring data quality prior to training.",
      "Applied knowledge distillation to reduce model size by 40% while retaining 98% accuracy, enabling feasible deployment on robot hardware.",
    ],
  },
  {
    id: "agile-dl",
    company: "Agile Robots SE",
    location: "Munich, Germany",
    role: "Deep Learning Engineer",
    dates: "Aug 2021 – Dec 2023",
    description:
      "Full-stack ML development spanning research, production systems, and MLOps infrastructure.",
    achievements: [
      "Implemented a semi-supervised learning framework using pseudo-labeling and consistency regularization, reducing data labeling overhead by 60% while maintaining accuracy within 2% of fully supervised baselines.",
      "Developed a modular PyTorch object detection library (YOLO/Faster R-CNN). Achieved 45 FPS on edge hardware through pruning and quantization; now the backbone of the robot's perception system.",
      "Overhauled GitLab CI/CD pipelines for HPC systems. Reduced iteration time from hours to minutes via Docker containerization, parallel scheduling, and smart caching.",
      "Deployed models to TensorRT and ONNX Runtime, achieving 3-5x inference speedups on resource-constrained hardware.",
    ],
  },
  {
    id: "bosch",
    company: "Robert Bosch GmbH",
    location: "Hildesheim, Germany",
    role: "Master Thesis: Deep Learning for Multiple Object Tracking (MOT)",
    dates: "Sept 2020 – March 2021",
    description:
      "Research on extending SHAMANN (Shared Memory Augmented Neural Networks) for multi-object tracking.",
    achievements: [
      "Proposed extensions to the SHAMANN paradigm to improve tracking stability in crowded scenes.",
      "Achieved state-of-the-art stability metrics on MOT17/MOT20 benchmarks while reducing computational complexity by 30% through custom attention mechanisms.",
    ],
  },
  {
    id: "auvisus",
    company: "Auvisus GmbH",
    location: "Karlsruhe, Germany",
    role: "Deep Learning Intern",
    dates: "Mar 2020 – Aug 2020",
    description:
      "Edge AI optimization and transfer learning for resource-constrained deployments.",
    achievements: [
      "Optimized PyTorch classification models for mobile deployment, achieving 4-7x speedups using ONNX Runtime and TensorRT while maintaining >92% accuracy.",
      "Utilized MobileNetV2 transfer learning to build high-accuracy classifiers with sparse data (<500 samples), overcoming significant labeling bottlenecks.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "vla-models",
    title: "Vision-Language-Action Models",
    description:
      "Novel VLA architecture attaching action-decoding heads to pre-trained VLMs, enabling zero-shot generalization across complex manipulation tasks.",
    tags: ["PyTorch", "Transformers", "VLMs", "Action Models", "AWS HyperPod"],
    category: "Vision-Language",
    githubUrl: "https://github.com/kandapagari",
    details:
      "Pioneered a novel VLA architecture for robotic agents. Orchestrated end-to-end pre-training on AWS SageMaker HyperPod across distributed GPU clusters with >85% GPU utilization. Managed 75TB multimodal dataset with optimized data loading pipelines.",
    year: "2025",
  },
  {
    id: "robot-transformer",
    title: "Robot Transformer (Imitation Learning)",
    description:
      "Production-grade Transformer policy with causal masking enabling agents to generalize from 5-20 shot demonstrations with 85%+ success rates.",
    tags: ["PyTorch", "Transformers", "Imitation Learning", "Behavior Cloning"],
    category: "Robotics",
    githubUrl: "https://github.com/kandapagari",
    details:
      "Engineered a Transformer-based imitation learning policy that outperformed behavior cloning baselines. Applied knowledge distillation to reduce model size by 40% while retaining 98% accuracy for robot hardware deployment.",
    year: "2024",
  },
  {
    id: "rag-knowledge",
    title: "RAG Knowledge Management System",
    description:
      "Internal knowledge system using ChatGPT API, LangChain, and RAG for semantic search, reducing information retrieval time by 65%.",
    tags: ["LangChain", "ChatGPT API", "RAG", "Semantic Search"],
    category: "Software",
    githubUrl: "https://github.com/kandapagari",
    details:
      "Designed an internal knowledge management system leveraging Retrieval-Augmented Generation. Implemented semantic search and prompt engineering to dramatically reduce research information retrieval time.",
    year: "2024",
  },
  {
    id: "edge-detection",
    title: "Edge Computer Vision Library",
    description:
      "Modular PyTorch object detection library (YOLO/Faster R-CNN) achieving 45 FPS on edge hardware, now the backbone of the robot's perception system.",
    tags: ["PyTorch", "YOLO", "Faster R-CNN", "TensorRT", "ONNX"],
    category: "ML Research",
    githubUrl: "https://github.com/kandapagari",
    details:
      "Developed a modular detection library achieving real-time performance on edge devices through pruning, quantization, and TensorRT/ONNX optimization. Achieved 3-5x inference speedups on resource-constrained hardware.",
    year: "2022",
  },
  {
    id: "semi-supervised",
    title: "Semi-Supervised Learning Framework",
    description:
      "Framework using pseudo-labeling and consistency regularization, reducing data labeling overhead by 60% while maintaining accuracy within 2%.",
    tags: ["PyTorch", "Semi-Supervised", "Pseudo-Labeling"],
    category: "ML Research",
    githubUrl: "https://github.com/kandapagari",
    details:
      "Implemented pseudo-labeling with consistency regularization to dramatically reduce annotation requirements for production ML systems while preserving model performance.",
    year: "2022",
  },
  {
    id: "mot-tracking",
    title: "Multi-Object Tracking (MOT)",
    description:
      "Extended SHAMANN paradigm for tracking stability in crowded scenes, achieving SOTA on MOT17/MOT20 with 30% reduced computational complexity.",
    tags: ["PyTorch", "Attention Mechanisms", "MOT", "Computer Vision"],
    category: "ML Research",
    githubUrl: "https://github.com/kandapagari",
    details:
      "Master thesis at Robert Bosch: proposed extensions to Shared Memory Augmented Neural Networks for multi-object tracking. Achieved state-of-the-art stability metrics on standard benchmarks with custom attention mechanisms.",
    year: "2021",
  },
];

export const publications: Publication[] = [
  {
    id: "patent-animal",
    title: "Animal Physical Parameter Estimation by Image Processing",
    authors: "P. Kandapagari, et al.",
    year: 2024,
    venue: "European Patent Application No. 23207432.8",
    type: "Patent",
    abstract:
      "A method and system for estimating physical parameters of animals using image processing techniques and deep learning models.",
  },
  {
    id: "pub-tissue",
    title:
      "Tissue Segmentation in Histologic Images of Intracranial Aneurysm Wall",
    authors: "A. Niemann, P. Kandapagari, et al.",
    year: 2021,
    venue: "Interdisciplinary Neurosurgery, Vol. 26",
    type: "Paper",
    abstract:
      "A deep learning approach for automated tissue segmentation in histological images of intracranial aneurysm walls, enabling more precise pathological analysis.",
  },
];

export const skills: Skill[] = [
  // Core AI Domains
  { name: "Vision-Language-Action Models", level: 95, category: "Core AI" },
  { name: "Foundation Models", level: 95, category: "Core AI" },
  { name: "Imitation Learning", level: 90, category: "Core AI" },
  { name: "Generative AI (LLMs, Diffusion, GANs)", level: 90, category: "Core AI" },
  { name: "Behavior Cloning", level: 90, category: "Core AI" },
  { name: "Robot Control", level: 85, category: "Core AI" },

  // DL Architectures
  { name: "Transformers (BERT, GPT, ViT)", level: 95, category: "Architectures" },
  { name: "Attention Mechanisms", level: 95, category: "Architectures" },
  { name: "CNNs", level: 90, category: "Architectures" },
  { name: "RNNs / LSTMs", level: 85, category: "Architectures" },
  { name: "Multi-modal Fusion", level: 90, category: "Architectures" },

  // Frameworks
  { name: "PyTorch", level: 98, category: "Frameworks" },
  { name: "TensorFlow", level: 80, category: "Frameworks" },
  { name: "JAX", level: 75, category: "Frameworks" },
  { name: "Hugging Face", level: 90, category: "Frameworks" },
  { name: "LangChain", level: 85, category: "Frameworks" },
  { name: "OpenCV", level: 85, category: "Frameworks" },

  // Infrastructure
  { name: "AWS (SageMaker, HyperPod, EC2, S3)", level: 90, category: "Infrastructure" },
  { name: "Docker", level: 90, category: "Infrastructure" },
  { name: "Kubernetes", level: 80, category: "Infrastructure" },
  { name: "GitLab CI/CD", level: 85, category: "Infrastructure" },
  { name: "MLflow", level: 80, category: "Infrastructure" },

  // Performance
  { name: "Distributed Training", level: 95, category: "Performance" },
  { name: "CUDA", level: 85, category: "Performance" },
  { name: "TensorRT", level: 90, category: "Performance" },
  { name: "ONNX", level: 90, category: "Performance" },
  { name: "Quantization / Mixed-Precision", level: 90, category: "Performance" },

  // Languages
  { name: "Python", level: 98, category: "Languages" },
  { name: "C++", level: 75, category: "Languages" },
  { name: "Java", level: 65, category: "Languages" },
  { name: "Rust", level: 60, category: "Languages" },
  { name: "SQL", level: 75, category: "Languages" },
  { name: "Bash", level: 80, category: "Languages" },
];

export const aboutText = {
  intro:
    "R&D Tech Lead specializing in Vision-Language-Action (VLA) models and Imitation Learning for autonomous agents.",
  bio: "Expert in architecting distributed training pipelines for large foundation models on AWS HyperPod, utilizing deep knowledge of Transformers and multi-modal learning. Proven track record of bridging the gap between research innovation and production, scaling infrastructure to handle 75TB+ datasets, and deploying high-performance models for real-world robotic systems.",
  education: [
    {
      degree: "M.Sc. Computer Science (Digital Engineering)",
      institution: "Otto-von-Guericke University Magdeburg",
      focus: "Deep Learning, Computer Vision, Neural Networks",
      grade: "GPA: 1.8 (German Scale)",
    },
    {
      degree: "B.Tech. Mechanical Engineering",
      institution: "JNTUA College of Engineering, Ananthapuram",
      grade: "75%",
    },
  ],
};

export const socialLinks = {
  github: "https://github.com/kandapagari",
  linkedin: "https://www.linkedin.com/in/kandapagari/",
  twitter: "https://twitter.com",
  email: "mailto:785pavan@gmail.com",
  website: "https://kandapagari.vercel.app",
};
