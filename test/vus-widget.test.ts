import '@aws-cdk/assert/jest';
import { GraphWidgetProps, GRID_WIDTH } from '@aws-cdk/aws-cloudwatch';
import { getDashboardBody } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let vusWidget: GraphWidgetProps;
let vusWidgetProperties: GraphWidgetProps;

beforeEach(() => {
  vusWidget = getDashboardBody().widgets[Widgets.Vus];
  vusWidgetProperties = getDashboardBody().widgets[Widgets.Vus].properties;
});

test('vus GraphWidget contains property title with value of Virtual Users', () => {
  expect(vusWidgetProperties.title).toEqual('Virtual users');
});

test('vus GraphWidget contains property width with value of GRID_WIDTH', () => {
  expect(vusWidget.width).toEqual(GRID_WIDTH);
});

test('vus GraphWidget contains property height with value 6', () => {
  expect(vusWidget.height).toEqual(6);
});

test('vus GraphWidget contains property stacked with value true', () => {
  expect(vusWidgetProperties.stacked).toEqual(true);
});

test('vus GraphWidget contains property liveData with value true', () => {
  expect(vusWidgetProperties.liveData).toEqual(true);
});

test('vus GraphWidget contains property left with 1 metric', () => {
  expect(
    getDashboardBody().widgets[Widgets.Vus].properties.metrics.length,
  ).toEqual(1);
});

test('vus GraphWidget has metric with name k6_vus', () => {
  expect(
    getDashboardBody().widgets[Widgets.Vus].properties.metrics[0][1],
  ).toEqual('k6_vus');
});

test('vus GraphWidget has metric with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.Vus].properties.metrics[0][4].period,
  ).toEqual(1);
});

test('vus GraphWidget has metric with type gauge', () => {
  expect(
    getDashboardBody().widgets[Widgets.Vus].properties.metrics[0][3],
  ).toEqual('gauge');
});
