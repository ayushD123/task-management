import { Task } from '@/types/task'
import { Button } from '@/components/ui/button'
import { useTaskStore } from '@/store/taskStore'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, updateTask } = useTaskStore()

  const handleStatusChange = (newStatus: Task['status']) => {
    updateTask(task.id, { status: newStatus })
  }

  return (
    <div 
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 animate-in slide-in-from-right-5 fade-in duration-500"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-100">{task.title}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            const element = document.getElementById(`task-${task.id}`)
            if (element) {
              element.classList.add('animate-out', 'slide-out-to-right', 'fade-out', 'duration-300')
              setTimeout(() => deleteTask(task.id), 300)
            } else {
              deleteTask(task.id)
            }
          }}
          className="text-red-400 hover:text-red-300 hover:bg-red-950/50 transition-colors duration-200"
        >
          Delete
        </Button>
      </div>
      <p className="text-gray-300 mb-4">{task.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={task.status === 'todo' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleStatusChange('todo')}
          className={`transition-all duration-200 ${
            task.status === 'todo' 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-white scale-105' 
              : 'text-gray-300 hover:scale-105 border-gray-700 hover:bg-gray-800'
          }`}
        >
          Todo
        </Button>
        <Button
          variant={task.status === 'in-progress' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleStatusChange('in-progress')}
          className={`transition-all duration-200 ${
            task.status === 'in-progress' 
              ? 'bg-blue-500 hover:bg-blue-600 text-white scale-105' 
              : 'text-gray-300 hover:scale-105 border-gray-700 hover:bg-gray-800'
          }`}
        >
          In Progress
        </Button>
        <Button
          variant={task.status === 'done' ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleStatusChange('done')}
          className={`transition-all duration-200 ${
            task.status === 'done' 
              ? 'bg-green-500 hover:bg-green-600 text-white scale-105' 
              : 'text-gray-300 hover:scale-105 border-gray-700 hover:bg-gray-800'
          }`}
        >
          Done
        </Button>
      </div>
      <div className="text-sm text-gray-400 border-t border-gray-800 pt-3">
        Created: {task.createdAt.toLocaleDateString()}
      </div>
    </div>
  )
} 