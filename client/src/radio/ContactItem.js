import React, { useContext } from 'react';
import { GlobalContext } from './ContactState';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(GlobalContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        <span
          style={{ float: 'right', marginTop: '-40px' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>

      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};


export default ContactItem;
