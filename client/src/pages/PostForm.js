import {Formik, Form, Field, ErrorMessage} from 'formik';
import { usePost } from '../context/postContext';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const PostForm = () => {
  
  const {createPost, getOnePost, updatePost} = usePost();
  const navigate = useNavigate();
  const params = useParams();
  const [dataForm, setDataForm] = useState({
    title: '',
    description: '',
    image: null
  });


  useEffect(() => {
    (async () => {
        if(params.id){
        const posteo = await getOnePost(params.id);
        setDataForm(posteo);
        }
    })();
}, [params.id]);


  return (
    <div className='bg-dark vh-100 vw-100 d-flex justify-content-center align-items-center p-2'>
      <Formik
        initialValues={dataForm}
        validationSchema={Yup.object({
          title: Yup.string().required("Titulo requerido"),
          description: Yup.string().required("Descripción requerida")
        })}
        onSubmit={async (values, actions) => {
          if(params.id) {
            await updatePost(params.id, values);
        } else {
            await createPost(values);
        }
        actions.setSubmitting(true);
        navigate("/")
          
        }}
        enableReinitialize
      >
        {({handleSubmit, setFieldValue, isSubmitting}) => (
          <Form className='d-flex flex-column bg-white rounded p-5' onSubmit={handleSubmit}>

            {params.id ? <h2 className='mb-3'>Editar publicación</h2> : <h2 className='mb-3'>Crear publicación</h2>}

          <label className='form-label fw-bold fst-italic' htmlFor="t">Agregue un titulo</label>
          <Field className='form-control border border-primary mt-1 mb-3' placeholder='Titulo' id="t" name='title'/>
            <ErrorMessage component="p" className='text-danger' name='title'/>
          
          <label className='form-label mt-1 fw-bold fst-italic' htmlFor="d">Agregue una descripcion</label>
          <Field className='form-control border border-primary mt-1 mb-3' placeholder='Descripcion' id="d" name='description'/>
            <ErrorMessage component="p" className='text-danger' name='description'/>
          
          {params.id ? '' : 
            <div>
              <label className='form-label fw-bold fst-italic' htmlFor="i">Agregue un imagen si lo desea</label>
              <input className='form-control border border-primary mt-1 mb-3' type="file" id="i" name="image" onChange={(e) => setFieldValue("image", e.target.files[0])} />
            </div>
          }
          
          <button type='button' className='btn btn-secondary mt-3 mb-1' disabled={isSubmitting} onClick={() => navigate("/")}>Volver</button>
          <button className='btn btn-primary' disabled={isSubmitting} type='submit'>{isSubmitting ? "Cargando..." : "Guardar"}</button>

        </Form>
        )}
      </Formik>
    </div>
  )
}

