import * as path from 'path';
import * as fs from 'fs';

const directoryPath = path.join(process.cwd() + '/blogposts');

const getCreatedDate = (file) => {
    const { birthtime } = fs.statSync(file)
    return birthtime
}

const getBlogPosts = async () => {

    const blogPosts = [];
    const files = fs.readdirSync(directoryPath);

    // load all blogs
    const asyncFunctions = [];

    for (let file of files) {
        file = directoryPath + '/' + file;
        const createdDate = getCreatedDate(file) // get created date of file

        asyncFunctions.push(async () => {
            file = (await import(file)).default
            file.date = createdDate
            blogPosts.push(file)
        })
    }

    await Promise.all(asyncFunctions.map(fn => fn()));

    // sort blogs from oldest to youngest
    blogPosts.sort((a, b) => a.date - b.date)

    return blogPosts
}

export default getBlogPosts;