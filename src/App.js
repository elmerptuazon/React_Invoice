import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './component/users';
import { InvoiceList, InvoiceEdit, InvoiceCreate } from './component/invoice';
import Dashboard from './component/dashboard';
import authProvider from './component/authProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/elmerptuazon/json_typicode');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="invoice" list={InvoiceList} edit={InvoiceEdit} create={InvoiceCreate} />
    </Admin>
);

export default App;
