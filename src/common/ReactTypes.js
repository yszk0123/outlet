// @flow

export type FunctionComponent<Props, State> = (
  props: Props,
  context: State
) => ?React$Element<any>;

export type ClassComponent<DefaultProps, Props, State> = Class<React$Component<DefaultProps, Props, State>>;

export type ReactComponent<Props, State> =
  | FunctionComponent<Props, State>
  | ClassComponent<void, Props, State>;
