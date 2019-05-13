import React from 'react'
import MeetingSummary from './MeetingSummary';

const MeetingList = () => {
    return (
        <div className="meetings-list section">
            <MeetingSummary/>
            <MeetingSummary/>
            <MeetingSummary/>
        </div>

    )

}
export default MeetingList;