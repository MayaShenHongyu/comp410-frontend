import * as React from 'react';
import { RouteComponentProps } from 'react-router';

type IModuleViewProps = IModuleViewSelfProps & RouteComponentProps<{ moduleId: string }>;

interface IModuleViewSelfProps {
    // SOMETHING?
}

interface IModuleViewStates {
    // SOMETHING?
}

// This component display a specific VR module
export class ModuleView extends React.PureComponent<IModuleViewProps, IModuleViewStates> {

    constructor(props: IModuleViewProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
        <div>{"This is module " + this.props.match.params.moduleId}</div>
        );
    }
}

