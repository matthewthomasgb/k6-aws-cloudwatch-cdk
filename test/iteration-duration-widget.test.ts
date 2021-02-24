import '@aws-cdk/assert/jest';
import { GraphWidgetProps, GRID_WIDTH } from '@aws-cdk/aws-cloudwatch';
import { getDashboardBody } from './helpers/helpers';
import { Widgets } from './helpers/widgets';
let iterationDurationWidget: GraphWidgetProps;
let iterationDurationWidgetProperties: GraphWidgetProps;

beforeEach(() => {
  iterationDurationWidget = getDashboardBody().widgets[
    Widgets.IterationDuration
  ];
  iterationDurationWidgetProperties = getDashboardBody().widgets[
    Widgets.IterationDuration
  ].properties;
});

test('iteration duration GraphWidget contains property title with value of Iteration duration', () => {
  expect(iterationDurationWidgetProperties.title).toEqual('Iteration duration');
});

test('iteration duration GraphWidget contains property width with value of GRID_WIDTH', () => {
  expect(iterationDurationWidget.width).toEqual(GRID_WIDTH);
});

test('iteration duration GraphWidget contains property height with value 6', () => {
  expect(iterationDurationWidget.height).toEqual(6);
});

test('iteration duration GraphWidget contains property stacked with value true', () => {
  expect(iterationDurationWidgetProperties.stacked).toEqual(true);
});

test('iteration duration GraphWidget contains property liveData with value true', () => {
  expect(iterationDurationWidgetProperties.liveData).toEqual(true);
});

test('iteration duration GraphWidget has metric with label Iteration', () => {
  expect(
    getDashboardBody().widgets[Widgets.IterationDuration].properties
      .metrics[0][4].label,
  ).toEqual('Iteration');
});

test('iteration duration GraphWidget contains property left with 1 metric', () => {
  expect(
    getDashboardBody().widgets[Widgets.IterationDuration].properties.metrics
      .length,
  ).toEqual(1);
});

test('iteration duration GraphWidget has metric with name k6_iteration_duration', () => {
  expect(
    getDashboardBody().widgets[Widgets.IterationDuration].properties
      .metrics[0][1],
  ).toEqual('k6_iteration_duration');
});

test('iteration duration GraphWidget has metric with period and value 1', () => {
  expect(
    getDashboardBody().widgets[Widgets.IterationDuration].properties
      .metrics[0][4].period,
  ).toEqual(1);
});

test('iteration duration GraphWidget has metric with type timing', () => {
  expect(
    getDashboardBody().widgets[Widgets.IterationDuration].properties
      .metrics[0][3],
  ).toEqual('timing');
});
