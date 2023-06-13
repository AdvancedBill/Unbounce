// fetchJson.js
export async function fetchJson(link) {
  const response = await fetch(link);
  console.log("Download complete", response);
  const data = await response.json();
  return data;
}
