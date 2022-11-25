import type { Response } from "express";
export function respondWith404(res: Response) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('Not found\n');
  res.end();
}
