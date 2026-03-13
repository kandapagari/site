// TypeScript interfaces and data for the portfolio

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  tags: string[];
  githubUrl?: string;
  featured: boolean;
  isPrivate?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  techStack: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations?: number;
  url?: string;
  type: "paper" | "patent";
}

export interface Skill {
  name: string;
  category: "Machine Learning & AI" | "Robotics AI" | "Systems & Infrastructure" | "Programming";
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
  details?: string;
}

// ── Social Links ──

export const socialLinks = {
  github: "https://github.com/kandapagari",
  linkedin: "https://www.linkedin.com/in/kandapagari/",
  x: "https://x.com/kandapagari",
  instagram: "https://instagram.com/abhimanyu_pavan",
  youtube: "https://www.youtube.com/@kandapagari",
  twitter: "https://twitter.com/zephyr_347",
  email: "mailto:785pavan@gmail.com",
  email2: "mailto:pavan.kandapagari@gmail.com",
  phone: "tel:+4915739467478",
  phone2: "tel:+918885724125",
  scholar: "https://scholar.google.de/citations?hl=en&user=EkSY9wUAAAAJ",
};

// ── About ──

export const about = {
  name: "Pavan Kumar Kandapagari",
  headline: "Building intelligent robots that see and act.",
  role: "Team Lead — Foundation Models for Robotics",
  company: "Agile Robots SE, Munich",
  intro:
    "I'm an AI engineer working on multimodal machine learning and robotics. My work focuses on vision-language and vision-action models that connect perception with decision making. I enjoy building complete ML systems — from large-scale model training to real-time inference infrastructure and robotics integration.",
  aboutParagraphs: [
    "I'm an AI engineer interested in how machines can understand the world and act within it. My work focuses on building multimodal models that connect perception and action — particularly vision-language and vision-action systems for robotic applications.",
    "I enjoy working on problems that go beyond model training. Much of my work involves building the full pipeline around machine learning systems: training large multimodal models, designing efficient inference infrastructure using tools like Python and Rust, and integrating learned policies into real-time environments and simulations.",
    "Recently, I've been working on vision-language models and exploring how they can be extended into vision-action models that allow robots to interpret scenes and generate meaningful actions. I'm particularly interested in scalable training workflows, real-time inference architectures, multimodal reasoning, and building robust ML systems that operate in real-world environments.",
    "My goal is to build AI systems that bridge perception, reasoning, and action in real-world robotic settings. My background spans machine learning, distributed systems, and high-performance programming, and I enjoy bridging research ideas with practical engineering.",
  ],
  focusAreas: [
    "Vision-Language Models",
    "Vision-Action Models for Robotics",
    "Multimodal Learning",
    "ML Systems & Inference Infrastructure",
  ],
  bio: "My journey started in mechanical engineering, pivoted through industrial automation at Amara Raja, and found its home in deep learning and robotics at OVGU Magdeburg. Over four years at Agile Robots, I've grown from a software developer to leading the Foundation Models team, driving the technical strategy for next-generation robotic intelligence.",
  certifications: [
    "Build Basic Generative Adversarial Networks (GANs) — Coursera / DeepLearning.AI",
    "Data Science Math Skills — Coursera / Duke University",
    "Introduction to NumPy — Coursera / Google",
    "Python Programming — GUVI / IIT Madras",
  ],
  languages: [
    { name: "Parseltongue", level: "Mastery" },
    { name: "Telugu", level: "Native" },
    { name: "Tamil", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "German", level: "Elementary (A2)" },
    { name: "Hindi", level: "Barely" },
    { name: "Kannada", level: "Barely" },
  ],
};

// ── Experience ──

export const experiences: Experience[] = [
  {
    id: "agile-teamlead",
    company: "Agile Robots SE",
    role: "Team Lead — Foundation Models for Robotics",
    startDate: "Mar 2026",
    endDate: "Present",
    location: "Munich, Germany",
    description:
      "Leading the Foundation Models team, defining technical strategy for VLA architectures, pre-training infrastructure, and data pipelines for next-generation robotic agents.",
    techStack: ["PyTorch", "VLMs", "AWS HyperPod", "Distributed Training", "ONNX"],
  },
  {
    id: "agile-techlead",
    company: "Agile Robots SE",
    role: "Tech Lead — Foundation Models for Intelligent Agents",
    startDate: "Aug 2025",
    endDate: "Mar 2026",
    location: "Munich, Germany",
    description:
      "Pioneered a novel VLA architecture attaching action-decoding heads to pre-trained VLMs for zero-shot generalization. Orchestrated end-to-end pre-training on AWS HyperPod across 100+ GPU clusters with >85% utilization. Managed 75TB multimodal dataset with optimized S3 pipelines, reducing data loading latency by 60%.",
    techStack: ["PyTorch", "Transformers", "AWS SageMaker", "CUDA", "Mixed-Precision"],
  },
  {
    id: "agile-senior",
    company: "Agile Robots SE",
    role: "Senior Deep Learning Engineer",
    startDate: "Dec 2023",
    endDate: "Sep 2025",
    location: "Munich, Germany",
    description:
      "Engineered a production-grade Robot Transformer policy with causal masking, achieving 85%+ success rates from 5-20 shot demonstrations. Built an internal RAG system using LangChain, reducing retrieval time by 65%. Applied knowledge distillation to shrink models 40% while retaining 98% accuracy.",
    techStack: ["PyTorch", "LangChain", "RAG", "GYM", "ZeroMQ", "ReRun"],
  },
  {
    id: "agile-dl",
    company: "Agile Robots SE",
    role: "Software Developer / Deep Learning Engineer",
    startDate: "Aug 2021",
    endDate: "Dec 2023",
    location: "Munich, Germany",
    description:
      "Built a modular PyTorch object detection library (YOLO/Faster R-CNN) achieving 45 FPS on edge hardware. Implemented semi-supervised learning with pseudo-labeling, cutting annotation needs by 60%. Overhauled CI/CD pipelines for HPC systems with Docker containerization.",
    techStack: ["PyTorch", "YOLO", "TensorRT", "ONNX", "Docker", "GitLab CI/CD"],
  },
  {
    id: "bosch",
    company: "Robert Bosch GmbH",
    role: "Master Thesis — Deep Learning for Multiple Object Tracking",
    startDate: "Sep 2020",
    endDate: "Mar 2021",
    location: "Hildesheim, Germany",
    description:
      "Extended the SHAMANN paradigm for multi-object tracking in crowded scenes. Achieved state-of-the-art stability metrics on MOT17/MOT20 benchmarks with 30% reduced computational complexity through custom attention mechanisms.",
    techStack: ["PyTorch", "Attention Mechanisms", "MOT", "Computer Vision"],
  },
  {
    id: "auvisus",
    company: "auvisus GmbH",
    role: "Deep Learning Intern",
    startDate: "Mar 2020",
    endDate: "Aug 2020",
    location: "Karlsruhe, Germany",
    description:
      "Optimized PyTorch models for mobile deployment, achieving 4-7x speedups with ONNX Runtime and TensorRT. Built high-accuracy classifiers from sparse data (<500 samples) using MobileNetV2 transfer learning.",
    techStack: ["PyTorch", "ONNX", "TensorRT", "MobileNetV2", "Transfer Learning"],
  },
  {
    id: "ovgu-ta",
    company: "OVGU Magdeburg",
    role: "Teaching Assistant",
    startDate: "Oct 2019",
    endDate: "Jan 2020",
    location: "Magdeburg, Germany",
    description:
      "Assisted in teaching computer science courses, providing guidance to students on programming assignments and deep learning fundamentals.",
    techStack: ["Python", "Teaching", "Deep Learning"],
  },
  {
    id: "amararaja-exec",
    company: "Amara Raja Batteries Ltd.",
    role: "Executive Engineer",
    startDate: "Jul 2016",
    endDate: "Aug 2017",
    location: "Tirupati, India",
    description:
      "Led production floor optimization initiatives, improving throughput and reducing defect rates through process automation and data-driven decision making.",
    techStack: ["Process Automation", "Quality Control", "Data Analysis"],
  },
  {
    id: "amararaja-get",
    company: "Amara Raja Batteries Ltd.",
    role: "Graduate Engineering Trainee",
    startDate: "Jul 2015",
    endDate: "Jul 2016",
    location: "Tirupati, India",
    description:
      "Completed rotational training across manufacturing departments, learning production processes and industrial engineering fundamentals.",
    techStack: ["Manufacturing", "Industrial Engineering"],
  },
];

// ── Projects ──

export const projects: Project[] = [
  // ── Featured: Private/proprietary work (write-up only) ──
  {
    slug: "vlm-robotics",
    title: "Vision-Language Model for Robotics",
    description:
      "Training a VLM for robot understanding — multi-GPU pipeline with Hugging Face models, designed for real-world robotic perception and instruction following.",
    longDescription:
      "Built a production Vision-Language Model that enables robots to understand natural language instructions grounded in visual observations. The system integrates pre-trained VLMs from the Hugging Face ecosystem with custom fine-tuning on robotics-specific multimodal data.",
    highlights: [
      "Custom VLM architecture built on Hugging Face pre-trained models",
      "Multi-GPU training pipeline on A100 clusters with distributed data parallelism",
      "Integrated vision + text understanding for robotics-specific tasks",
      "Designed dataset preprocessing pipeline for multimodal robot data (images, language, sensor streams)",
      "Model evaluation and benchmarking framework for robotic perception tasks",
    ],
    tags: ["VLMs", "PyTorch", "Hugging Face", "Distributed Training", "Robotics"],
    featured: true,
    isPrivate: true,
  },
  {
    slug: "vision-action-model",
    title: "Vision-Action Model for Robot Control",
    description:
      "From perception to manipulation — a Vision-Language-Action model that converts visual understanding into precise robot actions for real-world manipulation tasks.",
    longDescription:
      "Extended the VLM into a full Vision-Language-Action architecture by attaching action-decoding heads that predict robot joint trajectories and gripper commands. The model converts high-level visual understanding and language instructions into executable robot actions, tested in both simulation and real hardware.",
    highlights: [
      "Action prediction head architecture converting VLM embeddings to robot trajectories",
      "Simulation-based evaluation pipeline with standard robotics benchmarks",
      "Policy inference system optimized for real-time control loops",
      "Zero-shot generalization across unseen manipulation tasks",
      "Bridged the gap from research prototype to production deployment on robot hardware",
    ],
    tags: ["VLA Models", "Imitation Learning", "PyTorch", "Robotics", "Simulation"],
    featured: true,
    isPrivate: true,
  },
  {
    slug: "async-ml-inference",
    title: "Async ML Inference System",
    description:
      "Real-time ML inference using asynchronous WebSocket architecture — streaming multimodal data (images, tensors, text) for low-latency robot control.",
    longDescription:
      "Designed and built a high-performance async inference server that serves ML model predictions over WebSocket connections. The system handles streaming multimodal inputs — camera images, proprioceptive tensors, and language commands — with sub-10ms overhead for real-time robotic control applications.",
    highlights: [
      "Async Python server with WebSocket-based client-server architecture",
      "Streaming multimodal data pipeline (images + tensors + text) over persistent connections",
      "Policy wrapper for serving VLA model inference in real-time control loops",
      "Concurrent request handling with GPU-aware batching",
      "Benchmarked latency and throughput under production-like robot workloads",
    ],
    tags: ["WebSocket", "Async Python", "ML Inference", "Robotics", "Systems"],
    featured: true,
    isPrivate: true,
  },
  {
    slug: "policy-simulation-integration",
    title: "ML Policy + Simulation Integration",
    description:
      "Integrating Vision-Language-Action models with robotics simulation environments for automated evaluation, training data generation, and policy validation.",
    longDescription:
      "Built the integration layer between trained VLA policies and robotics simulation environments. This system enables automated evaluation of manipulation policies across hundreds of task variations, collects training data from simulated rollouts, and validates policy behavior before deployment to real hardware.",
    highlights: [
      "Simulation environment integration with standard robotics frameworks",
      "Automated evaluation loop running hundreds of policy rollouts",
      "Metrics collection and analysis for success rate, trajectory quality, and generalization",
      "Architecture for seamless switching between simulation and real hardware inference",
      "Data collection pipeline for generating synthetic training demonstrations",
    ],
    tags: ["Simulation", "Robotics", "Policy Evaluation", "PyTorch", "Automation"],
    featured: false,
    isPrivate: true,
  },
  {
    slug: "rust-ml-inference-engine",
    title: "Python-to-Rust ML Inference Engine",
    description:
      "Rewrote the async ML inference server from Python to Rust for performance-critical robotics applications — with Python bindings for interoperability.",
    longDescription:
      "Converted the production async ML inference server from Python to Rust to meet the latency and throughput requirements of real-time robot control. The Rust implementation provides significant performance improvements while maintaining Python interoperability through PyO3 bindings, allowing ML researchers to continue using Python for model development.",
    highlights: [
      "Async Rust server using Tokio for high-concurrency inference serving",
      "PyO3 Python bindings for seamless interoperability with PyTorch models",
      "Significant latency reduction compared to the Python implementation",
      "Zero-copy data transfer for tensor and image data",
      "Production-grade error handling and connection management for robot systems",
    ],
    tags: ["Rust", "Async", "ML Inference", "PyO3", "Systems Programming"],
    featured: true,
    isPrivate: true,
  },

  // ── Public GitHub repos ──
  {
    slug: "robotic-transformer-1",
    title: "Robotic Transformer 1",
    description:
      "Implementation of RT-1 architecture for robotic manipulation — transformer-based policy for real-world task execution from demonstrations.",
    longDescription:
      "A faithful implementation of the RT-1 (Robotic Transformer) architecture that maps visual observations and language instructions to robot actions. Designed for real-world robotic manipulation tasks with efficient tokenization of actions and images.",
    tags: ["PyTorch", "Transformers", "Robotics", "Imitation Learning"],
    githubUrl: "https://github.com/kandapagari/robotic_transformer_1",
    featured: true,
  },
  {
    slug: "calypso",
    title: "Calypso",
    description:
      "AI-powered tool for automated analysis and processing, leveraging modern deep learning techniques.",
    tags: ["Python", "ML", "Automation"],
    githubUrl: "https://github.com/kandapagari/calypso",
    featured: false,
  },
  {
    slug: "rust-packer",
    title: "Rust Packer",
    description:
      "A bin-packing / rectangle-packing algorithm implemented in Rust for efficient 2D space allocation.",
    tags: ["Rust", "Algorithms", "Optimization"],
    githubUrl: "https://github.com/kandapagari/rust_packer",
    featured: false,
  },
  {
    slug: "finetune-llms",
    title: "Finetune LLMs",
    description:
      "Scripts and pipelines for fine-tuning large language models with LoRA and QLoRA on custom datasets.",
    tags: ["LLMs", "LoRA", "Fine-tuning", "Transformers"],
    githubUrl: "https://github.com/kandapagari/finetune_llms",
    featured: true,
  },
  {
    slug: "simutrade",
    title: "SimuTrade",
    description:
      "Algorithmic trading simulator with backtesting capabilities and real-time market data integration.",
    tags: ["Python", "Finance", "Algorithms", "Web"],
    githubUrl: "https://github.com/kandapagari/SimuTrade",
    featured: false,
  },
  {
    slug: "dalle-st",
    title: "DALL-E Style Transfer",
    description:
      "Neural style transfer experiments using DALL-E inspired techniques for artistic image generation.",
    tags: ["Python", "GANs", "Computer Vision", "Generative AI"],
    githubUrl: "https://github.com/kandapagari/dalle-st",
    featured: false,
  },
  {
    slug: "rhodes",
    title: "Rhodes",
    description:
      "A project for data pipeline orchestration and ML workflow management.",
    tags: ["Python", "ML", "Data Pipelines"],
    githubUrl: "https://github.com/kandapagari/rhodes",
    featured: false,
  },
  {
    slug: "dl-for-wall-characteristics",
    title: "DL for Wall Characteristics",
    description:
      "Deep learning models for tissue segmentation in histological images of intracranial aneurysm walls — connected to published research.",
    tags: ["PyTorch", "Medical Imaging", "Computer Vision", "Research"],
    githubUrl: "https://github.com/kandapagari/DLforWallCharacteristics",
    featured: false,
  },
  {
    slug: "face-recognition",
    title: "Face Recognition",
    description:
      "Real-time face detection and recognition system using deep learning and OpenCV.",
    tags: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/kandapagari/face_recognition",
    featured: false,
  },
  {
    slug: "102-flower-classification",
    title: "102 Flower Classification",
    description:
      "Transfer learning approach for fine-grained visual classification on the Oxford 102 Flower dataset.",
    tags: ["PyTorch", "Transfer Learning", "Computer Vision"],
    githubUrl: "https://github.com/kandapagari/102FlowerClassification",
    featured: false,
  },
  {
    slug: "nyx-ai",
    title: "Nyx AI",
    description:
      "An AI assistant framework for task automation and intelligent interaction.",
    tags: ["Python", "LLMs", "AI", "Automation"],
    githubUrl: "https://github.com/kandapagari/nyx-ai",
    featured: false,
  },
  {
    slug: "autocommit",
    title: "AutoCommit",
    description:
      "CLI tool that automatically generates meaningful git commit messages using AI.",
    tags: ["Python", "Git", "LLMs", "CLI", "Tools"],
    githubUrl: "https://github.com/kandapagari/AutoCommit",
    featured: false,
  },
  {
    slug: "chip8-emulator-rust",
    title: "CHIP-8 Emulator (Rust)",
    description:
      "A CHIP-8 emulator written in Rust — classic computing meets modern systems programming.",
    tags: ["Rust", "Emulation", "Systems Programming"],
    githubUrl: "https://github.com/kandapagari/chip8-emulator-rust",
    featured: false,
  },
];

// ── Publications ──

export const publications: Publication[] = [
  {
    id: "pub-tissue",
    title:
      "Tissue Segmentation in Histologic Images of Intracranial Aneurysm Wall",
    authors: [
      "A. Niemann",
      "A. Talagini",
      "P. Kandapagari",
      "B. Preim",
      "S. Saalfeld",
    ],
    venue: "Interdisciplinary Neurosurgery, Vol. 26, 101307",
    year: 2021,
    citations: 4,
    url: "https://scholar.google.de/citations?view_op=view_citation&hl=en&user=EkSY9wUAAAAJ&citation_for_view=EkSY9wUAAAAJ:u5HHmVD_uO8C",
    type: "paper",
  },
  {
    id: "patent-animal",
    title: "Animal Physical Parameter Estimation by Image Processing",
    authors: ["P. Kandapagari", "et al."],
    venue: "European Patent Application No. 23207432.8",
    year: 2024,
    type: "patent",
  },
];

// ── Skills ──

export const skills: Skill[] = [
  // Machine Learning & AI
  { name: "Vision-Language Models (VLMs)", category: "Machine Learning & AI" },
  { name: "Multimodal Learning", category: "Machine Learning & AI" },
  { name: "Foundation Models", category: "Machine Learning & AI" },
  { name: "Transformers", category: "Machine Learning & AI" },
  { name: "Model Training & Fine-Tuning", category: "Machine Learning & AI" },
  { name: "Model Evaluation & Benchmarking", category: "Machine Learning & AI" },
  { name: "GANs", category: "Machine Learning & AI" },
  { name: "Transfer Learning", category: "Machine Learning & AI" },
  { name: "Knowledge Distillation", category: "Machine Learning & AI" },
  { name: "Semi-Supervised Learning", category: "Machine Learning & AI" },
  { name: "RAG", category: "Machine Learning & AI" },
  { name: "Dataset Preparation & Preprocessing", category: "Machine Learning & AI" },

  // Robotics AI
  { name: "Vision-Action Models", category: "Robotics AI" },
  { name: "Imitation Learning", category: "Robotics AI" },
  { name: "Robot Action Prediction", category: "Robotics AI" },
  { name: "Vision-Based Manipulation", category: "Robotics AI" },
  { name: "Simulation-Based Evaluation", category: "Robotics AI" },
  { name: "Policy Inference Pipelines", category: "Robotics AI" },
  { name: "Object Detection & Tracking", category: "Robotics AI" },
  { name: "Semantic Segmentation", category: "Robotics AI" },

  // Systems & Infrastructure
  { name: "Async ML Inference", category: "Systems & Infrastructure" },
  { name: "WebSocket Architectures", category: "Systems & Infrastructure" },
  { name: "GPU Training Pipelines", category: "Systems & Infrastructure" },
  { name: "Multi-GPU / Distributed Training", category: "Systems & Infrastructure" },
  { name: "AWS SageMaker / HyperPod", category: "Systems & Infrastructure" },
  { name: "Docker", category: "Systems & Infrastructure" },
  { name: "Kubernetes", category: "Systems & Infrastructure" },
  { name: "TensorRT", category: "Systems & Infrastructure" },
  { name: "ONNX", category: "Systems & Infrastructure" },
  { name: "CUDA", category: "Systems & Infrastructure" },
  { name: "GitLab CI/CD", category: "Systems & Infrastructure" },
  { name: "MLflow", category: "Systems & Infrastructure" },
  { name: "Linux", category: "Systems & Infrastructure" },

  // Programming
  { name: "Python", category: "Programming" },
  { name: "Rust", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "PyTorch", category: "Programming" },
  { name: "Hugging Face", category: "Programming" },
  { name: "LangChain", category: "Programming" },
  { name: "OpenCV", category: "Programming" },
  { name: "SQL", category: "Programming" },
  { name: "Bash", category: "Programming" },
];

// ── Education ──

export const education: Education[] = [
  {
    degree: "M.Sc. Digital Engineering (Computer Science)",
    institution: "Otto-von-Guericke University Magdeburg",
    location: "Magdeburg, Germany",
    dates: "Oct 2018 — Jun 2021",
    details: "Focus: Deep Learning, Computer Vision, Neural Networks. GPA: 1.8 (German scale).",
  },
  {
    degree: "B.Tech. Mechanical Engineering",
    institution: "JNTUA College of Engineering, Ananthapuram",
    location: "Ananthapuram, India",
    dates: "2011 — 2015",
    details: "Score: 75%.",
  },
];

// ── Stats for landing page ──

export const stats = [
  { label: "Years at Agile Robots", value: 4 },
  { label: "Original Projects", value: 30 },
  { label: "Patent + Publication", value: 2 },
];
