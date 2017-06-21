import { h } from 'preact';
import { route } from 'preact-router';

function search(query) {
    if(query !== '') {
        route(`/profile/${encodeURIComponent(query)}`);
    }
}

export default function Home() {
    return(
        <section>
            <p>Enter a Github Username</p>
            <input type="search"
                   placeholder="eg: marcinruman"
                   onSearch={e => search(e.target.value)}
            />
        </section>
    );
}