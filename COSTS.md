# Cost Analysis & Optimization

## 1. Estimated Monthly Costs (Free Tier Focus)
The project is designed to stay within the **AWS Free Tier** limits as much as possible.

| Service | Component | Pricing Detail | Estimated Monthly Cost |
|:---|:---|:---|:---|
| **EC2** | 4 x t3.micro | 750 hours/month free | $0.00 (First 12 months) |
| **RDS** | 1 x db.t3.micro | 750 hours/month free | $0.00 (First 12 months) |
| **ALB** | 1 x Load Balancer | ~2880 LCU-hours/month | ~$15 - $20 (Partial Free Tier) |
| **NAT Gateway** | 1 x NAT Gateway | $0.045/hour + Data | ~$32.00 (Paid item) |
| **Storage** | 20GB GP2/GP3 | Included in Free Tier | $0.00 |

## 2. Cost Optimization Strategies
- **NAT Gateway**: In a production environment, NAT Gateways are essential for private subnet security. To save costs in a Demo, one could use a NAT Instance or keep instances in public subnets (less secure).
- **Auto Scaling**: Set to scale down to 1-2 instances during low-traffic periods (e.g., night time) to save on compute costs.
- **Spot Instances**: Use Spot Instances for the App tier to reduce costs by up to 90% compared to On-Demand.