Ext.application({
    name: 'TaskManager',
    launch: function () {
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

        // Create the grid
        const taskGrid = Ext.create('Ext.grid.Panel', {
            title: 'Tasks',
            store: taskStore,
            columns: [
                { text: 'Task Name', dataIndex: 'name', flex: 1 },
                { text: 'Due Date', dataIndex: 'dueDate', renderer: Ext.util.Format.dateRenderer('m/d/Y'), width: 120 },
                { text: 'Status', dataIndex: 'status', width: 100 }
            ],
            height: 300,
            width: 600,
            // renderTo: Ext.getBody(),
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



        Ext.create('Ext.container.Container', {
            layout: 'hbox',
            items: [
                {
                    xtype: 'button', text: 'Button 1', handler: () => {
                        console.log("button 1 clicked");
                    }
                },
                { xtype: 'button', text: 'Button 2' },
                taskGrid
            ],
            renderTo: Ext.getBody()
        });

        // Create the form in a window
        const addTaskWindow = Ext.create('Ext.window.Window', {
            title: 'Add New Task',
            // width: 400,
            // height: 200,
            layout: 'absolute',
            closeAction: 'hide',
            scrollable: true,
            items: [{
                xtype: 'form',
                bodyPadding: 10,
                items: [
                    { xtype: 'textfield', fieldLabel: 'Task Name', name: 'name', allowBlank: false },
                    { xtype: 'datefield', fieldLabel: 'Due Date', name: 'dueDate', format: 'Y-m-d', allowBlank: false },
                    { xtype: 'combobox', fieldLabel: 'Status', name: 'status', store: ['Not Started', 'In Progress', 'Done'], allowBlank: false }
                ],
                buttons: [{
                    text: 'Save',
                    handler: function () {
                        const form = this.up('form').getForm();
                        if (form.isValid()) {
                            console.log("line 67")
                            console.log(JSON.stringify(form.getValues()))
                            taskStore.add(form.getValues());
                            addTaskWindow.hide();
                            form.reset();
                        }
                    }
                }, {
                    text: 'Cancel',
                    handler: function () {
                        addTaskWindow.hide();
                    }
                }]
            }]
        });

        Ext.create('Ext.panel.Panel', {
            title: 'MessageBox Example',
            width: 300,
            height: 200,
            renderTo: Ext.getBody(),
            layout: 'fit',
            items: [
                {
                    xtype: 'button',
                    style: 'justify-content: center',
                    cls: 'testclass',
                    text: 'Show MessageBox',
                    handler: function () {
                        // Show a MessageBox when the button is clicked
                        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', function (btn) {
                            if (btn === 'yes') {
                                console.log('User clicked "Yes"');
                            } else {
                                console.log('User clicked "No"');
                            }
                        })
                    }
                }
            ]
        })
    }
});