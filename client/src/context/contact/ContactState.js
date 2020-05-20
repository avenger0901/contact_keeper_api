import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johanson',
        email: 'jill@gmail.com',
        phone: '111-111-1234',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Smith Johanson',
        email: 'jill@gmail.com',
        phone: '111-111-1234',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Rio Johanson',
        email: 'jill@gmail.com',
        phone: '111-111-1234',
        type: 'personal',
      },
      {
        id: 4,
        name: 'Berlin Johanson',
        email: 'jill@gmail.com',
        phone: '111-111-1234',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.childeren}
    </ContactContext.Provider>
  );
};

export default ContactState;
