import { Dashboard } from '@aws-cdk/aws-cloudwatch';
import { Stack, StackProps, Construct } from '@aws-cdk/core';

export class K6AwsCloudwatchCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const dashboard = new Dashboard(this, 'Dash', {
      dashboardName: 'k6-aws-cloudwatch-cdk',
    });
  }
}
