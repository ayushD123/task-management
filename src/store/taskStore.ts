import { create } from 'zustand'
import { Task } from '@/types/task'

// Simple UUID generator
const generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

interface TaskStore {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateTask: (id: string, task: Partial<Task>) => void
  deleteTask: (id: string) => void
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, {
      ...task,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }],
  })),
  updateTask: (id, updatedTask) => set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id
        ? { ...task, ...updatedTask, updatedAt: new Date() }
        : task
    ),
  })),
  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
})) 