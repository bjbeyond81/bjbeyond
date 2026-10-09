#!/usr/bin/env node
/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver…) with every URL in the live sitemap.
 *
 *   npm run indexnow
 *
 * Run it AFTER a deploy is live: the engines fetch the key file from the site to
 * verify ownership, so it must already return 200. Not wired into CI on purpose —
 * pinging on every push, including no-op ones, is how a host gets rate-limited.
 */
const HOST = 'bjbeyond.it';
const KEY = 'cfb7f86cbcc4721090253f3ab845c95c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (urlList.length === 0) throw new Error('No <loc> entries found in the live sitemap.');

const keyRes = await fetch(KEY_LOCATION);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  throw new Error(`Key file ${KEY_LOCATION} is not live (HTTP ${keyRes.status}); deploy first.`);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});
console.log(`IndexNow: HTTP ${res.status} ${res.statusText} for ${urlList.length} URLs`);
const body = await res.text();
if (body) console.log(body);
if (!res.ok) process.exit(1);
