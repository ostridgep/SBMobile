Ext.define('SB.view.Settings', {
    extend: 'Ext.form.Panel',
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Url'
    ],

    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'urlfield',
                label: 'Host',
                name: 'host',
                listeners: {
                    initialize: function(field) {
                        field.setValue(localStorage.getItem(field.getName()));
                    },
                    keyup: function(field) {
                        localStorage.setItem(field.getName(), field.getValue());
                    }
                }
            },{
                xtype: 'textfield',
                label: 'API Key',
                name: 'apikey',
				value: '52ad83ff051466f1d58ffbee00bebf7e',
                listeners: {
                    initialize: function(field) {
                        field.setValue(localStorage.getItem(field.getName()));
                    },
                    keyup: function(field) {
                        localStorage.setItem(field.getName(), field.getValue());
                    }
                }
            }]
        },{
            xtype: 'spacer'
        },{
            xtype: 'button',
            text: 'Save Settings',
            width: 200,
            style: {
                margin: '0 auto',
                width: 200
            },
            handler: function() {
                window.location = window.location;
            }
        }]
    }
});