
import { serve } from "bun";
import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';

const publicHTML = readFileSync('./public/index.html', 'utf-8');

// Create EID database structure
const eidDatabase = {
  anomalies: new Map(),
  nextId: 4000
};

const server = serve({
  port: 5000,
  hostname: "0.0.0.0",
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/styles.css') {
      return new Response(readFileSync('./public/styles.css'), {
        headers: { 'Content-Type': 'text/css' },
      });
    }
    
    if (url.pathname === '/scripts/level_modal.js') {
      return new Response(readFileSync('./public/scripts/level_modal.js'), {
        headers: { 'Content-Type': 'application/javascript' },
      });
    }
    
    if (url.pathname === '/logo') {
      return new Response(readFileSync('./D.A.R.K.logo.png'), {
        headers: { 'Content-Type': 'image/png' },
      });
    }

    if (url.pathname === '/wiki') {
      return new Response(readFileSync('./public/wiki.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (url.pathname === '/wiki/eidsystem') {
      return new Response(readFileSync('./public/wiki/eidsystem.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (url.pathname === '/wiki/anomalies') {
      return new Response(readFileSync('./public/wiki/anomalies.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (url.pathname === '/database/eid_entries') {
      const dir = './public/database/eid_entries';
      const files = readdirSync(dir);
      const entries = files
        .filter(file => file.endsWith('.json'))
        .map(file => JSON.parse(readFileSync(`${dir}/${file}`, 'utf-8')))
        .sort((a, b) => {
          const numA = parseInt(a.id);
          const numB = parseInt(b.id);
          return numA - numB;
        });
      
      return new Response(JSON.stringify(entries), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (url.pathname === '/save_eid' && request.method === 'POST') {
      try {
        const data = await request.json();
        const dir = './public/database/eid_entries';
        const filePath = `${dir}/E.I.D.-${data.id}.json`;
        
        if (!existsSync(dir)) {
          mkdirSync(dir, { recursive: true });
        }
        
        writeFileSync(filePath, JSON.stringify(data, null, 2));
        
        return new Response(JSON.stringify({ success: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response(publicHTML, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
});

console.log(`D.A.R.K. Server running at http://localhost:${server.port}`);
