import type { Project } from "@/types/project";

export interface DetailedProject extends Project {
  slug: string;
}

export const featuredProjects: readonly DetailedProject[] = [
  {
    id: "ai-resume-screening",
    slug: "ai-resume-screening",
    name: "AI Resume Screening System",
    gitURL: "https://github.com/SAIKUMAR039/ai-resume-screening",
    liveURL: "https://ai-resume-screening-plum.vercel.app/",
    description:
      "A full-stack NLP application for resume parsing, skill extraction, job-description matching and candidate ranking.",
    technologies: [
      "Python",
      "spaCy",
      "FastAPI",
      "React.js",
      "PostgreSQL",
    ],
    image: "/projects/ai-resume-screening.png",
    year: "2026",
    features: [
      "Resume text parsing and structured profile extraction",
      "Candidate-to-job keyword and skills matching",
      "Weighted scoring and candidate ranking workflow",
      "Interactive recruiter dashboard with visual score breakdowns",
      "Fast asynchronous FastAPI endpoints",
    ],
    problemStatement:
      "Hiring managers manually reviewing hundreds of PDF resumes with varied formatting encounter inconsistent screening and delayed shortlisting.",
    solution:
      "Engineered an automated screening pipeline utilizing spaCy NLP techniques for structured candidate extraction, weighted semantic similarity against job requirements, and an interactive React dashboard for ranked reporting.",
    architecture: {
      overview:
        "Modern decoupled architecture featuring a React single-page interface communicating with an asynchronous Python FastAPI service backed by a PostgreSQL relational database.",
      details: [
        "PDF text extraction and normalization pipeline",
        "spaCy entity matching for technical skills and domain keywords",
        "PostgreSQL schema for parsed candidate profiles and vacancy listings",
        "Asynchronous FastAPI endpoints handling document processing",
        "Interactive React frontend with candidate ranking scorecards",
      ],
    },
    highlights: [
      "Automated extraction from unstructured resume files",
      "Weighted keyword and entity similarity scoring",
      "Asynchronous request handling for fast candidate ingestion",
      "Clean, recruiter-friendly review dashboard",
    ],
  },
  {
    id: "whatsapp-appointment",
    slug: "whatsapp-appointment",
    name: "WhatsApp Appointment Booking",
    gitURL: "https://github.com/SAIKUMAR039/Whats-app_appointment",
    liveURL: "https://whats-app-appointment.vercel.app/",
    description:
      "A web-based appointment workflow designed around WhatsApp customer communication, real-time availability, and slot management.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/projects/whatsapp-appointment.svg",
    year: "2025",
    features: [
      "Online appointment booking calendar",
      "Real-time schedule and slot management",
      "Responsive mobile-first user interface",
      "Conflict-free time slot selection",
      "Instant WhatsApp confirmation triggers",
    ],
    problemStatement:
      "Small service businesses experience client drop-offs when scheduling requires third-party mobile app downloads or cumbersome registration forms.",
    solution:
      "Developed a lightweight, mobile-responsive web scheduling interface connected to WhatsApp communication triggers, allowing clients to select open slots with instant booking confirmation.",
    architecture: {
      overview:
        "Next.js React application with server-side rendering, modular date/time slot validation logic, and direct WhatsApp communication formatting.",
      details: [
        "Interactive mobile-first appointment calendar with slot availability checks",
        "Conflict detection logic preventing double-booking of time slots",
        "Dynamic WhatsApp message payload generation with booking references",
        "Accessible, lightweight UI components built with Tailwind CSS",
      ],
    },
    highlights: [
      "Zero app download required for clients",
      "Real-time slot availability checking",
      "Direct WhatsApp messaging integration",
      "Mobile-optimized touch interface",
    ],
  },
  {
    id: "nerdy-ai-studio",
    slug: "nerdy-ai-studio",
    name: "Nerdy AI Studio",
    gitURL: "https://github.com/SAIKUMAR039/Nerdy",
    liveURL: "https://nerdyn.saikumarthota.live/",
    description:
      "An AI productivity platform containing specialized tools for coding, writing, social content, and business workflows.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini API",
      "Stripe",
    ],
    image: "/projects/nerdy-ai-studio.png",
    year: "2025",
    features: [
      "Specialized AI assistance tools for code explanation and writing",
      "Supabase user authentication and session management",
      "Persistent generation history tracking",
      "Stripe payment integration for premium tiers",
      "Responsive dark theme workspace",
    ],
    problemStatement:
      "Engineers and creators repeatedly switch across multiple separate AI tools to explain unfamiliar codebases, debug syntax, and draft clean documentation.",
    solution:
      "Built a consolidated AI productivity workbench combining prompt-tuned workflows, Supabase PostgreSQL authentication and persistent history, and Stripe subscription support.",
    architecture: {
      overview:
        "React 18 single-page application built with Vite and TypeScript, connected to Supabase for authentication and database persistence, communicating with Gemini API for generative streaming.",
      details: [
        "Supabase Auth with Row Level Security (RLS) policies",
        "Structured system prompting for code explanations and syntax breakdown",
        "Persistent generation history with instant Markdown preview and copy",
        "Stripe payment integration for workflow access",
      ],
    },
    highlights: [
      "Instant code explanation with syntax formatting",
      "Secure user sessions and personal generation history",
      "Fast response rendering using lightweight React components",
      "Clean typography and dark-mode aesthetic",
    ],
  },
  {
    id: "smart-parking",
    slug: "smart-parking",
    name: "Smart Parking System",
    gitURL: "https://github.com/SAIKUMAR039/IOT_parking_system",
    liveURL: "https://github.com/SAIKUMAR039/IOT_parking_system",
    description:
      "An IoT parking monitoring system built with ESP32 sensors, an asynchronous FastAPI backend, PostgreSQL database, and a React dashboard deployed on AWS.",
    technologies: [
      "ESP32",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "AWS",
    ],
    image: "/projects/iot-parking.svg",
    year: "2025",
    features: [
      "Real-time parking space occupancy telemetry with ESP32",
      "FastAPI backend for continuous telemetry processing",
      "PostgreSQL database on AWS RDS for slot state persistence",
      "Live React dashboard showing bay availability",
      "Hosted on AWS EC2 cloud infrastructure",
    ],
    problemStatement:
      "Drivers waste time, fuel, and patience searching for available parking in commercial facilities, while lot operators lack real-time visibility into bay occupancy.",
    solution:
      "Engineered an end-to-end IoT monitoring solution combining ESP32 ultrasonic telemetry, high-throughput Python FastAPI ingestion services, AWS cloud infrastructure (EC2 + RDS PostgreSQL), and a live React dashboard.",
    architecture: {
      overview:
        "ESP32 microcontrollers send sensor readings over HTTP to a Python FastAPI backend deployed on AWS EC2, storing state transitions in AWS RDS PostgreSQL and pushing updates to a React web dashboard.",
      details: [
        "ESP32 hardware telemetry with ultrasonic distance threshold calibration",
        "FastAPI REST endpoints for sensor data ingestion and slot status updates",
        "PostgreSQL on AWS RDS for parking transaction and occupancy records",
        "React frontend providing a real-time visual map of occupied and open bays",
        "Deployed on AWS EC2 with systemd process management",
      ],
    },
    highlights: [
      "Sub-second occupancy state updates from sensor to web UI",
      "Cloud backend on AWS EC2 and managed PostgreSQL on AWS RDS",
      "Scalable REST API architecture handling multi-bay sensor streams",
      "Live React dashboard for facility operators and drivers",
    ],
  },
];

export const allProjects: readonly Project[] = featuredProjects;

export const projects = featuredProjects;

export function getProjectBySlug(slug: string): DetailedProject | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}
