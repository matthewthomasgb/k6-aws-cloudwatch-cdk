import '@aws-cdk/assert/jest';
import { TextWidgetProps } from '@aws-cdk/aws-cloudwatch';
import { getDashboardBody } from './helpers/helpers';
import { Widgets } from './helpers/widgets';

test('header TextWidget contains markdown property with value # k6', () => {
  const k6HeaderProps: TextWidgetProps = getDashboardBody().widgets[
    Widgets.K6Header
  ].properties;
  expect(k6HeaderProps.markdown).toEqual('# K6');
});

test('header TextWidget contains property width with value 24 (full page length)', () => {
  const k6HeaderProps: TextWidgetProps = getDashboardBody().widgets[
    Widgets.K6Header
  ].properties;
  expect(k6HeaderProps.width).toEqual(24);
});

test('header TextWidget contains property height with value 1', () => {
  const k6HeaderProps: TextWidgetProps = getDashboardBody().widgets[
    Widgets.K6Header
  ].properties;
  expect(k6HeaderProps.height).toEqual(24);
});
