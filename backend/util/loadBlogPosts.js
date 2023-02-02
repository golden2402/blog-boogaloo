const path = require('path')
const fs = require('fs')

const directoryPath = path.join(__dirname, '..', 'blogPosts')

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
        file = path.join(directoryPath, file);
        const createdDate = getCreatedDate(file) // get created date of file

        asyncFunctions.push(() => {
            file = require(file)
            file.date = createdDate
            blogPosts.push(file)
        })
    }

    await Promise.all(asyncFunctions.map(fn => fn()));

    // sort blogs from oldest to youngest
    blogPosts.sort((a, b) => a.date - b.date)

    return blogPosts
}

module.exports = getBlogPosts