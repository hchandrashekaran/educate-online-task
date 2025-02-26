## MVP Tech Stack ##
To build a web application **public chatbot conversation** using **OpenAI GPT-4o** we need a tech stack which supports the following features:
1. Broadcasting messages to all users.
2. Handling chuncks of message from Streaming API.
3. Handling multiple users.

### Backend: ###
**Node.js with WebSockets (Socket.io)**
- Socket.io enables bidirectional real-time communication for chat updates.
- Server-Sent Events(SSE) can also be used as an alternative for streaming chatbot response.
- Handling Open API streaming response in chunks using Axios and Eventstream parser.
- Express.js for handling API requests.
- TypeScript(optional) to enure Type safety and reduce run time errors.

---

### Frontend: ###
**React with Next.js**
- Next.js allows server-side rendering, which improves performance.
- React hooks useState & useEffect to manage states efficiently.
- TypeScript(optional) to enure Type safety and reduce run time errors.

---

### Database: ###
**Postgres(AWS RDS) or MongoDB(AWS DocumentDB)**
- Postgres with strong relational structure(ACID Complaint), ideal for standard chat history.
- Postgres has websockets support via Listen/Notify.
- MongoDB with Mongoose(ODM) has flexible schema, which is a good fit for chat applications.
- MongoDB performes well with unstructured JSON-based messages.

---

### Deployment: ###
**AWS Lambda + API Gateway**
- Automatically scales based on traffic.
- Serverless framework reduces infrastructure management overhead.
- Works well with Websockets for real-time streaming.
