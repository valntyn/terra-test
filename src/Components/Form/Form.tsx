import { Formik, Form } from 'formik';
import { memo, useState } from 'react';

import './Form.scss';

import { useAppDispatch } from '../../app/hooks';
import { addPostOnServer } from '../../features/postsSlice/postsSlice';
import { NewPost } from '../../types/newPost';
import { pictureForTest, SignupSchema } from '../../variables';
import { InputField } from '../InputField';
import { Modal } from '../Modal';

export const FormForNewItem = memo(
  () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useAppDispatch();

    const handleSubmit = async (values: NewPost) => {
      const {
        title,
        image,
        text,
        url,
      } = values;

      const newPost = {
        title,
        text,
        image,
        url,
        active: null,
      };

      await dispatch(addPostOnServer(newPost));
      setModalActive(true);
    };

    const initialValues = {
      title: 'TestName',
      text: 'terraforcesoftware the best',
      image: pictureForTest,
      url: '',
    };

    return (
      <div className="form">
        <button
          type="button"
          className="form__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="form__button-title">
            Open form to add a new post
          </p>
        </button>

        {isOpen && (
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {
              ({
                values,
                errors,
                touched,
                handleChange,
              }) => (
                <Form className="form__form">
                  <InputField
                    placeholder="Enter the title of a post"
                    error={errors.title}
                    touched={touched.title}
                    values={values.title}
                    handleChange={handleChange}
                    type="text"
                    name="title"
                  />
                  <InputField
                    placeholder="Enter your post"
                    error={errors.text}
                    touched={touched.text}
                    values={values.text}
                    handleChange={handleChange}
                    type="text"
                    name="text"
                  />
                  <InputField
                    placeholder="Attach link of image"
                    error={errors.image}
                    touched={touched.image}
                    values={values.image}
                    handleChange={handleChange}
                    type="text"
                    name="image"
                  />
                  <InputField
                    placeholder="Add unique url"
                    error={errors.url}
                    touched={touched.url}
                    values={values.url}
                    handleChange={handleChange}
                    type="text"
                    name="url"
                  />
                  <button
                    className="form__button form__button--submit"
                    type="submit"
                  >
                    Add the new product to the list
                  </button>
                </Form>
              )
            }
          </Formik>
        )}
        <Modal setActive={setModalActive} active={modalActive}>
          Product was successfully created
        </Modal>
      </div>
    );
  },
);
