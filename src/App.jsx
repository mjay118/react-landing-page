
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data/CoreConceptData';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { EXAMPLES } from './data/ExampleData';
import { MENU_DATA } from './data/MenuData';
import { useState } from 'react';

function App() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_DATA[0]);
  const handleClick = (menu) => setSelectedMenu(menu);
  const tabContent = <>
    <h3>{EXAMPLES[selectedMenu].title}</h3>
    <p>{EXAMPLES[selectedMenu].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedMenu].code}
      </code>
    </pre>
  </>
  return (
    <div>
      <Header />
      <main>
        <section>
          <div id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS?.map((res, i) => (
                <CoreConcept key={i} {...res} />
              ))}
            </ul>
          </div>
        </section>
        <section>
          <div id='examples'>
            <menu>
              {MENU_DATA.map((menu) => (
                <TabButton
                  handleClick={() => handleClick(menu)}
                  isSelected={menu == selectedMenu}
                >
                  {menu}
                </TabButton>
              ))}
            </menu>

          </div>
        </section>
        <section id='tab-content'>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
