# Final Test Execution Results

**Date**: 2026-05-08  
**Overall Status**: **PASS**

## 1. Functional Testing (CRUD)
- **Step**: Refresh page multiple times to hit different ALB targets.
- **Result**: Data consistently retrieved from RDS. No data loss across different nodes.

## 2. Security Testing (Network Isolation)
- **Step**: Attempt to access RDS from local terminal.
- **Result**: **Denied**. RDS only accepts traffic from `SG-App`.
- **Step**: Attempt to SSH into Private EC2.
- **Result**: **Denied**. Access only possible via SSM Session Manager.

## 3. Automation Testing (CI/CD)
- **Step**: Update `index.html` background color in GitHub repo.
- **Result**: GitHub Actions deployed to all 4 runners. Visual change confirmed on public URL.
