import { h } from 'preact';
import User from './User';

const users = [
    {
        name: 'Marcin Ruman',
        image: 'https://avatars2.githubusercontent.com/u/23522848?v=3&s=40'
    },
    {
        name: 'Roberto Sobachi',
        image: 'https://avatars3.githubusercontent.com/u/1422326?v=3&s=40'
    }
];

export function App() {
    return (
        <div class="app">
            {users.map(user => <User {...user} key={user.name} />)}
        </div>
    );
}

export default App;