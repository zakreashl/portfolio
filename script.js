// ---------- Content ----------
const projects = [
  { num: '01', name: 'OS',         desc: 'A 32-bit x86 operating system built from scratch on bare metal using BIOS interrupts. Manages physical memory through a custom PMM, working toward a shell and running compiled C programs.', stack: 'C · x86 asm', year: '2025', href: 'https://github.com/zakreashl/OS' },
  { num: '02', name: 'TCP-Server', desc: 'A multi-client TCP chat server using select() for non-blocking I/O, routing messages between up to 10 clients. Paired with a custom ncurses TUI client with scrollable history and a live input box.', stack: 'C · ncurses', year: '2025', href: 'https://github.com/zakreashl/TCP-Server' },
  { num: '03', name: 'cShell',     desc: 'A UNIX shell supporting cd, ls, pwd, echo, cat, touch, mkdir, rmdir, rm and clear. Uses fork() to spawn children, keeps cd/pwd in the parent, and manages working-directory state manually.', stack: 'C', year: '2024', href: 'https://github.com/zakreashl/cShell' },
  { num: '04', name: 'My_malloc',  desc: 'A custom heap allocator with its own backing memory, an sbrk-analog break pointer, and a doubly-linked list of chunk metadata. Supports allocation, freeing, and reuse of freed chunks.', stack: 'C', year: '2024', href: 'https://github.com/zakreashl/My_malloc' },
  { num: '05', name: 'Toy Stack',  desc: 'A stack data structure in ARM64 assembly (push/pop) driven by a C test harness. Manages its own stack pointer, detects overflow and underflow, and implements LIFO at the register and memory level.', stack: 'ARM64 asm · C', year: '2024', href: 'https://github.com/zakreashl/Toy-Stack-in-C-and-ASM' },
];

const meta = [
  { k: 'STACK', v: 'C · x86 · ARM64 asm' },
  { k: 'FOCUS', v: 'OS · networking · memory' },
  { k: 'BASE', v: 'Nebraska, USA' },
  { k: 'STATUS', v: 'Open to work' },
];

// ---------- Helpers ----------
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

// ---------- Render ----------
function renderMeta() {
  const wrap = document.getElementById('meta');
  meta.forEach(m => {
    wrap.appendChild(el('dt', null, m.k));
    wrap.appendChild(el('dd', null, m.v));
  });
}

function renderProjects() {
  const wrap = document.getElementById('work-list');
  projects.forEach(p => {
    const row = el('a', 'project');
    row.href = p.href;
  row.target = '_blank';
  row.rel = 'noopener';
    row.appendChild(el('span', 'project-num', p.num));
    row.appendChild(el('span', 'project-name', p.name));
    row.appendChild(el('span', 'project-desc', p.desc));
    row.appendChild(el('span', 'project-tech', `${p.stack}<br><span class="project-year">${p.year}</span>`));
    wrap.appendChild(row);
  });
  document.getElementById('project-range').textContent =
    '01—' + String(projects.length).padStart(2, '0');
}

renderMeta();
renderProjects();

// Assemble email at runtime to avoid scraper/obfuscation rewriting
(function () {
  const user = 'zakreashlaibah';
  const domain = 'gmail.com';
  const addr = user + '@' + domain;
  const link = document.getElementById('email-link');
  if (link) {
    link.href = 'mailto:' + addr;
    link.textContent = addr;
  }
})();
