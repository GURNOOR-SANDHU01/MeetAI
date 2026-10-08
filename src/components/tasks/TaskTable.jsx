import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Calendar, ExternalLink, User } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import { Avatar } from '../common/Avatar';
import { useApp } from '../../context/AppContext';

export const TaskTable = ({ tasks = [] }) => {
  const navigate = useNavigate();
  const { toggleTaskStatus } = useApp();

  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200 text-xs">
        No action items match the selected filter.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-4 w-10 text-center">Done</th>
              <th className="py-3 px-4">Task Description</th>
              <th className="py-3 px-4">Source Meeting</th>
              <th className="py-3 px-4">Assignee</th>
              <th className="py-3 px-4">Due Date</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {tasks.map((task) => {
              const isDone = task.status === 'Completed';

              return (
                <tr
                  key={task.id}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    isDone ? 'bg-slate-50/40' : ''
                  }`}
                >
                  <td className="py-3.5 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => toggleTaskStatus(task.id)}
                      className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer w-4 h-4"
                    />
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 max-w-sm">
                    <div className={isDone ? 'line-through text-slate-400 font-normal' : ''}>
                      {task.task}
                    </div>
                    {task.timestamp && (
                      <span className="text-[10px] text-slate-400 font-normal">
                        Mentioned at {task.timestamp}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => navigate(`/meetings/${task.meetingId}`)}
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium hover:underline text-xs"
                    >
                      <span className="truncate max-w-[160px]">{task.meetingTitle}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </button>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Avatar src={task.assigneeAvatar} name={task.assignee} size="xs" />
                      <span className="font-medium text-slate-800">{task.assignee}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{task.dueDate}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={task.priority} />
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <select
                      value={task.status}
                      onChange={(e) => toggleTaskStatus(task.id, e.target.value)}
                      className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
