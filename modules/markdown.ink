` Module "tweets" indexes and makes searchable all of my tweets, from a Twitter
archive download. `

fs := load('fs')
std := load('../vendor/std')
str := load('../vendor/str')
each := std.each
map := std.map
slice := std.slice
log := std.log
string := std.string
join := std.join
trimSuffix := str.trimSuffix
trimPrefix := str.trimPrefix
trim := str.trim
split := str.split
hasSuffix? := str.hasSuffix?

replace := str.replace

describe := fs.describe

tokenizer := load('../lib/tokenizer')
tokenize := tokenizer.tokenize
tokenFrequencyMap := tokenizer.tokenFrequencyMap

getMDDocs := (folder, idPrefix, withDocs) => dir(folder, (desc) => (
	readDocs := (files, converted) => (

		len(files) :: {
			0 -> withDocs(converted)
			_ -> (
				file := files.0
				remaining := slice(files, 1, len(files))

				filePath := folder + file.name
				
				file.dir :: {
					true -> readDocs(remaining, converted)
					false -> hasSuffix?(file.name, '.md') :: {
						false -> readDocs(remaining, converted)
						true -> read(filePath, 0, file.len, (fileRead) => (
							lines := split(string(fileRead.data), string('
'))
							noteTitle := trim(trimPrefix(lines.0, '#'), ' ')

							fileName := trim(file.name, '.md')

							newConverted := join(converted, [{
								id: idPrefix + string(len(converted))
								title: noteTitle
								tokens: tokenize(fileRead.data)
								content: fileRead.data
							}])

							readDocs(remaining, newConverted)
						))
					}
				}
			)
		}
	)

	readDocs(desc.data, [])

	
))

