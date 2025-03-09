import { taskStore } from "./taskstore.js";

let testGrid = Ext.create('Ext.grid.Panel', {
    title: "Test Grid",
    layout: 'auto',
    store: taskStore,
    columns: [{ text: "name", dataIndex: "name"
        , flex: 1 
    },
    { text: "due date", dataIndex: "dueDate"
        , flex: 4
    },
    {
        text: "status", dataIndex: "status"
        , flex: 1
    }], 
    height: "100%",
    width: "100%"
})

export { testGrid };