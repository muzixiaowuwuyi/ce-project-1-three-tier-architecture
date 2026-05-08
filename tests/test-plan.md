# Test Plan: Three-Tier Web Architecture

## 1. Introduction
This document outlines the testing strategy for the AWS-based three-tier architecture, ensuring high availability, scalability, and database integrity.

## 2. Test Environment
- **URL**: `http://http://three-tier-alb-1379769650.eu-central-1.elb.amazonaws.com/`
- **App Tier**: 4 x EC2 Instances (t3.micro) in ASG
- **DB Tier**: RDS MySQL (Single-AZ)
- **Monitoring**: AWS Management Console, PM2 Logs

## 3. Test Scope
| ID | Test Category | Description | Success Criteria |
|:---|:---|:---|:---|
| TP-01 | **Connectivity** | Access website via ALB DNS | Website loads successfully |
| TP-02 | **CRUD Ops** | Add, Read, and Delete data | Data persists in RDS across refreshes |
| TP-03 | **Auto Scaling** | Terminate instance manually | ASG maintains 4 healthy instances |
| TP-04 | **CI/CD** | Push code change to GitHub | Changes reflect on all 4 nodes automatically |

## 4. Tools Used
- Browser (Chrome/Edge)
- AWS SSM Session Manager
- GitHub Actions