import * as React from 'react';



interface IModulesProps {
    // SOMETHING?
}

interface IModulesStates {
    // SOMETHING?
}

// This class displays all the VR modules
export class Modules extends React.PureComponent<IModulesProps, IModulesStates> {

    constructor(props: IModulesProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return (
            <div>Modules Board</div>
        );
    }
}

