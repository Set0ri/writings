

import type { Writing, Project, Investment, Experience, Education } from './types';

export {
  writings,
  newestWritings,
  popularWritings,
  technoFeudalismWriting,
  wargamingAiAlignmentWriting,
  aiDataEconomyWriting,
  latentAstronautsWriting,
  sailorsOfThePossibleWriting,
  sailorsOfTheLatentMultiverseWriting,
  aWarningWriting,
} from './writings';

export const projects: Project[] = [
    {
        title: "Fractal Machine Learning: The Godelian Fractal (C-AWKT)",
        slug: "fractal-machine-learning",
        image: "",
        date: "2022 - 2025",
        description: "Resolving the tension between finite computational resources and the infinite complexity of the 'Ground Truth' via Contractive Adaptive Wavelet-Kronecker Transformers.",
        details: `**Live Research Preview:** [The Gödelian Fractal](https://c-awkt-the-g-delian-fractal-architecture-400924534694.us-west1.run.app/)

**01. The Crisis: A Category Error** We are attempting to map a Fractal Territory using a Euclidean Map. The "Scaling Hypothesis" assumes a smooth manifold of semantic truth. However, Gödel's Incompleteness Theorems and Chaitin's number suggest that the boundary of semantic truth is not smooth, but infinitely recursive.

As sampling granularity increases ($\epsilon \\to 0$), the measured length of the semantic boundary diverges:

$$ L(\\epsilon) \\to \\infty $$

Standard Transformers assume fixed $d_{model}$, causing information loss (The Resolution Paradox).

**02. The Mathematics: Formalizing The Resolution Gap Theorem 3.1: Uniform Sampling.** Standard Multi-Head Attention (MHA) computes a correlation matrix between all pairs. On a fractal set of dimension $d < 1$, this diverges. The cost per unit of information grows exponentially with sequence length:

$$ C_{MHA} / I_N \\propto N^{2} / N^{d_H} = N^{2 - d_H} $$

To solve this, we approximate weights using the **Hutchinson Operator**:

$$ W(B) = \\bigcup_{n=1}^N w_n(B) $$

where a small generator matrix "copies" itself recursively to fill parameter space.`,
        technicalDetails: `**03. The Architecture: The C-AWKT Protocol** The architecture introduces three novel components to map the recursive boundary:

1. **L-MRWA (Learnable Multi-Resolution Wavelet Attention):** Replaces standard MHA. It uses wavelet transforms to adapt attention mechanisms to the fractal dimension of the input, preventing divergence on rough manifolds.

2. **C-BK-FFN (Contractive Block-wise Kronecker FFN):** Replaces dense matrices with algebraic fractals using Kronecker Products:

$$ vec(AXB) = (B^T \\otimes A)vec(X) $$

This allows the network to simulate infinite depth with finite memory (Recursive Depth $k=2$).

3. **Dynamic Topology:** Anisotropic Parameter Allocation via Diffusion. The network topology adapts in real-time, allocating more "fractal depth" (parameters) to regions of high semantic density.`,
        architectureDiagram: "",
        codeExample: {
            language: "python",
            code: `
import torch
import torch.nn as nn

class ContractiveKroneckerLayer(nn.Module):
    """
    Approximates a fractal weight matrix using Kronecker Products.
    Replaces dense matrices with algebraic fractals.
    """
    def __init__(self, dim_a, dim_b):
        super().__init__()
        # Factor matrices are significantly smaller than the full dense matrix
        self.A = nn.Parameter(torch.randn(dim_a, dim_a))
        self.B = nn.Parameter(torch.randn(dim_b, dim_b))
        self.activation = nn.GELU()

    def forward(self, x):
        # Implements vec(AXB) = (B^T (x) A) vec(X)
        # Computational Complexity: Linear vs Quadratic scaling
        
        b_size, _ = x.shape
        x_reshaped = x.view(b_size, self.A.shape[0], self.B.shape[0])
        
        # Apply algebraic fractal transformation (Iterated Function System)
        # Y = A * X * B
        out = torch.matmul(self.A, x_reshaped) 
        out = torch.matmul(out, self.B)
        
        return self.activation(out.view(b_size, -1))
`
        },
        analysis: `**04. Empirical Validation: The Efficiency Frontier**
The C-AWKT architecture establishes a new efficiency frontier, validating the fractal hypothesis.

- **Scaling Laws:** C-AWKT scales with a steeper exponent (**$\\alpha = 0.15$**) compared to Standard Models (**$\\alpha = 0.09$**).
- **Smartness Parity:** Achieves parity with a **124M** parameter dense model using only **45M** parameters (**96% Smaller** parameter space).
- **Throughput:** **68k tokens/sec** (Linear Complexity) vs Quadratic for standard Transformers.
- **Memory:** **14.2GB** vs 24.5GB for equivalent context window.

The "Resolution Gap" explodes at long contexts for standard transformers, whereas the fractal approach maintains linear scaling.`,
        roi: {
            title: "The Efficiency Frontier Impact",
            calculation: `
**1. Training Efficiency (Compute):**
   - **48% Fewer FLOPs** for equivalent loss.
   - Steeper scaling law implies exponential savings at scale.

**2. Inference Throughput:**
   - **68k tokens/sec** throughput.
   - Linear complexity for infinite context approximation.

**3. Model Size & Memory:**
   - **96% Smaller** parameter space (45M vs 124M).
   - **14.2GB** Memory footprint.
`
        },
        skills: ["Fractal Geometry", "Wavelet Transforms", "Kronecker Products", "PyTorch", "Information Theory"]
    },
    {
        title: "ApeNET",
        slug: "apenet",
        image: "",
        date: "2025",
        description: "A Reinforcement Learning framework for generalized AI tool use, enabling federated learning of 'skill cartridges.'",
        details: "ApeNET is a framework designed to address a fundamental limitation in modern AI: the lack of robust, generalizable tool use. It proposes a Reinforcement Learning-based system for training agents to interact with digital tools (APIs, UIs). The knowledge is encapsulated in modular 'skill cartridges' that can be developed and shared.",
        technicalDetails: "The proposed architecture is a distributed system utilizing federated learning to train specialized 'skill cartridges' on-device, preserving user privacy. A central meta-model would maintain a generalized policy for tool interaction, fine-tuned by these cartridges. The agent's state representation is multimodal, integrating visual context (pixels), structural information (DOM), and natural language instructions. Training would leverage a hybrid of Proximal Policy Optimization (PPO) for exploration and behavioral cloning from expert demonstrations for sample efficiency.",
        architectureDiagram: "",
        codeExample: {
            language: "json",
            code: `
// Example: "skill_cartridge.json" manifest
{
  "name": "calendar_scheduler",
  "version": "1.0",
  "description": "Schedules events on Google Calendar.",
  "tools": [
    {
      "name": "create_event",
      "description": "Creates a new calendar event.",
      "parameters": {
        "title": "string",
        "start_time": "datetime",
        "end_time": "datetime",
        "attendees": ["string"]
      }
    }
  ],
  "model_weights": "weights.bin"
}
`
        },
        analysis: "Current LLMs function primarily as 'reasoning engines' and lack reliable 'acting engines.' ApeNET represents a paradigm shift from pure language modeling to embodied agency within digital environments. By decentralizing skill acquisition through federated learning, the framework addresses both privacy and scalability challenges. This could enable a novel ecosystem—an 'App Store for AI skills'—where developers can train and deploy specialized agents, potentially triggering a Cambrian explosion in AI-driven automation.",
        roi: {
            title: "Platform Economy Valuation (Theoretical)",
            calculation: `
**1. Addressable Market - Personal & Enterprise Automation:**
   - Knowledge worker tasks that can be automated.
   - Global Knowledge Worker Population: ~1 Billion
   - Potential Subscription Value per year: $200
   - Total Addressable Market (TAM): **$200 Billion/year**

**2. Platform Take Rate:**
   - Similar to Apple's App Store, the platform could take a 15-30% cut of all transactions in the skill marketplace.

**3. Valuation Multiple:**
   - Successful platform economies often command a 20-50x revenue multiple.
   - **Theoretical Valuation:** If the platform captures 5% of the TAM ($10B revenue), its valuation could be in the **$200B - $500B range.**
`
        },
        skills: ["Reinforcement Learning", "Federated Learning", "Python", "LLMs", "Distributed Systems"]
    },
];

export const investments: Investment[] = [
    {
        name: "Scale AI",
        logo: "S",
        description: "The data infrastructure for AI. Providing high-quality training data for leading ML models.",
        date: "2024"
    },
     {
        name: "Mercor",
        logo: "M",
        description: "AI hiring platform matching talent with opportunity. The 'neutral utility' for the AI labor market.",
        date: "2024"
    },
    {
        name: "Harvey",
        logo: "H",
        description: "Generative AI for elite law firms. Verticalized LLM application for the legal sector.",
        date: "2023"
    }
];

export const experienceHistory: Experience[] = [
    {
        company: "Setori",
        logo: "https://cdn.prod.website-files.com/63b9f85c6ebf89737577088e/6750d6f769c8a142abc4a4e9_setori_logo.png",
        roles: [
            {
                title: "Director of Machine Learning & Co-Founder",
                duration: "Aug 2022 - Present",
                description: "Lead the building and scaling of Setori with a focus on GTM & Security.\nEngineered our end-to-end AI safety & risk platform including continuous red-teaming pipelines and adversarial defense systems (core infrastructure to sandbox, evaluate, and mitigate high-risk agentic exposure)",
            }
        ]
    },
    {
        company: "Uber",
        logo: "https://i.imgur.com/NGQi35j.png",
        location: "San Francisco Bay Area",
        roles: [
            {
                title: "Head of Machine Learning Platform",
                duration: "2018 - 2020 · 2 yrs",
                description: "Led strategy, scaling, and security for Michelangelo - managing growth to 1B+ QPS and 10K+ models deployed into production",
            },
            {
                title: "Senior Product Manager, Machine Learning",
                duration: "Nov 2015 - 2018 · 2 yrs 3 mos",
                description: "",
            }
        ]
    },
    {
        company: "MASC Research",
        logo: "https://i.imgur.com/PEW3VXe.png",
        roles: [
            {
                title: "Machine Learning & Computer Vision Research UW",
                duration: "2014 - 2016 · 2 yrs",
                description: "",
            }
        ]
    },
    {
        company: "Microsoft",
        logo: "https://i.imgur.com/MBrJuhX.png",
        location: "Redmond, WA",
        roles: [
            {
                title: "Research PM, Machine Learning, Kinect & Hololens",
                duration: "2011 - 2013 · 2 yrs",
                description: "Machine learning and computer vision features on the first Kinect sensor and Hololens, prototyping novel hardware and augmented reality applications with Microsoft Research",
            }
        ]
    }
];

export const educationHistory: Education[] = [
    {
        institution: "University of Waterloo",
        logo: "https://i.imgur.com/PEW3VXe.png",
        degree: "BASc, MASc, Systems Design Engineering",
        duration: "2009 - 2015",
        description: "Computer Vision and Machine Learning Research",
    }
];

export const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/loganjeya',
    x: 'https://x.com/loganjeya',
    setori: 'https://www.setori.ai/',
    patreon: 'https://www.patreon.com/loganjeya',
    email: 'logan@setori.ai',
    emailLink: 'mailto:logan@setori.ai',
};


export const resumeData = {
    skills: [
        "ML Infra",
        "ML Safety Systems",
        "Product Management",
        "AI Companions",
        "Computer Vision"
    ],
    research: [
        { year: "2016", publication: "BMVC", title: "Fully Connected End to End Voxel-wise Segmentation using 3-CNN", role: "First Author" },
        { year: "2016", publication: "CRV", title: "KinectScenes: Real-time RGB-D Fusion for Large Dynamic Scenes", role: "First Author" },
        { year: "2015", publication: "CVR", title: "Diagnosing Cardiac Deformations using 3D Optical Flow", role: "First Author" },
        { year: "2015", publication: "CVIS", title: "Dense Depth Reconstruction using TOF Sensors", role: "First Author" },
        { year: "2014-16", publication: "Master’s Thesis", title: "Real time pose recognition and visual Behavioural understanding system for animals\nusing state of art vision and machine learning techniques.", role: "University of Waterloo" }
    ],
    awardsAndInterests: [
        { label: "Cycling" },
        { label: "Neuroscience" },
        { label: "Lithography" },
        { label: "Reading" },
        { label: "Football (Soccer)" },
        { label: "Writing" },
        { label: "One Piece" },
    ]
};