import { DOMParser } from 'dom'
import { basename } from 'path'
import { schools, categories } from './list.js'

const getDocument = async (path) => {
    return new DOMParser().parseFromString(
        await (await fetch(`http://kou.oita-ed.jp/${path}`)).text(),
        'text/html'
    )
}

export const viewAll = async (c) => {
    const school = c.req.param('school')

    if (schools.includes(school)) {
        let result = []

        for (const category of categories) {
            const doc = await getDocument(`${school}/${category}`)

            const entryList = doc.getElementById('entry_list').children

            for (let count = 0; count < entryList.length / 2; count++) {
                const entry = entryList[count * 2 + 1].children[0]

                const href = entry.getAttribute('href')
                let path
                if (href[0] === '.') {
                    path = `${href.split('/')[1]}/${basename(href)}`
                } else {
                    path = `${category}/${href}`
                }

                result.push({
                    timestamp: entryList[count * 2].innerText,
                    title: entry.innerText,
                    path,
                    category
                })
            }
        }

        return c.json(result)
    }
    return c.text('404 Not Found')
}

export const view = async (c) => {
    const { school, category, path } = c.req.param()

    if (schools.includes(school)) {
        const doc = await getDocument(`${school}/${category}/${path}`)

        return c.html(doc.getElementById('entry_body').innerHTML)
    }
}
