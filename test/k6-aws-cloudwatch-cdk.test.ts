import * as cdk from '@aws-cdk/core';
import * as K6AwsCloudwatchCdkStack from '../lib/k6-aws-cloudwatch-cdk';

test('Dashboard has resource Dashboard', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new K6AwsCloudwatchCdkStack.K6AwsCloudwatchCdkStack(
    app,
    'MyTestStack',
  );
  // THEN
  expect(stack).toBeInstanceOf(K6AwsCloudwatchCdkStack.K6AwsCloudwatchCdkStack);
});
