import fs from 'fs-extra';
import frontmatter from 'gray-matter';

const dirs = await fs.readdir('./src/content/docs');

for (let cms of dirs) {
    if (cms.includes('.md')) {
        continue;
    }
    const cmsDir = await fs.readdir('./src/content/docs/' + cms);
 
    for (let dir of cmsDir) {
        const posts = await fs.readdir('./src/content/docs/' + cms + "/" + dir);
           
    let index = 1;
        for (let post of posts) {
            let slug = cms + "/" + dir.toLowerCase().split(" - ")[1].trim().replace(/ /gm, '-') + "/" + post.toLowerCase().split("-")[1].trim().replace(/ /gm, '-')

            slug = slug.replace('.md', '').replace('/index', '')
           
            const content = await fs.readFile('./src/content/docs/' + cms + "/" + dir + "/" + post, 'utf-8');
            
            const f = frontmatter(content);
            f.data.sidebar = {
                order: index
            }
            f.data.slug = slug;
            const newContent = frontmatter.stringify(f);
            await fs.writeFile('./src/content/docs/' + cms + "/" + dir + "/" + post, newContent);
            index++;
        }
      
    }
}