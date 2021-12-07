import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_EVENT_BY_ID } from '../utils/queries';
import CommentList from '../components/commentList/index';
import CommentForm from '../components/commentForm/index';
import Moment from 'react-moment';
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
                <p><b>Event Address:</b> {event.address}</p>
                <p><b>Date of event:</b> <span className="date timeago" title={event.day}>
            {new Intl.DateTimeFormat('en-GB', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(event.day))}
      </span></p> 
                <p><b> Description:</b> {event.body}</p>
            </div>
            <CommentList comments={event.comments}/>
            <CommentForm />
        </div>
    )
};

