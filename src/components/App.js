import { h , Component } from 'preact';
import User from './User';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        fetch(this.props.config.urls.user)
            .then(resp => resp.json())
            .then(user => {
                this.setState({
                    user,
                    loading: false
                })
            })
            .catch(error => { console.error(error) });
    }

    render() {
        return (
            <div class="app">
                {this.state.loading
                 ? <p>Please wait...</p>
                 : <User name={this.state.user.name}
                         image={this.state.user.avatar_url} />
                }
            </div>
        )
    };
}

export default App;