# k6-aws-cloudwatch-cdk

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

[K6 metrics](https://k6.io/docs/using-k6/metrics)

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
