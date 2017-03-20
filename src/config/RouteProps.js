// @flow
import type { ReactComponent } from '../common/ReactTypes';

export type RouteProps = {
  path: string,
  title: string,
  component: ReactComponent<*, *>
};
