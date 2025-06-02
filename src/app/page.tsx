'use client'

import { TaskForm } from '@/components/tasks/TaskForm'
import { TaskCard } from '@/components/tasks/TaskCard'
import { useTaskStore } from '@/store/taskStore'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { FloatingElements } from '@/components/ui/FloatingElements'

export default function Home() {
  const tasks = useTaskStore((state) => state.tasks)

  return (
    <main className="min-h-screen py-12 relative text-white">
      <AnimatedBackground />
      <FloatingElements />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Task Management App
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Organize your tasks efficiently with our intuitive task management system. 
            Track progress, manage priorities, and boost your productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <TaskForm />
          </div>
          
          <div className="md:col-span-2 space-y-6">
            {tasks.length === 0 ? (
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-gray-800 animate-in fade-in duration-500">
                <p className="text-gray-400 text-lg">No tasks yet. Add one above!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {tasks.map((task) => (
                  <div key={task.id} id={`task-${task.id}`}>
                    <TaskCard task={task} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
