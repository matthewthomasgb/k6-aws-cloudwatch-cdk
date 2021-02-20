import '@aws-cdk/assert/jest';
import { Capture } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import { K6AwsCloudwatchCdkStack } from '../../lib/k6-aws-cloudwatch-cdk';

export function createStack(): K6AwsCloudwatchCdkStack {
  return new K6AwsCloudwatchCdkStack(new App(), 'MyTestStack');
}

/**
 * DashboardBody is a string in JSON format. It can include an array of between 0 and 100 widget objects, as well as a few other parameters.
 * The generated template uses the intrinsic function Fn::Join - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-join.html
 * Fn::Join contains strings, containing the data required, and objects, containing region data not required.
 * getDashboardBody() filters the strings, joins them and return a DashboardBody object
 */
export function getDashboardBody() {
  const dashboardBody = Capture.anyType();
  expect(createStack()).toHaveResource('AWS::CloudWatch::Dashboard', {
    DashboardBody: {
      'Fn::Join': dashboardBody.capture(),
    },
  });
  return JSON.parse(
    dashboardBody.capturedValue[1].filter(
      (item: Record<string, unknown>) => typeof item === 'string',
    ),
  );
}
