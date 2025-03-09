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

// Create a menu
const menu = Ext.create('Ext.toolbar.Toolbar', {
    layout: "hbox",
    items: [
        {
            text: 'Item 1',
            handler: function () {
                console.log('Item 1 clicked');
            }
        },
        {
            text: 'Item 2',
            handler: function () {
                console.log('Item 2 clicked');
            }
        },
        {
            text: 'Item 3',
            handler: function () {
                console.log('Item 3 clicked');
            }
        },
        '-', // Separator
        {
            text: 'Submenu',
            menu: {
                items: [
                    {
                        text: 'Subitem 1',
                        handler: function () {
                            console.log('Subitem 1 clicked');
                        }
                    },
                    {
                        text: 'Subitem 2',
                        handler: function () {
                            console.log('Subitem 2 clicked');
                        }
                    }
                ]
            }
        }
    ]
});

const viewPort = Ext.create('Ext.container.Viewport', {
    layout: 'auto', // Use vbox layout to stack items vertically
    autoScroll: true, // Enable scrolling
    scrollable: 'y', // Enable vertical scrolling
    Style: "overflow: scroll",
    items: [
        menu,
        // buttonGroup,
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
        },
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
