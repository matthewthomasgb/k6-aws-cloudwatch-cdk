import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as K6AwsCloudwatchCdkStack from '../lib/k6-aws-cloudwatch-cdk';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new K6AwsCloudwatchCdkStack.K6AwsCloudwatchCdkStack(
    app,
    'MyTestStack',
  );
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT,
    ),
  );
});
