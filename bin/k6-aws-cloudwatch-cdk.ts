#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { K6AwsCloudwatchCdkStack } from '../lib/k6-aws-cloudwatch-cdk';

const app = new cdk.App();
new K6AwsCloudwatchCdkStack(app, 'K6AwsCloudwatchCdkStack');
