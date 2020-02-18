import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/ToyProjectExamples/Home';
import Counter from './components/ToyProjectExamples/Counter';
import FetchData from './components/ToyProjectExamples/FetchData';
import { Modules } from './components/modules/Modules';
import { ModuleView } from './components/modules/ModuleView';
import { Trainees } from './components/trainees/Trainees';
import { TraineeView } from './components/trainees/TraineeView';


export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route exact path='/modules' component={Modules} />
        <Route exact path='/modules/:moduleId' component={ModuleView} />
        <Route exact path='/trainees' component={Trainees} />
        <Route exact path='/trainees/:traineeId' component={TraineeView} />
    </Layout>
);
