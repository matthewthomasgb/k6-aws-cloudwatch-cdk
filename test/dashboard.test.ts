import { anything } from '@aws-cdk/assert';
import { createStack } from './helpers/helpers';

test('resource type AWS::CloudWatch::Dashboard exists', () => {
  expect(createStack()).toHaveResource('AWS::CloudWatch::Dashboard');
});

test('resource property DashboardName exists', () => {
  expect(createStack()).toHaveResource('AWS::CloudWatch::Dashboard', {
    DashboardName: anything(),
  });
});

test('resource property DashboardName equals k6-aws-cloudwatch-cdk', () => {
  expect(createStack()).toHaveResource('AWS::CloudWatch::Dashboard', {
    DashboardName: 'k6-aws-cloudwatch-cdk',
  });
});

test('resource property DashboardBody exists', () => {
  expect(createStack()).toHaveResource('AWS::CloudWatch::Dashboard', {
    DashboardName: anything(),
  });
});
