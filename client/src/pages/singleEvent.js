import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_EVENT_BY_ID } from '../utils/queries';
import CommentList from '../components/commentList/index';
import CommentForm from '../components/commentForm/index';
import '../styles/singleEvent.css';

export default function SingleEvent() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_EVENT_BY_ID, {
        variables: { eventId: id },
    });
    const event = data?.event || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="singleEvent">
            <div className="eventInfo">
                <h3>{event.name}</h3>
                <p>Event Address: {event.address}</p>
                <p>Date of event: {event.day}</p>
                <p> Description: {event.body}</p>
            </div>
            <CommentList comments={event.comments}/>
            <CommentForm />
        </div>
    )
};

