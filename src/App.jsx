import { useEffect, useRef } from 'react';
import { mountRecoveryPrototype } from './prototype/runtime.js';

export default function App() {
  const prototype = useRef(null);

  // The approved scene manages the contents of <main>; cleanup also supports Strict Mode.
  useEffect(() => mountRecoveryPrototype(prototype.current), []);

  return (
    <div ref={prototype}>
      <header className="topbar">
        <a href="./" className="brand" aria-label="TAMCA prototype home">
          <svg width="28" height="29" viewBox="0 0 28 29" aria-hidden="true">
            <path fill="#F2A900" d="M0 15h6v14H0zm10-8h6v22h-6zM20 0h6v29h-6z" />
          </svg>
          <span>TAMCA<span className="brand-divider" /><span className="brand-product">Delivery recovery</span></span>
        </a>
        <div className="topbar-right">
          <span className="demo-label"><span />Interactive prototype</span>
          <button id="restart" className="icon-button" aria-label="Restart demo" title="Restart demo" />
        </div>
      </header>
      <main id="app" tabIndex={-1} />
      <footer className="page-footer">
        <span>Based on proposal · Order #2004</span>
        <span>Simulated data & AI output · No live actions</span>
      </footer>
      <p id="announcer" className="sr-only" role="status" aria-live="polite" />
    </div>
  );
}
