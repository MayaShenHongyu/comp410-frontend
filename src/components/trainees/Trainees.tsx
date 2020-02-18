import * as React from 'react';
import { Link } from 'react-router-dom';



interface ITraineesProps {
    // SOMETHING?
}

interface ITraineesStates {
    // SOMETHING?
}

// This class displays all trainees
export class Trainees extends React.PureComponent<ITraineesProps, ITraineesStates> {

    constructor(props: ITraineesProps) {
        super(props);
        this.state = {};
    }
    public render() {
        const traineeId = 1;
        return (
            <div>
                <Link className='btn btn-outline-secondary btn-sm' to={`/trainees/${traineeId}`}>Trainee 1</Link>
            </div>
            
        );
    }
}

