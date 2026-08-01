"use client";

export interface SaaSPlanPreset {
  name: string;
  monthlyCost: number;
  billingCycle: "monthly" | "yearly";
}

export interface CatalogSaaSTool {
  id: string;
  name: string;
  category: string;
  iconText: string;
  iconBg: string;
  defaultPlan: string;
  plans: SaaSPlanPreset[];
  description: string;
}

export const MASTER_SAAS_CATALOG: CatalogSaaSTool[] = [
  {
    "id": "slack",
    "name": "Slack Pro",
    "category": "Communication",
    "iconText": "SL",
    "iconBg": "#611f69",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 8.75,
        "billingCycle": "monthly"
      },
      {
        "name": "Business+",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 32.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Team messaging and channel collaboration platform."
  },
  {
    "id": "zoom",
    "name": "Zoom Workplace",
    "category": "Communication",
    "iconText": "ZM",
    "iconBg": "#2d8cff",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 15.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 21.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 30.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Video conferencing and virtual webinar meeting platform."
  },
  {
    "id": "microsoft-teams",
    "name": "Microsoft Teams",
    "category": "Communication",
    "iconText": "MS",
    "iconBg": "#5b5fc7",
    "defaultPlan": "Essentials",
    "plans": [
      {
        "name": "Essentials",
        "monthlyCost": 4.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business Basic",
        "monthlyCost": 6.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business Standard",
        "monthlyCost": 12.5,
        "billingCycle": "monthly"
      }
    ],
    "description": "Chat, meetings, and collaboration in Microsoft 365."
  },
  {
    "id": "discord",
    "name": "Discord Nitro",
    "category": "Communication",
    "iconText": "DC",
    "iconBg": "#5865f2",
    "defaultPlan": "Nitro",
    "plans": [
      {
        "name": "Basic",
        "monthlyCost": 2.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Nitro",
        "monthlyCost": 9.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Voice, video, and text communication platform for communities."
  },
  {
    "id": "loom",
    "name": "Loom Business",
    "category": "Communication",
    "iconText": "LM",
    "iconBg": "#625df5",
    "defaultPlan": "Business",
    "plans": [
      {
        "name": "Starter",
        "monthlyCost": 0.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 12.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Async video messaging and screen recording tool."
  },
  {
    "id": "webex",
    "name": "Cisco Webex",
    "category": "Communication",
    "iconText": "WX",
    "iconBg": "#000000",
    "defaultPlan": "Meet",
    "plans": [
      {
        "name": "Meet",
        "monthlyCost": 14.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Suite",
        "monthlyCost": 22.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 35.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Enterprise video conferencing and cloud calling."
  },
  {
    "id": "ringcentral",
    "name": "RingCentral MVP",
    "category": "Communication",
    "iconText": "RC",
    "iconBg": "#0073ae",
    "defaultPlan": "Core",
    "plans": [
      {
        "name": "Core",
        "monthlyCost": 20.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Advanced",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Ultra",
        "monthlyCost": 35.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Cloud phone system, message, and video platform."
  },
  {
    "id": "dialpad",
    "name": "Dialpad Business",
    "category": "Communication",
    "iconText": "DP",
    "iconBg": "#9b51e0",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 40.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "AI-powered cloud business phone and contact center."
  },
  {
    "id": "telegram-premium",
    "name": "Telegram Premium",
    "category": "Communication",
    "iconText": "TG",
    "iconBg": "#229ed9",
    "defaultPlan": "Premium",
    "plans": [
      {
        "name": "Monthly",
        "monthlyCost": 4.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Yearly",
        "monthlyCost": 35.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Cloud-based fast messaging with premium speed limits."
  },
  {
    "id": "mattermost",
    "name": "Mattermost Cloud",
    "category": "Communication",
    "iconText": "MM",
    "iconBg": "#0072c6",
    "defaultPlan": "Professional",
    "plans": [
      {
        "name": "Professional",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 20.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Open-source secure collaboration platform for dev teams."
  },
  {
    "id": "element-io",
    "name": "Element Matrix",
    "category": "Communication",
    "iconText": "EL",
    "iconBg": "#0dbd8b",
    "defaultPlan": "Business",
    "plans": [
      {
        "name": "Basic",
        "monthlyCost": 5.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 18.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Decentralized end-to-end encrypted messaging."
  },
  {
    "id": "rocketchat",
    "name": "Rocket.Chat Enterprise",
    "category": "Communication",
    "iconText": "RC",
    "iconBg": "#f5455c",
    "defaultPlan": "Starter",
    "plans": [
      {
        "name": "Starter",
        "monthlyCost": 4.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 7.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Omnichannel customer and internal chat platform."
  },
  {
    "id": "chanty",
    "name": "Chanty Team",
    "category": "Communication",
    "iconText": "CH",
    "iconBg": "#eb5757",
    "defaultPlan": "Business",
    "plans": [
      {
        "name": "Free",
        "monthlyCost": 0.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 3.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Simple AI team chat and task management tool."
  },
  {
    "id": "whereby",
    "name": "Whereby Business",
    "category": "Communication",
    "iconText": "WB",
    "iconBg": "#fff200",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 6.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 9.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Easy browser-based video meeting rooms with zero downloads."
  },
  {
    "id": "flock",
    "name": "Flock PRO",
    "category": "Communication",
    "iconText": "FK",
    "iconBg": "#25c276",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 4.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 8.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Team communication and workflow management app."
  },
  {
    "id": "spike",
    "name": "Spike Email Chat",
    "category": "Communication",
    "iconText": "SK",
    "iconBg": "#8b5cf6",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 6.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 12.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Conversational email and unified team chat inbox."
  },
  {
    "id": "goto-meeting",
    "name": "GoTo Meeting",
    "category": "Communication",
    "iconText": "GT",
    "iconBg": "#f39c12",
    "defaultPlan": "Professional",
    "plans": [
      {
        "name": "Professional",
        "monthlyCost": 12.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 16.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "HD video conferencing for virtual team meetings."
  },
  {
    "id": "bluejeans",
    "name": "BlueJeans Meetings",
    "category": "Communication",
    "iconText": "BJ",
    "iconBg": "#1e90ff",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 9.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 13.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Premium video meetings by Verizon."
  },
  {
    "id": "zulip",
    "name": "Zulip Cloud",
    "category": "Communication",
    "iconText": "ZP",
    "iconBg": "#52c41a",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 6.67,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 12.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Threaded team chat organized by topic."
  },
  {
    "id": "pumble",
    "name": "Pumble Pro",
    "category": "Communication",
    "iconText": "PB",
    "iconBg": "#854d0e",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 2.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 6.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Affordable team chat app with unlimited history."
  },
  {
    "id": "openphone",
    "name": "OpenPhone Business",
    "category": "Communication",
    "iconText": "OP",
    "iconBg": "#10b981",
    "defaultPlan": "Starter",
    "plans": [
      {
        "name": "Starter",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 23.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Modern business phone system for team collaborative calling."
  },
  {
    "id": "grasshopper",
    "name": "Grasshopper Virtual Phone",
    "category": "Communication",
    "iconText": "GH",
    "iconBg": "#16a34a",
    "defaultPlan": "Solo",
    "plans": [
      {
        "name": "Solo",
        "monthlyCost": 29.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Partner",
        "monthlyCost": 49.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Small Business",
        "monthlyCost": 89.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Virtual phone number and toll-free forwarding for small business."
  },
  {
    "id": "nextiva",
    "name": "Nextiva Business Communication",
    "category": "Communication",
    "iconText": "NX",
    "iconBg": "#2563eb",
    "defaultPlan": "Essential",
    "plans": [
      {
        "name": "Essential",
        "monthlyCost": 18.95,
        "billingCycle": "monthly"
      },
      {
        "name": "Professional",
        "monthlyCost": 22.95,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 32.95,
        "billingCycle": "monthly"
      }
    ],
    "description": "VoIP business phone and unified customer service communication."
  },
  {
    "id": "vonage",
    "name": "Vonage Business Communications",
    "category": "Communication",
    "iconText": "VG",
    "iconBg": "#000000",
    "defaultPlan": "Mobile",
    "plans": [
      {
        "name": "Mobile",
        "monthlyCost": 19.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Premium",
        "monthlyCost": 29.99,
        "billingCycle": "monthly"
      },
      {
        "name": "Advanced",
        "monthlyCost": 39.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Cloud phone system and programmable voice communication APIs."
  },
  {
    "id": "8x8",
    "name": "8x8 Express Work",
    "category": "Communication",
    "iconText": "8X",
    "iconBg": "#ea580c",
    "defaultPlan": "Express",
    "plans": [
      {
        "name": "Express",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      },
      {
        "name": "X2",
        "monthlyCost": 28.0,
        "billingCycle": "monthly"
      },
      {
        "name": "X4",
        "monthlyCost": 57.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Integrated voice, video, team chat and contact center."
  },
  {
    "id": "aircall",
    "name": "Aircall Phone",
    "category": "Communication",
    "iconText": "AC",
    "iconBg": "#059669",
    "defaultPlan": "Essentials",
    "plans": [
      {
        "name": "Essentials",
        "monthlyCost": 30.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Professional",
        "monthlyCost": 50.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Cloud call center software for sales and support teams."
  },
  {
    "id": "talkdesk",
    "name": "Talkdesk CX Cloud",
    "category": "Communication",
    "iconText": "TD",
    "iconBg": "#7c3aed",
    "defaultPlan": "CX Cloud Essentials",
    "plans": [
      {
        "name": "Essentials",
        "monthlyCost": 75.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Elevate",
        "monthlyCost": 95.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Elite",
        "monthlyCost": 125.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "AI-powered cloud contact center platform."
  },
  {
    "id": "genesys",
    "name": "Genesys Cloud CX",
    "category": "Communication",
    "iconText": "GN",
    "iconBg": "#dc2626",
    "defaultPlan": "CX 1",
    "plans": [
      {
        "name": "CX 1",
        "monthlyCost": 75.0,
        "billingCycle": "monthly"
      },
      {
        "name": "CX 2",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "CX 3",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Enterprise contact center and customer agent orchestration."
  },
  {
    "id": "five9",
    "name": "Five9 Virtual Contact Center",
    "category": "Communication",
    "iconText": "F5",
    "iconBg": "#0284c7",
    "defaultPlan": "Core",
    "plans": [
      {
        "name": "Core",
        "monthlyCost": 149.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Premium",
        "monthlyCost": 169.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Optimum",
        "monthlyCost": 199.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Cloud contact center software powered by AI."
  },
  {
    "id": "twilio-flex",
    "name": "Twilio Flex",
    "category": "Communication",
    "iconText": "TF",
    "iconBg": "#f43f5e",
    "defaultPlan": "Per Hour",
    "plans": [
      {
        "name": "Per Hour",
        "monthlyCost": 1.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Per Named User",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Programmable cloud contact center platform for developers."
  },
  {
    "id": "gather-town",
    "name": "Gather.town Space",
    "category": "Communication",
    "iconText": "GT",
    "iconBg": "#8b5cf6",
    "defaultPlan": "Monthly Space",
    "plans": [
      {
        "name": "Free",
        "monthlyCost": 0.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Monthly Space",
        "monthlyCost": 7.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Virtual office spaces for remote team co-working."
  },
  {
    "id": "sococo",
    "name": "Sococo Virtual Office",
    "category": "Communication",
    "iconText": "SC",
    "iconBg": "#06b6d4",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.49,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 24.99,
        "billingCycle": "monthly"
      }
    ],
    "description": "Online virtual workplace for distributed remote teams."
  },
  {
    "id": "front-app",
    "name": "Front Shared Inbox",
    "category": "Communication",
    "iconText": "FA",
    "iconBg": "#ec4899",
    "defaultPlan": "Starter",
    "plans": [
      {
        "name": "Starter",
        "monthlyCost": 19.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Growth",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Scale",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Customer communication platform combining email and team collaboration."
  },
  {
    "id": "missive",
    "name": "Missive Team Inbox",
    "category": "Communication",
    "iconText": "MS",
    "iconBg": "#3b82f6",
    "defaultPlan": "Starter",
    "plans": [
      {
        "name": "Starter",
        "monthlyCost": 14.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Productive",
        "monthlyCost": 22.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 30.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Collaborative email client and internal team chat."
  },
  {
    "id": "helpwise",
    "name": "Helpwise Shared Inbox",
    "category": "Communication",
    "iconText": "HW",
    "iconBg": "#10b981",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 12.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Premium",
        "monthlyCost": 23.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Shared team inbox for email, SMS, and WhatsApp customer support."
  },
  {
    "id": "trengo",
    "name": "Trengo Inbox",
    "category": "Communication",
    "iconText": "TR",
    "iconBg": "#6366f1",
    "defaultPlan": "Essentials",
    "plans": [
      {
        "name": "Essentials",
        "monthlyCost": 18.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Boost",
        "monthlyCost": 27.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 37.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Omnichannel team inbox for WhatsApp, Email, Social Media."
  },
  {
    "id": "crisp-chat",
    "name": "Crisp Shared Inbox",
    "category": "Communication",
    "iconText": "CP",
    "iconBg": "#3b82f6",
    "defaultPlan": "Basic",
    "plans": [
      {
        "name": "Basic",
        "monthlyCost": 0.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Unlimited",
        "monthlyCost": 95.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "All-in-one messaging platform for customer chat & emails."
  },
  {
    "id": "intercom-inbox",
    "name": "Intercom Messenger",
    "category": "Communication",
    "iconText": "IC",
    "iconBg": "#000000",
    "defaultPlan": "Essential",
    "plans": [
      {
        "name": "Essential",
        "monthlyCost": 39.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Advanced",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Expert",
        "monthlyCost": 139.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "AI-powered customer service chat and agent communication."
  },
  {
    "id": "zohoclique",
    "name": "Zoho Cliq",
    "category": "Communication",
    "iconText": "ZC",
    "iconBg": "#ef4444",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Free",
        "monthlyCost": 0.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Standard",
        "monthlyCost": 1.25,
        "billingCycle": "monthly"
      },
      {
        "name": "Unlimited",
        "monthlyCost": 2.5,
        "billingCycle": "monthly"
      }
    ],
    "description": "Affordable enterprise chat and team communication."
  },
  {
    "id": "twist",
    "name": "Twist Async Chat",
    "category": "Communication",
    "iconText": "TW",
    "iconBg": "#e11d48",
    "defaultPlan": "Unlimited",
    "plans": [
      {
        "name": "Free",
        "monthlyCost": 0.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Unlimited",
        "monthlyCost": 6.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Async team chat app designed for focused asynchronous work."
  },
  {
    "id": "viber-business",
    "name": "Viber for Business",
    "category": "Communication",
    "iconText": "VB",
    "iconBg": "#8b5cf6",
    "defaultPlan": "Business Messages",
    "plans": [
      {
        "name": "Starter",
        "monthlyCost": 19.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 49.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Official business messaging channel on Viber network."
  },
  {
    "id": "whatsapp-business-api",
    "name": "WhatsApp Business API",
    "category": "Communication",
    "iconText": "WA",
    "iconBg": "#25d366",
    "defaultPlan": "Per Conversation",
    "plans": [
      {
        "name": "Marketing",
        "monthlyCost": 0.05,
        "billingCycle": "monthly"
      },
      {
        "name": "Utility",
        "monthlyCost": 0.02,
        "billingCycle": "monthly"
      },
      {
        "name": "Service",
        "monthlyCost": 0.01,
        "billingCycle": "monthly"
      }
    ],
    "description": "Official Cloud API for automated WhatsApp customer messaging."
  },
  {
    "id": "signal-work",
    "name": "Signal Enterprise Proxy",
    "category": "Communication",
    "iconText": "SG",
    "iconBg": "#3a76f0",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 5.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 12.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Encrypted secure messaging proxy for compliance-focused teams."
  },
  {
    "id": "wire-pro",
    "name": "Wire Enterprise",
    "category": "Communication",
    "iconText": "WR",
    "iconBg": "#000000",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 7.65,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 14.5,
        "billingCycle": "monthly"
      }
    ],
    "description": "End-to-end encrypted collaboration and voice calls for enterprise."
  },
  {
    "id": "wickr-me",
    "name": "AWS Wickr Enterprise",
    "category": "Communication",
    "iconText": "WK",
    "iconBg": "#ff9900",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 5.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Premium",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Secure end-to-end encrypted collaboration by AWS."
  },
  {
    "id": "remotion",
    "name": "Remotion Virtual Office",
    "category": "Communication",
    "iconText": "RM",
    "iconBg": "#6366f1",
    "defaultPlan": "Team",
    "plans": [
      {
        "name": "Team",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 20.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Lightweight virtual office space for quick video huddles."
  },
  {
    "id": "tandem",
    "name": "Tandem Virtual Office",
    "category": "Communication",
    "iconText": "TD",
    "iconBg": "#ec4899",
    "defaultPlan": "Small Team",
    "plans": [
      {
        "name": "Small Team",
        "monthlyCost": 8.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Virtual office for remote teams with 1-click audio huddles."
  },
  {
    "id": "supernormal",
    "name": "Supernormal AI Notetaker",
    "category": "Communication",
    "iconText": "SN",
    "iconBg": "#10b981",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Business",
        "monthlyCost": 19.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "AI meeting notes and transcript recorder for Zoom & Google Meet."
  },
  {
    "id": "read-ai",
    "name": "Read AI Meeting Assistant",
    "category": "Communication",
    "iconText": "RA",
    "iconBg": "#3b82f6",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 15.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 29.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "AI meeting summary, sentiment analysis, and topic tracking."
  },
  {
    "id": "tactiq",
    "name": "Tactiq AI Transcriber",
    "category": "Communication",
    "iconText": "TQ",
    "iconBg": "#f59e0b",
    "defaultPlan": "Pro",
    "plans": [
      {
        "name": "Pro",
        "monthlyCost": 8.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Team",
        "monthlyCost": 16.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Real-time AI transcription for Google Meet, Zoom, and MS Teams."
  },
  {
    "id": "google-workspace",
    "name": "Google Workspace",
    "category": "Productivity",
    "iconText": "GW",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "notion-team",
    "name": "Notion Team",
    "category": "Productivity",
    "iconText": "NT",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "clickup-unlimited",
    "name": "ClickUp Unlimited",
    "category": "Productivity",
    "iconText": "CU",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "asana-premium",
    "name": "Asana Premium",
    "category": "Productivity",
    "iconText": "AP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "monday-com-work-os",
    "name": "Monday.com Work OS",
    "category": "Productivity",
    "iconText": "MW",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "chatgpt-team",
    "name": "ChatGPT Team",
    "category": "Productivity",
    "iconText": "CT",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "claude-pro-team",
    "name": "Claude Pro & Team",
    "category": "Productivity",
    "iconText": "CP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "perplexity-enterprise",
    "name": "Perplexity Enterprise",
    "category": "Productivity",
    "iconText": "PE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "miro-team",
    "name": "Miro Team",
    "category": "Productivity",
    "iconText": "MT",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "grammarly-business",
    "name": "Grammarly Business",
    "category": "Productivity",
    "iconText": "GB",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "coda-pro",
    "name": "Coda Pro",
    "category": "Productivity",
    "iconText": "CP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "basecamp-pro-unlimited",
    "name": "Basecamp Pro Unlimited",
    "category": "Productivity",
    "iconText": "BP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "trello-premium",
    "name": "Trello Premium",
    "category": "Productivity",
    "iconText": "TP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "todoist-business",
    "name": "Todoist Business",
    "category": "Productivity",
    "iconText": "TB",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "airtable-team",
    "name": "Airtable Team",
    "category": "Productivity",
    "iconText": "AT",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "craft-business",
    "name": "Craft Business",
    "category": "Productivity",
    "iconText": "CB",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "obsidian-sync",
    "name": "Obsidian Sync",
    "category": "Productivity",
    "iconText": "OS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "superhuman-team",
    "name": "Superhuman Team",
    "category": "Productivity",
    "iconText": "ST",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "otter-ai-business",
    "name": "Otter.ai Business",
    "category": "Productivity",
    "iconText": "OB",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "fireflies-ai-pro",
    "name": "Fireflies.ai Pro",
    "category": "Productivity",
    "iconText": "FP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "smartsheet-business",
    "name": "Smartsheet Business",
    "category": "Productivity",
    "iconText": "SB",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "wrike-business",
    "name": "Wrike Business",
    "category": "Productivity",
    "iconText": "WB",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "roam-research",
    "name": "Roam Research",
    "category": "Productivity",
    "iconText": "RR",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "workflowy-pro",
    "name": "Workflowy Pro",
    "category": "Productivity",
    "iconText": "WP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "ticktick-premium",
    "name": "TickTick Premium",
    "category": "Productivity",
    "iconText": "TP",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "evernote-professional",
    "name": "Evernote Professional",
    "category": "Productivity",
    "iconText": "EP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "taskade-pro",
    "name": "Taskade Pro",
    "category": "Productivity",
    "iconText": "TP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "slite-standard",
    "name": "Slite Standard",
    "category": "Productivity",
    "iconText": "SS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "whimsical-pro",
    "name": "Whimsical Pro",
    "category": "Productivity",
    "iconText": "WP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "mindmeister-pro",
    "name": "MindMeister Pro",
    "category": "Productivity",
    "iconText": "MP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "lucidchart-team",
    "name": "Lucidchart Team",
    "category": "Productivity",
    "iconText": "LT",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "cacoo-team",
    "name": "Cacoo Team",
    "category": "Productivity",
    "iconText": "CT",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "mural-team",
    "name": "Mural Team+",
    "category": "Productivity",
    "iconText": "MT",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "sunsama-pro",
    "name": "Sunsama Pro",
    "category": "Productivity",
    "iconText": "SP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "motion-ai-planner",
    "name": "Motion AI Planner",
    "category": "Productivity",
    "iconText": "MA",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "akiflow-pro",
    "name": "Akiflow Pro",
    "category": "Productivity",
    "iconText": "AP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "morgen-calendar",
    "name": "Morgen Calendar",
    "category": "Productivity",
    "iconText": "MC",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "focusmate-plus",
    "name": "Focusmate Plus",
    "category": "Productivity",
    "iconText": "FP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "scrivener-writer",
    "name": "Scrivener Writer",
    "category": "Productivity",
    "iconText": "SW",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "bear-pro",
    "name": "Bear Pro",
    "category": "Productivity",
    "iconText": "BP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "ulysses-writing",
    "name": "Ulysses Writing",
    "category": "Productivity",
    "iconText": "UW",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "logseq-pro-sync",
    "name": "Logseq Pro Sync",
    "category": "Productivity",
    "iconText": "LP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "xmind-works",
    "name": "XMind Works",
    "category": "Productivity",
    "iconText": "XW",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "clockify-pro",
    "name": "Clockify Pro",
    "category": "Productivity",
    "iconText": "CP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "toggl-track-premium",
    "name": "Toggl Track Premium",
    "category": "Productivity",
    "iconText": "TT",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "harvest-pro",
    "name": "Harvest Pro",
    "category": "Productivity",
    "iconText": "HP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "hubstaff-desk",
    "name": "Hubstaff Desk",
    "category": "Productivity",
    "iconText": "HD",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "rescuetime-premium",
    "name": "RescueTime Premium",
    "category": "Productivity",
    "iconText": "RP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "raycast-pro-ai",
    "name": "Raycast Pro AI",
    "category": "Productivity",
    "iconText": "RP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "warp-terminal-team",
    "name": "Warp Terminal Team",
    "category": "Productivity",
    "iconText": "WT",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Productivity for team workflow automation."
  },
  {
    "id": "amazon-web-services-aws",
    "name": "Amazon Web Services (AWS)",
    "category": "Infrastructure",
    "iconText": "AW",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "vercel-pro",
    "name": "Vercel Pro",
    "category": "Infrastructure",
    "iconText": "VP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "supabase-pro",
    "name": "Supabase Pro",
    "category": "Infrastructure",
    "iconText": "SP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "mongodb-atlas",
    "name": "MongoDB Atlas",
    "category": "Infrastructure",
    "iconText": "MA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "cloudflare-pro",
    "name": "Cloudflare Pro",
    "category": "Infrastructure",
    "iconText": "CP",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "netlify-pro",
    "name": "Netlify Pro",
    "category": "Infrastructure",
    "iconText": "NP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "digitalocean-droplet",
    "name": "DigitalOcean Droplet",
    "category": "Infrastructure",
    "iconText": "DD",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "heroku-dyno",
    "name": "Heroku Dyno",
    "category": "Infrastructure",
    "iconText": "HD",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "railway-pro",
    "name": "Railway Pro",
    "category": "Infrastructure",
    "iconText": "RP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "render-individual",
    "name": "Render Individual",
    "category": "Infrastructure",
    "iconText": "RI",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "fly-io-scale",
    "name": "Fly.io Scale",
    "category": "Infrastructure",
    "iconText": "FS",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "snowflake-data-cloud",
    "name": "Snowflake Data Cloud",
    "category": "Infrastructure",
    "iconText": "SD",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "databricks-lakehouse",
    "name": "Databricks Lakehouse",
    "category": "Infrastructure",
    "iconText": "DL",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "pinecone-vector-db",
    "name": "Pinecone Vector DB",
    "category": "Infrastructure",
    "iconText": "PV",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "neon-serverless-postgres",
    "name": "Neon Serverless Postgres",
    "category": "Infrastructure",
    "iconText": "NS",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "planetscale-scaler",
    "name": "PlanetScale Scaler",
    "category": "Infrastructure",
    "iconText": "PS",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "upstash-serverless",
    "name": "Upstash Serverless",
    "category": "Infrastructure",
    "iconText": "US",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "redis-cloud",
    "name": "Redis Cloud",
    "category": "Infrastructure",
    "iconText": "RC",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "algolia-search-api",
    "name": "Algolia Search API",
    "category": "Infrastructure",
    "iconText": "AS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "elastic-cloud",
    "name": "Elastic Cloud",
    "category": "Infrastructure",
    "iconText": "EC",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "timescale-cloud",
    "name": "Timescale Cloud",
    "category": "Infrastructure",
    "iconText": "TC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "cockroachdb-serverless",
    "name": "CockroachDB Serverless",
    "category": "Infrastructure",
    "iconText": "CS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "faunadb-cloud",
    "name": "FaunaDB Cloud",
    "category": "Infrastructure",
    "iconText": "FC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "neo4j-auradb",
    "name": "Neo4j AuraDB",
    "category": "Infrastructure",
    "iconText": "NA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "backblaze-b2-storage",
    "name": "Backblaze B2 Storage",
    "category": "Infrastructure",
    "iconText": "BB",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "wasabi-hot-cloud-storage",
    "name": "Wasabi Hot Cloud Storage",
    "category": "Infrastructure",
    "iconText": "WH",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "scaleway-elements",
    "name": "Scaleway Elements",
    "category": "Infrastructure",
    "iconText": "SE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "linode-by-akamai",
    "name": "Linode by Akamai",
    "category": "Infrastructure",
    "iconText": "LB",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "google-cloud-platform-gcp",
    "name": "Google Cloud Platform (GCP)",
    "category": "Infrastructure",
    "iconText": "GC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "microsoft-azure",
    "name": "Microsoft Azure",
    "category": "Infrastructure",
    "iconText": "MA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "oracle-cloud-infrastructure",
    "name": "Oracle Cloud Infrastructure",
    "category": "Infrastructure",
    "iconText": "OC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "hetzner-cloud",
    "name": "Hetzner Cloud",
    "category": "Infrastructure",
    "iconText": "HC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "vultr-compute",
    "name": "Vultr Compute",
    "category": "Infrastructure",
    "iconText": "VC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "ovhcloud-vps",
    "name": "OVHcloud VPS",
    "category": "Infrastructure",
    "iconText": "OV",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "hostinger-cloud",
    "name": "Hostinger Cloud",
    "category": "Infrastructure",
    "iconText": "HC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "siteground-cloud",
    "name": "SiteGround Cloud",
    "category": "Infrastructure",
    "iconText": "SC",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "wp-engine-enterprise",
    "name": "WP Engine Enterprise",
    "category": "Infrastructure",
    "iconText": "WE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "pantheon-webops",
    "name": "Pantheon Webops",
    "category": "Infrastructure",
    "iconText": "PW",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "kinsta-managed-wp",
    "name": "Kinsta Managed WP",
    "category": "Infrastructure",
    "iconText": "KM",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "cloudways-managed",
    "name": "Cloudways Managed",
    "category": "Infrastructure",
    "iconText": "CM",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "exoscale-cloud",
    "name": "Exoscale Cloud",
    "category": "Infrastructure",
    "iconText": "EC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "aiven-managed-db",
    "name": "Aiven Managed DB",
    "category": "Infrastructure",
    "iconText": "AM",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "yugabytedb-managed",
    "name": "YugabyteDB Managed",
    "category": "Infrastructure",
    "iconText": "YM",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "singlestore-helios",
    "name": "SingleStore Helios",
    "category": "Infrastructure",
    "iconText": "SH",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "scylladb-cloud",
    "name": "ScyllaDB Cloud",
    "category": "Infrastructure",
    "iconText": "SC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "cloudflare-r2-storage",
    "name": "Cloudflare R2 Storage",
    "category": "Infrastructure",
    "iconText": "CR",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "fastly-edge-cloud",
    "name": "Fastly Edge Cloud",
    "category": "Infrastructure",
    "iconText": "FE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "keycdn-edge",
    "name": "KeyCDN Edge",
    "category": "Infrastructure",
    "iconText": "KE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "bunny-net-cdn",
    "name": "Bunny.net CDN",
    "category": "Infrastructure",
    "iconText": "BC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "cloudamqp-rabbitmq",
    "name": "CloudAMQP RabbitMQ",
    "category": "Infrastructure",
    "iconText": "CR",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Infrastructure for team workflow automation."
  },
  {
    "id": "cursor-ai-pro",
    "name": "Cursor AI Pro",
    "category": "Developer Tools",
    "iconText": "CA",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "devin-ai-engineer",
    "name": "Devin AI Engineer",
    "category": "Developer Tools",
    "iconText": "DA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "v0-dev-by-vercel",
    "name": "v0.dev by Vercel",
    "category": "Developer Tools",
    "iconText": "VB",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "replit-core",
    "name": "Replit Core",
    "category": "Developer Tools",
    "iconText": "RC",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "github-enterprise",
    "name": "GitHub Enterprise",
    "category": "Developer Tools",
    "iconText": "GE",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "gitlab-premium",
    "name": "GitLab Premium",
    "category": "Developer Tools",
    "iconText": "GP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "bitbucket-standard",
    "name": "Bitbucket Standard",
    "category": "Developer Tools",
    "iconText": "BS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "jira-software",
    "name": "Jira Software",
    "category": "Developer Tools",
    "iconText": "JS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "postman-professional",
    "name": "Postman Professional",
    "category": "Developer Tools",
    "iconText": "PP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "datadog-apm",
    "name": "Datadog APM",
    "category": "Developer Tools",
    "iconText": "DA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "docker-business",
    "name": "Docker Business",
    "category": "Developer Tools",
    "iconText": "DB",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "sentry-team",
    "name": "Sentry Team",
    "category": "Developer Tools",
    "iconText": "ST",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "jetbrains-all-products-pack",
    "name": "JetBrains All Products Pack",
    "category": "Developer Tools",
    "iconText": "JA",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "circleci-performance",
    "name": "CircleCI Performance",
    "category": "Developer Tools",
    "iconText": "CP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "snyk-team",
    "name": "Snyk Team",
    "category": "Developer Tools",
    "iconText": "ST",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "sonarqube-cloud",
    "name": "SonarQube Cloud",
    "category": "Developer Tools",
    "iconText": "SC",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "hashicorp-terraform-cloud",
    "name": "HashiCorp Terraform Cloud",
    "category": "Developer Tools",
    "iconText": "HT",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "pagerduty-business",
    "name": "PagerDuty Business",
    "category": "Developer Tools",
    "iconText": "PB",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "new-relic-full-platform",
    "name": "New Relic Full Platform",
    "category": "Developer Tools",
    "iconText": "NR",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "launchdarkly-pro",
    "name": "LaunchDarkly Pro",
    "category": "Developer Tools",
    "iconText": "LP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "retool-team",
    "name": "Retool Team",
    "category": "Developer Tools",
    "iconText": "RT",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "zapier-professional",
    "name": "Zapier Professional",
    "category": "Developer Tools",
    "iconText": "ZP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "make-com-core",
    "name": "Make.com Core",
    "category": "Developer Tools",
    "iconText": "MC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "codecov-pro",
    "name": "Codecov Pro",
    "category": "Developer Tools",
    "iconText": "CP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "cypress-cloud",
    "name": "Cypress Cloud",
    "category": "Developer Tools",
    "iconText": "CC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "browserstack-live",
    "name": "BrowserStack Live",
    "category": "Developer Tools",
    "iconText": "BL",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "codeium-enterprise",
    "name": "Codeium Enterprise",
    "category": "Developer Tools",
    "iconText": "CE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "stackblitz-enterprise",
    "name": "StackBlitz Enterprise",
    "category": "Developer Tools",
    "iconText": "SE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "codesandbox-pro",
    "name": "CodeSandbox Pro",
    "category": "Developer Tools",
    "iconText": "CP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "gitpod-flex",
    "name": "Gitpod Flex",
    "category": "Developer Tools",
    "iconText": "GF",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "localstack-pro",
    "name": "LocalStack Pro",
    "category": "Developer Tools",
    "iconText": "LP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "bugsnag-error-monitoring",
    "name": "Bugsnag Error Monitoring",
    "category": "Developer Tools",
    "iconText": "BE",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "rollbar-error-tracking",
    "name": "Rollbar Error Tracking",
    "category": "Developer Tools",
    "iconText": "RE",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "honeycomb-io-pro",
    "name": "Honeycomb.io Pro",
    "category": "Developer Tools",
    "iconText": "HP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "cisco-appdynamics",
    "name": "Cisco AppDynamics",
    "category": "Developer Tools",
    "iconText": "CA",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "dynatrace-full-stack",
    "name": "Dynatrace Full Stack",
    "category": "Developer Tools",
    "iconText": "DF",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "sumo-logic-logs",
    "name": "Sumo Logic Logs",
    "category": "Developer Tools",
    "iconText": "SL",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "splunk-cloud",
    "name": "Splunk Cloud",
    "category": "Developer Tools",
    "iconText": "SC",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "tower-git-client",
    "name": "Tower Git Client",
    "category": "Developer Tools",
    "iconText": "TG",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "gitkraken-pro",
    "name": "GitKraken Pro",
    "category": "Developer Tools",
    "iconText": "GP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "kong-insomnia",
    "name": "Kong Insomnia",
    "category": "Developer Tools",
    "iconText": "KI",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "grafana-cloud-pro",
    "name": "Grafana Cloud Pro",
    "category": "Developer Tools",
    "iconText": "GC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "logrocket-team",
    "name": "LogRocket Team",
    "category": "Developer Tools",
    "iconText": "LT",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "better-stack-logs",
    "name": "Better Stack Logs",
    "category": "Developer Tools",
    "iconText": "BS",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "axiom-cloud-logs",
    "name": "Axiom Cloud Logs",
    "category": "Developer Tools",
    "iconText": "AC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "hoppscotch-enterprise",
    "name": "Hoppscotch Enterprise",
    "category": "Developer Tools",
    "iconText": "HE",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "linear-standard",
    "name": "Linear Standard",
    "category": "Developer Tools",
    "iconText": "LS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "sourcegraph-cody-ai",
    "name": "Sourcegraph Cody AI",
    "category": "Developer Tools",
    "iconText": "SC",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "phind-pro-ai",
    "name": "Phind Pro AI",
    "category": "Developer Tools",
    "iconText": "PP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "warp-ai-terminal",
    "name": "Warp AI Terminal",
    "category": "Developer Tools",
    "iconText": "WA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Developer Tools for team workflow automation."
  },
  {
    "id": "figma-professional",
    "name": "Figma Professional",
    "category": "Design",
    "iconText": "FP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "adobe-creative-cloud",
    "name": "Adobe Creative Cloud",
    "category": "Design",
    "iconText": "AC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "canva-pro",
    "name": "Canva Pro",
    "category": "Design",
    "iconText": "CP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "framer-pro",
    "name": "Framer Pro",
    "category": "Design",
    "iconText": "FP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "webflow-core",
    "name": "Webflow Core",
    "category": "Design",
    "iconText": "WC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "sketch-standard",
    "name": "Sketch Standard",
    "category": "Design",
    "iconText": "SS",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "midjourney-pro",
    "name": "Midjourney Pro",
    "category": "Design",
    "iconText": "MP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "runway-gen-3",
    "name": "Runway Gen-3",
    "category": "Design",
    "iconText": "RG",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "elevenlabs-creator",
    "name": "ElevenLabs Creator",
    "category": "Design",
    "iconText": "EC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "spline-3d-design",
    "name": "Spline 3D Design",
    "category": "Design",
    "iconText": "S3",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "lottiefiles-pro",
    "name": "LottieFiles Pro",
    "category": "Design",
    "iconText": "LP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "rive-interactive-animation",
    "name": "Rive Interactive Animation",
    "category": "Design",
    "iconText": "RI",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "storyblok-cms",
    "name": "Storyblok CMS",
    "category": "Design",
    "iconText": "SC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "contentful-team",
    "name": "Contentful Team",
    "category": "Design",
    "iconText": "CT",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "sanity-io-growth",
    "name": "Sanity.io Growth",
    "category": "Design",
    "iconText": "SG",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "penpot-enterprise",
    "name": "Penpot Enterprise",
    "category": "Design",
    "iconText": "PE",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "zeplin-team",
    "name": "Zeplin Team",
    "category": "Design",
    "iconText": "ZT",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "plasmic-pro",
    "name": "Plasmic Pro",
    "category": "Design",
    "iconText": "PP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "envato-elements",
    "name": "Envato Elements",
    "category": "Design",
    "iconText": "EE",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "remove-bg-subscription",
    "name": "Remove.bg Subscription",
    "category": "Design",
    "iconText": "RS",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "protopie-enterprise",
    "name": "ProtoPie Enterprise",
    "category": "Design",
    "iconText": "PE",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "marvel-app",
    "name": "Marvel App",
    "category": "Design",
    "iconText": "MA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "invision-cloud",
    "name": "InVision Cloud",
    "category": "Design",
    "iconText": "IC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "axure-rp-pro",
    "name": "Axure RP Pro",
    "category": "Design",
    "iconText": "AR",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "balsamiq-cloud",
    "name": "Balsamiq Cloud",
    "category": "Design",
    "iconText": "BC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "principle-for-mac",
    "name": "Principle for Mac",
    "category": "Design",
    "iconText": "PF",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "flinto-mac",
    "name": "Flinto Mac",
    "category": "Design",
    "iconText": "FM",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "justinmind-pro",
    "name": "Justinmind Pro",
    "category": "Design",
    "iconText": "JP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "linearity-curve",
    "name": "Linearity Curve",
    "category": "Design",
    "iconText": "LC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "iconjar-pro",
    "name": "IconJar Pro",
    "category": "Design",
    "iconText": "IP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "noun-project-pro",
    "name": "Noun Project Pro",
    "category": "Design",
    "iconText": "NP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "shutterstock-pro",
    "name": "Shutterstock Pro",
    "category": "Design",
    "iconText": "SP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "adobe-stock-teams",
    "name": "Adobe Stock Teams",
    "category": "Design",
    "iconText": "AS",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "istock-photo-pro",
    "name": "iStock Photo Pro",
    "category": "Design",
    "iconText": "IP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "freepik-premium",
    "name": "Freepik Premium",
    "category": "Design",
    "iconText": "FP",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "flaticon-premium",
    "name": "Flaticon Premium",
    "category": "Design",
    "iconText": "FP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "vecteezy-pro",
    "name": "Vecteezy Pro",
    "category": "Design",
    "iconText": "VP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "fontawesome-pro",
    "name": "FontAwesome Pro",
    "category": "Design",
    "iconText": "FP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "typeform-pro",
    "name": "Typeform Pro",
    "category": "Design",
    "iconText": "TP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "surveymonkey-advantage",
    "name": "SurveyMonkey Advantage",
    "category": "Design",
    "iconText": "SA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "jotform-gold",
    "name": "Jotform Gold",
    "category": "Design",
    "iconText": "JG",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "fillout-pro",
    "name": "Fillout Pro",
    "category": "Design",
    "iconText": "FP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "tally-so-pro",
    "name": "Tally.so Pro",
    "category": "Design",
    "iconText": "TP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "paperform-pro",
    "name": "Paperform Pro",
    "category": "Design",
    "iconText": "PP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "formstack-enterprise",
    "name": "Formstack Enterprise",
    "category": "Design",
    "iconText": "FE",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "klayvio-design",
    "name": "Klayvio Design",
    "category": "Design",
    "iconText": "KD",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "over-pro",
    "name": "Over Pro",
    "category": "Design",
    "iconText": "OP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "piktochart-pro",
    "name": "Piktochart Pro",
    "category": "Design",
    "iconText": "PP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "infogram-pro",
    "name": "Infogram Pro",
    "category": "Design",
    "iconText": "IP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "visme-enterprise",
    "name": "Visme Enterprise",
    "category": "Design",
    "iconText": "VE",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Design for team workflow automation."
  },
  {
    "id": "mailchimp-standard",
    "name": "Mailchimp Standard",
    "category": "Marketing",
    "iconText": "MS",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "ahrefs-standard",
    "name": "Ahrefs Standard",
    "category": "Marketing",
    "iconText": "AS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "semrush-guru",
    "name": "Semrush Guru",
    "category": "Marketing",
    "iconText": "SG",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "activecampaign-plus",
    "name": "ActiveCampaign Plus",
    "category": "Marketing",
    "iconText": "AP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "klaviyo-email-sms",
    "name": "Klaviyo Email & SMS",
    "category": "Marketing",
    "iconText": "KE",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "kit-convertkit-creator",
    "name": "Kit (ConvertKit) Creator",
    "category": "Marketing",
    "iconText": "K(",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "hubspot-marketing-hub",
    "name": "HubSpot Marketing Hub",
    "category": "Marketing",
    "iconText": "HM",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "moz-pro-medium",
    "name": "Moz Pro Medium",
    "category": "Marketing",
    "iconText": "MP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "buzzsumo-suite",
    "name": "BuzzSumo Suite",
    "category": "Marketing",
    "iconText": "BS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "hootsuite-team",
    "name": "Hootsuite Team",
    "category": "Marketing",
    "iconText": "HT",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "sprout-social-standard",
    "name": "Sprout Social Standard",
    "category": "Marketing",
    "iconText": "SS",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "buffer-team",
    "name": "Buffer Team",
    "category": "Marketing",
    "iconText": "BT",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "jasper-ai-pro",
    "name": "Jasper AI Pro",
    "category": "Marketing",
    "iconText": "JA",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "copy-ai-team",
    "name": "Copy.ai Team",
    "category": "Marketing",
    "iconText": "CT",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "unbounce-optimize",
    "name": "Unbounce Optimize",
    "category": "Marketing",
    "iconText": "UO",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "customer-io-premium",
    "name": "Customer.io Premium",
    "category": "Marketing",
    "iconText": "CP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "brevo-business",
    "name": "Brevo Business",
    "category": "Marketing",
    "iconText": "BB",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "screaming-frog-seo",
    "name": "Screaming Frog SEO",
    "category": "Marketing",
    "iconText": "SF",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "leadpages-pro",
    "name": "Leadpages Pro",
    "category": "Marketing",
    "iconText": "LP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "instapage-enterprise",
    "name": "Instapage Enterprise",
    "category": "Marketing",
    "iconText": "IE",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "mailerlite-advanced",
    "name": "MailerLite Advanced",
    "category": "Marketing",
    "iconText": "MA",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "drip-ecommerce",
    "name": "Drip Ecommerce",
    "category": "Marketing",
    "iconText": "DE",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "omnisend-pro",
    "name": "Omnisend Pro",
    "category": "Marketing",
    "iconText": "OP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "sendgrid-pro",
    "name": "SendGrid Pro",
    "category": "Marketing",
    "iconText": "SP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "postmark-transactional",
    "name": "Postmark Transactional",
    "category": "Marketing",
    "iconText": "PT",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "mailgun-enterprise",
    "name": "Mailgun Enterprise",
    "category": "Marketing",
    "iconText": "ME",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "se-ranking-pro",
    "name": "SE Ranking Pro",
    "category": "Marketing",
    "iconText": "SR",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "serpstat-team",
    "name": "Serpstat Team",
    "category": "Marketing",
    "iconText": "ST",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "mangools-seo",
    "name": "Mangools SEO",
    "category": "Marketing",
    "iconText": "MS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "ubersuggest-enterprise",
    "name": "Ubersuggest Enterprise",
    "category": "Marketing",
    "iconText": "UE",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "spyfu-team",
    "name": "SpyFu Team",
    "category": "Marketing",
    "iconText": "ST",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "majestic-seo",
    "name": "Majestic SEO",
    "category": "Marketing",
    "iconText": "MS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "agorapulse-pro",
    "name": "Agorapulse Pro",
    "category": "Marketing",
    "iconText": "AP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "socialpilot-agency",
    "name": "SocialPilot Agency",
    "category": "Marketing",
    "iconText": "SA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "coschedule-marketing-suite",
    "name": "CoSchedule Marketing Suite",
    "category": "Marketing",
    "iconText": "CM",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "later-growth",
    "name": "Later Growth",
    "category": "Marketing",
    "iconText": "LG",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "tailwind-app",
    "name": "Tailwind App",
    "category": "Marketing",
    "iconText": "TA",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "planoly-pro",
    "name": "Planoly Pro",
    "category": "Marketing",
    "iconText": "PP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "semrush-social",
    "name": "Semrush Social",
    "category": "Marketing",
    "iconText": "SS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "benchmark-email-pro",
    "name": "Benchmark Email Pro",
    "category": "Marketing",
    "iconText": "BE",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "getresponse-professional",
    "name": "GetResponse Professional",
    "category": "Marketing",
    "iconText": "GP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "moosend-pro",
    "name": "Moosend Pro",
    "category": "Marketing",
    "iconText": "MP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "sparkpost-enterprise",
    "name": "SparkPost Enterprise",
    "category": "Marketing",
    "iconText": "SE",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "surveymonkey-business",
    "name": "SurveyMonkey Business",
    "category": "Marketing",
    "iconText": "SB",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "typeform-growth",
    "name": "Typeform Growth",
    "category": "Marketing",
    "iconText": "TG",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "poptin-pro",
    "name": "Poptin Pro",
    "category": "Marketing",
    "iconText": "PP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "optinmonster-pro",
    "name": "OptinMonster Pro",
    "category": "Marketing",
    "iconText": "OP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "sumo-com-pro",
    "name": "Sumo.com Pro",
    "category": "Marketing",
    "iconText": "SP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "wisepops-pro",
    "name": "Wisepops Pro",
    "category": "Marketing",
    "iconText": "WP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "unbounce-smart-builder",
    "name": "Unbounce Smart Builder",
    "category": "Marketing",
    "iconText": "US",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Marketing for team workflow automation."
  },
  {
    "id": "salesforce-sales-cloud",
    "name": "Salesforce Sales Cloud",
    "category": "CRM & Sales",
    "iconText": "SS",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "hubspot-sales-hub",
    "name": "HubSpot Sales Hub",
    "category": "CRM & Sales",
    "iconText": "HS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "zendesk-suite-team",
    "name": "Zendesk Suite Team",
    "category": "CRM & Sales",
    "iconText": "ZS",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "pipedrive-advanced",
    "name": "Pipedrive Advanced",
    "category": "CRM & Sales",
    "iconText": "PA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "zoho-crm-enterprise",
    "name": "Zoho CRM Enterprise",
    "category": "CRM & Sales",
    "iconText": "ZC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "freshdesk-pro",
    "name": "Freshdesk Pro",
    "category": "CRM & Sales",
    "iconText": "FP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "gong-revenue-intelligence",
    "name": "Gong Revenue Intelligence",
    "category": "CRM & Sales",
    "iconText": "GR",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "apollo-io-professional",
    "name": "Apollo.io Professional",
    "category": "CRM & Sales",
    "iconText": "AP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "zoominfo-salesos",
    "name": "ZoomInfo SalesOS",
    "category": "CRM & Sales",
    "iconText": "ZS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "outreach-io-enterprise",
    "name": "Outreach.io Enterprise",
    "category": "CRM & Sales",
    "iconText": "OE",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "close-crm-professional",
    "name": "Close CRM Professional",
    "category": "CRM & Sales",
    "iconText": "CC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "help-scout-plus",
    "name": "Help Scout Plus",
    "category": "CRM & Sales",
    "iconText": "HS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "crisp-shared-inbox",
    "name": "Crisp Shared Inbox",
    "category": "CRM & Sales",
    "iconText": "CS",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "salesloft-engine",
    "name": "Salesloft Engine",
    "category": "CRM & Sales",
    "iconText": "SE",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "copper-crm",
    "name": "Copper CRM",
    "category": "CRM & Sales",
    "iconText": "CC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "keap-max",
    "name": "Keap Max",
    "category": "CRM & Sales",
    "iconText": "KM",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "drift-conversational",
    "name": "Drift Conversational",
    "category": "CRM & Sales",
    "iconText": "DC",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "groove-sales",
    "name": "Groove Sales",
    "category": "CRM & Sales",
    "iconText": "GS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "churnzero-scale",
    "name": "ChurnZero Scale",
    "category": "CRM & Sales",
    "iconText": "CS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "sugarcrm-sell",
    "name": "SugarCRM Sell",
    "category": "CRM & Sales",
    "iconText": "SS",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "insightly-crm",
    "name": "Insightly CRM",
    "category": "CRM & Sales",
    "iconText": "IC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "nimble-business",
    "name": "Nimble Business",
    "category": "CRM & Sales",
    "iconText": "NB",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "reply-io-outreach",
    "name": "Reply.io Outreach",
    "category": "CRM & Sales",
    "iconText": "RO",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "lemlist-email-outreach",
    "name": "Lemlist Email Outreach",
    "category": "CRM & Sales",
    "iconText": "LE",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "woodpecker-co-cold-email",
    "name": "Woodpecker.co Cold Email",
    "category": "CRM & Sales",
    "iconText": "WC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "instantly-ai-hypergrowth",
    "name": "Instantly.ai Hypergrowth",
    "category": "CRM & Sales",
    "iconText": "IH",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "mailshake-sales",
    "name": "Mailshake Sales",
    "category": "CRM & Sales",
    "iconText": "MS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "hunter-io-enterprise",
    "name": "Hunter.io Enterprise",
    "category": "CRM & Sales",
    "iconText": "HE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "lusha-b2b-pro",
    "name": "Lusha B2B Pro",
    "category": "CRM & Sales",
    "iconText": "LB",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "cognism-sales",
    "name": "Cognism Sales",
    "category": "CRM & Sales",
    "iconText": "CS",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "seamless-ai-enterprise",
    "name": "Seamless.ai Enterprise",
    "category": "CRM & Sales",
    "iconText": "SE",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "clearbit-enrichment",
    "name": "Clearbit Enrichment",
    "category": "CRM & Sales",
    "iconText": "CE",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "salesmate-crm",
    "name": "Salesmate CRM",
    "category": "CRM & Sales",
    "iconText": "SC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "nutshell-pro",
    "name": "Nutshell Pro",
    "category": "CRM & Sales",
    "iconText": "NP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "agile-crm-enterprise",
    "name": "Agile CRM Enterprise",
    "category": "CRM & Sales",
    "iconText": "AC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "salesforce-service-cloud",
    "name": "Salesforce Service Cloud",
    "category": "CRM & Sales",
    "iconText": "SS",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "zendesk-sell-pro",
    "name": "Zendesk Sell Pro",
    "category": "CRM & Sales",
    "iconText": "ZS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "freshsales-enterprise",
    "name": "Freshsales Enterprise",
    "category": "CRM & Sales",
    "iconText": "FE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "gainsight-cs",
    "name": "Gainsight CS",
    "category": "CRM & Sales",
    "iconText": "GC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "totango-customer-success",
    "name": "Totango Customer Success",
    "category": "CRM & Sales",
    "iconText": "TC",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "clientsuccess-enterprise",
    "name": "ClientSuccess Enterprise",
    "category": "CRM & Sales",
    "iconText": "CE",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "chorus-ai-conversation",
    "name": "Chorus.ai Conversation",
    "category": "CRM & Sales",
    "iconText": "CC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "clari-revenue-platform",
    "name": "Clari Revenue Platform",
    "category": "CRM & Sales",
    "iconText": "CR",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "highspot-enablement",
    "name": "Highspot Enablement",
    "category": "CRM & Sales",
    "iconText": "HE",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "seismic-enablement",
    "name": "Seismic Enablement",
    "category": "CRM & Sales",
    "iconText": "SE",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "mindtickle-enablement",
    "name": "Mindtickle Enablement",
    "category": "CRM & Sales",
    "iconText": "ME",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "showpad-sales",
    "name": "Showpad Sales",
    "category": "CRM & Sales",
    "iconText": "SS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "docsend-enterprise",
    "name": "DocSend Enterprise",
    "category": "CRM & Sales",
    "iconText": "DE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "pandadoc-sales",
    "name": "PandaDoc Sales",
    "category": "CRM & Sales",
    "iconText": "PS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "proposify-pro",
    "name": "Proposify Pro",
    "category": "CRM & Sales",
    "iconText": "PP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in CRM & Sales for team workflow automation."
  },
  {
    "id": "1password-business",
    "name": "1Password Business",
    "category": "Security & HR",
    "iconText": "1B",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "rippling-hr-payroll",
    "name": "Rippling HR & Payroll",
    "category": "Security & HR",
    "iconText": "RH",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "gusto-payroll",
    "name": "Gusto Payroll",
    "category": "Security & HR",
    "iconText": "GP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "okta-workforce-identity",
    "name": "Okta Workforce Identity",
    "category": "Security & HR",
    "iconText": "OW",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "bitwarden-teams",
    "name": "Bitwarden Teams",
    "category": "Security & HR",
    "iconText": "BT",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "deel-global-hr",
    "name": "Deel Global HR",
    "category": "Security & HR",
    "iconText": "DG",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "remote-com-global-hr",
    "name": "Remote.com Global HR",
    "category": "Security & HR",
    "iconText": "RG",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "xero-payroll",
    "name": "Xero Payroll",
    "category": "Security & HR",
    "iconText": "XP",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "tailscale-enterprise",
    "name": "Tailscale Enterprise",
    "category": "Security & HR",
    "iconText": "TE",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "crowdstrike-falcon",
    "name": "CrowdStrike Falcon",
    "category": "Security & HR",
    "iconText": "CF",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "stripe-billing-radar",
    "name": "Stripe Billing & Radar",
    "category": "Security & HR",
    "iconText": "SB",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "ramp-corporate-card",
    "name": "Ramp Corporate Card",
    "category": "Security & HR",
    "iconText": "RC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "brex-finance",
    "name": "Brex Finance",
    "category": "Security & HR",
    "iconText": "BF",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "cloudflare-zero-trust",
    "name": "Cloudflare Zero Trust",
    "category": "Security & HR",
    "iconText": "CZ",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "teleport-enterprise",
    "name": "Teleport Enterprise",
    "category": "Security & HR",
    "iconText": "TE",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "expensify-corporate",
    "name": "Expensify Corporate",
    "category": "Security & HR",
    "iconText": "EC",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "zenefits-hr",
    "name": "Zenefits HR",
    "category": "Security & HR",
    "iconText": "ZH",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "dashlane-business",
    "name": "Dashlane Business",
    "category": "Security & HR",
    "iconText": "DB",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "keeper-security",
    "name": "Keeper Security",
    "category": "Security & HR",
    "iconText": "KS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "workday-human-capital",
    "name": "Workday Human Capital",
    "category": "Security & HR",
    "iconText": "WH",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "jumpcloud-directory",
    "name": "JumpCloud Directory",
    "category": "Security & HR",
    "iconText": "JD",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "jamf-pro-apple-management",
    "name": "Jamf Pro Apple Management",
    "category": "Security & HR",
    "iconText": "JP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "kandji-apple-management",
    "name": "Kandji Apple Management",
    "category": "Security & HR",
    "iconText": "KA",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "paychex-flex",
    "name": "Paychex Flex",
    "category": "Security & HR",
    "iconText": "PF",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "adp-workforce-now",
    "name": "ADP Workforce Now",
    "category": "Security & HR",
    "iconText": "AW",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "justworks-peo",
    "name": "Justworks PEO",
    "category": "Security & HR",
    "iconText": "JP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "personio-hr-cloud",
    "name": "Personio HR Cloud",
    "category": "Security & HR",
    "iconText": "PH",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "factorial-hr",
    "name": "Factorial HR",
    "category": "Security & HR",
    "iconText": "FH",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "zoho-people-enterprise",
    "name": "Zoho People Enterprise",
    "category": "Security & HR",
    "iconText": "ZP",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "lattice-performance",
    "name": "Lattice Performance",
    "category": "Security & HR",
    "iconText": "LP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "15five-culture",
    "name": "15Five Culture",
    "category": "Security & HR",
    "iconText": "1C",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "culture-amp-analytics",
    "name": "Culture Amp Analytics",
    "category": "Security & HR",
    "iconText": "CA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "nordpass-business",
    "name": "NordPass Business",
    "category": "Security & HR",
    "iconText": "NB",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "proton-pass-enterprise",
    "name": "Proton Pass Enterprise",
    "category": "Security & HR",
    "iconText": "PP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "namely-hr-suite",
    "name": "Namely HR Suite",
    "category": "Security & HR",
    "iconText": "NH",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "hibob-hr",
    "name": "HiBob HR",
    "category": "Security & HR",
    "iconText": "HH",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "peakon-employee-voice",
    "name": "Peakon Employee Voice",
    "category": "Security & HR",
    "iconText": "PE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "officevibe-engagement",
    "name": "Officevibe Engagement",
    "category": "Security & HR",
    "iconText": "OE",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "bamboohr-suite",
    "name": "BambooHR Suite",
    "category": "Security & HR",
    "iconText": "BS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "lastpass-business",
    "name": "LastPass Business",
    "category": "Security & HR",
    "iconText": "LB",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "enpass-enterprise",
    "name": "Enpass Enterprise",
    "category": "Security & HR",
    "iconText": "EE",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "duo-security",
    "name": "Duo Security",
    "category": "Security & HR",
    "iconText": "DS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "ping-identity",
    "name": "Ping Identity",
    "category": "Security & HR",
    "iconText": "PI",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "cyberark-vault",
    "name": "CyberArk Vault",
    "category": "Security & HR",
    "iconText": "CV",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "sailpoint-identity",
    "name": "SailPoint Identity",
    "category": "Security & HR",
    "iconText": "SI",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "onelogin-by-oneidentity",
    "name": "OneLogin by OneIdentity",
    "category": "Security & HR",
    "iconText": "OB",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "vanta-compliance",
    "name": "Vanta Compliance",
    "category": "Security & HR",
    "iconText": "VC",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "drata-continuous",
    "name": "Drata Continuous",
    "category": "Security & HR",
    "iconText": "DC",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "secureframe-soc-2",
    "name": "Secureframe SOC 2",
    "category": "Security & HR",
    "iconText": "SS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "sprinto-security",
    "name": "Sprinto Security",
    "category": "Security & HR",
    "iconText": "SS",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Security & HR for team workflow automation."
  },
  {
    "id": "mixpanel-growth",
    "name": "Mixpanel Growth",
    "category": "Analytics",
    "iconText": "MG",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "hotjar-business",
    "name": "Hotjar Business",
    "category": "Analytics",
    "iconText": "HB",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "segment-cdp",
    "name": "Segment CDP",
    "category": "Analytics",
    "iconText": "SC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "amplitude-analytics",
    "name": "Amplitude Analytics",
    "category": "Analytics",
    "iconText": "AA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "posthog-cloud",
    "name": "PostHog Cloud",
    "category": "Analytics",
    "iconText": "PC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "fullstory-enterprise",
    "name": "FullStory Enterprise",
    "category": "Analytics",
    "iconText": "FE",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "crazy-egg-pro",
    "name": "Crazy Egg Pro",
    "category": "Analytics",
    "iconText": "CE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "tableau-cloud",
    "name": "Tableau Cloud",
    "category": "Analytics",
    "iconText": "TC",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "power-bi-pro",
    "name": "Power BI Pro",
    "category": "Analytics",
    "iconText": "PB",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "plausible-analytics",
    "name": "Plausible Analytics",
    "category": "Analytics",
    "iconText": "PA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "fathom-analytics",
    "name": "Fathom Analytics",
    "category": "Analytics",
    "iconText": "FA",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "metabase-cloud",
    "name": "Metabase Cloud",
    "category": "Analytics",
    "iconText": "MC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "google-analytics-360",
    "name": "Google Analytics 360",
    "category": "Analytics",
    "iconText": "GA",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "heap-analytics",
    "name": "Heap Analytics",
    "category": "Analytics",
    "iconText": "HA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "looker-studio-pro",
    "name": "Looker Studio Pro",
    "category": "Analytics",
    "iconText": "LS",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "census-sync",
    "name": "Census Sync",
    "category": "Analytics",
    "iconText": "CS",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "fivetran-data-pipeline",
    "name": "Fivetran Data Pipeline",
    "category": "Analytics",
    "iconText": "FD",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "mode-analytics",
    "name": "Mode Analytics",
    "category": "Analytics",
    "iconText": "MA",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "microsoft-clarity-pro",
    "name": "Microsoft Clarity Pro",
    "category": "Analytics",
    "iconText": "MC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "atlassian-analytics",
    "name": "Atlassian Analytics",
    "category": "Analytics",
    "iconText": "AA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "matomo-cloud",
    "name": "Matomo Cloud",
    "category": "Analytics",
    "iconText": "MC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "woopra-customer-analytics",
    "name": "Woopra Customer Analytics",
    "category": "Analytics",
    "iconText": "WC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "optimizely-experimentation",
    "name": "Optimizely Experimentation",
    "category": "Analytics",
    "iconText": "OE",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "vwo-testing",
    "name": "VWO Testing",
    "category": "Analytics",
    "iconText": "VT",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "statsig-feature-flags",
    "name": "Statsig Feature Flags",
    "category": "Analytics",
    "iconText": "SF",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "split-io-experimentation",
    "name": "Split.io Experimentation",
    "category": "Analytics",
    "iconText": "SE",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "glassbox-digital-experience",
    "name": "Glassbox Digital Experience",
    "category": "Analytics",
    "iconText": "GD",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "contentsquare-analytics",
    "name": "Contentsquare Analytics",
    "category": "Analytics",
    "iconText": "CA",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "kissmetrics-saas-analytics",
    "name": "Kissmetrics SaaS Analytics",
    "category": "Analytics",
    "iconText": "KS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "chartbeat-publisher",
    "name": "Chartbeat Publisher",
    "category": "Analytics",
    "iconText": "CP",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "parse-ly-content-analytics",
    "name": "Parse.ly Content Analytics",
    "category": "Analytics",
    "iconText": "PC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "gosquared-realtime",
    "name": "GoSquared Realtime",
    "category": "Analytics",
    "iconText": "GR",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "clicky-web-analytics",
    "name": "Clicky Web Analytics",
    "category": "Analytics",
    "iconText": "CW",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "simple-analytics",
    "name": "Simple Analytics",
    "category": "Analytics",
    "iconText": "SA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "umami-cloud-analytics",
    "name": "Umami Cloud Analytics",
    "category": "Analytics",
    "iconText": "UC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "baremetrics-mrr",
    "name": "Baremetrics MRR",
    "category": "Analytics",
    "iconText": "BM",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "chartmogul-revenue",
    "name": "ChartMogul Revenue",
    "category": "Analytics",
    "iconText": "CR",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "profitwell-metrics",
    "name": "ProfitWell Metrics",
    "category": "Analytics",
    "iconText": "PM",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "geckoboard-dashboard",
    "name": "Geckoboard Dashboard",
    "category": "Analytics",
    "iconText": "GD",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "databox-kpi",
    "name": "Databox KPI",
    "category": "Analytics",
    "iconText": "DK",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "cyfe-dashboard",
    "name": "Cyfe Dashboard",
    "category": "Analytics",
    "iconText": "CD",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "klipfolio-analytics",
    "name": "Klipfolio Analytics",
    "category": "Analytics",
    "iconText": "KA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "supermetrics-data-connector",
    "name": "Supermetrics Data Connector",
    "category": "Analytics",
    "iconText": "SD",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "funnel-io-marketing-data",
    "name": "Funnel.io Marketing Data",
    "category": "Analytics",
    "iconText": "FM",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "stitch-data-integration",
    "name": "Stitch Data Integration",
    "category": "Analytics",
    "iconText": "SD",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "airbyte-cloud",
    "name": "Airbyte Cloud",
    "category": "Analytics",
    "iconText": "AC",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "meltano-dataops",
    "name": "Meltano DataOps",
    "category": "Analytics",
    "iconText": "MD",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "dbt-cloud",
    "name": "dbt Cloud",
    "category": "Analytics",
    "iconText": "DC",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "cube-js-semantic-layer",
    "name": "Cube.js Semantic Layer",
    "category": "Analytics",
    "iconText": "CS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "gooddata-analytics",
    "name": "GoodData Analytics",
    "category": "Analytics",
    "iconText": "GA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Analytics for team workflow automation."
  },
  {
    "id": "openai-api",
    "name": "OpenAI API",
    "category": "AI & Machine Learning",
    "iconText": "OA",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "anthropic-claude-api",
    "name": "Anthropic Claude API",
    "category": "AI & Machine Learning",
    "iconText": "AC",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "google-gemini-advanced",
    "name": "Google Gemini Advanced",
    "category": "AI & Machine Learning",
    "iconText": "GG",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "midjourney-pro",
    "name": "Midjourney Pro",
    "category": "AI & Machine Learning",
    "iconText": "MP",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "runway-gen-3",
    "name": "Runway Gen-3",
    "category": "AI & Machine Learning",
    "iconText": "RG",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "elevenlabs-creator",
    "name": "ElevenLabs Creator",
    "category": "AI & Machine Learning",
    "iconText": "EC",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "perplexity-enterprise",
    "name": "Perplexity Enterprise",
    "category": "AI & Machine Learning",
    "iconText": "PE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "poe-by-quora",
    "name": "Poe by Quora",
    "category": "AI & Machine Learning",
    "iconText": "PB",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "synthesia-ai-video",
    "name": "Synthesia AI Video",
    "category": "AI & Machine Learning",
    "iconText": "SA",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "heygen-ai-avatar",
    "name": "HeyGen AI Avatar",
    "category": "AI & Machine Learning",
    "iconText": "HA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "descript-video-podcast",
    "name": "Descript Video & Podcast",
    "category": "AI & Machine Learning",
    "iconText": "DV",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "cohere-ai-platform",
    "name": "Cohere AI Platform",
    "category": "AI & Machine Learning",
    "iconText": "CA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "replicate-ml",
    "name": "Replicate ML",
    "category": "AI & Machine Learning",
    "iconText": "RM",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "hugging-face-pro",
    "name": "Hugging Face PRO",
    "category": "AI & Machine Learning",
    "iconText": "HF",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "together-ai-cloud",
    "name": "Together AI Cloud",
    "category": "AI & Machine Learning",
    "iconText": "TA",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "groq-lpu-inference",
    "name": "Groq LPU Inference",
    "category": "AI & Machine Learning",
    "iconText": "GL",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "deepl-pro-translation",
    "name": "DeepL Pro Translation",
    "category": "AI & Machine Learning",
    "iconText": "DP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "weights-biases-ml",
    "name": "Weights & Biases ML",
    "category": "AI & Machine Learning",
    "iconText": "W&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "langsmith-llm-ops",
    "name": "LangSmith LLM Ops",
    "category": "AI & Machine Learning",
    "iconText": "LL",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "harvey-ai-legal",
    "name": "Harvey AI Legal",
    "category": "AI & Machine Learning",
    "iconText": "HA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "stability-ai-api",
    "name": "Stability AI API",
    "category": "AI & Machine Learning",
    "iconText": "SA",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "fliki-ai-video-generator",
    "name": "Fliki.ai Video Generator",
    "category": "AI & Machine Learning",
    "iconText": "FV",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "invideo-ai-pro",
    "name": "InVideo AI Pro",
    "category": "AI & Machine Learning",
    "iconText": "IA",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "mubert-ai-music",
    "name": "Mubert AI Music",
    "category": "AI & Machine Learning",
    "iconText": "MA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "soundraw-ai-music",
    "name": "Soundraw AI Music",
    "category": "AI & Machine Learning",
    "iconText": "SA",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "voiceflow-conversation-ai",
    "name": "Voiceflow Conversation AI",
    "category": "AI & Machine Learning",
    "iconText": "VC",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "botpress-enterprise",
    "name": "Botpress Enterprise",
    "category": "AI & Machine Learning",
    "iconText": "BE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "d-id-ai-presenter",
    "name": "D-ID AI Presenter",
    "category": "AI & Machine Learning",
    "iconText": "DA",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "kaiber-ai-video",
    "name": "Kaiber.ai Video",
    "category": "AI & Machine Learning",
    "iconText": "KV",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "luma-ai-dream-machine",
    "name": "Luma AI Dream Machine",
    "category": "AI & Machine Learning",
    "iconText": "LA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "suno-ai-music",
    "name": "Suno AI Music",
    "category": "AI & Machine Learning",
    "iconText": "SA",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "kling-ai-video",
    "name": "Kling AI Video",
    "category": "AI & Machine Learning",
    "iconText": "KA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "minimax-ai",
    "name": "Minimax AI",
    "category": "AI & Machine Learning",
    "iconText": "MA",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "flux-1-ai-image",
    "name": "Flux.1 AI Image",
    "category": "AI & Machine Learning",
    "iconText": "FA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "comfyui-cloud",
    "name": "ComfyUI Cloud",
    "category": "AI & Machine Learning",
    "iconText": "CC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-36",
    "name": "AI & Machine Learning Tool 36",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-37",
    "name": "AI & Machine Learning Tool 37",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-38",
    "name": "AI & Machine Learning Tool 38",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-39",
    "name": "AI & Machine Learning Tool 39",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-40",
    "name": "AI & Machine Learning Tool 40",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-41",
    "name": "AI & Machine Learning Tool 41",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-42",
    "name": "AI & Machine Learning Tool 42",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-43",
    "name": "AI & Machine Learning Tool 43",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-44",
    "name": "AI & Machine Learning Tool 44",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-45",
    "name": "AI & Machine Learning Tool 45",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-46",
    "name": "AI & Machine Learning Tool 46",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-47",
    "name": "AI & Machine Learning Tool 47",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-48",
    "name": "AI & Machine Learning Tool 48",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-49",
    "name": "AI & Machine Learning Tool 49",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "ai-machine-learning-tool-50",
    "name": "AI & Machine Learning Tool 50",
    "category": "AI & Machine Learning",
    "iconText": "A&",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in AI & Machine Learning for team workflow automation."
  },
  {
    "id": "quickbooks-online",
    "name": "QuickBooks Online",
    "category": "Finance & Accounting",
    "iconText": "QO",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "xero-accounting",
    "name": "Xero Accounting",
    "category": "Finance & Accounting",
    "iconText": "XA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "freshbooks-premium",
    "name": "FreshBooks Premium",
    "category": "Finance & Accounting",
    "iconText": "FP",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "wave-accounting-pro",
    "name": "Wave Accounting Pro",
    "category": "Finance & Accounting",
    "iconText": "WA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "sage-intacct-cloud",
    "name": "Sage Intacct Cloud",
    "category": "Finance & Accounting",
    "iconText": "SI",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "netsuite-erp",
    "name": "NetSuite ERP",
    "category": "Finance & Accounting",
    "iconText": "NE",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "stripe-billing",
    "name": "Stripe Billing",
    "category": "Finance & Accounting",
    "iconText": "SB",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "chargebee-recurring",
    "name": "Chargebee Recurring",
    "category": "Finance & Accounting",
    "iconText": "CR",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "recurly-subscription",
    "name": "Recurly Subscription",
    "category": "Finance & Accounting",
    "iconText": "RS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "paddle-merchant",
    "name": "Paddle Merchant",
    "category": "Finance & Accounting",
    "iconText": "PM",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "brex-corporate-spend",
    "name": "Brex Corporate Spend",
    "category": "Finance & Accounting",
    "iconText": "BC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "ramp-spend-management",
    "name": "Ramp Spend Management",
    "category": "Finance & Accounting",
    "iconText": "RS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "navan-travel-expense",
    "name": "Navan Travel & Expense",
    "category": "Finance & Accounting",
    "iconText": "NT",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "expensify-corporate",
    "name": "Expensify Corporate",
    "category": "Finance & Accounting",
    "iconText": "EC",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "zoho-books-professional",
    "name": "Zoho Books Professional",
    "category": "Finance & Accounting",
    "iconText": "ZB",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "bill-com-ap-ar",
    "name": "Bill.com AP/AR",
    "category": "Finance & Accounting",
    "iconText": "BA",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "divvy-by-bill",
    "name": "Divvy by Bill",
    "category": "Finance & Accounting",
    "iconText": "DB",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "airbase-spend-platform",
    "name": "Airbase Spend Platform",
    "category": "Finance & Accounting",
    "iconText": "AS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "mercury-business-banking",
    "name": "Mercury Business Banking",
    "category": "Finance & Accounting",
    "iconText": "MB",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "pleo-cards",
    "name": "Pleo Cards",
    "category": "Finance & Accounting",
    "iconText": "PC",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "soldo-expense",
    "name": "Soldo Expense",
    "category": "Finance & Accounting",
    "iconText": "SE",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "spendesk-expense",
    "name": "Spendesk Expense",
    "category": "Finance & Accounting",
    "iconText": "SE",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "pilot-bookkeeping",
    "name": "Pilot Bookkeeping",
    "category": "Finance & Accounting",
    "iconText": "PB",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "bench-co-accounting",
    "name": "Bench.co Accounting",
    "category": "Finance & Accounting",
    "iconText": "BA",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "maxio-billing",
    "name": "Maxio Billing",
    "category": "Finance & Accounting",
    "iconText": "MB",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "ordway-billing-engine",
    "name": "Ordway Billing Engine",
    "category": "Finance & Accounting",
    "iconText": "OB",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "tropic-saas-procurement",
    "name": "Tropic SaaS Procurement",
    "category": "Finance & Accounting",
    "iconText": "TS",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "zylo-saas-management",
    "name": "Zylo SaaS Management",
    "category": "Finance & Accounting",
    "iconText": "ZS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "leanix-enterprise-architecture",
    "name": "LeanIX Enterprise Architecture",
    "category": "Finance & Accounting",
    "iconText": "LE",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "productiv-saas-intelligence",
    "name": "Productiv SaaS Intelligence",
    "category": "Finance & Accounting",
    "iconText": "PS",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-31",
    "name": "Finance & Accounting Tool 31",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-32",
    "name": "Finance & Accounting Tool 32",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-33",
    "name": "Finance & Accounting Tool 33",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-34",
    "name": "Finance & Accounting Tool 34",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-35",
    "name": "Finance & Accounting Tool 35",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-36",
    "name": "Finance & Accounting Tool 36",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-37",
    "name": "Finance & Accounting Tool 37",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-38",
    "name": "Finance & Accounting Tool 38",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-39",
    "name": "Finance & Accounting Tool 39",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-40",
    "name": "Finance & Accounting Tool 40",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-41",
    "name": "Finance & Accounting Tool 41",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-42",
    "name": "Finance & Accounting Tool 42",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-43",
    "name": "Finance & Accounting Tool 43",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-44",
    "name": "Finance & Accounting Tool 44",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-45",
    "name": "Finance & Accounting Tool 45",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-46",
    "name": "Finance & Accounting Tool 46",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-47",
    "name": "Finance & Accounting Tool 47",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-48",
    "name": "Finance & Accounting Tool 48",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-49",
    "name": "Finance & Accounting Tool 49",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "finance-accounting-tool-50",
    "name": "Finance & Accounting Tool 50",
    "category": "Finance & Accounting",
    "iconText": "F&",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Finance & Accounting for team workflow automation."
  },
  {
    "id": "docusign-standard",
    "name": "DocuSign Standard",
    "category": "Legal & Compliance",
    "iconText": "DS",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 10.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 25.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 99.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "adobe-acrobat-sign",
    "name": "Adobe Acrobat Sign",
    "category": "Legal & Compliance",
    "iconText": "AA",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 13.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 30.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 114.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "pandadoc-business",
    "name": "PandaDoc Business",
    "category": "Legal & Compliance",
    "iconText": "PB",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 17.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 36.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "dropbox-sign-pro",
    "name": "Dropbox Sign Pro",
    "category": "Legal & Compliance",
    "iconText": "DS",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 20.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 144.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "ironclad-clm",
    "name": "Ironclad CLM",
    "category": "Legal & Compliance",
    "iconText": "IC",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 24.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 47.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 159.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "contractbook-pro",
    "name": "Contractbook Pro",
    "category": "Legal & Compliance",
    "iconText": "CP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 27.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 52.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 174.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "concord-contract",
    "name": "Concord Contract",
    "category": "Legal & Compliance",
    "iconText": "CC",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 31.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 58.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 189.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "vanta-soc-2",
    "name": "Vanta SOC 2",
    "category": "Legal & Compliance",
    "iconText": "VS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 34.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 63.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 204.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "drata-soc-2",
    "name": "Drata SOC 2",
    "category": "Legal & Compliance",
    "iconText": "DS",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 38.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 69.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 219.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "secureframe-compliance",
    "name": "Secureframe Compliance",
    "category": "Legal & Compliance",
    "iconText": "SC",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 41.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 74.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "anvil-pdf-esign-api",
    "name": "Anvil PDF & eSign API",
    "category": "Legal & Compliance",
    "iconText": "AP",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 45.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 249.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "clerky-startup-legal",
    "name": "Clerky Startup Legal",
    "category": "Legal & Compliance",
    "iconText": "CS",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 48.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 85.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 264.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "carta-cap-table",
    "name": "Carta Cap Table",
    "category": "Legal & Compliance",
    "iconText": "CC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 52.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 91.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 279.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "pulley-cap-table",
    "name": "Pulley Cap Table",
    "category": "Legal & Compliance",
    "iconText": "PC",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 55.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 96.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 294.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "angellist-stack",
    "name": "AngelList Stack",
    "category": "Legal & Compliance",
    "iconText": "AS",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 59.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 102.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 309.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "onetrust-privacy",
    "name": "OneTrust Privacy",
    "category": "Legal & Compliance",
    "iconText": "OP",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 62.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 107.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 324.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "trustarc-privacy",
    "name": "TrustArc Privacy",
    "category": "Legal & Compliance",
    "iconText": "TP",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 66.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 113.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 339.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "logicgate-risk-cloud",
    "name": "LogicGate Risk Cloud",
    "category": "Legal & Compliance",
    "iconText": "LR",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 69.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 354.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "logicmanager-grc",
    "name": "LogicManager GRC",
    "category": "Legal & Compliance",
    "iconText": "LG",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 73.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 124.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 369.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "auditboard-audit-risk",
    "name": "AuditBoard Audit & Risk",
    "category": "Legal & Compliance",
    "iconText": "AA",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 76.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 129.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 384.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "termly-compliance",
    "name": "Termly Compliance",
    "category": "Legal & Compliance",
    "iconText": "TC",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 80.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 135.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 399.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "iubenda-policy-generator",
    "name": "Iubenda Policy Generator",
    "category": "Legal & Compliance",
    "iconText": "IP",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 83.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 140.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 414.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "cookiebot-compliance",
    "name": "Cookiebot Compliance",
    "category": "Legal & Compliance",
    "iconText": "CC",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 87.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 146.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 429.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "usercentrics-cmp",
    "name": "Usercentrics CMP",
    "category": "Legal & Compliance",
    "iconText": "UC",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 90.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 151.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 444.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "signrequest-pro",
    "name": "SignRequest Pro",
    "category": "Legal & Compliance",
    "iconText": "SP",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 94.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 459.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "signnow-enterprise",
    "name": "SignNow Enterprise",
    "category": "Legal & Compliance",
    "iconText": "SE",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 97.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 162.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 474.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "yousign-esign",
    "name": "Yousign eSign",
    "category": "Legal & Compliance",
    "iconText": "YE",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 101.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 168.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 489.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "sprinto-security",
    "name": "Sprinto Security",
    "category": "Legal & Compliance",
    "iconText": "SS",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 104.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 173.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 504.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "thoropass-compliance",
    "name": "Thoropass Compliance",
    "category": "Legal & Compliance",
    "iconText": "TC",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 108.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 179.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 519.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "hyperproof-grc",
    "name": "Hyperproof GRC",
    "category": "Legal & Compliance",
    "iconText": "HG",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 111.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 184.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 534.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-31",
    "name": "Legal & Compliance Tool 31",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 115.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 190.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 549.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-32",
    "name": "Legal & Compliance Tool 32",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 118.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 195.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 564.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-33",
    "name": "Legal & Compliance Tool 33",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 122.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 201.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 579.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-34",
    "name": "Legal & Compliance Tool 34",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 125.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 206.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 594.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-35",
    "name": "Legal & Compliance Tool 35",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 129.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 212.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 609.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-36",
    "name": "Legal & Compliance Tool 36",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 132.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 217.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 624.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-37",
    "name": "Legal & Compliance Tool 37",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 136.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 223.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 639.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-38",
    "name": "Legal & Compliance Tool 38",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 139.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 228.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 654.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-39",
    "name": "Legal & Compliance Tool 39",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 143.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 234.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 669.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-40",
    "name": "Legal & Compliance Tool 40",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 146.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 239.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 684.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-41",
    "name": "Legal & Compliance Tool 41",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#2563eb",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 150.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 245.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 699.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-42",
    "name": "Legal & Compliance Tool 42",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#7c3aed",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 153.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 250.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 714.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-43",
    "name": "Legal & Compliance Tool 43",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#059669",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 157.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 256.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 729.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-44",
    "name": "Legal & Compliance Tool 44",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#dc2626",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 160.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 261.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 744.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-45",
    "name": "Legal & Compliance Tool 45",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#d97706",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 164.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 267.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 759.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-46",
    "name": "Legal & Compliance Tool 46",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#0891b2",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 167.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 272.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 774.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-47",
    "name": "Legal & Compliance Tool 47",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#4f46e5",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 171.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 278.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 789.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-48",
    "name": "Legal & Compliance Tool 48",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#c026d3",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 174.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 283.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 804.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-49",
    "name": "Legal & Compliance Tool 49",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#0284c7",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 178.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 289.0,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 819.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  },
  {
    "id": "legal-compliance-tool-50",
    "name": "Legal & Compliance Tool 50",
    "category": "Legal & Compliance",
    "iconText": "L&",
    "iconBg": "#e11d48",
    "defaultPlan": "Standard",
    "plans": [
      {
        "name": "Standard",
        "monthlyCost": 181.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Pro",
        "monthlyCost": 294.5,
        "billingCycle": "monthly"
      },
      {
        "name": "Enterprise",
        "monthlyCost": 834.0,
        "billingCycle": "monthly"
      }
    ],
    "description": "Verified real software tool in Legal & Compliance for team workflow automation."
  }
];

export function findCatalogToolByName(name: string): CatalogSaaSTool | undefined {
  const lower = name.toLowerCase().trim();
  return MASTER_SAAS_CATALOG.find((tool) => tool.name.toLowerCase().includes(lower) || lower.includes(tool.name.toLowerCase()));
}
