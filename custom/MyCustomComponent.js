let customComp;

Ext.onReady(function() {
    console.log("line 4 called custom component js");
    customComp = Ext.define('custom.MyCustomComponent', {
        extend: 'Ext.Component', // Extend the base Ext.Component class
        xtype: 'mycustomcomponent', // Define a custom xtype for this component

        config: {
            customProperty: 'Default Value' // Define a custom configuration property with a default value
        },

        // constructor: function(config) {
        //     config = config || {};
        //     this.initConfig(config); // Initialize the config
        //     this.callParent([config]); // Call the parent class's constructor with the config
        // },

        initComponent: function() {
            console.log("line 20 called custom component js");
            console.log(this.getCustomProperty());
            // Set the HTML content of the component using the custom property
            this.html = 'Custom Component with property: ' + this.getCustomProperty();
            // Call the parent class's initComponent method to ensure proper initialization
            // this.callParent(arguments); // Ensure correct arguments are passed
        }
    });
});

export { customComp }