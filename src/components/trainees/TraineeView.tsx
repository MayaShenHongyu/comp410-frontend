import * as React from 'react';
import { RouteComponentProps } from 'react-router';

type ITraineeViewProps = ITraineeViewSelfProps & RouteComponentProps<{ traineeId: string }>;

interface ITraineeViewSelfProps {
    // SOMETHING?
}

interface IModuleViewStates {
    // SOMETHING?
}

// This component display a specific VR module
export class TraineeView extends React.PureComponent<ITraineeViewProps, IModuleViewStates> {

    constructor(props: ITraineeViewProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
        <div>{"This is trainee " + this.props.match.params.traineeId}</div>
        );
    }
}

