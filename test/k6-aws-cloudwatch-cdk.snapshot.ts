import { SynthUtils } from '@aws-cdk/assert';
import { createStack } from './helpers/helpers';

test('match snapshot', () => {
  expect(SynthUtils.toCloudFormation(createStack())).toMatchSnapshot();
});
