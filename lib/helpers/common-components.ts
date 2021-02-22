import { GraphWidget, Metric } from '@aws-cdk/aws-cloudwatch';
import { Duration } from '@aws-cdk/core';

export function k6Widget(
  title: string,
  leftMetrics: Array<Metric>,
  stacked?: boolean,
): GraphWidget {
  return new GraphWidget({
    title: title,
    width: 24,
    height: 6,
    stacked: stacked ?? true,
    liveData: true,
    left: leftMetrics,
  });
}

export function k6Metric(
  name: string,
  label: string,
  type = 'timing',
  statistic = 'avg',
): Metric {
  return new Metric({
    namespace: 'k6',
    metricName: name,
    label: label,
    // @ts-ignore
    period: Duration.seconds(1),
    dimensions: {
      metric_type: type,
    },
    statistic: statistic,
  });
}
