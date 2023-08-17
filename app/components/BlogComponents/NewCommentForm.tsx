'use client';
import React, { useState } from 'react';
import { CommentData } from '@/types/Comment';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FormInput from '../ui/FormInput';
import FormButton from '../ui/FormButton';
import FormTextArea from '../ui/FormTextArea';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  onSubmit: (data: CommentData) => Promise<void>;
};

const NewCommentForm: React.FC<Props> = ({ onSubmit }) => {
  const [submitting, setSubmitting] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setBody('');
    setNameError(false);
    setEmailError(false);
    setBodyError(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: field, value } = event.target;

    switch (field) {
      case 'name':
        setName(value);
        setNameError(false);
        break;
      case 'email':
        setEmail(value);
        setEmailError(false);
        break;
      case 'body':
        setBody(value);
        setBodyError(false);
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setNameError(!name);
    setEmailError(!email);
    setBodyError(!body);

    if (!name || !email || !body) {
      return;
    }

    setSubmitting(true);

    await onSubmit({ name, email, body });

    setSubmitting(false);
    setBody('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={clearForm}
    >
      <div className="field">
        <FormInput
          name="name"
          label="Author Name"
          placeholder="Name Surname"
          error={nameError}
          icon={faUser as IconProp}
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <FormInput
          name="email"
          label="Author Email"
          placeholder="email@test.com"
          error={emailError}
          icon={faEnvelope as IconProp}
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <FormTextArea
          label="Comment Text"
          placeholder="Type comment here"
          error={bodyError}
          value={body}
          onChange={handleChange}
        />
      </div>

      <div className="field is-grouped">
        <div className="control">
          <FormButton
            type="submit"
            isLoading={submitting}
          >
            Add
          </FormButton>
        </div>

        <div className="control">
          <FormButton
            type="reset"
            isLoading={false}
          >
            Clear
          </FormButton>
        </div>
      </div>
    </form>
  );
};

export default NewCommentForm;
