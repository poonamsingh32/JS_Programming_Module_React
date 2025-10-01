// B)
let playlist = [
  { title: "Song1", artist: "A" },
  { title: "Song2", artist: "B" },
  { title: "Song3", artist: "C" }
];

console.log(playlist)

// 1. Insert "SongX" after "Song2" using splice().
playlist.splice(2,0,{tittle:"SongX",artist:"x"})
console.log(playlist)

// 2. Remove the last song using pop().
playlist.pop()
console.log(playlist)

// 3. Create a shallow copy of playlist.
//    → Change artist of "Song1". Observe effect on original.
let shallowplaylist=[...playlist]
shallowplaylist[0].artist='NewA'
console.log(`shallow copy of playlist :${shallowplaylist[0].artist}`)

// 4. Create a deep copy of playlist.
//    → Add a new song to deep copy only. Verify original remains same.
let deepplaylist=structuredClone(playlist)
deepplaylist.push({tittle:'SongZ',artist:'Z'})
console.log("original playlist length",playlist.length)
console.log("deep copy of playlist length :",deepplaylist.length)

// 5. Extract ["Song1", "Song2"] into a new array using slice().
let twosong=playlist.slice(0,2)
console.log(twosong)

// 6. Merge the deep copy with another array 
//    [{ title: "SongZ", artist: "Z" }] using spread.
let newlist=[{title:"Songnew",artist:'Y'}]
let mergenew=[...deepplaylist,...newlist]
console.log(mergenew)






