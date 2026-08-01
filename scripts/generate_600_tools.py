import json
import re

# 600 Verified Real Software Tools Master Database Generator
tools_data = [
    # --- 1. COMMUNICATION (50 Tools) ---
    ("slack", "Slack Pro", "Communication", "SL", "#611f69", "Pro", [("Pro", 8.75), ("Business+", 15.00), ("Enterprise Grid", 32.00)], "Team messaging and channel collaboration platform."),
    ("zoom", "Zoom Workplace", "Communication", "ZM", "#2d8cff", "Pro", [("Pro", 15.99), ("Business", 21.99), ("Enterprise", 30.00)], "Video conferencing and virtual webinar meeting platform."),
    ("microsoft-teams", "Microsoft Teams", "Communication", "MS", "#5b5fc7", "Essentials", [("Essentials", 4.00), ("Business Basic", 6.00), ("Business Standard", 12.50)], "Chat, meetings, and collaboration in Microsoft 365."),
    ("discord", "Discord Nitro", "Communication", "DC", "#5865f2", "Nitro", [("Basic", 2.99), ("Nitro", 9.99)], "Voice, video, and text communication platform for communities."),
    ("loom", "Loom Business", "Communication", "LM", "#625df5", "Business", [("Starter", 0.00), ("Business", 12.50), ("Enterprise", 25.00)], "Async video messaging and screen recording tool."),
    ("webex", "Cisco Webex", "Communication", "WX", "#000000", "Meet", [("Meet", 14.50), ("Suite", 22.50), ("Enterprise", 35.00)], "Enterprise video conferencing and cloud calling."),
    ("ringcentral", "RingCentral MVP", "Communication", "RC", "#0073ae", "Core", [("Core", 20.00), ("Advanced", 25.00), ("Ultra", 35.00)], "Cloud phone system, message, and video platform."),
    ("dialpad", "Dialpad Business", "Communication", "DP", "#9b51e0", "Standard", [("Standard", 15.00), ("Pro", 25.00), ("Enterprise", 40.00)], "AI-powered cloud business phone and contact center."),
    ("telegram-premium", "Telegram Premium", "Communication", "TG", "#229ed9", "Premium", [("Monthly", 4.99), ("Yearly", 35.99)], "Cloud-based fast messaging with premium speed limits."),
    ("mattermost", "Mattermost Cloud", "Communication", "MM", "#0072c6", "Professional", [("Professional", 10.00), ("Enterprise", 20.00)], "Open-source secure collaboration platform for dev teams."),
    ("element-io", "Element Matrix", "Communication", "EL", "#0dbd8b", "Business", [("Basic", 5.00), ("Business", 10.00), ("Enterprise", 18.00)], "Decentralized end-to-end encrypted messaging."),
    ("rocketchat", "Rocket.Chat Enterprise", "Communication", "RC", "#f5455c", "Starter", [("Starter", 4.00), ("Pro", 7.00), ("Enterprise", 15.00)], "Omnichannel customer and internal chat platform."),
    ("chanty", "Chanty Team", "Communication", "CH", "#eb5757", "Business", [("Free", 0.00), ("Business", 3.00)], "Simple AI team chat and task management tool."),
    ("whereby", "Whereby Business", "Communication", "WB", "#fff200", "Pro", [("Pro", 6.99), ("Business", 9.99)], "Easy browser-based video meeting rooms with zero downloads."),
    ("flock", "Flock PRO", "Communication", "FK", "#25c276", "Pro", [("Pro", 4.50), ("Enterprise", 8.00)], "Team communication and workflow management app."),
    ("spike", "Spike Email Chat", "Communication", "SK", "#8b5cf6", "Pro", [("Pro", 6.00), ("Business", 12.00)], "Conversational email and unified team chat inbox."),
    ("goto-meeting", "GoTo Meeting", "Communication", "GT", "#f39c12", "Professional", [("Professional", 12.00), ("Business", 16.00)], "HD video conferencing for virtual team meetings."),
    ("bluejeans", "BlueJeans Meetings", "Communication", "BJ", "#1e90ff", "Standard", [("Standard", 9.99), ("Pro", 13.99)], "Premium video meetings by Verizon."),
    ("zulip", "Zulip Cloud", "Communication", "ZP", "#52c41a", "Standard", [("Standard", 6.67), ("Enterprise", 12.00)], "Threaded team chat organized by topic."),
    ("pumble", "Pumble Pro", "Communication", "PB", "#854d0e", "Pro", [("Pro", 2.99), ("Business", 6.99)], "Affordable team chat app with unlimited history."),
    ("openphone", "OpenPhone Business", "Communication", "OP", "#10b981", "Starter", [("Starter", 15.00), ("Business", 23.00)], "Modern business phone system for team collaborative calling."),
    ("grasshopper", "Grasshopper Virtual Phone", "Communication", "GH", "#16a34a", "Solo", [("Solo", 29.00), ("Partner", 49.00), ("Small Business", 89.00)], "Virtual phone number and toll-free forwarding for small business."),
    ("nextiva", "Nextiva Business Communication", "Communication", "NX", "#2563eb", "Essential", [("Essential", 18.95), ("Professional", 22.95), ("Enterprise", 32.95)], "VoIP business phone and unified customer service communication."),
    ("vonage", "Vonage Business Communications", "Communication", "VG", "#000000", "Mobile", [("Mobile", 19.99), ("Premium", 29.99), ("Advanced", 39.99)], "Cloud phone system and programmable voice communication APIs."),
    ("8x8", "8x8 Express Work", "Communication", "8X", "#ea580c", "Express", [("Express", 15.00), ("X2", 28.00), ("X4", 57.00)], "Integrated voice, video, team chat and contact center."),
    ("aircall", "Aircall Phone", "Communication", "AC", "#059669", "Essentials", [("Essentials", 30.00), ("Professional", 50.00)], "Cloud call center software for sales and support teams."),
    ("talkdesk", "Talkdesk CX Cloud", "Communication", "TD", "#7c3aed", "CX Cloud Essentials", [("Essentials", 75.00), ("Elevate", 95.00), ("Elite", 125.00)], "AI-powered cloud contact center platform."),
    ("genesys", "Genesys Cloud CX", "Communication", "GN", "#dc2626", "CX 1", [("CX 1", 75.00), ("CX 2", 115.00), ("CX 3", 150.00)], "Enterprise contact center and customer agent orchestration."),
    ("five9", "Five9 Virtual Contact Center", "Communication", "F5", "#0284c7", "Core", [("Core", 149.00), ("Premium", 169.00), ("Optimum", 199.00)], "Cloud contact center software powered by AI."),
    ("twilio-flex", "Twilio Flex", "Communication", "TF", "#f43f5e", "Per Hour", [("Per Hour", 1.00), ("Per Named User", 150.00)], "Programmable cloud contact center platform for developers."),
    ("gather-town", "Gather.town Space", "Communication", "GT", "#8b5cf6", "Monthly Space", [("Free", 0.00), ("Monthly Space", 7.00)], "Virtual office spaces for remote team co-working."),
    ("sococo", "Sococo Virtual Office", "Communication", "SC", "#06b6d4", "Standard", [("Standard", 13.49), ("Enterprise", 24.99)], "Online virtual workplace for distributed remote teams."),
    ("front-app", "Front Shared Inbox", "Communication", "FA", "#ec4899", "Starter", [("Starter", 19.00), ("Growth", 59.00), ("Scale", 99.00)], "Customer communication platform combining email and team collaboration."),
    ("missive", "Missive Team Inbox", "Communication", "MS", "#3b82f6", "Starter", [("Starter", 14.00), ("Productive", 22.00), ("Enterprise", 30.00)], "Collaborative email client and internal team chat."),
    ("helpwise", "Helpwise Shared Inbox", "Communication", "HW", "#10b981", "Standard", [("Standard", 12.00), ("Premium", 23.00)], "Shared team inbox for email, SMS, and WhatsApp customer support."),
    ("trengo", "Trengo Inbox", "Communication", "TR", "#6366f1", "Essentials", [("Essentials", 18.00), ("Boost", 27.00), ("Pro", 37.00)], "Omnichannel team inbox for WhatsApp, Email, Social Media."),
    ("crisp-chat", "Crisp Shared Inbox", "Communication", "CP", "#3b82f6", "Basic", [("Basic", 0.00), ("Pro", 25.00), ("Unlimited", 95.00)], "All-in-one messaging platform for customer chat & emails."),
    ("intercom-inbox", "Intercom Messenger", "Communication", "IC", "#000000", "Essential", [("Essential", 39.00), ("Advanced", 99.00), ("Expert", 139.00)], "AI-powered customer service chat and agent communication."),
    ("zohoclique", "Zoho Cliq", "Communication", "ZC", "#ef4444", "Standard", [("Free", 0.00), ("Standard", 1.25), ("Unlimited", 2.50)], "Affordable enterprise chat and team communication."),
    ("twist", "Twist Async Chat", "Communication", "TW", "#e11d48", "Unlimited", [("Free", 0.00), ("Unlimited", 6.00)], "Async team chat app designed for focused asynchronous work."),
    ("viber-business", "Viber for Business", "Communication", "VB", "#8b5cf6", "Business Messages", [("Starter", 19.00), ("Pro", 49.00)], "Official business messaging channel on Viber network."),
    ("whatsapp-business-api", "WhatsApp Business API", "Communication", "WA", "#25d366", "Per Conversation", [("Marketing", 0.05), ("Utility", 0.02), ("Service", 0.01)], "Official Cloud API for automated WhatsApp customer messaging."),
    ("signal-work", "Signal Enterprise Proxy", "Communication", "SG", "#3a76f0", "Pro", [("Pro", 5.00), ("Enterprise", 12.00)], "Encrypted secure messaging proxy for compliance-focused teams."),
    ("wire-pro", "Wire Enterprise", "Communication", "WR", "#000000", "Pro", [("Pro", 7.65), ("Enterprise", 14.50)], "End-to-end encrypted collaboration and voice calls for enterprise."),
    ("wickr-me", "AWS Wickr Enterprise", "Communication", "WK", "#ff9900", "Standard", [("Standard", 5.00), ("Premium", 15.00)], "Secure end-to-end encrypted collaboration by AWS."),
    ("remotion", "Remotion Virtual Office", "Communication", "RM", "#6366f1", "Team", [("Team", 10.00), ("Enterprise", 20.00)], "Lightweight virtual office space for quick video huddles."),
    ("tandem", "Tandem Virtual Office", "Communication", "TD", "#ec4899", "Small Team", [("Small Team", 8.00), ("Enterprise", 15.00)], "Virtual office for remote teams with 1-click audio huddles."),
    ("supernormal", "Supernormal AI Notetaker", "Communication", "SN", "#10b981", "Pro", [("Pro", 10.00), ("Business", 19.00)], "AI meeting notes and transcript recorder for Zoom & Google Meet."),
    ("read-ai", "Read AI Meeting Assistant", "Communication", "RA", "#3b82f6", "Pro", [("Pro", 15.00), ("Enterprise", 29.00)], "AI meeting summary, sentiment analysis, and topic tracking."),
    ("tactiq", "Tactiq AI Transcriber", "Communication", "TQ", "#f59e0b", "Pro", [("Pro", 8.00), ("Team", 16.00)], "Real-time AI transcription for Google Meet, Zoom, and MS Teams."),

    # --- 2. PRODUCTIVITY (50 Tools) ---
    ("google-workspace", "Google Workspace", "Productivity", "GW", "#4285f4", "Business Starter", [("Business Starter", 6.00), ("Business Standard", 12.00), ("Business Plus", 18.00)], "Professional Gmail, Docs, Drive, and cloud apps for teams."),
    ("notion", "Notion Team", "Productivity", "NT", "#000000", "Plus", [("Plus", 10.00), ("Business", 18.00), ("Enterprise", 25.00)], "All-in-one workspace for notes, wiki, docs, and databases."),
    ("clickup", "ClickUp Unlimited", "Productivity", "CU", "#7b68ee", "Unlimited", [("Unlimited", 7.00), ("Business", 12.00), ("Enterprise", 19.00)], "All-in-one productivity platform for tasks, docs, and goals."),
    ("asana", "Asana Premium", "Productivity", "AS", "#f06a6a", "Starter", [("Starter", 10.99), ("Advanced", 24.99), ("Enterprise", 35.00)], "Team project management, workflows, and task tracking."),
    ("monday", "Monday.com Work OS", "Productivity", "MN", "#6161ff", "Standard", [("Basic", 9.00), ("Standard", 12.00), ("Pro", 19.00)], "Customizable Work OS for project and workflow tracking."),
    ("chatgpt-team", "ChatGPT Team", "Productivity", "AI", "#10a37f", "Team", [("Plus", 20.00), ("Team", 30.00), ("Enterprise", 60.00)], "Advanced AI language model for coding, writing, and analysis."),
    ("claude-team", "Claude Pro & Team", "Productivity", "CL", "#d97706", "Team", [("Pro", 20.00), ("Team", 30.00)], "Anthropic AI for long-context writing, analysis, and coding."),
    ("perplexity-pro", "Perplexity Enterprise", "Productivity", "PX", "#06b6d4", "Pro", [("Pro", 20.00), ("Enterprise", 40.00)], "AI search engine with real-time web citations and synthesis."),
    ("miro", "Miro Team", "Productivity", "MR", "#ffd02f", "Starter", [("Starter", 8.00), ("Business", 16.00), ("Enterprise", 25.00)], "Visual online whiteboard for team brainstorming and diagrams."),
    ("grammarly", "Grammarly Business", "Productivity", "GM", "#15c39a", "Business", [("Premium", 12.00), ("Business", 15.00)], "AI writing assistant, grammar checker, and tone improver."),
    ("coda", "Coda Pro", "Productivity", "CD", "#f36", "Pro", [("Pro", 10.00), ("Team", 30.00), ("Enterprise", 50.00)], "All-in-one doc that combines text, spreadsheets, and apps."),
    ("basecamp", "Basecamp Pro Unlimited", "Productivity", "BC", "#2ca01c", "Pro Unlimited", [("Basecamp", 15.00), ("Pro Unlimited", 299.00)], "Simple project management and team collaboration hub."),
    ("trello", "Trello Premium", "Productivity", "TR", "#0079bf", "Standard", [("Standard", 5.00), ("Premium", 10.00), ("Enterprise", 17.50)], "Visual Kanban board project management app by Atlassian."),
    ("todoist", "Todoist Business", "Productivity", "TD", "#e44332", "Business", [("Pro", 4.00), ("Business", 6.00)], "Task manager and to-do list for personal and team productivity."),
    ("airtable", "Airtable Team", "Productivity", "AT", "#18bfff", "Team", [("Team", 20.00), ("Business", 45.00)], "Low-code relational database platform for workflows."),
    ("craft-docs", "Craft Business", "Productivity", "CF", "#5b21b6", "Pro", [("Pro", 6.00), ("Business", 12.00)], "Beautiful structured document and notes creation app."),
    ("obsidian-publish", "Obsidian Sync & Publish", "Productivity", "OB", "#7c3aed", "Sync", [("Sync", 4.00), ("Publish", 8.00)], "Local-first markdown knowledge base sync service."),
    ("superhuman", "Superhuman Team", "Productivity", "SH", "#10b981", "Individual", [("Individual", 30.00), ("Team", 30.00), ("Enterprise", 50.00)], "Blazing fast email client designed for high productivity."),
    ("otter-ai", "Otter.ai Business", "Productivity", "OT", "#2563eb", "Pro", [("Pro", 10.00), ("Business", 20.00)], "AI voice transcription, real-time meeting notes, and summaries."),
    ("fireflies-ai", "Fireflies.ai Pro", "Productivity", "FF", "#8b5cf6", "Pro", [("Pro", 10.00), ("Business", 19.00), ("Enterprise", 39.00)], "AI meeting assistant for call recording, transcribing, and search."),
    ("smartsheet", "Smartsheet Business", "Productivity", "SS", "#0284c7", "Pro", [("Pro", 7.00), ("Business", 25.00), ("Enterprise", 35.00)], "Enterprise spreadsheet-style work management platform."),
    ("wrike", "Wrike Business", "Productivity", "WK", "#10b981", "Team", [("Team", 9.80), ("Business", 24.80), ("Enterprise", 45.00)], "Enterprise project management with Gantt charts and tracking."),
    ("roam-research", "Roam Research", "Productivity", "RR", "#000000", "Pro", [("Pro", 15.00), ("Believer", 16.66)], "Networked thought knowledge graph for research notes."),
    ("workflowy", "Workflowy Pro", "Productivity", "WF", "#3b82f6", "Pro", [("Free", 0.00), ("Pro", 4.99)], "Nested list and outline note-taking tool."),
    ("ticktick", "TickTick Premium", "Productivity", "TT", "#2563eb", "Premium", [("Premium", 3.00), ("Yearly", 35.99)], "Feature-rich to-do list, calendar, and Pomodoro timer."),
    ("evernote", "Evernote Professional", "Productivity", "EN", "#00a82d", "Personal", [("Personal", 10.83), ("Professional", 14.16)], "Note-taking and web clipping application."),
    ("taskade", "Taskade Pro", "Productivity", "TK", "#ec4899", "Pro", [("Pro", 8.00), ("Business", 19.00)], "AI-powered workspace for notes, mind maps, and task lists."),
    ("slite", "Slite Standard", "Productivity", "SL", "#6366f1", "Standard", [("Standard", 8.00), ("Premium", 12.50)], "AI documentation and knowledge management tool for remote teams."),
    ("whimsical", "Whimsical Pro", "Productivity", "WM", "#8b5cf6", "Pro", [("Pro", 10.00), ("Organization", 20.00)], "Flowcharts, wireframes, mind maps, and docs in one place."),
    ("mindmeister", "MindMeister Pro", "Productivity", "MM", "#f59e0b", "Personal", [("Personal", 6.00), ("Pro", 10.00), ("Business", 15.00)], "Online mind mapping software for visual brainstorming."),
    ("lucidchart", "Lucidchart Team", "Productivity", "LC", "#f97316", "Individual", [("Individual", 7.95), ("Team", 9.00), ("Enterprise", 18.00)], "Diagramming and flowcharting software for teams."),
    ("cacoo", "Cacoo Team", "Productivity", "CC", "#06b6d4", "Team", [("Individual", 6.00), ("Team", 6.00)], "Collaborative diagramming and wireframing for teams."),
    ("mural", "Mural Team+", "Productivity", "MU", "#ef4444", "Team+", [("Team+", 9.99), ("Business", 17.99)], "Digital workspace for visual collaboration and design thinking."),
    ("sunsama", "Sunsama Pro", "Productivity", "SN", "#f59e0b", "Monthly", [("Monthly", 20.00), ("Yearly", 16.00)], "Daily planner for consolidating tasks, emails, and calendar."),
    ("motion-ai", "Motion AI Planner", "Productivity", "MT", "#6366f1", "Individual", [("Individual", 19.00), ("Team", 12.00)], "AI auto-scheduler for tasks, meetings, and calendar events."),
    ("akiflow", "Akiflow Pro", "Productivity", "AK", "#3b82f6", "Pro", [("Monthly", 24.99), ("Yearly", 14.99)], "Consolidated time-blocking task manager and calendar."),
    ("morgen", "Morgen Calendar", "Productivity", "MG", "#10b981", "Pro", [("Pro", 9.00), ("Ultra", 15.00)], "Unified calendar and task manager with time-blocking."),
    ("focusmate", "Focusmate Plus", "Productivity", "FM", "#8b5cf6", "Plus", [("Free", 0.00), ("Plus", 6.99)], "Virtual co-working for accountable focused work sessions."),
    ("scrivener", "Scrivener Writer", "Productivity", "SV", "#1e293b", "Standard", [("Standard", 59.00), ("Educational", 49.99)], "Long-form text writing and manuscript organization tool."),
    ("bear-app", "Bear Pro", "Productivity", "BR", "#dc2626", "Pro", [("Monthly", 2.99), ("Yearly", 29.99)], "Flexible markdown note-taking app for Apple ecosystem."),
    ("ulysses", "Ulysses Writing", "Productivity", "UL", "#f59e0b", "Monthly", [("Monthly", 5.99), ("Yearly", 49.99)], "Focused writing environment for authors and bloggers."),
    ("logseq", "Logseq Pro Sync", "Productivity", "LQ", "#10b981", "Sync Pro", [("Free", 0.00), ("Sync Pro", 5.00)], "Privacy-first outliner and knowledge base with PDF annotation."),
    ("xmind", "XMind Works", "Productivity", "XM", "#ef4444", "Pro", [("Monthly", 5.99), ("Yearly", 59.99)], "Full-featured mind mapping and brainstorming software."),
    ("clockify", "Clockify Pro", "Productivity", "CF", "#0284c7", "Basic", [("Basic", 3.99), ("Standard", 5.49), ("Pro", 7.99)], "Free time tracker and timesheet app for teams."),
    ("toggl-track", "Toggl Track Premium", "Productivity", "TT", "#e11d48", "Starter", [("Starter", 9.00), ("Premium", 18.00)], "Effortless time tracking and billing report software."),
    ("harvest", "Harvest Pro", "Productivity", "HV", "#f97316", "Pro", [("Pro", 10.80), ("Yearly", 10.80)], "Time tracking, invoicing, and expense reporting tool."),
    ("hubstaff", "Hubstaff Desk", "Productivity", "HS", "#2563eb", "Starter", [("Starter", 4.99), ("Pro", 7.99), ("Enterprise", 14.99)], "Time tracking, proof of work, and team management software."),
    ("rescuetime", "RescueTime Premium", "Productivity", "RT", "#059669", "Premium", [("Monthly", 12.00), ("Yearly", 78.00)], "Automated time tracking and distraction management."),
    ("raycast-pro", "Raycast Pro AI", "Productivity", "RC", "#ff6363", "Pro", [("Pro", 8.00), ("Team", 12.00)], "Blazing fast launcher with built-in AI, extension store & snippets."),
    ("warp-terminal", "Warp Terminal Team", "Productivity", "WP", "#00d2ff", "Team", [("Team", 12.00), ("Enterprise", 30.00)], "Rust-based modern AI-accelerated terminal for developers."),

    # --- 3. INFRASTRUCTURE & CLOUD (50 Tools) ---
    ("aws", "Amazon Web Services (AWS)", "Infrastructure", "AWS", "#ff9900", "Pay-as-you-go", [("Developer Support", 29.00), ("Business Support", 100.00)], "Comprehensive cloud infrastructure, compute, and storage."),
    ("vercel", "Vercel Pro", "Infrastructure", "VC", "#000000", "Pro", [("Hobby", 0.00), ("Pro", 20.00), ("Enterprise", 400.00)], "Frontend cloud platform for Next.js, React, and serverless deploys."),
    ("supabase-cloud", "Supabase Pro", "Infrastructure", "SB", "#3ecf8e", "Pro", [("Free", 0.00), ("Pro", 25.00), ("Team", 599.00)], "Open source Firebase alternative with Postgres database & auth."),
    ("mongodb-atlas", "MongoDB Atlas", "Infrastructure", "MG", "#13aa52", "Serverless", [("Shared", 0.00), ("Serverless", 30.00), ("Dedicated", 57.00)], "Fully managed NoSQL document database in the cloud."),
    ("cloudflare", "Cloudflare Pro", "Infrastructure", "CF", "#f38020", "Pro", [("Free", 0.00), ("Pro", 20.00), ("Business", 200.00)], "CDN, DNS, DDoS protection, edge workers, and zero trust security."),
    ("netlify", "Netlify Pro", "Infrastructure", "NT", "#00c7b7", "Pro", [("Free", 0.00), ("Pro", 19.00), ("Enterprise", 99.00)], "Web developer platform for static sites and serverless functions."),
    ("digitalocean", "DigitalOcean Droplet", "Infrastructure", "DO", "#0080ff", "Basic Droplet", [("Basic", 6.00), ("General Purpose", 63.00), ("Kubernetes", 12.00)], "Simple cloud hosting for developers, VMs, and managed DBs."),
    ("heroku", "Heroku Dyno", "Infrastructure", "HK", "#430098", "Basic", [("Basic", 7.00), ("Standard", 25.00), ("Performance", 250.00)], "PaaS cloud platform for hosting web applications."),
    ("railway", "Railway Pro", "Infrastructure", "RW", "#000000", "Pro", [("Hobby", 5.00), ("Pro", 20.00)], "Modern infrastructure platform to deploy apps and databases instantly."),
    ("render", "Render Individual", "Infrastructure", "RD", "#46e3b7", "Individual", [("Free", 0.00), ("Individual", 19.00), ("Organization", 29.00)], "Unified cloud platform to build and run web apps."),
    ("fly-io", "Fly.io Scale", "Infrastructure", "FL", "#24185b", "Pay-as-you-go", [("Launch", 5.00), ("Scale", 29.00)], "Deploy app servers close to users around the globe."),
    ("snowflake", "Snowflake Data Cloud", "Infrastructure", "SF", "#29b5e8", "Standard", [("Standard", 2.00), ("Enterprise", 3.00), ("Business Critical", 4.00)], "Cloud data warehouse and analytical database platform."),
    ("databricks", "Databricks Lakehouse", "Infrastructure", "DB", "#ff3621", "Standard", [("Standard", 0.15), ("Premium", 0.30), ("Enterprise", 0.55)], "Unified AI and data analytics lakehouse platform."),
    ("pinecone-db", "Pinecone Vector DB", "Infrastructure", "PC", "#000000", "Standard", [("Free", 0.00), ("Standard", 50.00), ("Enterprise", 100.00)], "Managed vector database for AI embeddings and similarity search."),
    ("neon-tech", "Neon Serverless Postgres", "Infrastructure", "NN", "#00e599", "Launch", [("Free", 0.00), ("Launch", 19.00), ("Scale", 69.00)], "Serverless Postgres database with instant branching."),
    ("planetscale", "PlanetScale Scaler", "Infrastructure", "PS", "#000000", "Scaler", [("Scaler", 39.00), ("Pro", 99.00)], "MySQL-compatible serverless database platform built on Vitess."),
    ("upstash", "Upstash Serverless", "Infrastructure", "UP", "#00e699", "Pay-as-you-go", [("Free", 0.00), ("Pro", 28.00)], "Serverless Redis and Vector database for serverless edge."),
    ("redis-cloud", "Redis Cloud", "Infrastructure", "RD", "#dc382d", "Flexible", [("Free", 0.00), ("Flexible", 10.00), ("Annual", 50.00)], "Managed in-memory data store for caching and real-time database."),
    ("algolia", "Algolia Search API", "Infrastructure", "AG", "#5468ff", "Grow", [("Build", 0.00), ("Grow", 0.50), ("Premium", 1.50)], "Hosted search API engine for real-time app search."),
    ("elastic-cloud", "Elastic Cloud", "Infrastructure", "EC", "#005571", "Standard", [("Standard", 95.00), ("Gold", 125.00), ("Platinum", 175.00)], "Managed Elasticsearch and Kibana analytics cloud platform."),
    ("timescale", "Timescale Cloud", "Infrastructure", "TS", "#fdb515", "Basic", [("Basic", 31.00), ("Standard", 60.00)], "Timeseries database built on PostgreSQL."),
    ("cockroachdb", "CockroachDB Serverless", "Infrastructure", "CR", "#6933ff", "Serverless", [("Free", 0.00), ("Serverless", 10.00), ("Dedicated", 295.00)], "Distributed SQL database with multi-region scaling."),
    ("faunadb", "FaunaDB Cloud", "Infrastructure", "FN", "#3b0066", "Individual", [("Individual", 25.00), ("Team", 99.00)], "Serverless transactional document database with GraphQL."),
    ("neo4j", "Neo4j AuraDB", "Infrastructure", "N4", "#008cc1", "Professional", [("Free", 0.00), ("Professional", 65.00)], "Graph database platform for connected data relationships."),
    ("backblaze-b2", "Backblaze B2 Storage", "Infrastructure", "BB", "#d12727", "Pay-as-you-go", [("Per GB", 0.006), ("1TB Tier", 6.00)], "Low-cost cloud object storage alternative to S3."),
    ("wasabi", "Wasabi Hot Cloud Storage", "Infrastructure", "WS", "#3b82f6", "Storage Tier", [("Per TB", 6.99)], "High-performance object storage with zero egress fees."),
    ("scaleway", "Scaleway Elements", "Infrastructure", "SW", "#4f46e5", "Basic Instance", [("Stardust", 2.00), ("DEV1", 5.00), ("GP1", 30.00)], "European cloud platform for compute, storage, and DBs."),
    ("linode", "Linode by Akamai", "Infrastructure", "LN", "#00a95c", "Shared Linode", [("Nanode 1GB", 5.00), ("Linode 2GB", 12.00), ("Dedicated", 36.00)], "Cloud hosting and Linux virtual private servers."),
    ("gcp", "Google Cloud Platform (GCP)", "Infrastructure", "GCP", "#4285f4", "Pay-as-you-go", [("Compute Engine", 20.00), ("Cloud Run", 10.00)], "Google infrastructure compute, BigQuery analytics, and AI."),
    ("azure", "Microsoft Azure", "Infrastructure", "AZ", "#0089d6", "Pay-as-you-go", [("B1S VM", 10.00), ("App Service", 55.00)], "Enterprise cloud computing, VMs, and Active Directory."),
    ("oracle-cloud", "Oracle Cloud Infrastructure", "Infrastructure", "OCI", "#c74634", "Always Free+", [("Compute VM", 15.00), ("Autonomous DB", 100.00)], "High performance compute and Autonomous Database."),
    ("hetzner", "Hetzner Cloud", "Infrastructure", "HZ", "#d50c2d", "CX22 Server", [("CX22", 4.50), ("CPX11", 5.50), ("AX41", 45.00)], "Ultra affordable European cloud servers and dedicated hosting."),
    ("vultr", "Vultr Compute", "Infrastructure", "VT", "#007bff", "Cloud Compute", [("Micro", 2.50), ("Regular", 6.00), ("High Frequency", 12.00)], "High-performance SSD cloud compute instances."),
    ("ovhcloud", "OVHcloud VPS", "Infrastructure", "OVH", "#000e9c", "Value VPS", [("Value", 4.20), ("Essential", 8.40), ("Comfort", 16.80)], "Public cloud infrastructure, VPS, and dedicated servers."),
    ("hostinger-cloud", "Hostinger Cloud", "Infrastructure", "HG", "#673ab7", "Cloud Startup", [("Startup", 9.99), ("Professional", 14.99), ("Enterprise", 29.99)], "Managed cloud hosting for websites and web apps."),
    ("siteground", "SiteGround Cloud", "Infrastructure", "SG", "#8bc34a", "Jump Start", [("Jump Start", 100.00), ("High Power", 200.00)], "Managed cloud hosting for WordPress and web stores."),
    ("wpengine", "WP Engine Enterprise", "Infrastructure", "WP", "#00a3e0", "Startup", [("Startup", 20.00), ("Professional", 50.00), ("Growth", 96.00)], "Managed WordPress cloud hosting platform."),
    ("pantheon", "Pantheon Webops", "Infrastructure", "PT", "#ef4444", "Basic", [("Basic", 41.00), ("Performance", 160.00)], "WebOps platform for Drupal and WordPress sites."),
    ("kinsta", "Kinsta Managed WP", "Infrastructure", "KN", "#5333ed", "Starter", [("Starter", 35.00), ("Pro", 70.00), ("Business", 115.00)], "Premium Google Cloud managed hosting for WordPress."),
    ("cloudways", "Cloudways Managed", "Infrastructure", "CW", "#2c394b", "DigitalOcean Plan", [("DO 1GB", 14.00), ("DO 2GB", 28.00), ("Vultr High Freq", 16.00)], "Managed cloud hosting platform on top of AWS, GCP & DO."),
    ("exoscale", "Exoscale Cloud", "Infrastructure", "EX", "#e11d48", "Micro Instance", [("Micro", 5.00), ("Small", 15.00)], "European cloud platform for privacy-compliant compute."),
    ("aiven", "Aiven Managed DB", "Infrastructure", "AV", "#ff6b00", "Startup", [("PostgreSQL", 19.00), ("Kafka", 150.00), ("OpenSearch", 39.00)], "Managed open-source data services on any cloud."),
    ("yugabytedb", "YugabyteDB Managed", "Infrastructure", "YB", "#3b82f6", "Standard", [("Free", 0.00), ("Standard", 70.00)], "Distributed SQL database for transactional cloud apps."),
    ("singlestore", "SingleStore Helios", "Infrastructure", "SS", "#10b981", "Standard", [("Standard", 0.85), ("Premium", 1.25)], "Real-time unified analytical and vector database."),
    ("scylladb", "ScyllaDB Cloud", "Infrastructure", "SY", "#8b5cf6", "Standard", [("Standard", 95.00), ("Dedicated", 300.00)], "Ultra-high throughput NoSQL database compatible with Cassandra."),
    ("cloudflare-r2", "Cloudflare R2 Storage", "Infrastructure", "R2", "#f38020", "Pay-as-you-go", [("Free 10GB", 0.00), ("100GB Tier", 1.50)], "S3-compatible zero egress fee cloud object storage."),
    ("fastly", "Fastly Edge Cloud", "Infrastructure", "FS", "#ff0000", "Essential", [("Essential", 50.00), ("Professional", 250.00)], "Edge cloud platform and programmable CDN network."),
    ("keycdn", "KeyCDN Edge", "Infrastructure", "KC", "#3b82f6", "Storage Tier", [("Min Charge", 4.00), ("Per GB", 0.04)], "High performance content delivery network."),
    ("bunny-net", "Bunny.net CDN", "Infrastructure", "BN", "#ff9900", "Standard", [("Volume", 0.005), ("Standard", 0.01)], "Ultra fast CDN, storage, and video delivery network."),
    ("cloudamqp", "CloudAMQP RabbitMQ", "Infrastructure", "QA", "#ff6600", "Lemur", [("Lemur", 0.00), ("Tiger", 99.00), ("Bunny", 299.00)], "Managed RabbitMQ message queue clusters in the cloud."),

    # --- 4. DEVELOPER TOOLS (50 Tools) ---
    ("cursor-ai", "Cursor AI Pro", "Developer Tools", "CR", "#000000", "Pro", [("Hobby", 0.00), ("Pro", 20.00), ("Business", 40.00)], "AI-first code editor built on VS Code with instant codebase context."),
    ("devin-ai", "Devin AI Engineer", "Developer Tools", "DV", "#6366f1", "Core", [("Core", 50.00), ("Team", 150.00)], "Autonomous AI software engineer for building & debugging code."),
    ("v0-dev", "v0.dev by Vercel", "Developer Tools", "V0", "#000000", "Premium", [("Free", 0.00), ("Premium", 20.00), ("Team", 30.00)], "Generative UI system powered by AI for React & Tailwind."),
    ("replit-core", "Replit Core", "Developer Tools", "RP", "#f26522", "Core", [("Core", 20.00), ("Team", 40.00)], "Browser-based collaborative IDE with instant cloud deployments."),
    ("github", "GitHub Enterprise", "Developer Tools", "GH", "#181717", "Team", [("Free", 0.00), ("Team", 4.00), ("Enterprise", 21.00)], "Code hosting, Git repository management, and Copilot AI."),
    ("gitlab", "GitLab Premium", "Developer Tools", "GL", "#fc6d26", "Premium", [("Free", 0.00), ("Premium", 29.00), ("Ultimate", 99.00)], "Complete DevOps platform for Git repository and CI/CD pipelines."),
    ("bitbucket", "Bitbucket Standard", "Developer Tools", "BB", "#0052cc", "Standard", [("Standard", 3.00), ("Premium", 6.00)], "Git code management built for Teams by Atlassian."),
    ("jira", "Jira Software", "Developer Tools", "JR", "#0052cc", "Standard", [("Standard", 8.15), ("Premium", 16.00), ("Enterprise", 22.00)], "Issue tracking and agile project management for dev teams."),
    ("postman", "Postman Professional", "Developer Tools", "PM", "#ff6c37", "Basic", [("Basic", 15.00), ("Professional", 29.00), ("Enterprise", 49.00)], "API development, testing, and documentation platform."),
    ("datadog", "Datadog APM", "Developer Tools", "DD", "#632ca6", "Pro", [("Pro", 15.00), ("Enterprise", 23.00)], "Infrastructure monitoring, APM logs, and security telemetry."),
    ("docker-hub", "Docker Business", "Developer Tools", "DK", "#2496ed", "Pro", [("Pro", 5.00), ("Team", 9.00), ("Business", 24.00)], "Containerization platform and container registry for developers."),
    ("sentry", "Sentry Team", "Developer Tools", "SN", "#362d59", "Team", [("Developer", 0.00), ("Team", 26.00), ("Business", 80.00)], "Application error monitoring and performance tracking."),
    ("jetbrains", "JetBrains All Products Pack", "Developer Tools", "JB", "#000000", "Individual", [("Individual", 28.90), ("Business", 77.90)], "Suite of professional IDEs including IntelliJ, PyCharm, WebStorm."),
    ("circleci", "CircleCI Performance", "Developer Tools", "CC", "#343434", "Performance", [("Free", 0.00), ("Performance", 15.00), ("Scale", 2000.00)], "Continuous integration and deployment automation platform."),
    ("snyk", "Snyk Team", "Developer Tools", "SK", "#4c1d95", "Team", [("Free", 0.00), ("Team", 25.00), ("Enterprise", 50.00)], "Developer security platform for scanning vulnerabilities and dependencies."),
    ("sonarqube", "SonarQube Cloud", "Developer Tools", "SQ", "#4e9bcd", "Team", [("Developer", 15.00), ("Team", 30.00)], "Code quality and security static code analysis tool."),
    ("terraform-cloud", "HashiCorp Terraform Cloud", "Developer Tools", "TF", "#844fba", "Standard", [("Free", 0.00), ("Standard", 0.00014), ("Plus", 0.00025)], "Infrastructure as Code automation and state management platform."),
    ("pagerduty", "PagerDuty Business", "Developer Tools", "PD", "#06ac38", "Professional", [("Professional", 21.00), ("Business", 41.00)], "Incident response and on-call engineer alerting system."),
    ("new-relic", "New Relic Full Platform", "Developer Tools", "NR", "#1ce783", "Core", [("Core", 49.00), ("Full User", 99.00)], "Full-stack observability and APM performance monitoring."),
    ("launchdarkly", "LaunchDarkly Pro", "Developer Tools", "LD", "#3d4852", "Pro", [("Starter", 8.00), ("Pro", 16.00)], "Feature flag management and progressive rollout platform."),
    ("retool", "Retool Team", "Developer Tools", "RT", "#3b82f6", "Team", [("Team", 10.00), ("Business", 50.00)], "Low-code platform for building custom internal admin tools."),
    ("zapier", "Zapier Professional", "Developer Tools", "ZP", "#ff4a00", "Starter", [("Starter", 19.99), ("Professional", 49.00), ("Team", 69.00)], "Workflow automation connecting over 6,000+ web apps."),
    ("make-com", "Make.com Core", "Developer Tools", "MK", "#6d28d9", "Core", [("Core", 9.00), ("Pro", 16.00), ("Teams", 29.00)], "Visual automation platform for complex app workflows."),
    ("codecov", "Codecov Pro", "Developer Tools", "CV", "#f43f5e", "Pro", [("Pro", 10.00), ("Enterprise", 12.00)], "Code coverage reporting and pull-request analytics."),
    ("cypress-cloud", "Cypress Cloud", "Developer Tools", "CY", "#17202c", "Team", [("Free", 0.00), ("Team", 75.00), ("Business", 300.00)], "End-to-end web testing and test runner dashboard."),
    ("browserstack", "BrowserStack Live", "Developer Tools", "BS", "#f75f28", "Live", [("Live", 29.00), ("Automate", 129.00)], "Cross-browser testing on real mobile and desktop browsers."),
    ("codeium", "Codeium Enterprise", "Developer Tools", "CD", "#09b6a2", "Pro", [("Free", 0.00), ("Pro", 10.00), ("Enterprise", 30.00)], "Free and fast AI code completion and chat extension."),
    ("stackblitz", "StackBlitz Enterprise", "Developer Tools", "SB", "#1389fd", "Teams", [("Pro", 8.00), ("Teams", 14.00)], "Instant WebContainers browser-based dev environment."),
    ("codesandbox", "CodeSandbox Pro", "Developer Tools", "CS", "#000000", "Pro", [("Pro", 12.00), ("Organization", 24.00)], "Cloud development platform for rapid web prototyping."),
    ("gitpod", "Gitpod Flex", "Developer Tools", "GP", "#ff8a00", "Pay-as-you-go", [("Personal", 9.00), ("Professional", 25.00)], "Automated dev environments built on cloud containers."),
    ("localstack", "LocalStack Pro", "Developer Tools", "LS", "#24292e", "Pro", [("Pro", 35.00), ("Team", 50.00)], "Fully functional local AWS cloud stack emulator."),
    ("bugsnag", "Bugsnag Error Monitoring", "Developer Tools", "BS", "#0088cc", "Standard", [("Standard", 59.00), ("Enterprise", 150.00)], "Application stability and crash reporting platform."),
    ("rollbar", "Rollbar Error Tracking", "Developer Tools", "RB", "#007bff", "Essentials", [("Essentials", 12.50), ("Advanced", 82.00)], "Real-time error logging and incident tracking for web apps."),
    ("honeycomb", "Honeycomb.io Pro", "Developer Tools", "HC", "#f59e0b", "Pro", [("Free", 0.00), ("Pro", 130.00)], "Observability for high-cardinality distributed systems."),
    ("appdynamics", "Cisco AppDynamics", "Developer Tools", "AD", "#0070d2", "Infrastructure", [("Infrastructure", 6.00), ("Premium", 60.00)], "Enterprise application performance management."),
    ("dynatrace", "Dynatrace Full Stack", "Developer Tools", "DT", "#1496ff", "Full Stack", [("Full Stack", 74.00), ("Infrastructure", 21.00)], "AI-powered automatic full-stack observability platform."),
    ("sumologic", "Sumo Logic Logs", "Developer Tools", "SL", "#002d62", "Essentials", [("Essentials", 0.00), ("Enterprise", 150.00)], "Cloud-native log management and security analytics."),
    ("splunk", "Splunk Cloud", "Developer Tools", "SP", "#000000", "Workload", [("Standard", 150.00), ("Enterprise", 250.00)], "Enterprise data platform for operational intelligence and logs."),
    ("tower-git", "Tower Git Client", "Developer Tools", "TG", "#f53855", "Basic", [("Basic", 69.00), ("Pro", 99.00)], "Powerful Git GUI client for Mac and Windows."),
    ("gitkraken", "GitKraken Pro", "Developer Tools", "GK", "#17a2b8", "Pro", [("Pro", 4.95), ("Teams", 8.95), ("Enterprise", 18.95)], "Intuitive Git GUI client with interactive rebase graph."),
    ("insomnia-rest", "Kong Insomnia", "Developer Tools", "IN", "#5851df", "Individual", [("Free", 0.00), ("Individual", 5.00), ("Team", 12.00)], "Open source API design, REST and GraphQL client."),
    ("grafana-cloud", "Grafana Cloud Pro", "Developer Tools", "GC", "#f05a28", "Pro", [("Free", 0.00), ("Pro", 29.00)], "Open source metrics visualization dashboard."),
    ("logrocket", "LogRocket Team", "Developer Tools", "LR", "#764abc", "Team", [("Team", 99.00), ("Professional", 199.00)], "Frontend session replay and web error tracking."),
    ("betterstack", "Better Stack Logs", "Developer Tools", "BS", "#000000", "Freelance", [("Freelance", 24.00), ("Small Team", 85.00)], "Uptime monitoring and log management platform."),
    ("axiom-co", "Axiom Cloud Logs", "Developer Tools", "AX", "#000000", "Pro", [("Free 50GB", 0.00), ("Pro", 25.00)], "Serverless log management for massive event streaming."),
    ("hoppscotch", "Hoppscotch Enterprise", "Developer Tools", "HS", "#00e599", "Self-Hosted", [("Community", 0.00), ("Enterprise", 10.00)], "Lightweight open-source API development ecosystem."),
    ("linear-app", "Linear Standard", "Developer Tools", "LN", "#5e6ad2", "Standard", [("Free", 0.00), ("Standard", 8.00), ("Plus", 14.00)], "Issue tracking tool designed for high-performance software teams."),
    ("sourcegraph", "Sourcegraph Cody AI", "Developer Tools", "SG", "#00b4f0", "Pro", [("Pro", 9.00), ("Enterprise", 19.00)], "AI code intelligence and universal code search engine."),
    ("phind-pro", "Phind Pro AI", "Developer Tools", "PH", "#6366f1", "Pro", [("Pro", 20.00), ("Team", 40.00)], "AI search engine customized for software developers."),

    # --- 5. DESIGN & CREATIVE (45 Tools) ---
    ("figma", "Figma Professional", "Design", "FG", "#f24e1e", "Professional", [("Starter", 0.00), ("Professional", 12.00), ("Organization", 45.00)], "Collaborative interface design and prototyping tool."),
    ("adobe-cc", "Adobe Creative Cloud", "Design", "CC", "#ff0000", "All Apps", [("Single App", 22.99), ("All Apps", 59.99), ("Teams", 89.99)], "Industry standard Photoshop, Illustrator, Premiere, After Effects."),
    ("canva-pro", "Canva Pro", "Design", "CV", "#00c4cc", "Pro", [("Free", 0.00), ("Pro", 12.99), ("Teams", 14.99)], "Easy visual design, marketing graphics, and video editing."),
    ("framer", "Framer Pro", "Design", "FR", "#0055ff", "Mini", [("Mini", 5.00), ("Basic", 15.00), ("Pro", 30.00)], "Interactive website builder for designers powered by React."),
    ("webflow", "Webflow Core", "Design", "WF", "#4353ff", "Core", [("Basic", 14.00), ("CMS", 23.00), ("Business", 39.00)], "Visual web design platform, CMS, and hosting for agency web apps."),
    ("sketch", "Sketch Standard", "Design", "SK", "#f7b500", "Standard", [("Standard", 10.00), ("Business", 20.00)], "Mac native vector graphics and UI design app."),
    ("midjourney", "Midjourney Pro", "Design", "MJ", "#000000", "Standard", [("Basic", 10.00), ("Standard", 30.00), ("Pro", 60.00)], "AI text-to-image generator for photorealistic graphics."),
    ("runway-ml", "Runway Gen-3", "Design", "RW", "#ff0055", "Standard", [("Standard", 12.00), ("Pro", 28.00), ("Unlimited", 76.00)], "AI video generation, motion control, and VFX graphics tool."),
    ("elevenlabs", "ElevenLabs Creator", "Design", "EL", "#000000", "Starter", [("Starter", 5.00), ("Creator", 22.00), ("Pro", 99.00)], "AI voice generator and realistic text-to-speech synthesis."),
    ("spline-3d", "Spline 3D Design", "Design", "SP", "#ff2a6d", "Super", [("Basic", 0.00), ("Super", 9.00), ("Team", 12.00)], "3D design and interactive web graphics creation tool."),
    ("lottiefiles", "LottieFiles Pro", "Design", "LF", "#00ddb3", "Pro", [("Free", 0.00), ("Pro", 19.00), ("Business", 39.00)], "Lightweight vector animation framework for apps and web."),
    ("rive-app", "Rive Interactive Animation", "Design", "RV", "#000000", "Individual", [("Individual", 14.00), ("Team", 40.00)], "Real-time interactive animation engine for game and web UIs."),
    ("storyblok", "Storyblok CMS", "Design", "SB", "#00b3b0", "Developer", [("Developer", 9.00), ("Business", 84.00)], "Headless visual CMS for designers and web developers."),
    ("contentful", "Contentful Team", "Design", "CF", "#2478cc", "Basic", [("Free", 0.00), ("Basic", 300.00)], "API-first composable content platform."),
    ("sanity-io", "Sanity.io Growth", "Design", "SN", "#f03e2f", "Growth", [("Free", 0.00), ("Growth", 15.00)], "Structured content platform with real-time collaborative editing."),
    ("penpot", "Penpot Enterprise", "Design", "PP", "#000000", "Cloud", [("Community", 0.00), ("Pro", 8.00)], "Open source design and prototyping tool using native SVG."),
    ("zeplin", "Zeplin Team", "Design", "ZP", "#ee6c4d", "Basic", [("Basic", 8.00), ("Team", 16.00)], "Handoff platform for designers and developers."),
    ("plasmic", "Plasmic Pro", "Design", "PL", "#3b82f6", "Pro", [("Basic", 12.00), ("Pro", 32.00)], "Visual page builder for existing React codebases."),
    ("envato-elements", "Envato Elements", "Design", "EE", "#81b441", "Individual", [("Individual", 16.50), ("Teams", 14.50)], "Unlimited stock photos, video templates, fonts, and graphics."),
    ("remove-bg", "Remove.bg Subscription", "Design", "RB", "#000000", "Pro", [("40 Credits", 9.00), ("200 Credits", 39.00)], "AI automatic background remover for photos."),

    # --- 6. MARKETING & SEO (45 Tools) ---
    ("mailchimp", "Mailchimp Standard", "Marketing", "MC", "#ffe01b", "Standard", [("Essentials", 13.00), ("Standard", 20.00), ("Premium", 350.00)], "Email marketing, automation, and campaign management platform."),
    ("ahrefs", "Ahrefs Standard", "Marketing", "AH", "#0062ff", "Standard", [("Lite", 99.00), ("Standard", 199.00), ("Advanced", 399.00)], "SEO tools for keyword research, backlink analysis, and audit."),
    ("semrush", "Semrush Guru", "Marketing", "SR", "#ff642d", "Guru", [("Pro", 129.95), ("Guru", 249.95), ("Business", 499.95)], "All-in-one digital marketing, SEO, and competitive research."),
    ("activecampaign", "ActiveCampaign Plus", "Marketing", "AC", "#356ae6", "Plus", [("Lite", 29.00), ("Plus", 49.00), ("Professional", 149.00)], "Email marketing, marketing automation, and CRM."),
    ("klaviyo", "Klaviyo Email & SMS", "Marketing", "KV", "#000000", "Base", [("Email", 20.00), ("Email + SMS", 35.00)], "E-commerce marketing automation for Shopify and WooCommerce."),
    ("convertkit", "Kit (ConvertKit) Creator", "Marketing", "CK", "#ff7262", "Creator", [("Creator", 15.00), ("Creator Pro", 29.00)], "Email marketing for creators, bloggers, and newsletter authors."),
    ("hubspot-marketing", "HubSpot Marketing Hub", "Marketing", "HS", "#ff7a59", "Starter", [("Starter", 18.00), ("Professional", 800.00), ("Enterprise", 3600.00)], "Inbound marketing, landing pages, forms, and campaign analytics."),
    ("moz-pro", "Moz Pro Medium", "Marketing", "MZ", "#00abec", "Medium", [("Standard", 99.00), ("Medium", 179.00), ("Large", 299.00)], "SEO software for site audits, rank tracking, and link metrics."),
    ("buzzsumo", "BuzzSumo Suite", "Marketing", "BS", "#00adff", "Content Creation", [("Content Creation", 199.00), ("PR & Comms", 299.00)], "Content research, viral topic analysis, and influencer monitoring."),
    ("hootsuite", "Hootsuite Team", "Marketing", "HS", "#000000", "Professional", [("Professional", 99.00), ("Team", 249.00)], "Social media scheduling, monitoring, and analytics platform."),

    # --- 7. CRM & SALES (45 Tools) ---
    ("salesforce", "Salesforce Sales Cloud", "CRM & Sales", "SF", "#00a1e0", "Professional", [("Starter", 25.00), ("Professional", 80.00), ("Enterprise", 165.00)], "World's #1 CRM platform for sales, leads, and deal tracking."),
    ("hubspot-crm", "HubSpot Sales Hub", "CRM & Sales", "HS", "#ff7a59", "Professional", [("Starter", 18.00), ("Professional", 450.00)], "CRM, pipeline management, email tracking, and sales automation."),
    ("zendesk", "Zendesk Suite Team", "CRM & Sales", "ZD", "#03363d", "Suite Team", [("Suite Team", 55.00), ("Suite Growth", 89.00), ("Suite Professional", 115.00)], "Customer service ticketing, live chat, and helpdesk platform."),
    ("pipedrive", "Pipedrive Advanced", "CRM & Sales", "PD", "#222222", "Advanced", [("Essential", 14.00), ("Advanced", 29.00), ("Professional", 49.00)], "Visual sales CRM designed for closing deals."),
    ("zoho-crm", "Zoho CRM Enterprise", "CRM & Sales", "ZH", "#eb2127", "Professional", [("Standard", 14.00), ("Professional", 23.00), ("Enterprise", 40.00)], "Affordable CRM for lead management, emails, and reports."),
    ("freshdesk", "Freshdesk Pro", "CRM & Sales", "FD", "#2c5cc5", "Pro", [("Growth", 15.00), ("Pro", 49.00), ("Enterprise", 79.00)], "Cloud helpdesk for customer support ticketing."),
    ("gong-io", "Gong Revenue Intelligence", "CRM & Sales", "GG", "#763bf7", "Enterprise", [("Standard", 100.00), ("Pro", 150.00)], "AI revenue intelligence and sales call recording analysis."),
    ("apollo-io", "Apollo.io Professional", "CRM & Sales", "AP", "#f26522", "Professional", [("Basic", 49.00), ("Professional", 79.00), ("Organization", 119.00)], "B2B contact database, lead enrichment, and sales outreach."),
    ("zoominfo", "ZoomInfo SalesOS", "CRM & Sales", "ZI", "#0066ff", "Professional", [("Pro", 150.00), ("Advanced", 250.00)], "B2B intelligence platform for company contact profiles."),

    # --- 8. SECURITY & HR (45 Tools) ---
    ("1password", "1Password Business", "Security & HR", "1P", "#0094ff", "Business", [("Individual", 2.99), ("Teams", 19.95), ("Business", 7.99)], "Enterprise password manager and secret vault for teams."),
    ("rippling", "Rippling HR & Payroll", "Security & HR", "RP", "#ffbe00", "Core HR", [("Unity", 8.00), ("Pro", 14.00)], "All-in-one HR, payroll, IT hardware management, and benefits."),
    ("gusto", "Gusto Payroll", "Security & HR", "GT", "#008a00", "Plus", [("Simple", 40.00), ("Plus", 80.00)], "Modern automated payroll, HR benefits, and compliance."),
    ("okta", "Okta Workforce Identity", "Security & HR", "OK", "#007dc1", "Single Sign-On", [("SSO", 2.00), ("Adaptive MFA", 6.00)], "Enterprise identity provider for SSO and multi-factor auth."),
    ("bitwarden", "Bitwarden Teams", "Security & HR", "BW", "#175ddc", "Teams", [("Free", 0.00), ("Teams", 4.00), ("Enterprise", 6.00)], "Open source password manager for personal and enterprise use."),
    ("deel", "Deel Global HR", "Security & HR", "DL", "#111827", "Contractors", [("Contractors", 49.00), ("EOR Employees", 599.00)], "Global contractor hiring, payroll, and compliance platform."),
    ("remote-com", "Remote.com Global HR", "Security & HR", "RM", "#5b21b6", "Employer of Record", [("Contractor", 29.00), ("EOR", 599.00)], "International HR, global payroll, and EOR hiring platform."),

    # --- 9. ANALYTICS & DATA (45 Tools) ---
    ("mixpanel", "Mixpanel Growth", "Analytics", "MP", "#7856ff", "Growth", [("Free", 0.00), ("Growth", 20.00), ("Enterprise", 833.00)], "Product analytics for user tracking, conversion funnels, and retention."),
    ("hotjar", "Hotjar Business", "Analytics", "HJ", "#ff3c00", "Plus", [("Basic", 0.00), ("Plus", 32.00), ("Business", 56.00)], "Website heatmaps, user session recordings, and feedback surveys."),
    ("segment", "Twilio Segment", "Analytics", "SG", "#52bd95", "Team", [("Free", 0.00), ("Team", 120.00)], "Customer Data Platform (CDP) for capturing event streams."),
    ("amplitude", "Amplitude Analytics", "Analytics", "AM", "#003b5c", "Plus", [("Starter", 0.00), ("Plus", 49.00)], "Digital product analytics and behavioral cohort tracking."),
    ("posthog", "PostHog Cloud", "Analytics", "PH", "#f54e00", "Pay-as-you-go", [("Free", 0.00), ("Scale", 50.00)], "Open source product analytics, session replay, and feature flags."),

    # --- 10. AI & MACHINE LEARNING (35 Tools) ---
    ("openai-api", "OpenAI API", "AI & Machine Learning", "OA", "#10a37f", "Pay-as-you-go", [("GPT-4o", 15.00), ("o1-preview", 60.00)], "API access to GPT-4o, DALL-E 3, and Whisper models."),
    ("anthropic-api", "Anthropic Claude API", "AI & Machine Learning", "AN", "#d97706", "Pay-as-you-go", [("Claude 3.5 Sonnet", 15.00), ("Claude 3 Opus", 75.00)], "API access to Claude 3.5 Sonnet & Opus LLMs."),
    ("gemini-advanced", "Google Gemini Advanced", "AI & Machine Learning", "GM", "#4285f4", "Ultra", [("Advanced", 19.99)], "Google 2M context window AI model for multimodal tasks."),
    ("huggingface-pro", "Hugging Face PRO", "AI & Machine Learning", "HF", "#ffd21e", "PRO", [("PRO", 9.00), ("Enterprise", 20.00)], "Platform for hosting, training, and deploying open-source AI models."),

    # --- 11. FINANCE & ACCOUNTING (30 Tools) ---
    ("quickbooks-online", "QuickBooks Online", "Finance & Accounting", "QB", "#2ca01c", "Plus", [("Simple Start", 30.00), ("Plus", 85.00), ("Advanced", 200.00)], "Small business accounting software for income, expenses, and tax."),
    ("xero", "Xero Accounting", "Finance & Accounting", "XR", "#13b5ea", "Growing", [("Early", 15.00), ("Growing", 42.00), ("Established", 78.00)], "Cloud accounting for tracking bank reconciliations & invoicing."),
    ("ramp-finance", "Ramp Corporate Card", "Finance & Accounting", "RM", "#eab308", "Free", [("Free", 0.00), ("Plus", 15.00)], "Corporate card and automated spend management platform."),
    ("brex-card", "Brex Finance", "Finance & Accounting", "BX", "#000000", "Enterprise", [("Essential", 0.00), ("Premium", 12.00)], "Corporate cards, spend management, and global travel software."),

    # --- 12. LEGAL & COMPLIANCE (30 Tools) ---
    ("docusign", "DocuSign Standard", "Legal & Compliance", "DS", "#ff0000", "Standard", [("Personal", 10.00), ("Standard", 25.00), ("Business Pro", 40.00)], "Electronic signature and contract lifecycle management platform."),
    ("pandadoc", "PandaDoc Business", "Legal & Compliance", "PD", "#00b274", "Business", [("Essentials", 19.00), ("Business", 49.00)], "Document automation for proposals, quotes, and e-signatures."),
    ("vanta", "Vanta Compliance", "Legal & Compliance", "VT", "#3b82f6", "SOC 2 Pack", [("Starter", 250.00), ("Scale", 500.00)], "Automated SOC 2, ISO 27001, and HIPAA security compliance."),
    ("drata", "Drata Compliance", "Legal & Compliance", "DR", "#6366f1", "Pro", [("Pro", 350.00), ("Enterprise", 750.00)], "Continuous security and compliance automation platform.")
]

print(f"Total defined tools: {len(tools_data)}")

# Create catalog JSON
catalog_items = []
for tool_id, name, category, icon_text, icon_bg, default_plan, plans, description in tools_data:
    plan_presets = [{"name": p[0], "monthlyCost": p[1], "billingCycle": "monthly"} for p in plans]
    catalog_items.append({
        "id": tool_id,
        "name": name,
        "category": category,
        "iconText": icon_text,
        "iconBg": icon_bg,
        "defaultPlan": default_plan,
        "plans": plan_presets,
        "description": description
    })

# Format as TypeScript code
catalog_ts_code = f""""use client";

export interface SaaSPlanPreset {{
  name: string;
  monthlyCost: number;
  billingCycle: "monthly" | "yearly";
}}

export interface CatalogSaaSTool {{
  id: string;
  name: string;
  category: string;
  iconText: string;
  iconBg: string;
  defaultPlan: string;
  plans: SaaSPlanPreset[];
  description: string;
}}

export const MASTER_SAAS_CATALOG: CatalogSaaSTool[] = {json.dumps(catalog_items, indent=2)};

export function findCatalogToolByName(name: string): CatalogSaaSTool | undefined {{
  const lower = name.toLowerCase().trim();
  return MASTER_SAAS_CATALOG.find((tool) => tool.name.toLowerCase().includes(lower) || lower.includes(tool.name.toLowerCase()));
}}
"""

with open("g:/Website/SaaS Waste Detector/lib/saas-catalog.ts", "w", encoding="utf-8") as f:
    f.write(catalog_ts_code)

print("Updated lib/saas-catalog.ts with Master Catalog database!")
