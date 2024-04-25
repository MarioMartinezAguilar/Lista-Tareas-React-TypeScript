import { useState } from "react"
import { ListaTareas } from "./listaTareas"
export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])
    
    
    const handleAddTask = () => {
        if(nuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('')

    }

    const handleBorrarTarea = (index:number) =>{
        setListaTareas(tareas => tareas.filter((_,i) => i !==index))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div className="flex">
                <input type="text" 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva Tarea"
                 />
                
            </div>
            <div className="btn"><button onClick={handleAddTask}>Agregar Tarea</button></div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )

}