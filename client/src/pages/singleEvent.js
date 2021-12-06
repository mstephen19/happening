import React from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENT_BY_ID } from '../utils/queries';
import CommentList from '../components/commentList/index';

export default function SingleEvent() {
    const { eventId } = useParams();

    const { loading, data } = useQuery(GET_EVENT_BY_ID, {
        variables: { Id: eventId },
    });

    const event = data?.event || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div classname="singleEvent">
            <div className="eventInfo">
            <h3>{event.name}</h3>
            <p>{event.address} {event.location}</p>
            <p>{event.day}</p>
            <p>{event.body}</p>
            </div>
            <CommentList comments={event.comments}/>
        </div>
    )
};

