import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, Create, } from 'react-admin';

import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices
} from 'react-admin';

const validateNumber = [number(), minValue(0)];

export const InvoiceList = props => (
    <List {...props}>
        <Datagrid>
        <TextField source="invoice_number" />
            <ReferenceField source="user_id" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="customer_name" />
            <TextField source="product_name" />
            <TextField source="product_quantity"/>
            <TextField source="product_price" />
            <TextField source="total_invoice_amount" />
            <EditButton />
        </Datagrid>
    </List>
    
);

export const InvoiceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput disabled source="invoice_number" />
            <ReferenceInput source="user_id" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="customer_name" />
            <TextInput source="product_name" />
            <TextInput source="product_quantity" validate={validateNumber}/>
            <TextInput source="product_price" validate={validateNumber}/>
            <TextInput source="total_invoice_amount" validate={validateNumber}/>
        </SimpleForm>
    </Edit>
);

export const InvoiceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="customer_name" />
            <TextInput source="product_name" />
            <TextInput source="product_quantity" validate={validateNumber}/>
            <TextInput source="product_price" validate={validateNumber}/>
            <TextInput source="total_invoice_amount" validate={validateNumber}/>
        </SimpleForm>
    </Create>
);