# Node 18 with Prisma starter
### install dependencies
    npm install
### install nodemon as global dependency if it's not already installed (execute in sudo-admin mode)
    npm install -g nodemon
### change .env.example to .env and choose the server port number and write database_url with the specified format
### if there are new models in config/db/schema.prisma 
    npx prisma migrate dev
### to start server
    npm run dev
