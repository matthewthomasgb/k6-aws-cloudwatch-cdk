import '@aws-cdk/assert/jest';
import { Capture } from '@aws-cdk/assert';
import { GraphWidgetProps, GRID_WIDTH } from '@aws-cdk/aws-cloudwatch';
import { createStack } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let vusWidget: GraphWidgetProps;

beforeEach(() => {
  const graphWidget = Capture.anyType();
  expect(createStack()).toHaveResourceLike('AWS::CloudWatch::Dashboard', {
    DashboardBody: graphWidget.capture(),
  });
  vusWidget = JSON.parse(graphWidget.capturedValue).widgets[Widgets.Vus]
    .properties;
});

test('vus GraphWidget contains property title with value of Virtual Users', () => {
  expect(vusWidget.title).toEqual('Virtual users');
});

test('vus GraphWidget contains property width with value of GRID_WIDTH', () => {
  expect(vusWidget.width).toEqual(GRID_WIDTH);
});

test('vus GraphWidget contains property height with value 6', () => {
  expect(vusWidget.height).toEqual(6);
});

test('vus GraphWidget contains property stacked with value true', () => {
  expect(vusWidget.stacked).toEqual(true);
});

test('vus GraphWidget contains property liveData with value true', () => {
  expect(vusWidget.liveData).toEqual(true);
});

test('vus GraphWidget contains property left with 1 metric', () => {
  expect(vusWidget.left?.length).toEqual(1);
});
