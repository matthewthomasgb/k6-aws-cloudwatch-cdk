import '@aws-cdk/assert/jest';
import { GraphWidgetProps, GRID_WIDTH } from '@aws-cdk/aws-cloudwatch';
import { getDashboardBody } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let dataTransferWidget: GraphWidgetProps;
let dataTransferWidgetProperties: GraphWidgetProps;

enum Metric {
  Sent,
  Received,
}

beforeEach(() => {
  dataTransferWidget = getDashboardBody().widgets[Widgets.DataTransfer];
  dataTransferWidgetProperties = getDashboardBody().widgets[
    Widgets.DataTransfer
  ].properties;
});

test('data transfer GraphWidget contains property title with value of Data transfer', () => {
  expect(dataTransferWidgetProperties.title).toEqual('Data transfer');
});

test('data transfer GraphWidget contains property width with value of GRID_WIDTH', () => {
  expect(dataTransferWidget.width).toEqual(GRID_WIDTH);
});

test('data transfer GraphWidget contains property height with value 6', () => {
  expect(dataTransferWidget.height).toEqual(6);
});

test('data transfer GraphWidget contains property stacked with value false', () => {
  expect(dataTransferWidgetProperties.stacked).toEqual(false);
});

test('data transfer GraphWidget contains property liveData with value true', () => {
  expect(dataTransferWidgetProperties.liveData).toEqual(true);
});

test('data transfer GraphWidget contains property left with 2 metrics', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics.length,
  ).toEqual(2);
});

// k6_data_sent
test('data transfer GraphWidget has metric with name k6_data_sent', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Sent
    ][1],
  ).toEqual('k6_data_sent');
});

test('data transfer GraphWidget has metric k6_data_sent with label Sent', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Sent
    ][4].label,
  ).toEqual('Sent');
});

test('data transfer GraphWidget has metric k6_data_sent with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Sent
    ][4].period,
  ).toEqual(1);
});

test('data transfer GraphWidget has metric k6_data_sent with type counter', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Sent
    ][3],
  ).toEqual('counter');
});

// k6_data_received
test('data transfer GraphWidget has metric with name k6_data_received', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Received
    ][1],
  ).toEqual('k6_data_received');
});

test('data transfer GraphWidget has metric with label Received', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Received
    ][4].label,
  ).toEqual('Received');
});

test('data transfer GraphWidget has metric k6_data_received with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Received
    ][4].period,
  ).toEqual(1);
});

test('data transfer GraphWidget has metric k6_data_received with type counter', () => {
  expect(
    getDashboardBody().widgets[Widgets.DataTransfer].properties.metrics[
      Metric.Received
    ][3],
  ).toEqual('counter');
});
