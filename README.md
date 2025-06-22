DEPLOY LINK (https://recipes-gy6q.vercel.app/)

🚀 Features
🔍 Search Recipes — by name, cuisine, or max prep time

📥 Client-side routing using query parameters

🖼 Responsive design built with Tailwind CSS

📄 Dynamic pages generated based on user input

🌐 API integration with Spoonacular for real recipe data

💡 Loading state while recipes are being fetched

🧩 Modular and reusable components

🏗 Architecture
Next.js App Router (uses /app directory for routing)

Server Components used for fetching recipes

Client Components used for the form, interactivity, and routing

Tailwind CSS for styling

.env.local file for storing API key (not committed)

⚙️ Getting Started

1 Clone repositor
git clone https://github.com/your-username/your-project.git
cd your-project

2 Install dependencies
npm install

3 Add enviroment variables
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here

4 Run the development sarver
npm run dev

5 Build for production
npm run build
npm run start
