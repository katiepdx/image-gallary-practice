import './App.css';
import { ImageSlider } from './ImageSlider';

function App() {
  return (
    <div className="App">
      <h1>Image Gallery Practice</h1>
      <section>
        <div>
          <h1>Project 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum. Nulla facilisi cras fermentum odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Proin libero nunc consequat interdum varius sit. Malesuada pellentesque elit eget gravida cum. Diam ut venenatis tellus in. Id consectetur purus ut faucibus pulvinar. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Nascetur ridiculus mus mauris vitae ultricies leo. Vitae tortor condimentum lacinia quis vel. Ac tortor dignissim convallis aenean et tortor at risus viverra.</p>
        </div>
        <ImageSlider />
      </section>
    </div>
  );
}

export default App;
