## Production Tech Stack ##
**Tech Stack for Running the Production Version (On-Premise or Private Cloud)**

To deploy the production version of chatbot application on-premise or private cloud, we need to consider **higly available**,**scalable** and **secure architecture**.

---

### Backend/Frontend/Database: ###
- We can maintain the same backend,frontend,database as MVP in the production setup with addition of reverse proxy **Nginx** which handles load balancing.

---

### Deployment: ###
- **On-premise:** Kubernetes + EC2 <br>
- **AWS-Private cloud:** AWS EKS (Kubernetes) + AWS RDS (PostgreSQL)

---    

### Security: ###
**AWS Cognito**
- Managed authentication for AWS cloud.

---

### Logging: ###
**AWS Cloudwatch**
- Tracks logs, errors, and API usage.

---

### CI/CD ###

- Github Actions/Jenkins, automated deployment pipelines.

---

### Reasons for not using AWS lambda in production ###

AWS Lambda + Serverless Express has some limitations:

**1.Real-time communication issues**
- Cold start delays : AWS Lambda spins up the server based on the request, this would impact the every new websocket connection may experience delay while lambda intializes.

- Non persistent connection : WebSockets require a persistent connection, but AWS Lambda is stateless.

**2. API Gateway limitations**

- API Gateway buffers requests before sending them. Chatbot messages might not stream smoothly.
- AWS API Gateway limits WebSocket message payloads to 128 KB, responses might be truncated for large messages.

**3. Scaling Limitations**

- AWS Lambda has a concurrent execution limit (default: 1,000 requests per region).
- Kubernetes scales horizontally with auto-scaling.



