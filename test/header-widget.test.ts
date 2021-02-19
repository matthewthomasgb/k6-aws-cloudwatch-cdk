import '@aws-cdk/assert/jest';
import { Capture } from '@aws-cdk/assert';
import {
  ConcreteWidget,
  GRID_WIDTH,
  TextWidgetProps,
} from '@aws-cdk/aws-cloudwatch';
import { createStack } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let k6HeaderProps: TextWidgetProps;
let k6HeaderWidget: ConcreteWidget;

beforeEach(() => {
  const arn1 = Capture.anyType();
  expect(createStack()).toHaveResourceLike('AWS::CloudWatch::Dashboard', {
    DashboardBody: arn1.capture(),
  });
  k6HeaderWidget = JSON.parse(arn1.capturedValue).widgets[Widgets.K6Header];
  k6HeaderProps = JSON.parse(arn1.capturedValue).widgets[Widgets.K6Header]
    .properties;
});

test('header TextWidget contains markdown property with value # k6', () => {
  expect(k6HeaderProps.markdown).toEqual('# K6');
});

test('header TextWidget contains property width with value of GRID_WIDTH', () => {
  expect(k6HeaderWidget.width).toEqual(GRID_WIDTH);
});

test('header TextWidget contains property height with value 1', () => {
  expect(k6HeaderWidget.height).toEqual(1);
});
