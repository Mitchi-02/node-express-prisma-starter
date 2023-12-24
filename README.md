# Node 18 with Prisma starter
### Install Dependencies
    npm install
### Install nodemon as global dependency if it's not already installed (execute in sudo-admin mode)
    npm install -g nodemon
### Change .env.example to .env and choose the server port number and write database_url with the specified format
### If there are new models in config/db/schema.prisma 
    npx prisma migrate dev
### To start dev server
    npm run dev
