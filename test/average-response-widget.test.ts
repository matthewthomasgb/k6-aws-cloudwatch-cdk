import '@aws-cdk/assert/jest';
import { GraphWidgetProps, GRID_WIDTH } from '@aws-cdk/aws-cloudwatch';
import { getDashboardBody } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let averageResponseWidget: GraphWidgetProps;
let averageResponseWidgetProperties: GraphWidgetProps;

enum Metric {
  Sending,
  Receiving,
  Handshaking,
  Connecting,
  Waiting,
  Blocked,
}

beforeEach(() => {
  averageResponseWidget = getDashboardBody().widgets[Widgets.AverageResponse];
  averageResponseWidgetProperties = getDashboardBody().widgets[
    Widgets.AverageResponse
  ].properties;
});

test('average response GraphWidget contains property title with value of Virtual Users', () => {
  expect(averageResponseWidgetProperties.title).toEqual(
    'Average response time',
  );
});

test('average response GraphWidget contains property width with value of GRID_WIDTH', () => {
  expect(averageResponseWidget.width).toEqual(GRID_WIDTH);
});

test('average response GraphWidget contains property height with value 6', () => {
  expect(averageResponseWidget.height).toEqual(6);
});

test('average response GraphWidget contains property stacked with value true', () => {
  expect(averageResponseWidgetProperties.stacked).toEqual(true);
});

test('average response GraphWidget contains property liveData with value true', () => {
  expect(averageResponseWidgetProperties.liveData).toEqual(true);
});

test('average response GraphWidget contains property left with 6 metrics', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics
      .length,
  ).toEqual(6);
});

// k6_http_req_sending
test('average response GraphWidget has metric with name k6_http_req_sending', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Sending
    ][1],
  ).toEqual('k6_http_req_sending');
});

test('average response GraphWidget has metric with label Sending', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Sending
    ][4].label,
  ).toEqual('Sending');
});

test('average response GraphWidget has metric with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Sending
    ][4].period,
  ).toEqual(1);
});

test('average response GraphWidget has metric with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Sending
    ][3],
  ).toEqual('timing');
});

// k6_http_req_receiving
test('average response GraphWidget has metric with name k6_http_req_receiving', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Receiving
    ][1],
  ).toEqual('k6_http_req_receiving');
});

test('average response GraphWidget has metric with label Receiving', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Receiving
    ][4].label,
  ).toEqual('Receiving');
});

test('average response GraphWidget has metric k6_http_req_receiving receiving with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Receiving
    ][4].period,
  ).toEqual(1);
});

test('average response GraphWidget has metric k6_http_req_receiving with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Receiving
    ][3],
  ).toEqual('timing');
});

// k6_http_req_handshaking
test('average response GraphWidget has metric with name k6_http_req_handshaking', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Handshaking
    ][1],
  ).toEqual('k6_http_req_handshaking');
});

test('average response GraphWidget has metric with label Handshaking', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Handshaking
    ][4].label,
  ).toEqual('Handshaking');
});

test('average response GraphWidget has metric k6_http_req_handshaking receiving with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Handshaking
    ][4].period,
  ).toEqual(1);
});

test('average response GraphWidget has metric k6_http_req_handshaking with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Handshaking
    ][3],
  ).toEqual('timing');
});

// k6_http_req_connecting
test('average response GraphWidget has metric with name k6_http_req_connecting', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Connecting
    ][1],
  ).toEqual('k6_http_req_connecting');
});

test('average response GraphWidget has metric with label Connecting', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Connecting
    ][4].label,
  ).toEqual('Connecting');
});

test('average response GraphWidget has metric k6_http_req_connecting receiving with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Connecting
    ][4].period,
  ).toEqual(1);
});

test('average response GraphWidget has metric k6_http_req_connecting with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Connecting
    ][3],
  ).toEqual('timing');
});

// k6_http_req_waiting
test('average response GraphWidget has metric with name k6_http_req_waiting', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Waiting
    ][1],
  ).toEqual('k6_http_req_waiting');
});

test('average response GraphWidget has metric with label Waiting', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Waiting
    ][4].label,
  ).toEqual('Waiting');
});

test('average response GraphWidget has metric k6_http_req_waiting receiving with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Waiting
    ][4].period,
  ).toEqual(1);
});

test('average response GraphWidget has metric k6_http_req_waiting with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Waiting
    ][3],
  ).toEqual('timing');
});

// k6_http_req_blocked
test('average response GraphWidget has metric with name k6_http_req_blocked', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Blocked
    ][1],
  ).toEqual('k6_http_req_blocked');
});

test('average response GraphWidget has metric with label Blocked', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Blocked
    ][4].label,
  ).toEqual('Blocked');
});

test('average response GraphWidget has metric k6_http_req_blocked receiving with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Blocked
    ][4].period,
  ).toEqual(1);
});

test('average response GraphWidget has metric k6_http_req_blocked with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.AverageResponse].properties.metrics[
      Metric.Blocked
    ][3],
  ).toEqual('timing');
});
