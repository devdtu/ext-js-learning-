import { taskStore } from './taskstore.js';
import { testGrid } from './testgrid.js';
import { customComp } from './custom/MyCustomComponent.js'; // Import the custom component

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

// Create a segmented button
const segmentedButton = Ext.create('Ext.button.Segmented', {
    items: [
        {
            text: 'Button 1',
            handler: function () {
                console.log('Button 1 clicked');
            }
        },
        {
            text: 'Button 2',
            handler: function () {
                console.log('Button 2 clicked');
            }
        },
        {
            text: 'Button 3',
            handler: function () {
                console.log('Button 3 clicked');
            }
        },
        {
            text: 'Button 4',
            handler: function () {
                console.log('Button 4 clicked');
            }
        }
    ]
});

// Create a menu
const menu = Ext.create('Ext.toolbar.Toolbar', {
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

Ext.onReady(function () { 

    console.log("line 105 called ")
    const viewPort = Ext.create('Ext.container.Viewport', {
        layout: 'vbox', // Use vbox layout to stack items vertically
        scrollable: true, // Enable scrolling
        items: [
            menu,
            testGrid,
            taskGridd,
            {
                xtype: 'button',
                text: "hello",
                handler: function () {
                    console.log('hello');
                }
            },
            segmentedButton,
            // Add more content to exceed the viewport's dimensions
            {
                xtype: 'panel',
                height: 500,
                html: 'Additional content to enable scrolling',
                items: [{xtype: "mycustomcomponent",
                    customProperty: "Custom value"
                }]
            },
            {
                xtype: 'panel',
                height: 500,
                html: 'Additional content to enable scrolling'
            }
        ]
    });
    
})

export {
    taskGridd
};
