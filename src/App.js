import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skiel, Testimonial, Work } from './container';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Testimonial />
            <Work />
            <Skiel />
            <Footer />
        </div>
    );
}

export default App;
