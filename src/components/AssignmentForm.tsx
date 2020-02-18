import * as React from 'react';

interface IAssignmentFormProps {
  // SOMETHING?
}

interface IAssignmentFormStates {
  // SOMETHING?
}

// This class displays all the VR modules
export class Modules extends React.PureComponent<
  IAssignmentFormProps,
  IAssignmentFormStates
> {
  constructor(props: IAssignmentFormProps) {
    super(props);
    this.state = {};
  }
  public render() {
    return <div>Use this form to assign a module to a trainee.</div>;
  }
}
