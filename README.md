# k6-aws-cloudwatch-cdk
 ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/matthewthomasgb/k6-aws-cloudwatch-cdk?label=version) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matthewthomasgb/k6-aws-cloudwatch-cdk/main-release) [![Known Vulnerabilities](https://snyk.io/test/github/matthewthomasgb/k6-aws-cloudwatch-cdk/badge.svg?targetFile=package.json)](https://snyk.io/test/github/matthewthomasgb/k6-aws-cloudwatch-cdk?targetFile=package.json)

An AWS cloudwatch dashboard containing graphs for k6 performance metrics. 

Written in Typescript using AWS CDK. 

[K6](https://github.com/loadimpact/k6) is a modern load testing tool built for developer happiness
[Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) is a monitoring and observability service 
[The AWS Cloud Development Kit (AWS CDK)](https://aws.amazon.com/cdk/) is an open source software development framework to define your cloud application resources using familiar programming languages.

### Purpose
For fun, learning and profit 🤑

Delivered using TDD technique. 

### Resources used for development
[aws-cloudwatch module](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-cloudwatch-readme.html), specifically the [dashboard construct](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-cloudwatch.Dashboard.html)
- Understand the constructs 

CloudFormation resource [AWS::CloudWatch::Dashboard](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html)
- Understand the CloudFormation yaml for Cloudwatch

Cloudwatch API reference [Dashboard Body Structure and Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html)
- Understand the structure of the DashboardBody 

[K6 metrics](https://k6.io/docs/using-k6/metrics)
- Understand the metrics to display in graphs

[Testing utilities and assertions for CDK libraries](https://github.com/aws/aws-cdk/tree/master/packages/%40aws-cdk/assert)
- Understand @aws-cdk/assert
# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
