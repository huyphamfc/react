import { useStore } from "./store/hooks";


export default function App() {
    const [state, dispatch] = useStore();
    return (
        <h1>Hello, React!</h1>
    );
}