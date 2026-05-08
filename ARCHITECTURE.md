# Architecture Design: Scalable 3-Tier Web Application

## 1. Overview
This project implements a high-availability 3-tier architecture on AWS, separating the presentation, application, and data layers for security and scalability.

## 2. Tier Breakdown
### Tier 1: Presentation (Load Balancing)
- **Component**: Application Load Balancer (ALB).
- **Function**: Distributes incoming HTTP (Port 80) traffic across multiple backend instances.
- **Location**: Public Subnets across 2 Availability Zones.

### Tier 2: Application (Logic)
- **Component**: Auto Scaling Group (ASG) with 4 EC2 instances (t3.micro).
- **Function**: Runs the Node.js application.
- **High Availability**: Instances are distributed in Private Subnets (eu-central-1a & 1b).
- **Deployment**: Integrated with GitHub Actions Self-hosted Runners for automated CI/CD.

### Tier 3: Data (Persistence)
- **Component**: Amazon RDS (MySQL).
- **Function**: Relational database storing application data.
- **Security**: Placed in dedicated Data Subnets, isolated from direct internet access.

## 3. Automation Flow
1. Developer pushes code to **GitHub**.
2. **GitHub Actions** triggers the Self-hosted Runner on EC2.
3. Runner pulls code and **PM2** restarts the service with updated environment variables.