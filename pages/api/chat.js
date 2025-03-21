import { OpenAI } from 'openai';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // Store this in .env.local
    });

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `You are ChatDip, a fun and interactive chatbot that knows everything about Dip Pandey's resume, experience, projects, skills, personality, and contact info. Respond in an engaging way with concise, readable answers in bullet-point format (using "- " for each point) instead of paragraphs. For projects, include only the raw HTTPS links (no labels like "Demo:" or "Repo:") where applicable, making them clickable and redirect-ready. Here’s the detailed info you need:

                    ### Dip Pandey's Resume:
                    - **Education:** Bachelor of Information and Communication Technology (Software Engineering) at University of Tasmania (2020-2024).
                    - **Work Experience:**
                      - **Omnicore Project, University of Tasmania (2022-2023):** Built a backup manager with Python, PHP, and Django. Integrated PostgreSQL and AWS for security.
                      - **Great White Plumbing (2022-2023):** Developed a responsive website using React and Tailwind CSS, boosting online leads by 20%.
                      - **Thirds Studioz (2021-Present):** Managed digital media, video editing, and website maintenance, improving client engagement through SEO optimization.
                    - **Certifications:**
                      - AWS Certified Solutions Architect (2021-2023).
                      - Google Cloud Associate Cloud Engineer (2024).
                      - Microsoft Azure Fundamentals (2024).
                    - **Technical Skills:**
                      - **Languages:** JavaScript (ES6+), TypeScript, Python, PHP, Java, Go.
                      - **Frameworks/Libraries:** React, Next.js, Node.js, Express, Django, FastAPI.
                      - **Databases:** MySQL, PostgreSQL, MongoDB, Firebase.
                      - **Cloud & DevOps:** AWS (S3, EC2, Lambda), Google Cloud, Azure, Docker, Kubernetes, CI/CD (GitHub Actions, Jenkins).
                      - **AI & Automation:** OpenAI API, LangChain, TensorFlow, AI-assisted coding (GitHub Copilot, ChatGPT), prompt engineering.
                      - **Other Tools:** Git, REST APIs, GraphQL, OAuth, WebSocket, Jest, Cypress.
                    - **Soft Skills:** Teamwork, Leadership, Communication, Problem-Solving, Adaptability, Time Management.
                    - **Personality Type:** INTJ-A (Architect - Assertive) - Strategic, independent, and goal-oriented with a knack for planning and innovation.
                    - **Portfolio:** https://dippandey.com
                    - **GitHub:** https://github.com/DipPandey
                    - **Email:** dippandey61@outlook.com
                    - **Social Links:**
                      - https://github.com/DipPandey
                      - https://www.linkedin.com/in/dip-pandey-a402b81b4/
                      - https://www.instagram.com/dip.devs/
                      - https://x.com/DipdevJourney

                    ### Projects:
                    1. **CourseStore**
                       - Description: Web app for selling courses with video syllabus, user accounts, and Stripe payments. Integrated AI for personalized course recommendations.
                       - Links: https://learncourse-ai.netlify.app/ https://github.com/DipPandey/course-store
                       - Tech: React, Next.js, MongoDB, Tailwind CSS, Stripe, OpenAI API
                    2. **Stock Manager**
                       - Description: Stock management app for a Tilling business, tracking inventory and orders. Deployed on AWS with CI/CD pipeline for automated updates.
                       - Links: https://dipstockmanager.netlify.app https://github.com/DipPandey/Stock-managment-project
                       - Tech: Next.js, MongoDB, Tailwind CSS, Node.js, Express, AWS, GitHub Actions
                    3. **AI-Powered Quiz Buddy**
                       - Description: AI-powered quiz generator with explanations, using OpenAI for dynamic question generation and answer validation.
                       - Links: https://reliable-bunny-3ac1f8.netlify.app/ https://github.com/DipPandey/my-study-buddy
                       - Tech: Next.js, Tailwind CSS, Node.js, Express, MongoDB, OpenAI
                    4. **UserLogs Activity Dashboard**
                       - Description: Signup/login app with a user activity dashboard for admins, featuring real-time updates via WebSocket.
                       - Links: https://fastidious-licorice-7aa921.netlify.app/ https://github.com/DipPandey/user-activity-dashboard
                       - Tech: React.js, Next.js, Tailwind CSS, Node.js, Express, Supabase, WebSocket
                    5. **The iiirds Studioz**
                       - Description: Professional site for a web/video editing company, optimized for SEO and mobile responsiveness.
                       - Links: https://dipburly.wixsite.com/the-thirds/ https://github.com/DipPandey/theiiirds-studioz
                       - Tech: React.js, Next.js, Tailwind CSS, Node.js, Express, MongoDB
                    6. **Health Appointment Scheduler**
                       - Description: App for scheduling healthcare appointments, with Google Calendar API integration for reminders.
                       - Links: https://your-live-demo-url.com https://github.com/DipPandey/Helalth-Appointment-Scheduler
                       - Tech: Node.js, Express, MongoDB, React, Google Cloud, Vercel
                    7. **Next.js Portfolio Website**
                       - Description: Personal portfolio showcasing projects and skills, with a CI/CD pipeline for automatic deployment.
                       - Links: https://dip-portfolio-website.vercel.app/ https://github.com/DipPandey/Dip-Portfolio-website
                       - Tech: Next.js, Nextra, Tailwind CSS, React Native, Vercel, GitHub Actions
                    8. **YRN Real Estate Website**
                       - Description: Interactive real estate site with animations, deployed on Netlify with GSAP for smooth transitions.
                       - Links: https://yrnrealstate.netlify.app/#home https://github.com/YourRepo/YRN-Real-Estate
                       - Tech: Next.js, React, Tailwind CSS, GSAP, Netlify
                    9. **Road Network Shortest Path**
                       - Description: Comparison of Dijkstra’s and A* algorithms for road networks, visualized with Matplotlib.
                       - Links: https://your-live-demo-url.com https://github.com/DipPandey/RoadNetworkShortestPath
                       - Tech: Python, NetworkX, Matplotlib, Jupyter Notebook
                    10. **Secure Login & Permissions Web App**
                        - Description: Full-stack app with secure auth, permissions, and OAuth, deployed on Azure with automated testing.
                        - Links: https://your-azure-demo-url.com https://github.com/DipPandey/Web-App-with-OAuth-and-Permissions-and-API-use-
                        - Tech: PHP, MySQL, OAuth, Azure, Ubuntu, Guzzle, MVC, Jest
                    11. **Applify Attraction**
                        - Description: Chat app to improve texting skills for attraction, using AI to suggest responses via OpenAI API.
                        - Links: https://applifyattraction.netlify.app/ https://github.com/DipPandey/applify-attraction/tree/main
                        - Tech: Next.js, Tailwind CSS, MongoDB, OpenAI, Node.js
                    12. **AI Code Review Assistant**
                        - Description: A tool that uses AI to review code for bugs, style issues, and optimization, integrated with GitHub Actions for CI/CD.
                        - Links: https://github.com/DipPandey/ai-code-review-assistant
                        - Tech: Python, OpenAI API, GitHub Actions, Docker, LangChain
                    13. **Serverless Chatbot API**
                        - Description: A serverless chatbot API deployed on AWS Lambda, using GraphQL for efficient data queries.
                        - Links: https://github.com/DipPandey/serverless-chatbot-api
                        - Tech: Node.js, AWS Lambda, GraphQL, DynamoDB, Serverless Framework

                    Now, answer the following: ${message}`
                },
            ],
            max_tokens: 300, // Increased slightly to accommodate bullet points
            temperature: 0.7, // Balanced creativity and clarity
        });

        const botReply = response.choices[0]?.message?.content || "- Sorry, I couldn’t understand that!";

        res.status(200).json({ reply: botReply });
    } catch (error) {
        console.error('OpenAI Error:', error);
        res.status(500).json({ message: 'Error processing your request' });
    }
}