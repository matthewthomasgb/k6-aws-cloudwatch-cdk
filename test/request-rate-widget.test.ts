import '@aws-cdk/assert/jest';
import { GraphWidgetProps, GRID_WIDTH } from '@aws-cdk/aws-cloudwatch';
import { getDashboardBody } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let requestRateWidget: GraphWidgetProps;
let requestRateWidgetProperties: GraphWidgetProps;

beforeEach(() => {
  requestRateWidget = getDashboardBody().widgets[Widgets.RequestRate];
  requestRateWidgetProperties = getDashboardBody().widgets[Widgets.RequestRate]
    .properties;
});

test('requests per second GraphWidget contains property title with value of Request rate - Requests per second', () => {
  expect(requestRateWidgetProperties.title).toEqual(
    'Request rate - Requests per second',
  );
});

test('requests per second GraphWidget contains property width with value of GRID_WIDTH', () => {
  expect(requestRateWidget.width).toEqual(GRID_WIDTH);
});

test('requests per second GraphWidget contains property height with value 6', () => {
  expect(requestRateWidget.height).toEqual(6);
});

test('requests per second GraphWidget contains property stacked with value true', () => {
  expect(requestRateWidgetProperties.stacked).toEqual(true);
});

test('requests per second GraphWidget contains property liveData with value true', () => {
  expect(requestRateWidgetProperties.liveData).toEqual(true);
});

test('requests per second GraphWidget has metric with label All requests', () => {
  expect(
    getDashboardBody().widgets[Widgets.RequestRate].properties.metrics[0][4]
      .label,
  ).toEqual('All requests');
});

test('requests per second GraphWidget contains property left with 1 metric', () => {
  expect(
    getDashboardBody().widgets[Widgets.RequestRate].properties.metrics.length,
  ).toEqual(1);
});

test('requests per second GraphWidget has metric with name k6_reqs', () => {
  expect(
    getDashboardBody().widgets[Widgets.RequestRate].properties.metrics[0][1],
  ).toEqual('k6_http_reqs');
});

test('requests per second GraphWidget has metric with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.RequestRate].properties.metrics[0][4]
      .period,
  ).toEqual(1);
});

test('requests per second GraphWidget has metric with type counter', () => {
  expect(
    getDashboardBody().widgets[Widgets.RequestRate].properties.metrics[0][3],
  ).toEqual('counter');
});
