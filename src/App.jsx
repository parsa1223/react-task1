 import Head from'./component/Header.jsx';
import { CORE_CONCEPTS } from './Data';
import CoreConcept from './component/CoreConsept.jsx';

 
 

function App() {
  return (
    <div>
      <Head />
      <main>
        <section id="core-concepts">     
             <h2>Core Consepts</h2>
             <ul>
              <CoreConcept {...CORE_CONCEPTS[0]}
               />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
             </ul>
</section>
      </main>
    </div>
  );
}

export default App;
