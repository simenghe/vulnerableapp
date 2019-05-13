import React, { Component } from 'react'
import Notifications from './Notifications'
import MeetingList from './MeetingList'
class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <MeetingList/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;