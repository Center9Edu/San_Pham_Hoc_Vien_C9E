// Footer content — edit the href="" values to add your social links
// To remove the footer entirely, delete everything inside the footerHTML string

const footerHTML = `
<style>
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  .footer-logo {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    letter-spacing: 1px;
  }

  .footer-social {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-social a {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #ccc;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .footer-social a:hover {
    color: #7bbde8;
  }

  .footer-social svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .footer-copy {
    font-size: 0.8rem;
    color: #888;
  }
</style>

<div class="footer-content">
  <div class="footer-logo">Center 9 Education</div>

  <div class="footer-social">
    <!-- Fill in your social links below -->

    <a href="" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>
      Facebook
    </a>

    <a href="" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M21.54 6.41a2.54 2.54 0 0 0-1.79-1.8C18.25 4.2 12 4.2 12 4.2s-6.25 0-7.75.41a2.54 2.54 0 0 0-1.79 1.8A26.8 26.8 0 0 0 2 12a26.8 26.8 0 0 0 .46 5.59 2.54 2.54 0 0 0 1.79 1.8C5.75 19.8 12 19.8 12 19.8s6.25 0 7.75-.41a2.54 2.54 0 0 0 1.79-1.8A26.8 26.8 0 0 0 22 12a26.8 26.8 0 0 0-.46-5.59zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
      YouTube
    </a>

    <a href="" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
      GitHub
    </a>

    <a href="" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.03 2 11.1c0 2.84 1.3 5.38 3.35 7.1L4.5 22l3.96-1.97A10.3 10.3 0 0 0 12 20.2c5.52 0 10-4.03 10-9.1S17.52 2 12 2zm1.13 12.47-1.42-1.52-2.77 1.52.06-3.18-1.38-1.52 3.08-.54 1.11-1.1 1.11 1.1 3.08.54-1.38 1.52.06 3.18-2.55-1.4z"/></svg>
      Zalo
    </a>
  </div>

  <p class="footer-copy">&copy; 2025 Center 9 Education. All rights reserved.</p>
</div>
`;

document.getElementById('site-footer').innerHTML = footerHTML;
