# Failover Test Report: High Availability

## 1. Test Objective
To verify that the **Auto Scaling Group (ASG)** and **Application Load Balancer (ALB)** can detect instance failure and maintain the desired capacity of 4 nodes.

## 2. Test Procedure
1. **Initial State**: Verify 4 instances are `Healthy` in the Target Group.
2. **Execution**: Manually `Terminate` two instances from the EC2 Console.
3. **Observation**: 
   - Check ALB Target Group status.
   - Check ASG Activity History.
   - Access the web UI during the process.

## 3. Results
- **ALB Reaction**: Detected `Unhealthy` state within 30 seconds; stopped routing traffic to failed nodes.
- **ASG Reaction**: Triggered "Scaling Out" event immediately after detection.
- **Recovery Time**: New instances were fully operational (Healthy) within 2 minutes.
- **User Impact**: Zero downtime. The web app remained accessible through the remaining 2 nodes.

## 4. Conclusion
**PASS**. The system successfully demonstrated self-healing capabilities.