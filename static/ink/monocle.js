std = load(__Ink_String(`../vendor/std`));
str = load(__Ink_String(`../vendor/str`));
log = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[log] || null : (__ink_acc_trgt.log !== undefined ? __ink_acc_trgt.log : null)})();
f = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[format] || null : (__ink_acc_trgt.format !== undefined ? __ink_acc_trgt.format : null)})();
each = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[each] || null : (__ink_acc_trgt.each !== undefined ? __ink_acc_trgt.each : null)})();
reduce = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[reduce] || null : (__ink_acc_trgt.reduce !== undefined ? __ink_acc_trgt.reduce : null)})();
filter = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[filter] || null : (__ink_acc_trgt.filter !== undefined ? __ink_acc_trgt.filter : null)})();
lower = (() => {let __ink_acc_trgt = __as_ink_string(str); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[lower] || null : (__ink_acc_trgt.lower !== undefined ? __ink_acc_trgt.lower : null)})();
split = (() => {let __ink_acc_trgt = __as_ink_string(str); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[split] || null : (__ink_acc_trgt.split !== undefined ? __ink_acc_trgt.split : null)})();
lower = (() => {let __ink_acc_trgt = __as_ink_string(str); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[lower] || null : (__ink_acc_trgt.lower !== undefined ? __ink_acc_trgt.lower : null)})();
Stopwords = [__Ink_String(`a`), __Ink_String(`an`), __Ink_String(`are`), __Ink_String(`and`), __Ink_String(`as`), __Ink_String(`at`), __Ink_String(`be`), __Ink_String(`but`), __Ink_String(`by`), __Ink_String(`do`), __Ink_String(`for`), __Ink_String(`from`), __Ink_String(`have`), __Ink_String(`he`), __Ink_String(`his`), __Ink_String(`i`), __Ink_String(`in`), __Ink_String(`is`), __Ink_String(`it`), __Ink_String(`not`), __Ink_String(`of`), __Ink_String(`on`), __Ink_String(`that`), __Ink_String(`the`), __Ink_String(`this`), __Ink_String(`to`), __Ink_String(`was`), __Ink_String(`were`), __Ink_String(`with`), __Ink_String(`you`)];
StopwordMap = {};
each(Stopwords, word => (() => {let __ink_assgn_trgt = __as_ink_string(StopwordMap); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return word })(), true) : (__ink_assgn_trgt[(() => { return word })()]) = true; return __ink_assgn_trgt})());
notStopword__ink_qm__ = w => __ink_eq((() => {let __ink_acc_trgt = __as_ink_string(StopwordMap); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return w })()] || null : (__ink_acc_trgt[(() => { return w })()] !== undefined ? __ink_acc_trgt[(() => { return w })()] : null)})(), null);
Puncts = __Ink_String(`.,:;?!#%&*()[]{}|/<>~"-_+=`);
punct__ink_qm__ = c => (() => { let __ink_trampolined_sub; let sub; return sub = i => (() => { __ink_trampolined_sub = i => __ink_match((() => {let __ink_acc_trgt = __as_ink_string(Puncts); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return i })()] || null : (__ink_acc_trgt[(() => { return i })()] !== undefined ? __ink_acc_trgt[(() => { return i })()] : null)})(), [[() => (null), () => (false)], [() => (c), () => (true)], [() => (__Ink_Empty), () => (__ink_trampoline(__ink_trampolined_sub, __as_ink_string(i + 1)))]]); return __ink_resolve_trampoline(__ink_trampolined_sub, i) })() })()(0);
control__ink_qm__ = c => (point(c) < 32);
removePunct = s => (() => { let __ink_trampolined_sub; let sub; return sub = i => (() => { __ink_trampolined_sub = i => (() => { let c; return __ink_match(c = (() => {let __ink_acc_trgt = __as_ink_string(s); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return i })()] || null : (__ink_acc_trgt[(() => { return i })()] !== undefined ? __ink_acc_trgt[(() => { return i })()] : null)})(), [[() => (null), () => (s)], [() => (__Ink_Empty), () => ((() => { __ink_match(punct__ink_qm__(c), [[() => (true), () => ((() => {let __ink_assgn_trgt = __as_ink_string(s); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return i })(), __Ink_String(` `)) : (__ink_assgn_trgt[(() => { return i })()]) = __Ink_String(` `); return __ink_assgn_trgt})())], [() => (__Ink_Empty), () => (__ink_match(control__ink_qm__(c), [[() => (true), () => ((() => {let __ink_assgn_trgt = __as_ink_string(s); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return i })(), __Ink_String(` `)) : (__ink_assgn_trgt[(() => { return i })()]) = __Ink_String(` `); return __ink_assgn_trgt})())]]))]]); return __ink_trampoline(__ink_trampolined_sub, __as_ink_string(i + 1)) })())]]) })(); return __ink_resolve_trampoline(__ink_trampolined_sub, i) })() })()(0);
whitespace__ink_qm__ = c => __ink_match(point(c), [[() => (9), () => (true)], [() => (10), () => (true)], [() => (13), () => (true)], [() => (32), () => (true)], [() => (__Ink_Empty), () => (false)]]);
splitByWhitespace = s => (() => { let __ink_trampolined_sub; let sub; return sub = (acc, i, sofar) => (() => { __ink_trampolined_sub = (acc, i, sofar) => (() => { let c; return __ink_match(c = (() => {let __ink_acc_trgt = __as_ink_string(s); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return i })()] || null : (__ink_acc_trgt[(() => { return i })()] !== undefined ? __ink_acc_trgt[(() => { return i })()] : null)})(), [[() => (null), () => (__ink_match(sofar, [[() => (__Ink_String(``)), () => (acc)], [() => (__Ink_Empty), () => ((() => {let __ink_assgn_trgt = __as_ink_string(acc); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(len(acc), sofar) : (__ink_assgn_trgt[len(acc)]) = sofar; return __ink_assgn_trgt})())]]))], [() => (__Ink_Empty), () => (__ink_match(whitespace__ink_qm__(c), [[() => (true), () => (__ink_match(sofar, [[() => (__Ink_String(``)), () => (__ink_trampoline(__ink_trampolined_sub, acc, __as_ink_string(i + 1), __Ink_String(``)))], [() => (__Ink_Empty), () => (__ink_trampoline(__ink_trampolined_sub, (() => {let __ink_assgn_trgt = __as_ink_string(acc); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(len(acc), sofar) : (__ink_assgn_trgt[len(acc)]) = sofar; return __ink_assgn_trgt})(), __as_ink_string(i + 1), __Ink_String(``)))]]))], [() => (__Ink_Empty), () => (__ink_match(c, [[() => (null), () => (acc)], [() => (__Ink_Empty), () => (__ink_trampoline(__ink_trampolined_sub, acc, __as_ink_string(i + 1), __as_ink_string(sofar + c)))]]))]]))]]) })(); return __ink_resolve_trampoline(__ink_trampolined_sub, acc, i, sofar) })() })()([], 0, __Ink_String(``));
tokenize = s => (() => { let tokens; s = __as_ink_string(__Ink_String(``) + s); removePunct(s); tokens = filter(splitByWhitespace(lower(s)), notStopword__ink_qm__); return reduce(tokens, (freqs, tok) => (() => { let freq; return __ink_match(freq = (() => {let __ink_acc_trgt = __as_ink_string(freqs); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return tok })()] || null : (__ink_acc_trgt[(() => { return tok })()] !== undefined ? __ink_acc_trgt[(() => { return tok })()] : null)})(), [[() => (null), () => ((() => {let __ink_assgn_trgt = __as_ink_string(freqs); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return tok })(), 1) : (__ink_assgn_trgt[(() => { return tok })()]) = 1; return __ink_assgn_trgt})())], [() => (__Ink_Empty), () => ((() => {let __ink_assgn_trgt = __as_ink_string(freqs); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return tok })(), __as_ink_string(freq + 1)) : (__ink_assgn_trgt[(() => { return tok })()]) = __as_ink_string(freq + 1); return __ink_assgn_trgt})())]]) })(), {}) })()

std = load(__Ink_String(`../vendor/std`));
log = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[log] || null : (__ink_acc_trgt.log !== undefined ? __ink_acc_trgt.log : null)})();
each = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[each] || null : (__ink_acc_trgt.each !== undefined ? __ink_acc_trgt.each : null)})();
indexDoc = (index, doc) => each(keys((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[tokens] || null : (__ink_acc_trgt.tokens !== undefined ? __ink_acc_trgt.tokens : null)})()), token => (() => { let docIDs; return __ink_match(docIDs = (() => {let __ink_acc_trgt = __as_ink_string(index); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return token })()] || null : (__ink_acc_trgt[(() => { return token })()] !== undefined ? __ink_acc_trgt[(() => { return token })()] : null)})(), [[() => (null), () => ((() => {let __ink_assgn_trgt = __as_ink_string(index); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return token })(), [(() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[id] || null : (__ink_acc_trgt.id !== undefined ? __ink_acc_trgt.id : null)})()]) : (__ink_assgn_trgt[(() => { return token })()]) = [(() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[id] || null : (__ink_acc_trgt.id !== undefined ? __ink_acc_trgt.id : null)})()]; return __ink_assgn_trgt})())], [() => (__Ink_Empty), () => ((() => {let __ink_assgn_trgt = __as_ink_string(docIDs); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(len(docIDs), (() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[id] || null : (__ink_acc_trgt.id !== undefined ? __ink_acc_trgt.id : null)})()) : (__ink_assgn_trgt[len(docIDs)]) = (() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[id] || null : (__ink_acc_trgt.id !== undefined ? __ink_acc_trgt.id : null)})(); return __ink_assgn_trgt})())]]) })());
indexDocs = docs => (() => { let index; index = {}; each(keys(docs), docID => indexDoc(index, (() => {let __ink_acc_trgt = __as_ink_string(docs); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return docID })()] || null : (__ink_acc_trgt[(() => { return docID })()] !== undefined ? __ink_acc_trgt[(() => { return docID })()] : null)})())); return index })()

std = load(__Ink_String(`../vendor/std`));
quicksort = load(__Ink_String(`../vendor/quicksort`));
map = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[map] || null : (__ink_acc_trgt.map !== undefined ? __ink_acc_trgt.map : null)})();
reduce = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[reduce] || null : (__ink_acc_trgt.reduce !== undefined ? __ink_acc_trgt.reduce : null)})();
sortBy = (() => {let __ink_acc_trgt = __as_ink_string(quicksort); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[sortBy] || null : (__ink_acc_trgt.sortBy !== undefined ? __ink_acc_trgt.sortBy : null)})();
docTermFrequency = (doc, token) => (() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[tokens] || null : (__ink_acc_trgt.tokens !== undefined ? __ink_acc_trgt.tokens : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return token })()] || null : (__ink_acc_trgt[(() => { return token })()] !== undefined ? __ink_acc_trgt[(() => { return token })()] : null)})();
docInverseFrequency = (doc, token, lenDocs) => ln((lenDocs / len((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[tokens] || null : (__ink_acc_trgt.tokens !== undefined ? __ink_acc_trgt.tokens : null)})())));
docTFIDF = (doc, token, lenDocs) => (docTermFrequency(doc, token) * docInverseFrequency(doc, token, lenDocs));
rankDocs = (matchingDocs, queryTokens, lenDocs) => sortBy(matchingDocs, doc => (() => { let tokenScores; tokenScores = map(queryTokens, token => docTFIDF(doc, token, lenDocs)); return __ink_negate(reduce(tokenScores, (a, b) => __as_ink_string(a + b), 0)) })())

std = load(__Ink_String(`../vendor/std`));
map = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[map] || null : (__ink_acc_trgt.map !== undefined ? __ink_acc_trgt.map : null)})();
slice = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[slice] || null : (__ink_acc_trgt.slice !== undefined ? __ink_acc_trgt.slice : null)})();
filter = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[filter] || null : (__ink_acc_trgt.filter !== undefined ? __ink_acc_trgt.filter : null)})();
reduce = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[reduce] || null : (__ink_acc_trgt.reduce !== undefined ? __ink_acc_trgt.reduce : null)})();
tokenizer = load(__Ink_String(`tokenizer`));
ranker = load(__Ink_String(`ranker`));
tokenize = (() => {let __ink_acc_trgt = __as_ink_string(tokenizer); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[tokenize] || null : (__ink_acc_trgt.tokenize !== undefined ? __ink_acc_trgt.tokenize : null)})();
rankDocs = (() => {let __ink_acc_trgt = __as_ink_string(ranker); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[rankDocs] || null : (__ink_acc_trgt.rankDocs !== undefined ? __ink_acc_trgt.rankDocs : null)})();
listToSet = list => reduce(list, (acc, it) => (() => {let __ink_assgn_trgt = __as_ink_string(acc); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return it })(), true) : (__ink_assgn_trgt[(() => { return it })()]) = true; return __ink_assgn_trgt})(), {});
intersectionSet = (a, b) => reduce(keys(a), (intersection, it) => __ink_match((() => {let __ink_acc_trgt = __as_ink_string(b); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return it })()] || null : (__ink_acc_trgt[(() => { return it })()] !== undefined ? __ink_acc_trgt[(() => { return it })()] : null)})(), [[() => (true), () => ((() => {let __ink_assgn_trgt = __as_ink_string(intersection); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return it })(), true) : (__ink_assgn_trgt[(() => { return it })()]) = true; return __ink_assgn_trgt})())], [() => (__Ink_Empty), () => (intersection)]]), {});
findDocs = (index, docs, query) => (() => { let queryTokens; queryTokens = keys(tokenize(query)); return __ink_match(queryTokens, [[() => ([]), () => ([])], [() => (__Ink_Empty), () => ((() => { let docMatches; let docMatchesAsMaps; let matchingDocIDs; let matchingDocs; docMatches = map(map(queryTokens, token => (() => {let __ink_acc_trgt = __as_ink_string(index); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return token })()] || null : (__ink_acc_trgt[(() => { return token })()] !== undefined ? __ink_acc_trgt[(() => { return token })()] : null)})()), docIDs => __ink_match(docIDs, [[() => (null), () => ([])], [() => (__Ink_Empty), () => (docIDs)]])); docMatchesAsMaps = map(docMatches, listToSet); matchingDocIDs = keys(reduce(slice(docMatchesAsMaps, 1, len(docMatchesAsMaps)), intersectionSet, (() => {let __ink_acc_trgt = __as_ink_string(docMatchesAsMaps); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})())); matchingDocs = map(matchingDocIDs, id => (() => {let __ink_acc_trgt = __as_ink_string(docs); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return id })()] || null : (__ink_acc_trgt[(() => { return id })()] !== undefined ? __ink_acc_trgt[(() => { return id })()] : null)})()); return rankDocs(matchingDocs, queryTokens, len(docs)) })())]]) })()
