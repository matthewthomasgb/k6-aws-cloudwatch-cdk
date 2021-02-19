import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { K6AwsCloudwatchCdkStack } from '../../lib/k6-aws-cloudwatch-cdk';

export function createStack(): K6AwsCloudwatchCdkStack {
  return new K6AwsCloudwatchCdkStack(new App(), 'MyTestStack');
}
