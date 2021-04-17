import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/BeforeLoginPages/HomePage/HomePage';
import SignUp from '../Pages/BeforeLoginPages/SignUp/SignUp';
import Login from './../Pages/BeforeLoginPages/Login/Login';
import FindFreelancingJob from '../Pages/BeforeLoginPages/FindFreelancingJob/FindFreelancingJob';
import DevelopmentItTalent from '../Pages/BeforeLoginPages/FindTalent_Development_It_Talent/DevelopmentItTalent';
import PageNotFoundBeforeLogin from './../Pages/Page Not Found/PageNotFoundBeforeLogin';

export default function BeforeLoginRoutes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={Login} />
                <Route path="/sign-up" exact component={SignUp} />
                <Route path="/freelance-jobs" exact component={FindFreelancingJob} />
                <Route path="/dev-it" exact component={DevelopmentItTalent} />
                <Route path="**" component={PageNotFoundBeforeLogin} />
            </Switch>
        </>
    )
}