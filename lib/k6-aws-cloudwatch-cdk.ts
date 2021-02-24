import { Dashboard, TextWidget } from '@aws-cdk/aws-cloudwatch';
import { Stack, StackProps, Construct } from '@aws-cdk/core';
import { k6Widget, k6Metric } from './helpers/common-components';

export class K6AwsCloudwatchCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const dashboard = new Dashboard(this, 'Dash', {
      dashboardName: 'k6-aws-cloudwatch-cdk',
    });

    dashboard.addWidgets(
      new TextWidget({ markdown: '# K6', width: 24, height: 1 }),
    );

    dashboard.addWidgets(
      k6Widget('Virtual users', [k6Metric('k6_vus', 'Virtual users', 'gauge')]),
    );

    dashboard.addWidgets(
      k6Widget(
        'Average response time',
        [
          k6Metric('k6_http_req_sending', 'Sending'),
          k6Metric('k6_http_req_receiving', 'Receiving'),
          k6Metric('k6_http_req_handshaking', 'Handshaking'),
          k6Metric('k6_http_req_connecting', 'Connecting'),
          k6Metric('k6_http_req_waiting', 'Waiting'),
          k6Metric('k6_http_req_blocked', 'Blocked'),
        ],
        true,
      ),
    );

    dashboard.addWidgets(
      k6Widget('Iteration duration', [
        k6Metric('k6_iteration_duration', 'Iteration'),
      ]),
    );

    dashboard.addWidgets(
      k6Widget(
        'Request rate - Requests per second',
        [k6Metric('k6_http_reqs', 'All requests', 'counter')],
        true,
      ),
    );
  }
}
