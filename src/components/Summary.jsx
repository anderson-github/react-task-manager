
import { useContext } from 'react';
import { GlobalDataContext } from '../context/data-provider'


function Summary() {

    const {globalData} = useContext(GlobalDataContext)

    return(
        <>
            <div className="div-summary">
                <span className="summary-title">Summary</span>
            </div>
            <div className="div-tasks">
                <div>
                    <span className="total-tasks">Tareas totales: </span>
                    <span >{globalData.length}</span>
                </div>
                
                <div>
                    <span className="left-tasks">Total tareas sin terminar:</span>
                    <span>{globalData.filter(item => item.status === "pendiente").length}</span>
                </div>

                <div>
                    <span className="finish-tasks">Total tareas terminadas:</span>
                    <span>{globalData.filter(item => item.status === "completado").length}</span>
                </div>
                
                
            </div>
        </>
    );
}

export default Summary;
