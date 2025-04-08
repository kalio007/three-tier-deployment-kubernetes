![Terraform Version](https://img.shields.io/badge/Terraform-1.7.3-blue.svg)
# Terraform Configuration for AWS EKS Cluster

## Overview
- This Terraform configuration sets up an AWS EKS (Elastic Kubernetes Service) Cluster.
- It includes configurations for providers, variables, main settings, a VPC, an EKS cluster, and outputs.

## Requirements
- Terraform v1.6.3 or higher.
- AWS Provider version ~> 5.25.0.
- Additional providers: `random` (~> 3.5.1), `tls` (~> 4.0.4), `time` (~> 0.10.0), `cloudinit` (~> 2.3.2), `kubernetes` (>= 2.23.2).

## Setup
- Backend: AWS S3 for state management.
  - Bucket: Specified in configuration (replace `<bucket-name>` with actual bucket name).
  - Key: `terraform.tfstate`.
  - Region: `us-east-1`.

## Configuration Files
1. `variables.tf`: Defines variables like AWS region and cluster name.
   - Default region: `us-east-1`.
   - Default cluster name: `quizapp-eks`.
2. `main.tf`: Configures the Kubernetes and AWS providers.
   - Sets up the connection to the EKS cluster.
3. `vpc.tf`: Sets up the VPC for the EKS cluster.
   - CIDR block: `10.20.0.0/16`.
   - Configures both private and public subnets.
4. `eks-cluster.tf`: Configures the EKS cluster.
   - Cluster version: `1.29`.
   - Node groups: master and worker with specified instance types and sizes.
5. `outputs.tf`: Outputs the cluster name, endpoint, region, and security group ID.

## Usage
- Initialize Terraform: `terraform init`.
- Validate Terraform code: `terraform validate`.
- Plan Terraform: `terraform plan`.
- Apply configuration: `terraform apply`.
- Validate outputs after successful apply.

## Notes
- Replace placeholder values (like `<bucket-name>`) with actual values.
- Ensure you have appropriate AWS permissions.


## Additional Information 

# Terraform & AWS CLI Installation

## A) Prerequisites
- Install Terraform CLI
- Install AWS CLI
- Install VS Code Editor - recommended for this course
- Install HashiCorp Terraform plugin for VS Code - recommended
