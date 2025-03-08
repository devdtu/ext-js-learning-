import { taskStore } from './taskstore.js';
// Create the grid
const taskGridd = Ext.create('Ext.grid.Panel', {
    title: 'Tasks',
    store: taskStore,
    columns: [
        { text: 'Task Name', dataIndex: 'name', flex: 1 },
        { text: 'Due Date', dataIndex: 'dueDate', renderer: Ext.util.Format.dateRenderer('m/d/Y'), width: 120 },
        { text: 'Status', dataIndex: 'status', width: 100 }
    ],
    height: 300,
    width: 600,
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Add Task',
            handler: function () {
                addTaskWindow.show();
            }
        }]
    }]
});

const viewPort = Ext.create('Ext.container.Viewport', {
    layout: 'hbox', // Use vbox layout to stack items vertically
    scrollable: true, // Enable scrolling
    items: [
        taskGridd,
        {
            xtype: 'button',
            text: "hello",
            handler: function () {
                console.log('hello');
            }
        },
        // Add more content to exceed the viewport's dimensions
        {
            xtype: 'panel',
            height: 500,
            html: 'Additional content to enable scrolling'
        }
    ]
});

export { 
    taskGridd, 
    viewPort
};