import { GraphWidget, Metric } from '@aws-cdk/aws-cloudwatch';
import { k6Metric, k6Widget } from '../lib/helpers/common-components';

test('k6Metric function returns Metric', () => {
  expect(k6Metric('test', 'test')).toBeInstanceOf(Metric);
});

test('k6Metric function returns metricName', () => {
  expect(k6Metric('nametest', 'labletest').metricName).toEqual('nametest');
});

test('k6Metric function returns label', () => {
  expect(k6Metric('nametest', 'labeltest').label).toEqual('labeltest');
});

test('k6Metric function returns type', () => {
  expect(
    k6Metric('nametest', 'labeltest', 'counter').dimensions?.metric_type,
  ).toEqual('counter');
});

test('k6Metric function returns statistic', () => {
  expect(k6Metric('nametest', 'labeltest', 'counter', 'sum').statistic).toEqual(
    'Sum',
  );
});

test('k6Metric function returns default type value timing', () => {
  expect(k6Metric('nametest', 'labeltest').dimensions?.metric_type).toEqual(
    'timing',
  );
});

test('k6Metric function returns default statistic value Average', () => {
  expect(k6Metric('nametest', 'labeltest').statistic).toEqual('Average');
});

test('k6Widget function returns GraphWidget', () => {
  expect(k6Widget('titletest', [k6Metric('foo', 'bar')])).toBeInstanceOf(
    GraphWidget,
  );
});
