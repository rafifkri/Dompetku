export const api = (url, method = 'GET', body) =>
  fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined })
    .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
