// Define the Task model
Ext.define('Task', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'dueDate', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'status', type: 'string' }
    ]
});

// Create a store to hold tasks
const taskStore = Ext.create('Ext.data.Store', {
    model: 'Task',
    data: [
        { name: 'Finish Ext JS project', dueDate: '2025-03-01', status: 'In Progress' },
        { name: 'Prep for interview', dueDate: '2025-03-02', status: 'Not Started' }
    ]
});

export { taskStore };