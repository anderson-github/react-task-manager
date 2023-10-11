import { useContext } from "react";
import { GlobalDataContext } from "../context/data-provider";



function Board() {

    const {globalData, setGlobalData} = useContext(GlobalDataContext)
    console.log(globalData)

    const setToDone = (taskId) => {
        console.log("Done: ", taskId)
        const globalDataUpdated = globalData.map((item) => {
            if(item.id === taskId){
                item.status = "completado"
            }
            return item;
        })
        setGlobalData(globalDataUpdated)
    }


    const deleteTask = (taskId) => {
        console.log("Done: ", taskId)
        const globalDataUpdated = globalData.filter(item => {item.id !== taskId})
        setGlobalData(globalDataUpdated)
    }

    return (
      <>
        <div className="table-div">
            <table className="customTable">
            <thead>
                <tr>
                <th>Id</th>
                <th>Nmbre</th>
                <th>Responsable</th>
                <th>Email</th>
                <th>Mensaje</th>
                <th>Estado</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {globalData.length === 0 && "No hay tareas. Call of duty time !!!" }
                {globalData.map((item) => (
                    <tr key={Math.random()}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.responsable}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>{item.status}</td>
                        <td>
                            { item.status === "pendiente" && (
                                <button onClick={() => {setToDone(item.id)}}>Completar</button>
                            )}
                            <button onClick={() => {deleteTask(item.id)}}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        
      </>
    );
}

export default Board;
