import React, { useState, useMemo } from 'react';
import { CheckSquare, ListTodo, Plus, Filter, Calendar, Clock, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TaskTable } from '../components/tasks/TaskTable';
import { SearchInput } from '../components/common/Input';
import { Tabs } from '../components/common/Tabs';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { Input } from '../components/common/Input';
import { StatCard } from '../components/dashboard/StatCard';

export const TasksPage = () => {
  const { tasks, user, addTask } = useApp();
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New task form state
  const [newTitle, setNewTitle] = useState('');
  const [newAssignee, setNewAssignee] = useState(user.name);
  const [newPriority, setNewPriority] = useState('Medium');
  const [newDueDate, setNewDueDate] = useState('Oct 15, 2026');

  const stats = useMemo(() => {
    return {
      dueToday: tasks.filter((t) => t.dueDate.toLowerCase().includes('today')).length,
      dueThisWeek: tasks.filter((t) => t.status !== 'Completed').length,
      completed: tasks.filter((t) => t.status === 'Completed').length,
      overdue: 0,
    };
  }, [tasks]);

  const tabs = [
    { id: 'all', label: 'All Tasks', count: tasks.length },
    { id: 'my-tasks', label: 'My Tasks', count: tasks.filter((t) => t.assignee.includes(user.name.split(' ')[0]) || t.assignee === 'Gurnoor Singh').length },
    { id: 'due-soon', label: 'Due Soon', count: tasks.filter((t) => t.status !== 'Completed' && (t.priority === 'High' || t.dueDate.includes('Today'))).length },
    { id: 'completed', label: 'Completed', count: stats.completed },
  ];

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchesSearch =
        search === '' ||
        t.task.toLowerCase().includes(search.toLowerCase()) ||
        t.assignee.toLowerCase().includes(search.toLowerCase()) ||
        t.meetingTitle.toLowerCase().includes(search.toLowerCase());

      const matchesPriority = selectedPriority === 'ALL' || t.priority === selectedPriority;

      let matchesTab = true;
      if (activeTab === 'my-tasks') {
        matchesTab = t.assignee.includes(user.name.split(' ')[0]) || t.assignee === 'Gurnoor Singh';
      } else if (activeTab === 'due-soon') {
        matchesTab = t.status !== 'Completed' && (t.priority === 'High' || t.dueDate.includes('Today'));
      } else if (activeTab === 'completed') {
        matchesTab = t.status === 'Completed';
      }

      return matchesSearch && matchesPriority && matchesTab;
    });
  }, [tasks, search, selectedPriority, activeTab, user]);

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addTask({
      title: newTitle.trim(),
      assignee: newAssignee,
      priority: newPriority,
      dueDate: newDueDate,
    });
    setNewTitle('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Action Items</h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Track and resolve AI-extracted action items across your meetings.
          </p>
        </div>
        <Button variant="brand" size="sm" icon={Plus} onClick={() => setIsAddModalOpen(true)}>
          Add Task
        </Button>
      </div>

      {/* Task Summary Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Due Today" value={stats.dueToday} icon={Clock} color="amber" />
        <StatCard title="Due This Week" value={stats.dueThisWeek} icon={ListTodo} color="blue" />
        <StatCard title="Completed" value={stats.completed} icon={CheckSquare} color="emerald" />
        <StatCard title="Overdue" value={stats.overdue} icon={AlertCircle} color="indigo" />
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Filter Bar */}
      <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-80">
          <SearchInput
            placeholder="Search action items or assignees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium">Priority:</span>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="ALL">All Priorities</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
          </div>
        </div>
      </div>

      {/* Task Table */}
      <TaskTable tasks={filteredTasks} />

      {/* Add Task Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Action Item"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleCreateTask} className="space-y-4">
          <Input
            label="Task Description"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="e.g. Review database indexes..."
            required
          />

          <Input
            label="Assignee"
            value={newAssignee}
            onChange={(e) => setNewAssignee(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Priority</label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white py-2 px-3 text-slate-900"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <Input
              label="Due Date"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="brand" size="sm">
              Create Task
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
