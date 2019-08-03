export let projects: any[] = [];

function importAll (r: any) {
  r.keys().forEach((key: string) => projects.push(r(key).meta));
}

const allPrjs = (require as any).context('./', true, /^\.\/.+\/index\.ts$/);
importAll(allPrjs);
