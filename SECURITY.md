# Security Configuration (Defense in Depth)

## 1. Network Isolation
- **Private Subnets**: All application and database servers are hidden from the public internet.
- **Bastion/SSM**: No SSH ports (22) are open to the world. Management is performed strictly through **AWS Systems Manager (SSM)**.

## 2. Security Group Logic (Least Privilege)
- **SG-ALB**: Only allows Inbound Port 80.
- **SG-App**: Only allows Inbound Port 3000 from the ALB's Security Group.
- **SG-DB**: Only allows Inbound Port 3306 from the App Tier's Security Group.

## 3. Data Protection
- **Environment Variables**: Database credentials are NOT hardcoded in the source code; they are injected via the EC2 User Data/Launch Template.
- **Encryption**: RDS storage can be encrypted at rest using AWS KMS.