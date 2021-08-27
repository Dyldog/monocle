` Module "tweets" indexes and makes searchable all of my tweets, from a Twitter
archive download. `

markdown := load('markdown')
getMDDocs := markdown.getMDDocs

Root := '/Users/dylanelliott/Documents/Zettlekasten/'

getDocs := withDocs => getMDDocs(Root, 'ev', withDocs)