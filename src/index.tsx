import { render } from 'preact';
import type { FC } from 'preact/compat';
import './styles/main.css';

export const App: FC = () => {
    return (
        <div className='game-window'>
            <h1>Doodle Duel</h1>
        </div>
    )
}

render(<App />, document.getElementById('app')!)
