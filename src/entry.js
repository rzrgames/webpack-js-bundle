import './css/main.css';
import { component } from './js/component';

document.title = 'Web Project';

const entryPointMessage = 'Hello from entry point!';
document.body.innerHTML = `
    <h1>
        ${entryPointMessage}
    </h1>
`;

document.body.appendChild(component());
