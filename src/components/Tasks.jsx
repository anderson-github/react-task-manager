import {useForm} from 'react-hook-form'
import { GlobalDataContext } from '../context/data-provider'
import { useContext } from 'react'


function Tasks() {

    const {globalData, setGlobalData} = useContext(GlobalDataContext)
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = (values) => {
        console.log("handle submit: ", values)
        setGlobalData([...globalData, {...values, id: Date.now(), status: "pendiente"}])
        reset()
    }

    return (
      <>
        <h1 className="main-tilte">ADMINISTRADOR DE TAREAS</h1>

        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
            <label htmlFor="name">Nombre tarea</label>
            <input
            type="name"
            {...register("nombre")}
            id="name"
            placeholder="Introduce nombre actividad"
            required
            />
        </div>

            <div className="form-control">
                <label htmlFor="responsable">Responsable</label>
                <input
                    id="responsable"
                    {...register("responsable")}
                    placeholder="Responsable de actividad"
                    required
                />
            </div>

        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Email"
            required
            />
        </div>

        <div className="form-control">
            <label htmlFor="message">Descripción</label>
            <textarea
            id="message"
            {...register("message")}
            cols="20"
            rows="5"
            placeholder="Despcripción tarea"
            required
            ></textarea>
        </div>
        <input type="submit" value="Cargar Tarea" className="submit-btn" />
        </form>
      </>
    );
}

export default Tasks;
