/* ================================================================
   EMBERLINE PLATFORM — core
================================================================ */
(function(){
"use strict";
var REDUCED=matchMedia("(prefers-reduced-motion: reduce)").matches;
var FINE=matchMedia("(hover:hover) and (pointer:fine)").matches;
var MOTION=!!(window.gsap&&window.ScrollTrigger)&&!REDUCED;
if(MOTION)document.documentElement.classList.add("anim");
document.documentElement.classList.add("js-ready");
if(FINE&&!REDUCED)document.documentElement.classList.add("fine-cursor");
var $=function(s,c){return (c||document).querySelector(s)};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
if(window.gsap&&window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);

/* ---------------- IMAGES ---------------- */
var IMG={
 hero:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/18bd97011-5b04-4fd9-b433-f40051e92cb2.png",
 idea:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/14faafbbf-8850-4749-bcd5-0958498e5e05.png",
 poster:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/1a86646f4-6f66-46af-8c70-271551749c2a.png",
 ashen:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/14078654d-f086-4e20-9671-5bc458e1d242.png",
 verdigris:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/1bdf1a626-7c82-4472-a57d-fe2510ac47d3.png",
 loom:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/1817556d6-3cbd-40e1-a169-4125c5989947.png",
 pale:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/1ff5a1c54-a99e-4bdd-bc43-76398c91633a.png",
 mirel:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/19c81ed14-7de4-405d-86d5-5d97eb02c7b8.png",
 aldous:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/1ca094759-dfa9-46ee-9de3-230abb72bd9b.png",
 vesper:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/12d0a5c1c-c486-4d23-b811-b36259647fa0.png",
 wall:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/1648003be-17fc-44e7-919f-4f0dd3ff85c2.png",
 bridge:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/14d52a894-a53f-41f9-bde9-4f0dd3ff85c8.png",
 finale:"https://image.qwenlm.ai/public_source/81492f1f-4433-40a2-ab08-5bb128616fda/10eae93d0-e9ad-4367-8cc8-737262a700e0.png"
};
var FALLBACK="data:image/svg+xml,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'><rect width='800' height='500' fill='#1E1915'/><circle cx='400' cy='250' r='90' fill='none' stroke='#E05A28' stroke-width='3' opacity='.7'/><circle cx='400' cy='250' r='14' fill='#E05A28' opacity='.8'/><text x='400' y='400' fill='#9A9184' font-family='monospace' font-size='16' text-anchor='middle'>EMBERLINE · IMAGE UNAVAILABLE</text></svg>");
document.addEventListener("error",function(e){var t=e.target;if(t&&t.tagName==="IMG"&&!t.getAttribute("data-fb")){t.setAttribute("data-fb","1");t.src=FALLBACK}},true);

/* ---------------- DATA / CMS ---------------- */
var WORLDS=[
 {id:"ashen",name:"The Ashen Reach",tag:"Ember · Volcanic · First fire",img:IMG.ashen,climate:"Dry heat, ash wind",first:"Sunderlight (2027)",idx:"W.01",palette:["#1c1410","#6e3b22","#E05A28","#d8a06a","#3a2a22"],
  blurb:"Black glass plains and rivers of ember. The Reach is where the first fire was lit — and where it refuses to die.",
  history:["The Reach remembers a single event: the Kindling, when the first flame was struck from volcanic glass and never allowed to go out. Every settlement in the Reach is organised around a hearth, and every hearth keeps a ledger of the nights it survived.","When the Glass Storms came, the people did not flee. They learned to walk through heat the way sailors learn to walk through wind. Distance in the Reach is measured in warmth, not miles.","Today the Reach is governed by the Lantern Law: no traveller may be refused a flame, and no flame may be sold. Mirel keeps the oldest public lantern under this law."],
  locations:[{n:"Hearthfall",t:"Capital",d:"A city built in the crater of the first fire, its streets lit by a chain of lamps that has never gone dark."},{n:"The Glass Flats",t:"Region",d:"Obsidian plains where storms ring like bells and travellers leave chalk marks for the next walker."},{n:"Cinderwake",t:"Settlement",d:"A caravan town at the ember river crossing, famous for its soup kitchens that never close."}],
  factions:[{n:"The Lantern Keepers",d:"Sworn tenders of public flame; part guild, part memory."},{n:"The Ash Choir",d:"Singers who map storms by ear and warn settlements in song."}],
  characters:["mirel","aldous"],stories:["heat","lantern-law"],art:["a3"],games:["sunderlight"],
  note:"Field note — ash here is soft as flour. Sound carries strangely; voices arrive before footsteps."},
 {id:"verdigris",name:"The Verdigris Deep",tag:"Tide · Bronze · Memory",img:IMG.verdigris,climate:"Cold tide, bronze air",first:"Sunderlight (2027)",idx:"W.02",palette:["#0d1f1d","#2f5d55","#6f9c8f","#c8b98a","#0a1412"],
  blurb:"A bronze city that chose to sink rather than surrender. Light falls through water like memory.",
  history:["Verdis was a city of bells before it was a city of water. When the siege came, its council voted — famously, unanimously — to open the sea gates rather than burn. The city sank in one night, intact.","The survivors became divers, then architects of the drowned. They keep every statue facing upward, by law, so the city can watch the surface it refused.","Letters still arrive at the Deep archive, sealed in wax. They are read aloud on tide days. The archive floods a little more each year, and the archivists consider this a form of honesty."],
  locations:[{n:"The Bell Ward",t:"District",d:"The old centre, where towers still ring when the current is strong enough."},{n:"The Sunk Archive",t:"Landmark",d:"A flooded library whose letters are read aloud by lamplight."},{n:"Gullgate",t:"Harbour",d:"The surface harbour where divers trade stories for dry bread."}],
  factions:[{n:"The Tide Speakers",d:"Navigators who read the water's moods and speak for the drowned."},{n:"The Wax Guild",d:"Keepers of letters, seals, and promises."}],
  characters:[],stories:["deep"],art:["a4"],games:["sunderlight"],
  note:"Field note — everything in the Deep is kept face-up. Nothing is allowed to be forgotten."},
 {id:"loom",name:"The Loomlands",tag:"Sky · Thread · Promise",img:IMG.loom,climate:"High wind, golden hour",first:"Sunderlight (2027)",idx:"W.03",palette:["#2a2016","#8a6a33","#e8b95a","#f4efe5","#5a4a2e"],
  blurb:"Islands stitched together by golden thread. Every bridge is a promise between two skies.",
  history:["The Loomlands are not built but woven. When two islands wish to become neighbours, weavers from both sides meet in the middle of the sky and knot a bridge; the knot is the contract.","To cut a bridge is to break a vow, and the Loomlands remember every cut. The oldest thread, called the First Promise, is said to be older than any living weaver.","Wind here is a citizen. It decides when ferries run, when markets close, and when the great looms may sing."],
  locations:[{n:"Knotmarket",t:"Capital",d:"A bazaar that moves from island to island along the oldest threads."},{n:"The First Promise",t:"Landmark",d:"The original thread bridge, now too sacred to walk and too loved to cut."},{n:"Selvage",t:"Edge settlement",d:"The last island before open sky, home of the scouts."}],
  factions:[{n:"The Weavers' Accord",d:"Bridge-makers and contract-keepers."},{n:"The Scouts of Selvage",d:"Walkers of new wind, first into every dark place."}],
  characters:["vesper"],stories:["wind","fox"],art:["a5","a6"],games:["sunderlight"],
  note:"Field note — golden hour lasts all afternoon here. Nobody is in a hurry. Nobody explains why."},
 {id:"pale",name:"Pale Signal",tag:"Ice · Aurora · Listening",img:IMG.pale,climate:"Deep frost, green sky",first:"Kindling (2024)",idx:"W.04",palette:["#0c1216","#1e3a34","#7fd4a0","#e8f0ea","#2a3f4a"],
  blurb:"An observatory at the edge of the ice, listening for a voice the sky forgot to send.",
  history:["Pale Signal began as a lighthouse for sound: a dish built to listen to the aurora. For sixty years it heard nothing worth writing down, and kept listening anyway.","Then, on a Tuesday, it answered. What happened next is the entire plot of Kindling, and we will spoil none of it.","Three keepers staff the station in rotation. The window stays warm against all economics."],
  locations:[{n:"The Dish",t:"Landmark",d:"A bronze listening horn, older than anyone alive, pointed at a fixed point in the sky."},{n:"Warm Window",t:"Station",d:"The keepers' room, one window always lit."},{n:"The Quiet Mile",t:"Region",d:"A stretch of ice where radios only ever play weather."}],
  factions:[{n:"The Keepers",d:"A rotating order of three listeners."}],
  characters:["ingrid"],stories:[],art:["a2"],games:["kindling","sunderlight"],
  note:"Field note — the aurora hums at exactly the pitch of a kettle about to boil."}
];
var GAMES=[
 {id:"sunderlight",title:"Sunderlight",status:"In production",statusType:"live",year:"2027",release:"2027",genre:"Narrative adventure",platforms:["PC","PlayStation 5","Xbox Series"],engine:"Emberlight (proprietary)",img:IMG.poster,tagline:"Carry the last light through a world that chose the dark.",
  desc:"Sunderlight is a story-driven adventure with no combat, no fail states, and one flame you must decide who to give. Walk four worlds, keep the lantern lit, and learn why the dark is not your enemy.",
  story:"The last public lantern in the Reach is dying, and its keeper is too old to carry it. You are the courier who was not chosen — you were simply the one standing there. What follows is a walk across four worlds to find someone worthy of the flame, and the slow discovery that worthiness was never the point.",
  pillars:[{n:"Light tending",d:"The lantern is a character. You shelter it, ration it, and choose what it reveals."},{n:"Traversal by promise",d:"Doors open for honest answers. Bridges remember your vows."},{n:"Listening",d:"Half the game is hearing — storms, bells, radios, and what people do not say."}],
  features:["Hand-painted lighting with real pigment palettes","No combat, no fail states — tension through consequence","A wind system recorded from real weather","40+ named characters, each with a ledger of promises","Original score for cello and room tone","Fully playable with one hand; full audio description"],
  tech:"Built on Emberlight, our in-house renderer designed to make light behave like paint: it pools, thins, and remembers. Cloth and rope simulation powers every bridge in the Loomlands. Our signal-audio system plays space, not just sound.",
  music:"Scored around a single cello and the room tone of the studio where it was recorded. The wind in each world is a real recording, tuned to the world's key.",
  worlds:["ashen","verdigris","loom","pale"],characters:["mirel","aldous","vesper","ingrid"],
  updates:[{d:"2026-07-14",t:"The four worlds are playable end to end",x:"For the first time, a Friday playtest walked from Hearthfall to Selavage without a loading screen. Several of us cried. We are calling it a successful build."},{d:"2026-04-02",t:"Wind system ships to all worlds",x:"Eleven months of recorded weather now blows through every region, each with its own biography."},{d:"2025-11-19",t:"Vertical slice complete",x:"The first 40 minutes, polished to release quality. This is the slice we show publishers — and our mums."},{d:"2025-03-08",t:"Sunderlight enters production",x:"Team grows from 14 to 26. The stove stays."}],
  team:["Ines Marek — Creative Direction","Aiko Sato — Art Direction","Priya Nair — Technology","June Okafor — Narrative","Jonas Weber — Audio"],
  pressNote:"Review build targeted Q1 2027. See the press hub for kit and fact sheet."},
 {id:"kindling",title:"Kindling",status:"Released 2024",statusType:"done",year:"2024",release:"2024 · Free",genre:"Interactive short film",platforms:["PC","Web"],engine:"Emberlight (first build)",img:IMG.pale,tagline:"Forty-five minutes at the edge of the ice.",
  desc:"Our first released work: a single-evening interactive film set at Pale Signal. Tune the dish, keep the window warm, and decide what to do with a voice that may not exist.",
  story:"Ingrid Sol has one night left at the listening post. Something in the aurora is answering back. The player's only verb is to tune — the radio, the kettle, their own doubt.",
  pillars:[{n:"One verb",d:"Everything in Kindling is tuned. There are no other interactions, and there did not need to be."},{n:"Real time",d:"The film plays in one continuous 45-minute evening, with no cuts."}],
  features:["One continuous take, no loading","Binaural aurora audio","Won Best Atmosphere — Nordic Indie Awards 2024","Free forever; it is our thank-you note"],
  tech:"The first build of the Emberlight engine, made to answer one question: can light be painted? The answer shaped everything since.",
  music:"Aurora recorded at 69° north, slowed by four percent.",
  worlds:["pale"],characters:["ingrid"],updates:[],team:["Skeleton crew of seven"],pressNote:"Press kit available."},
 {id:"cinder",title:"Cinder",status:"Archive · 2019",statusType:"arch",year:"2019",release:"2019 · Jam build",genre:"Prototype",platforms:["Web"],engine:"Unity (weekend)",img:IMG.ashen,tagline:"The 48-hour build that started everything.",
  desc:"A jam prototype made in a garage by three friends: carry a coal across a dying town without letting it go out. Crude, unfinished, and — in one mechanic — already us.",
  story:"There is no story, only a premise: warmth is borrowed, and must be returned. Every Emberline project since has been an argument about that sentence.",
  pillars:[{n:"Borrowed warmth",d:"The coal dims when you keep it too long. Giving it away restores it. That is the whole studio, in a loop."}],
  features:["Made in 48 hours","Three people, one garage","Still playable in the archive"],
  tech:"A weekend build. The coal's glow was a shader accident we have spent six years trying to deserve.",
  music:"One loop, played on a radiator.",
  worlds:["ashen"],characters:[],updates:[],team:["The three founders"],pressNote:"Historical only."}
];
var CHARACTERS=[
 {id:"mirel",name:"Mirel",role:"The Lantern-Keeper",world:"ashen",games:["sunderlight"],img:IMG.mirel,quote:"Someone has to keep the light while the world decides.",
  bio:"Mirel has outlived three governments and one god. She keeps the last public lantern in the Reach under the Lantern Law, and charges travellers nothing but a true answer. Her flame is the oldest continuous light in the world — and she is very tired of being a symbol.",
  relationships:[{n:"Aldous Vane",t:"Oldest friend; maps her routes before she walks them"},{n:"Vesper",t:"The courier she did not choose"},{n:"The Lantern Keepers",t:"Guild she outlasted and refuses to rejoin"}],
  timeline:[{d:"Before the game",x:"Refused the title Keeper Emerita three times."},{d:"Chapter I",x:"Hands over the lantern. Says nothing kind. Means everything."}],
  stories:["lantern-law"]},
 {id:"aldous",name:"Aldous Vane",role:"The Cartographer",world:"ashen",games:["sunderlight"],img:IMG.aldous,quote:"A map is a promise you draw before you know the road.",
  bio:"Aldous maps places that do not exist yet, and insists they are merely late. The studio's level design began as his fictional atlases — we simply built what he had already drawn. He owes a debt to the Deep that he has been paying for thirty years, one letter at a time.",
  relationships:[{n:"Mirel",t:"Keeps her routes safe on paper"},{n:"The Wax Guild",t:"Holds his unpaid debt"}],
  timeline:[{d:"1994 (in-world)",x:"Drew the Glass Flats from a song. The Ash Choir confirmed it note-perfect."},{d:"Chapter II",x:"Gives the courier a map with one corner burned, on purpose."}],
  stories:["carto"]},
 {id:"vesper",name:"Vesper",role:"The Masked Scout",world:"loom",games:["sunderlight"],img:IMG.vesper,quote:"I wear the fox so the fox can be brave.",
  bio:"Youngest scout of the Loomlands, keeper of a cracked porcelain mask they refuse to replace. Vesper walks first into every dark place — and somehow makes the player feel accompanied rather than led. The mask's crack is a date. They will tell you, once.",
  relationships:[{n:"The Scouts of Selvage",t:"Sworn company"},{n:"Mirel",t:"The flame Vesper is carrying"},{n:"The First Promise",t:"The bridge Vesper has never crossed"}],
  timeline:[{d:"Chapter I",x:"Takes the lantern without being asked."},{d:"Chapter III",x:"Explains the crack. We will spoil nothing."}],
  stories:["fox"]},
 {id:"ingrid",name:"Ingrid Sol",role:"Keeper of the Signal",world:"pale",games:["kindling","sunderlight"],img:IMG.pale,quote:"Listening is just hope with the volume turned down.",
  bio:"Third of the three keepers at Pale Signal, and the only one who talks back to the aurora. Ingrid anchors our first film, Kindling, and reappears in Sunderlight as the voice on the radio you are never quite sure is real.",
  relationships:[{n:"The Keepers",t:"Two colleagues, one kettle"},{n:"The Dish",t:"Sixty years older than her; she still apologises to it"}],
  timeline:[{d:"Kindling",x:"Answers the sky. The whole film is that night."},{d:"Sunderlight",x:"A voice in the Quiet Mile. Tune carefully."}],
  stories:[]}
];
var STORIES=[
 {id:"wind",title:"The Wind Was Built by Hand",kicker:"Craft · Audio",img:IMG.bridge,minutes:6,date:"2026-06-12",author:"Jonas Weber",world:"loom",characters:["vesper"],
  body:["When we first blocked the Loomlands, the wind was a loop. It was technically fine. It was also, as our art director put it, <strong>a lie with good compression</strong>.","So the audio team spent eleven months building wind the way a weaver builds cloth: layer over layer of cloth snapped in stairwells, grass recorded at dawn in three countries, breath cupped in cold rooms. Every region of the Loomlands now has a wind with its own biography.","Players never notice. That is the compliment. They say the world feels <em>remembered</em> — and in a way it is, because every gust is a small true recording of somewhere real.","<strong>Pull quote — “We did not simulate the wind. We interviewed it.”</strong>"]},
 {id:"heat",title:"Painting Heat: The Ashen Palette",kicker:"Art · Palette",img:IMG.ashen,minutes:4,date:"2026-03-30",author:"Aiko Sato",world:"ashen",characters:["mirel"],
  body:["The first rule of the Ashen Reach: no pure red. The moment we banned #FF0000, the world began to breathe.","Heat in the Reach is painted with forty shades of coal, rust, ember and bone. Warmth is a gradient you earn — a doorway, a lantern, a river of light — always surrounded by patient dark.","The discipline taught us restraint everywhere else. One accent colour per world. One wound per history. One light the player is allowed to love.","<strong>Pull quote — “Warmth only means something next to the dark.”</strong>"]},
 {id:"deep",title:"Letters from the Deep",kicker:"Fiction",img:IMG.verdigris,minutes:8,date:"2025-11-08",author:"June Okafor",world:"verdigris",characters:[],
  body:["<strong>Letter I.</strong> “To the surface that would not keep us: we are not drowned. We are kept. The water holds us the way you never did.”","<strong>Letter II.</strong> “The statues face upward by law. Not from grief — from appetite. Someone must watch the light move, or what was the city for?”","<strong>Letter III.</strong> “If a reader finds this: do not send rescue. Send stories. The archive floods a little more each year, and we would rather drown reading.”","<strong>Pull quote — “We are not drowned. We are kept.”</strong>"]},
 {id:"carto",title:"The Cartographer's Debt",kicker:"Fiction",img:IMG.idea,minutes:7,date:"2026-07-02",author:"June Okafor",world:"ashen",characters:["aldous"],
  body:["Aldous Vane has sent one letter a month to the Sunk Archive for thirty years. He has never once asked for a reply.","The debt, he says, is not money. It is accuracy. He once drew the Deep from imagination, and the drawing was beautiful, and it was wrong, and the Wax Guild has kept the invoice ever since.","So he draws it again every month — the Bell Ward, the lamps, the statues facing up — a little closer each time, from descriptions traded at Gullgate. His maps of the Deep are now the most accurate in the world. He has never been there.","<strong>Pull quote — “Accuracy is a love language. It just takes decades.”</strong>"]},
 {id:"fox",title:"Fox, Forged",kicker:"Fiction",img:IMG.vesper,minutes:5,date:"2026-05-21",author:"Ines Marek",world:"loom",characters:["vesper"],
  body:["The mask was made for Vesper's sister, who was braver and smaller and went up into the high wind one year and did not come back down.","Vesper wears it backwards now — face out, grief in. In the game you will notice the crack runs exactly along the seam where a second smile would go.","We will not tell you the date. We will tell you this: on that day each year, the Scouts of Selvage tie a new thread across the First Promise, and no one crosses it.","<strong>Pull quote — “The crack is a date. They will tell you, once.”</strong>"]},
 {id:"lantern-law",title:"The Last Lantern Law",kicker:"Lore",img:IMG.poster,minutes:6,date:"2026-01-18",author:"June Okafor",world:"ashen",characters:["mirel"],
  body:["The Lantern Law is three sentences long. It has governed the Reach for two hundred years. This is the whole text:","<strong>“No traveller may be refused a flame. No flame may be sold. The keeper is kept by those they keep.”</strong>","The third sentence is why Mirel still lives in Hearthfall, and why the soup kitchens of Cinderwake are, legally, her pension. It is the only law in our worlds that the studio agreed never to amend — a constitution for a place that does not exist.","<strong>Pull quote — “The keeper is kept by those they keep.”</strong>"]}
];
var ART=[
 {id:"a1",title:"The Reference Wall",medium:"Production still",year:2026,world:null,game:"sunderlight",img:IMG.wall,type:"Production still"},
 {id:"a2",title:"Pale Signal — Light Study",medium:"Digital painting",year:2024,world:"pale",game:"kindling",img:IMG.pale,type:"Environment"},
 {id:"a3",title:"Ember River — Color Script",medium:"Color script",year:2025,world:"ashen",game:"sunderlight",img:IMG.ashen,type:"Color script"},
 {id:"a4",title:"The Deep — Atmosphere Test",medium:"Digital painting",year:2025,world:"verdigris",game:"sunderlight",img:IMG.verdigris,type:"Environment"},
 {id:"a5",title:"Thread Bridges — Composition",medium:"Composition study",year:2025,world:"loom",game:"sunderlight",img:IMG.loom,type:"Composition"},
 {id:"a6",title:"The Crossing — Keyframe",medium:"Keyframe",year:2026,world:"loom",game:"sunderlight",img:IMG.bridge,type:"Keyframe"},
 {id:"a7",title:"Mirel — Character Study",medium:"Oil portrait",year:2024,world:"ashen",game:"sunderlight",img:IMG.mirel,type:"Character study"},
 {id:"a8",title:"The First Map",medium:"Ink on paper",year:2019,world:"ashen",game:"cinder",img:IMG.idea,type:"Early concept"}
];
var NEWS=[
 {id:"n1",title:"Sunderlight enters full production",date:"2026-02-10",kicker:"Announcement",img:IMG.poster,body:["After a vertical slice that made several publishers cry in the good way, Sunderlight moves into full production with a team of 41 makers across 12 countries.","The plan has not changed: no combat, no fail states, one flame. Release remains 2027 on PC and console.","We are hiring across art, narrative and engineering. The stove stays."]},
 {id:"n2",title:"Kindling wins Best Atmosphere at the Nordic Indie Awards",date:"2024-11-22",kicker:"Award",img:IMG.pale,body:["Our first released work, the 45-minute interactive film Kindling, takes Best Atmosphere at the Nordic Indie Awards.","The jury citation read: “A game in which listening is the verb and hope is the mechanic.” We have put the award on the shelf above the kettle, where it belongs.","Kindling remains free forever."]},
 {id:"n3",title:"Emberline grows to 41 makers in 12 countries",date:"2026-05-04",kicker:"Studio",img:IMG.wall,body:["Twelve countries, one stove (symbolic, but photographed). Emberline welcomes ten new makers across environment art, audio and narrative.","Our hiring philosophy has not moved: humans first, portfolios second. Every new hire still receives the same onboarding gift — a candle, a map, and a true question."]},
 {id:"n4",title:"The next world: first sketches shared internally",date:"2026-07-21",kicker:"Teaser",img:IMG.finale,body:["We can confirm what the intern already posted: the sketch wall has a new corner. A fifth world is being dreamed.","That is all. The next update will be when the sentence survives the week."]}
];
var JOURNAL=[
 {id:"j1",title:"Vertical Slice, Honest Numbers",cat:"Production update",date:"2025-12-02",author:"Lena Fischer",img:IMG.wall,excerpt:"What 40 minutes of polished game actually costs, and why we are glad we paid.",
  body:["A vertical slice is a promise you make to yourself with other people's money. Ours is 40 minutes of Sunderlight at release quality — one lantern, two worlds' worth of wind, and every discipline working in anger.","The honest numbers: nine months, 26 people, 3 systems rebuilt, 1 team off-site in a cabin with no signal (deliberate), and one mechanic cut that we still talk about fondly.","What we learned is simple and expensive: <strong>polish is not a phase, it is a posture</strong>. From now on every milestone ships at the quality we would release. Slower, calmer, truer."]},
 {id:"j2",title:"Sato's 400 Skies",cat:"Artist spotlight",date:"2026-04-15",author:"Ines Marek",img:IMG.loom,excerpt:"Our art director painted the Loomlands sky four hundred times before the team was allowed to see the 401st.",
  body:["Aiko Sato does not share work until it stops arguing with her. For the Loomlands, that argument lasted four hundred paintings of the same sky at golden hour.","“The first fifty are what I think a beautiful sky is,” she says. “The next hundred are what the world thinks. After that, it is just weather.”","The 401st is the one in every trailer. If you look closely, the clouds are shaped by the same wind recording the audio team made — Sato painted to the waveform. The sky listens to its own world."]},
 {id:"j3",title:"Painting Light in the Emberlight Engine",cat:"Technical",date:"2026-02-26",author:"Priya Nair",img:IMG.ashen,excerpt:"Why our renderer treats photons like pigment — pools, thins, remembers.",
  body:["Most renderers ask: how much light arrives? Emberlight asks: how much light stays? Every surface in our games keeps a small memory of the light that touched it, and releases it slowly.","The technique began as an accident in Kindling, when a buffer we forgot to clear made the ice seem to hold the aurora. We spent two years making the accident honest.","The result is light that behaves like paint. Lantern light pools in doorways. Ember rivers leave warmth on the banks after they bend away. Players call it atmosphere. We call it <strong>the truth about light, finally implemented</strong>."]},
 {id:"j4",title:"A Friday Playtest, Annotated",cat:"Behind the scenes",date:"2026-06-05",author:"Tomas Riehl",img:IMG.bridge,excerpt:"One hour of the whole studio playing the same build, with the notes we actually wrote.",
  body:["Every Friday at 14:00, forty-one people stop making the game and play it. This week's notes, unedited:","“The lantern feels lonely when you put it down. Is that a bug? No. Keep it.” — audio. “Vesper walks too fast when lying.” — narrative. “The soup in Cinderwake needs steam.” — art. “The steam is in the build, you were just early.” — engineering.","This is the whole job. A game becomes real when forty-one different kinds of honesty arrive at the same table every week."]},
 {id:"j5",title:"Cutting the Glass City",cat:"Design process",date:"2026-01-14",author:"June Okafor",img:IMG.verdigris,excerpt:"We killed a world we loved. Here is the eulogy and the autopsy.",
  body:["For eight months there was a fifth world: the Glass City, a metropolis of mirrors built to reflect the first fire. It was gorgeous. It was referenced in three quests. We cut it entirely.","The autopsy: the Glass City answered a question nobody asked. Sunderlight is about carrying light, not looking at it. Every mirror in that city turned the player's eye backward, and the whole game walks forward.","Nothing from the cut is wasted — its palette became the Deep's surface reflections, and its bell system lives in the Verdigris Ward. <strong>Worlds die so worlds can live.</strong> That sentence is on the wall now."]},
 {id:"j6",title:"Twelve Countries, One Stove",cat:"Culture",date:"2025-09-18",author:"Lena Fischer",img:IMG.idea,excerpt:"How a remote studio keeps a single room temperature.",
  body:["People assume remote means alone. Emberline is remote-first and crowded: pair-painting on video, open-mic Fridays, and a rule that no decision ships until someone from a third time zone has slept on it.","The stove is real, in Oslo, and photographed weekly. It is our totem of the obvious: warmth is a shared resource, kept by turns.","We hire in twelve countries and pay in one currency — time. Meeting-free Wednesdays are sacred. So is the candle every new hire receives, struck from the same wax as the first."]}
];
var JOBS=[
 {id:"env-artist",title:"Senior Environment Artist",dept:"Art",loc:"Remote (EU)",type:"Full-time",level:"Senior",date:"2026-06-01",
  about:"Paint and build the places players will remember for years. You will own regions of the Loomlands — from color script to final light — and work in pair-painting with the art director.",
  resp:["Own a region end to end: palette, maquette, blocking, final art","Paint color scripts and keyframes before any 3D work begins","Collaborate with audio so every region has a wind","Mentor two mid-level artists; review kindly and specifically"],
  req:["5+ years shipping environment art (hand-painted experience valued highly)","A portfolio that shows restraint: one accent, one weather, one wound","Comfortable painting studies by hand before touching the engine","Written English that is clear and kind"],
  perks:["Four-day production weeks in polish months","Annual studio gathering in Oslo (stove included)","Budget for materials: paint, paper, travel for field recording","No-crunch pledge, written down since 2021"]},
 {id:"narrative",title:"Narrative Designer",dept:"Writing",loc:"Oslo / Hybrid",type:"Full-time",level:"Mid–Senior",date:"2026-05-12",
  about:"Write the letters, laws, songs and silences of four worlds. You will own promise-led dialogue systems and the ledgers that remember what the player has vowed.",
  resp:["Write in-world documents: laws, letters, archive entries","Design dialogue that opens doors — literally","Keep the continuity bible for four worlds","Run the Friday playtest notes for narrative"],
  req:["Shipped narrative work (any medium — theatre counts)","An ear for what characters do not say","Structured, generous, calm under deadline","Norwegian a plus; kindness required"],
  perks:["One book a month, expensed","Weekly writing room, cameras off","Relocation support for Oslo"]},
 {id:"gameplay-eng",title:"Gameplay Engineer",dept:"Engineering",loc:"Remote (EU)",type:"Full-time",level:"Mid+",date:"2026-06-20",
  about:"Build systems where warmth, promises and wind are mechanics. You will work inside the Emberlight engine on the lantern's behaviour and the vow system.",
  resp:["Implement the lantern light-memory system with rendering","Build vow/promise state tracking across worlds","Own save integrity — no lost flames, ever","Write tools writers can actually use"],
  req:["Strong C++ or Rust; engine experience welcome","A soft spot for systemic storytelling","Care for accessibility at the systems level","Someone who tests with one hand, literally — we do"],
  perks:["Hardware budget every 2 years","Conference budget with writing encouragement","Pair-programming culture, no heroics"]},
 {id:"tech-anim",title:"Technical Animator",dept:"Animation",loc:"Oslo / Hybrid",type:"Full-time",level:"Mid+",date:"2026-04-03",
  about:"Make weight believable: a lantern carried for hours, a mask that means something, cloth that remembers wind.",
  resp:["Rig and animate characters, props and cloth","Build the rope/thread simulation pipeline","Work with audio on footstep truth per surface","Keep the animation budget honest"],
  req:["Strong body mechanics reel","Cloth/rope simulation experience","Scripting in any language; curiosity in ours","Patience for polish — polish is a posture here"],
  perks:["Motion capture day every quarter","Drawing classes, paid, during work"]},
 {id:"audio-designer",title:"Audio Designer (Weather)",dept:"Audio",loc:"Remote (Worldwide)",type:"Contract → Full-time",level:"Any",date:"2026-07-15",
  about:"Record and build weather with a biography. The next world's sky needs a voice, and our library needs your field ears.",
  resp:["Field recording expeditions (funded, planned, insured)","Build layered wind and weather systems per region","Tune each world's weather to its musical key","Care for our archive of 400+ recordings"],
  req:["A portfolio of places, not effects","Field recording experience, any climate","Able to travel ~4 weeks a year","A strong opinion about kettles is a plus"],
  perks:["Gear library: mics, blimps, patience","Travel is paid as work, because it is"]}
];
var TEAM=[{r:"Creative Director",n:"Ines Marek",l:"Oslo"},{r:"Studio Director",n:"Tomas Riehl",l:"Oslo"},{r:"Art Director",n:"Aiko Sato",l:"Kyoto"},{r:"Technical Director",n:"Priya Nair",l:"Remote"},{r:"Audio Director",n:"Jonas Weber",l:"Berlin"},{r:"Lead Narrative",n:"June Okafor",l:"Lagos"},{r:"Production",n:"Lena Fischer",l:"Oslo"}];
var COLLECTIONS=[
 {id:"skies",title:"The Four Skies",desc:"All four worlds, in the order the light reaches them.",img:IMG.loom,date:"2026-07-01",items:["world:ashen","world:verdigris","world:loom","world:pale"]},
 {id:"hands",title:"Hands That Build",desc:"The people in front of and behind the worlds — characters, makers and the craft between.",img:IMG.mirel,date:"2026-06-01",items:["character:mirel","character:vesper","journal:j2","journal:j6","character:ingrid"]},
 {id:"making-of",title:"Making of Sunderlight",desc:"The flagship, from honest numbers to painted light.",img:IMG.poster,date:"2026-05-01",items:["game:sunderlight","journal:j1","journal:j3","journal:j5","art:a3","art:a6"]},
 {id:"sparks",title:"Early Sparks",desc:"Where it began: a coal, a cottage industry of maps, and the first map.",img:IMG.idea,date:"2026-01-01",items:["game:cinder","game:kindling","art:a8","journal:j6"]}
];
var TIMELINE=[{era:"THE SPARK",from:"2019–2020",items:[
 {y:"2019",t:"Cinder — 48 hours, one garage",x:"Three friends build a jam game about borrowed warmth. The coal's glow is a shader accident."},
 {y:"2020",t:"The remote pact",x:"The trio writes the studio's first values on the back of a map: humans first, polish is a posture, no crunch — ever."}]},
 {era:"FIRST FLAME",from:"2021–2022",items:[
 {y:"2021",t:"Emberline Studio founded",x:"Nine people, one stove, Oslo. The company is incorporated on the day the first candle is poured."},
 {y:"2022",t:"Emberlight engine begins",x:"A renderer with one question: can light behave like paint? Kindling starts life as the test bed."}]},
 {era:"KEEPING THE FIRE",from:"2023–2025",items:[
 {y:"2023",t:"Sunderlight announced",x:"40,000 wishlists in the first week. The announcement trailer contains zero gameplay and one promise."},
 {y:"2024",t:"Kindling releases — free",x:"Forty-five minutes at the edge of the ice. It wins Best Atmosphere at the Nordic Indie Awards."},
 {y:"2025",t:"Vertical slice complete",x:"Nine months, 26 people, 40 minutes at release quality. Several publishers cry in the good way."}]},
 {era:"FULL LIGHT",from:"2026–2028",items:[
 {y:"2026",t:"Full production — you are here",x:"41 makers, 12 countries. All four worlds playable end to end for the first time."},
 {y:"2027",t:"Sunderlight releases",x:"PC, PlayStation 5, Xbox Series. One flame, no fail states."},
 {y:"2028",t:"The next world begins sketching",x:"A fifth corner appears on the sketch wall. The sentence is surviving the week."}]}];
var PRESS_REL=[NEWS[0],NEWS[1],NEWS[3]];

/* derived: unified archive */
var ARCHIVE=[];
WORLDS.forEach(function(w){ARCHIVE.push({type:"World",id:w.id,title:w.name,sub:w.tag,date:"2026-01-10",img:w.img,world:w.id,href:"#/worlds/"+w.id})});
GAMES.forEach(function(g){ARCHIVE.push({type:"Game",id:g.id,title:g.title,sub:g.genre+" · "+g.year,date:g.id==="sunderlight"?"2026-02-10":(g.id==="kindling"?"2024-11-22":"2019-03-01"),img:g.img,world:g.worlds[0],href:"#/games/"+g.id})});
CHARACTERS.forEach(function(c){ARCHIVE.push({type:"Character",id:c.id,title:c.name,sub:c.role,date:"2025-06-15",img:c.img,world:c.world,href:"#/characters/"+c.id})});
STORIES.forEach(function(s){ARCHIVE.push({type:"Story",id:s.id,title:s.title,sub:s.kicker,date:s.date,img:s.img,world:s.world,href:"#/stories/"+s.id})});
ART.forEach(function(a){ARCHIVE.push({type:"Art",id:a.id,title:a.title,sub:a.medium,date:a.year+"-01-01",img:a.img,world:a.world,href:"#/art"})});
JOURNAL.forEach(function(j){ARCHIVE.push({type:"Journal",id:j.id,title:j.title,sub:j.cat,date:j.date,img:j.img,world:null,href:"#/journal/"+j.id})});
NEWS.forEach(function(n){ARCHIVE.push({type:"News",id:n.id,title:n.title,sub:n.kicker,date:n.date,img:n.img,world:null,href:"#/news/"+n.id})});
ARCHIVE.sort(function(a,b){return a.date<b.date?1:-1});

/* lookups */
function byId(arr,id){for(var i=0;i<arr.length;i++)if(arr[i].id===id)return arr[i];return null}
function worldName(id){var w=byId(WORLDS,id);return w?w.name:""}

/* ---------------- SAVED (localStorage foundation) ---------------- */
var SKEY="emberline_saved_v1";
function savedList(){try{return JSON.parse(localStorage.getItem(SKEY)||"[]")}catch(e){return[]}}
function isSaved(k){return savedList().indexOf(k)>-1}
function toggleSave(k){var l=savedList(),i=l.indexOf(k);if(i>-1)l.splice(i,1);else l.push(k);try{localStorage.setItem(SKEY,JSON.stringify(l))}catch(e){} return i===-1}
function savedBadge(){return savedList().length}

/* ---------------- TOAST ---------------- */
var toastEl=$("#toast"),toastT=null;
function toast(msg){toastEl.textContent=msg;toastEl.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){toastEl.classList.remove("show")},2600)}

/* ---------------- SMALL HELPERS ---------------- */
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function fmtDate(d){var m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var p=d.split("-");return m[(+p[1]||1)-1]+" "+p[0]}
function badge(type){var cls={"World":"b-world","Game":"b-game","Story":"b-story"}[type]||"";return '<span class="badge '+cls+'">'+type+'</span>'}
function saveBtn(key,label){return '<button class="save-btn'+(isSaved(key)?' saved':'')+'" data-save="'+key+'" aria-pressed="'+isSaved(key)+'"><svg viewBox="0 0 24 24"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.4-9.5 9-9.5 9z"/></svg>'+(label||"SAVE")+'</button>'}
function crumbs(list){var h='<nav class="crumbs wrap" aria-label="Breadcrumb">';list.forEach(function(c,i){h+=i?'<span class="sep">/</span>':'';h+=c.href?'<a href="'+c.href+'" data-nav>'+esc(c.t)+'</a>':'<span>'+esc(c.t)+'</span>'});return h+'</nav>'}
function relCards(items){return '<div class="cards">'+items.map(function(x){
  return '<a class="card" href="'+x.href+'" data-nav><span class="frame"><img src="'+x.img+'" alt="" loading="lazy" decoding="async"></span><span class="c-kick mono"><span>'+x.k1+'</span><span>'+x.k2+'</span></span><h3>'+esc(x.title)+'</h3>'+(x.sub?'<p>'+esc(x.sub)+'</p>':'')+'</a>'}).join("")+'</div>'}
function emptyState(title,msg,btnLabel,btnHref){return '<div class="empty" data-reveal><h3>'+title+'</h3><p>'+msg+'</p>'+(btnLabel?'<a class="btn solid" href="'+btnHref+'" data-nav>'+btnLabel+' <span class="arr">→</span></a>':'')+'</div>'}

/* ---------------- SEARCH ENGINE ---------------- */
var SEARCH_ALL=[];
ARCHIVE.forEach(function(a){SEARCH_ALL.push({g:a.type,t:a.title,s:a.sub,href:a.href,img:a.img,date:a.date})});
[["Discover","#/discover","Curated journey"],["Studio & philosophy","#/studio","Who we are"],["Timeline","#/timeline","2019 → 2028"],["Media hub","#/media","Trailers & screenshots"],["Press kit","#/press","Assets & fact sheet"],["Collections","#/collections","Curated groups"],["Archive","#/archive","Everything, filterable"],["Careers","#/careers","Open roles"],["Contact","#/contact","Write to us"],["Saved content","#/saved","Your saved pieces"]].forEach(function(p){SEARCH_ALL.push({g:"Pages",t:p[0],s:p[2],href:p[1],img:null,date:"2026-08-01"})});
JOBS.forEach(function(j){SEARCH_ALL.push({g:"Careers",t:j.title,s:j.dept+" · "+j.loc,href:"#/careers/"+j.id,img:null,date:j.date})});

var RECENT_KEY="emberline_recent_v1";
function recent(){try{return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]")}catch(e){return[]}}
function pushRecent(q){if(!q)return;var l=recent().filter(function(x){return x!==q});l.unshift(q);l=l.slice(0,6);try{localStorage.setItem(RECENT_KEY,JSON.stringify(l))}catch(e){}}

function mountSearch(root,opts){
  opts=opts||{};
  root.innerHTML='<input class="sp-input" type="search" placeholder="Search the whole studio…" aria-label="Search">'+
  '<div class="filters" role="group" aria-label="Filter results"></div>'+
  '<div class="sp-head"><span class="sp-count mono"></span><span class="mono" style="color:var(--smoke)">↑↓ · ⏎ · ESC</span></div>'+
  '<div class="sp-res"></div>';
  var inp=root.querySelector(".sp-input"),fwrap=root.querySelector(".filters"),res=root.querySelector(".sp-res"),count=root.querySelector(".sp-count");
  var TYPES=["All","World","Game","Character","Story","Art","Journal","News","Careers","Pages"];
  var cur={type:"All",sort:"rel",q:"",sel:-1,items:[]};
  fwrap.innerHTML=TYPES.map(function(t){return '<button class="chip'+(t==="All"?' active':'')+'" data-t="'+t+'">'+t+'</button>'}).join("")+
   '<select class="sel" id="sp-sort" aria-label="Sort"><option value="rel">SORT: RELEVANCE</option><option value="new">SORT: NEWEST</option><option value="az">SORT: A–Z</option></select>';
  fwrap.addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;cur.type=b.getAttribute("data-t");cur.sel=-1;
    $$(".chip",fwrap).forEach(function(c){c.classList.toggle("active",c===b)});render()});
  fwrap.querySelector("#sp-sort").addEventListener("change",function(e){cur.sort=e.target.value;render()});
  inp.addEventListener("input",function(){cur.q=inp.value.trim();cur.sel=-1;if(cur.q)pushRecent(cur.q);render()});
  inp.addEventListener("keydown",function(e){
    var items=$$(".sr-item",res);
    if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();if(!items.length)return;
      cur.sel=e.key==="ArrowDown"?Math.min(cur.sel+1,items.length-1):Math.max(cur.sel-1,0);
      items.forEach(function(b,i){b.classList.toggle("sel",i===cur.sel)});items[cur.sel].scrollIntoView({block:"nearest"})}
    if(e.key==="Enter"&&items.length){e.preventDefault();items[Math.max(0,cur.sel)].click()}
  });
  function exec(item){if(item.href){navigate(item.href)}}
  function render(){
    var q=cur.q.toLowerCase();
    var items=SEARCH_ALL.filter(function(it){return (cur.type==="All"||it.g===cur.type)&&(!q||it.t.toLowerCase().indexOf(q)>-1||it.g.toLowerCase().indexOf(q)>-1||(it.s||"").toLowerCase().indexOf(q)>-1)});
    if(cur.sort==="new")items.sort(function(a,b){return a.date<b.date?1:-1});
    if(cur.sort==="az")items.sort(function(a,b){return a.t<b.t?-1:1});
    cur.items=items;count.textContent=items.length+" RESULT"+(items.length===1?"":"S");
    if(!items.length){res.innerHTML='<div class="empty"><h3>Nothing answers “'+esc(cur.q)+'”.</h3><p>The archive is deep but not infinite. Try a world name, a character, or one of these doors:</p><div class="mc-rel" style="justify-content:center">'+
      ["Worlds","Sunderlight","Mirel","Journal","Press"].map(function(s){return '<button class="chip" data-sug="'+s+'">'+s+'</button>'}).join("")+'</div></div>';
      $$(".chip[data-sug]",res).forEach(function(b){b.addEventListener("click",function(){inp.value=b.getAttribute("data-sug");cur.q=inp.value;render()})});
      return}
    var groups={};items.forEach(function(it,i){(groups[it.g]=groups[it.g]||[]).push({it:it,i:i})});
    var h="";Object.keys(groups).forEach(function(g){h+='<div class="sr-group"><h5>'+g+' · '+groups[g].length+'</h5>';
      groups[g].forEach(function(e){h+='<button class="sr-item" data-i="'+e.i+'"><span class="t">'+esc(e.it.t)+'</span><span class="s mono">'+esc(e.it.s||"")+'</span></button>'});h+='</div>'});
    if(!q&&!opts.compact){var rc=recent();if(rc.length){h='<div class="sr-group"><h5>Recent searches</h5>'+rc.map(function(r){return '<button class="chip" data-r="'+esc(r)+'" style="margin:0 8px 8px 0">'+esc(r)+'</button>'}).join("")+'</div>'+h}}
    res.innerHTML=h;
    $$(".sr-item",res).forEach(function(b){b.addEventListener("click",function(){exec(cur.items[+b.getAttribute("data-i")])})});
    $$(".chip[data-r]",res).forEach(function(b){b.addEventListener("click",function(){inp.value=b.getAttribute("data-r");cur.q=inp.value;render()})});
  }
  render();
  if(opts.focus)setTimeout(function(){inp.focus()},80);
}

/* ---------------- LIGHTBOX ---------------- */
var lbItems=[],lbIdx=0;
function openLightbox(items,i){lbItems=items;lbIdx=i;lbShow();openOv($("#lightbox"))}
function lbShow(){var it=lbItems[(lbIdx+lbItems.length)%lbItems.length];lbIdx=(lbIdx+lbItems.length)%lbItems.length;
  $("#lb-img").src=it.img;$("#lb-img").alt=it.title||"";$("#lb-title").textContent=it.title||"";$("#lb-meta").textContent=it.meta||"";$("#lb-count").textContent=(lbIdx+1)+" / "+lbItems.length}
$("#lb-prev").addEventListener("click",function(){lbIdx--;lbShow()});
$("#lb-next").addEventListener("click",function(){lbIdx++;lbShow()});
document.addEventListener("keydown",function(e){if(!$("#lightbox").classList.contains("open"))return;
  if(e.key==="ArrowLeft"){lbIdx--;lbShow()}if(e.key==="ArrowRight"){lbIdx++;lbShow()}});

/* ---------------- REEL ---------------- */
var reelFrames=[],reelI=0,reelTimer=null,reelOn=false;
function openReel(frames,cap){reelFrames=frames;reelI=0;
  $("#reel-cap").textContent=cap;$("#reel-a").src=frames[0];$("#reel-a").classList.add("show");$("#reel-b").classList.remove("show");
  $("#reel-count").textContent="01 / 0"+frames.length;
  openOv($("#reel-modal"));reelOn=true;$("#reel-toggle").textContent="PAUSE";
  clearInterval(reelTimer);reelTimer=setInterval(function(){if(reelOn&&!REDUCED)reelStep()},1700);
  var f=$("#reel-fill");f.style.transition="none";f.style.transform="scaleX(0)";
  requestAnimationFrame(function(){f.style.transition="transform 1.6s linear";f.style.transform="scaleX(1)"})}
function reelStep(){var a=$("#reel-a"),b=$("#reel-b");reelI=(reelI+1)%reelFrames.length;
  var hidden=a.classList.contains("show")?b:a,shown=a.classList.contains("show")?a:b;
  hidden.src=reelFrames[reelI];
  requestAnimationFrame(function(){hidden.classList.add("show");shown.classList.remove("show")});
  $("#reel-count").textContent=("0"+(reelI+1)).slice(-2)+" / 0"+reelFrames.length;
  var f=$("#reel-fill");f.style.transition="none";f.style.transform="scaleX(0)";
  requestAnimationFrame(function(){f.style.transition="transform 1.6s linear";f.style.transform="scaleX(1)"})}
$("#reel-toggle").addEventListener("click",function(){reelOn=!reelOn;this.textContent=reelOn?"PAUSE":"PLAY"});
$("#reel-close").addEventListener("click",function(){clearInterval(reelTimer)});

/* ---------------- OVERLAY PLUMBING ---------------- */
var lastFocus=null;
function lock(v){document.body.classList.toggle("locked",v)}
function openOv(ov){lastFocus=document.activeElement;ov.classList.add("open");lock(true);var c=ov.querySelector(".ov-close");if(c)c.focus()}
function closeOv(ov){ov.classList.remove("open");if(!$$(".overlay.open").length)lock(false);if(lastFocus&&lastFocus.focus)lastFocus.focus()}
$$(".overlay .ov-close").forEach(function(b){b.addEventListener("click",function(){if(b.id==="reel-close")clearInterval(reelTimer);closeOv(b.closest(".overlay"))})});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){var open=$$(".overlay.open");if(open.length){if(open[open.length-1].id==="reel-modal")clearInterval(reelTimer);closeOv(open[open.length-1])}}});

/* ---------------- MENU ---------------- */
var menu=$("#menu");
$("#btn-menu").addEventListener("click",function(){openOv(menu);
  if(MOTION)gsap.fromTo(".menu-link",{opacity:0,y:26},{opacity:1,y:0,duration:.7,stagger:.05,ease:"expo.out",delay:.1})});
$("#menu-close").addEventListener("click",function(){closeOv(menu)});
$$(".menu-link").forEach(function(a){a.addEventListener("mouseenter",function(){
  $$(".menu-preview img").forEach(function(im){im.classList.toggle("show",im.getAttribute("data-p")===a.getAttribute("data-preview"))})})});

/* ---------------- SEARCH OV + PAGE ---------------- */
$("#btn-search").addEventListener("click",function(){navigate("#/search")});
function openSearchOverlay(){openOv($("#search-ov"));mountSearch($("#ov-search-root"),{focus:true})}
$("#search-close").addEventListener("click",function(){closeOv($("#search-ov"))});

/* ---------------- CURSOR ---------------- */
if(FINE&&!REDUCED){
  var cur=$("#cursor"),ring=cur.querySelector(".c-ring"),dot=cur.querySelector(".c-dot"),lab=cur.querySelector(".c-label");
  var cx=innerWidth/2,cy=innerHeight/2,rx=cx,ry=cy;
  addEventListener("mousemove",function(e){cx=e.clientX;cy=e.clientY;dot.style.left=cx+"px";dot.style.top=cy+"px"},{passive:true});
  (function loop(){rx+=(cx-rx)*.16;ry+=(cy-ry)*.16;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(loop)})();
  document.addEventListener("mouseover",function(e){var t=e.target.closest("a,button,[data-cursor]");
    if(t){cur.classList.add("on");lab.textContent=t.getAttribute("data-cursor")||""}else cur.classList.remove("on")});
}

/* ---------------- LEGAL ---------------- */
var LEGAL={privacy:{title:"Privacy",body:"<p>We collect almost nothing. This site sets no advertising trackers and no third-party cookies. Saved content and recent searches live only in your browser.</p><p>If you write to us, we keep your letter until we answer it, then as long as the conversation lasts.</p>"},
 terms:{title:"Terms",body:"<p>All worlds, names, paintings and code on this site belong to Emberline Studio AS. You may share screenshots with kindness and credit.</p><p>Sunderlight and its marks are © 2026 Emberline Studio AS.</p>"},
 access:{title:"Accessibility",body:"<p>We aim for WCAG 2.2 AA: keyboard navigation, visible focus, semantic landmarks, reduced-motion support and labels for interactive art.</p><p>If anything is hard to use, write to access@emberline.studio — a human reads it.</p>"}};
document.addEventListener("click",function(e){var b=e.target.closest(".legal-link");if(!b)return;
  var k=b.getAttribute("data-legal");$("#lm-title").textContent=LEGAL[k].title;$("#lm-body").innerHTML=LEGAL[k].body;openOv($("#legal-modal"))});

/* ---------------- NEWSLETTER + CONTACT (home) ---------------- */
document.addEventListener("submit",function(e){
  if(e.target.id==="news-form"){e.preventDefault();var i=e.target.querySelector("input");
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value)){i.style.borderBottom="1px solid var(--ember)";i.focus();return}
    e.target.style.display="none";$("#news-ok").style.display="block";toast("WELCOME TO THE FIRE — CHECK YOUR INBOX")}
});
function wireContactForm(){
  var f=$("#contact-form");if(!f||f.getAttribute("data-wired"))return;f.setAttribute("data-wired","1");
  f.addEventListener("submit",function(e){e.preventDefault();var ok=true;
    function check(id,cond){var fld=$(id);fld.classList.toggle("bad",!cond);if(!cond)ok=false}
    check("#fld-name",$("#f-name").value.trim().length>1);
    check("#fld-email",/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($("#f-email").value.trim()));
    check("#fld-msg",$("#f-msg").value.trim().length>5);
    if(!ok){toast("A FEW FIELDS NEED ATTENTION");return}
    var btn=$("#f-submit");btn.disabled=true;btn.textContent="SENDING…";
    setTimeout(function(){f.style.display="none";$("#form-ok").style.display="block";btn.disabled=false;btn.innerHTML='SEND THE LETTER <span class="arr">→</span>';toast("LETTER RECEIVED — THANK YOU")},900)});
  $("#form-again").addEventListener("click",function(){$("#form-ok").style.display="none";f.style.display="block";$("#f-name").value="";$("#f-email").value="";$("#f-msg").value=""})
}

/* ================================================================
   ROUTER + VIEWS
================================================================ */
var app=$("#app"),homeView=$("#homeView");
var pageCleanup=[];
function cleanPage(){pageCleanup.forEach(function(fn){try{fn()}catch(e){}});pageCleanup=[];
  if(window.ScrollTrigger)ScrollTrigger.getAll().forEach(function(st){st.kill()});
  if(window.__disposeWorldGL)window.__disposeWorldGL()}

/* reveal init for any rendered page — never leave content invisible */
function revealNow(el){
  if(!el)return;
  el.style.opacity="1";
  el.style.transform="none";
  el.style.clipPath="none";
  el.classList.add("is-revealed");
  var inn=el.querySelectorAll(".mask-in");
  for(var i=0;i<inn.length;i++){inn[i].style.transform="none"}
  var img=el.querySelector&&el.querySelector("img");
  if(img){img.style.transform=""}
}
function initReveals(scope){
  scope=scope||document;
  var nodes=$$("[data-reveal]",scope);
  var clips=$$("[data-clip]",scope);
  var pars=$$("[data-par]",scope);
  var masks=$$(".mask .mask-in",scope);

  if(!MOTION||!window.gsap){
    nodes.forEach(revealNow);
    clips.forEach(function(f){f.style.clipPath="none";var im=f.querySelector("img");if(im)im.style.transform="none"});
    masks.forEach(function(m){m.style.transform="none"});
    return;
  }

  /* elements already in (or near) the viewport: show immediately */
  var vh=window.innerHeight||800;
  nodes.forEach(function(el){
    el.classList.add("is-revealed");
    el.style.opacity="1";
    el.style.transform="none";
    var r=el.getBoundingClientRect();
    var inView=r.top<vh*0.98&&r.bottom> -40;
    if(inView){
      gsap.fromTo(el,{opacity:.35,y:18},{opacity:1,y:0,duration:.65,ease:"power3.out",clearProps:"transform"});
    }else{
      gsap.fromTo(el,{opacity:.25,y:28},{opacity:1,y:0,duration:.85,ease:"power3.out",clearProps:"transform",
        scrollTrigger:{trigger:el,start:"top 92%",once:true}});
    }
  });

  clips.forEach(function(f){
    f.style.clipPath="none";
    var im=f.querySelector("img");
    if(im){im.style.transform="scale(1.06)"}
    /* subtle zoom only — never clip content away */
    if(im){
      gsap.fromTo(im,{scale:1.12},{scale:1.06,duration:1.2,ease:"power3.out",
        scrollTrigger:{trigger:f,start:"top 90%",once:true}});
    }
  });

  pars.forEach(function(el){
    gsap.fromTo(el,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:true}});
  });

  /* kinetic underline words */
  $$(".k-word",scope).forEach(function(w){
    gsap.to(w,{scrollTrigger:{trigger:w,start:"top 85%",once:true,onEnter:function(){w.classList.add("lit")}}});
    var mi=w.querySelector(".mask-in");
    if(mi){
      gsap.fromTo(mi,{y:"115%"},{y:"0%",duration:1,ease:"expo.out",
        scrollTrigger:{trigger:w,start:"top 88%",once:true}});
    }
  });

  if(window.ScrollTrigger){
    requestAnimationFrame(function(){ScrollTrigger.refresh()});
    /* safety net: anything still hidden after 2.5s becomes visible */
    setTimeout(function(){
      $$("[data-reveal]",scope).forEach(function(el){
        if(el.classList.contains("is-revealed"))return;
        var op=window.getComputedStyle(el).opacity;
        if(parseFloat(op)<0.5)revealNow(el);
      });
      $$("[data-clip]",scope).forEach(function(f){if(window.getComputedStyle(f).clipPath&&window.getComputedStyle(f).clipPath.indexOf("14%")>-1){f.style.clipPath="none"}});
      $$(".mask .mask-in",scope).forEach(function(m){
        var t=window.getComputedStyle(m).transform;
        if(t&&t!=="none"){var matrix=t.match(/matrix.*\((.+)\)/);/* leave alone if animating */}
      });
      if(window.ScrollTrigger)ScrollTrigger.refresh();
    },2500);
  }
}

/* global click delegation (works for routed content too) */
document.addEventListener("click",function(e){
  /* navigation */
  var nav=e.target.closest("[data-nav]");
  if(nav){e.preventDefault();var h=nav.getAttribute("href");if(h&&h!=="#")navigate(h);closeAll();return}
  /* save */
  var sv=e.target.closest("[data-save]");
  if(sv){var k=sv.getAttribute("data-save"),on=toggleSave(k);sv.classList.toggle("saved",on);sv.setAttribute("aria-pressed",on);
    toast(on?"SAVED TO YOUR SHELF":"REMOVED FROM YOUR SHELF");return}
  /* world card on home */
  var wp=e.target.closest(".w-panel");
  if(wp){navigate("#/worlds/"+wp.getAttribute("data-world"));return}
});
document.addEventListener("keydown",function(e){
  if((e.key==="Enter"||e.key===" ")&&e.target.classList&&e.target.classList.contains("w-panel")){e.preventDefault();navigate("#/worlds/"+e.target.getAttribute("data-world"))}
});
function closeAll(){$$(".overlay.open").forEach(function(o){closeOv(o)});clearInterval(reelTimer)}

/* curtain transition */
var curtain=$("#curtain");
function wipe(mid){
  if(!MOTION||!gsap){mid();return}
  var panels=$$("#curtain i");
  gsap.timeline()
   .set(panels,{transformOrigin:"top"})
   .fromTo(panels,{scaleY:0},{scaleY:1,duration:.38,stagger:.045,ease:"power3.in"})
   .add(mid)
   .set(panels,{transformOrigin:"bottom"})
   .to(panels,{scaleY:0,duration:.5,stagger:.045,ease:"power3.out",delay:.05});
}

var routes=[];
function route(re,view){routes.push({re:re,view:view})}
function parseHash(){var h=location.hash||"#/";return h.replace(/^#/,"")||"/"}

function render(){
  var path=parseHash(),m=null,view=null;
  for(var i=0;i<routes.length;i++){var mm=path.match(routes[i].re);if(mm){view=routes[i].view;m=mm;break}}
  if(!view){view=v404;m=[path]}
  wipe(function(){
    cleanPage();
    if(window.gsap)gsap.set(curtain.querySelectorAll("i"),{clearProps:"all"});
    if(view===vHome){app.style.display="none";homeView.style.display="block";document.body.setAttribute("data-route","home");window.scrollTo(0,0);initHome();}
    else{homeView.style.display="none";app.style.display="block";document.body.setAttribute("data-route","page");var r=view(m);app.innerHTML=r.html;window.scrollTo(0,0);if(r.init)r.init();initReveals(app);}
    markNav(path);hudTick();
  });
}
function markNav(path){$$(".nav-link").forEach(function(a){var h=a.getAttribute("href").replace(/^#/,"");a.classList.toggle("active",path.indexOf(h)===0&&(h!=="/"||path==="/"))})}
function navigate(h){if(parseHash()===h.replace(/^#/,"")){render();return}location.hash=h}
window.addEventListener("hashchange",render);

function setTitle(t){document.title=t+" — Emberline"}

/* ---------------- HOME ---------------- */
route(/^\/$/,vHome);
function vHome(){return{html:""}}
var homeWired=false;
function initHome(){
  if(!homeWired){homeWired=true;
    /* inject jobs + stories on home */
    $("#home-jobs").innerHTML=JOBS.slice(0,4).map(function(j){return '<div class="job" data-reveal><span class="j-title">'+j.title+'</span><span class="j-meta mono">'+j.dept+' · '+j.loc+'</span><a class="btn" style="padding:10px 18px" href="#/careers/'+j.id+'" data-nav>VIEW ROLE</a></div>'}).join("");
    $("#home-stories").innerHTML='<article class="story-feat" style="display:grid;grid-template-columns:1.15fr .85fr;gap:4vw;align-items:center;padding:6vh 0;border-top:1px solid var(--line-l)"><div class="frame" data-clip data-reveal style="aspect-ratio:16/9.6"><img src="'+STORIES[0].img+'" alt="" loading="lazy"></div><div><p class="mono" style="color:var(--ember-deep);margin-bottom:14px" data-reveal>'+STORIES[0].kicker+'</p><h3 class="char-name" style="margin:0 0 14px" data-reveal>'+STORIES[0].title+'</h3><p style="color:#4a443a" data-reveal>How our audio team spent eleven months recording cloth, grass and breath to give the Loomlands a wind that feels remembered.</p><p class="mono" style="color:var(--smoke);margin-top:14px" data-reveal>'+STORIES[0].minutes+' min read · '+fmtDate(STORIES[0].date)+'</p><a class="btn" style="margin-top:22px" href="#/stories/'+STORIES[0].id+'" data-nav data-reveal>READ THE STORY <span class="arr">→</span></a></div></article>';
  }
  wireContactForm();
  /* Always run reveals so home content never stays invisible */
  initReveals(homeView||document);
  if(!MOTION){
    $$(".mask .mask-in",homeView||document).forEach(function(m){m.style.transform="none"});
    return;
  }
  /* hero scroll choreography */
  var heroChars=$$(".hero-title .ch");
  var dx=heroChars.map(function(){return (Math.random()-.5)*260});
  var dy=heroChars.map(function(){return (Math.random()-.5)*180});
  var dr=heroChars.map(function(){return (Math.random()-.5)*26});
  gsap.set(".hero-media",{clipPath:"inset(16% 24% 16% 24%)"});
  gsap.set(".hero-media img",{scale:1.22});
  gsap.set("#gl-hero",{scale:.82,opacity:0});
  var htl=gsap.timeline({scrollTrigger:{trigger:"#spark",start:"top top",end:"bottom bottom",scrub:true}});
  htl.to(".hero-kicker",{opacity:0,duration:.15},0)
     .to(".hero-foot",{opacity:0,duration:.15},0)
     .to(".hero-media",{clipPath:"inset(0% 0% 0% 0%)",duration:.5,ease:"power2.inOut"},0.05)
     .to(".hero-media img",{scale:1.02,duration:.9},0.05)
     .to("#gl-hero",{opacity:1,scale:1,duration:.35,ease:"power2.out"},0.28)
     .to(heroChars,{x:function(i){return dx[i]},y:function(i){return dy[i]},rotate:function(i){return dr[i]},opacity:.14,duration:.55,stagger:.004,ease:"power1.inOut"},0.12)
     .to(".hero-title",{yPercent:-6,duration:.8},0.1)
     .to("#gl-hero",{xPercent:70,opacity:0,duration:.3,ease:"power2.in"},0.72);
  /* worlds horizontal */
  var mm=gsap.matchMedia();
  mm.add("(min-width:768px)",function(){
    var track=$("#w-track");if(!track)return;
    var amount=function(){return Math.max(0,track.scrollWidth-window.innerWidth)};
    gsap.to(track,{x:function(){return -amount()},ease:"none",scrollTrigger:{
      trigger:"#worlds-home",start:"top top",end:function(){return "+="+(amount()+200)},scrub:1,pin:true,invalidateOnRefresh:true,
      onUpdate:function(st){var f=$("#w-fill");if(f)f.style.transform="scaleX("+st.progress+")";var c=$("#gl-compass");if(c)c.style.opacity=Math.max(0,1-st.progress*5)}}});
  });
  pageCleanup.push(function(){mm.revert()});
  gsap.to("#tl-fill",{scaleY:1,ease:"none",scrollTrigger:{trigger:".tl",start:"top 80%",end:"bottom 60%",scrub:true}});
  if(window.ScrollTrigger)requestAnimationFrame(function(){ScrollTrigger.refresh()});
}

/* ---------------- DISCOVER ---------------- */
route(/^\/discover\/?$/,vDiscover);
function vDiscover(){
  setTitle("Discover");
  var feat=byId(GAMES,"sunderlight");
  var picks=[
   {href:"#/worlds/verdigris",img:IMG.verdigris,k1:"Editor's pick",k2:"World",title:"The Verdigris Deep",sub:"A city that chose to sink rather than surrender."},
   {href:"#/stories/fox",img:IMG.vesper,k1:"Editor's pick",k2:"Fiction",title:"Fox, Forged",sub:"The mask's crack is a date. They will tell you, once."},
   {href:"#/journal/j3",img:IMG.ashen,k1:"Editor's pick",k2:"Technical",title:"Painting Light",sub:"Why our renderer treats photons like pigment."},
   {href:"#/characters/ingrid",img:IMG.pale,k1:"Editor's pick",k2:"Character",title:"Ingrid Sol",sub:"Listening is just hope with the volume turned down."}];
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Discover"}])+
  `<div class="p-hero"><p class="p-kicker mono" data-reveal>A curated door into everything</p><h1 class="p-title" data-reveal>Don't know<br>what you want?</h1><p class="p-lede" data-reveal>Good. That is the best way to arrive. This page wanders the studio for you — one flagship, four picks by hand, the freshest journal entries, and a door you can reroll until something bites.</p></div>`+
  '<div class="j-grid" data-reveal><div class="j-main frame" style="aspect-ratio:auto"><img src="'+feat.img+'" alt=""><p class="mono" style="color:var(--ember)">START HERE · '+feat.status+'</p><h2 style="font-family:var(--disp);font-weight:330;font-size:clamp(2.2rem,5vw,4.4rem);text-transform:uppercase;margin:10px 0">'+feat.title+'</h2><p style="max-width:46ch;color:rgba(244,239,229,.85)">'+feat.tagline+'</p><p style="margin-top:22px"><a class="btn solid" href="#/games/sunderlight" data-nav>ENTER THE GAME <span class="arr">→</span></a></p></div>'+
  '<div class="j-side"><div id="roll-card"></div><div class="roll-row"><button class="btn" id="roll-btn">↻ REROLL THE DOOR</button><span class="mono" style="color:var(--smoke)">RANDOM, BUT CURATED</span></div></div></div>'+
  `<div class="sec-head" data-reveal><span class="mono">★</span><h2>Editor's picks</h2><span class="side mono" style="color:var(--smoke)">CHOSEN BY HAND, MONTHLY</span></div>`+
  relCards(picks)+
  '<div class="sec-head" data-reveal><span class="mono">✎</span><h2>Fresh from the journal</h2><span class="side"><a class="btn" href="#/journal" data-nav>ALL ENTRIES</a></span></div>'+
  '<div class="cards c2">'+JOURNAL.slice().sort(function(a,b){return a.date<b.date?1:-1}).slice(0,2).map(function(j){return '<a class="card" href="#/journal/'+j.id+'" data-nav><span class="frame" style="aspect-ratio:16/8"><img src="'+j.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+j.cat+'</span><span>'+fmtDate(j.date)+'</span></span><h3>'+j.title+'</h3><p>'+j.excerpt+'</p></a>'}).join("")+'</div>'+
  '<div class="sec-head" data-reveal><span class="mono">◇</span><h2>Paths worth walking</h2></div>'+
  '<div class="cards">'+
   '<a class="card" href="#/games/sunderlight" data-nav><span class="frame" style="aspect-ratio:16/8"><img src="'+IMG.poster+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>Path 01</span></span><h3>Game → World → Character → Story</h3><p>Follow the flame from Sunderlight to the people who carry it.</p></a>'+
   '<a class="card" href="#/stories" data-nav><span class="frame" style="aspect-ratio:16/8"><img src="'+IMG.bridge+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>Path 02</span></span><h3>Stories → Journal → Game</h3><p>Read first, then see how the sausage of worlds is painted.</p></a>'+
   '<a class="card" href="#/archive" data-nav><span class="frame" style="aspect-ratio:16/8"><img src="'+IMG.idea+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>Path 03</span></span><h3>Archive → Sparks → Studio</h3><p>From a 48-hour coal to forty-one makers, one stove.</p></a>'+
  '</div></div></div>';
  return{html:html,init:function(){
    function roll(){var pool=ARCHIVE.filter(function(a){return ["World","Story","Character","Journal"].indexOf(a.type)>-1});
      var it=pool[Math.floor(Math.random()*pool.length)];var rc=$("#roll-card");
      rc.innerHTML='<a class="card" href="'+it.href+'" data-nav><span class="frame" style="aspect-ratio:16/8"><img src="'+it.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>THE DOOR OPENS ON</span><span>'+it.type+'</span></span><h3>'+it.title+'</h3><p>'+it.sub+'</p></a>';
      if(MOTION)gsap.fromTo(rc,{opacity:0,y:20,rotate:-1},{opacity:1,y:0,rotate:0,duration:.7,ease:"expo.out"});
      rc.querySelector("[data-nav]").addEventListener("click",function(e){e.preventDefault();navigate(it.href)})}
    roll();$("#roll-btn").addEventListener("click",roll);
  }};
}

/* ---------------- WORLDS ---------------- */
route(/^\/worlds\/?$/,function(){
  setTitle("Worlds");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Worlds"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Worlds Explorer · '+WORLDS.length+' skies</p><h1 class="p-title" data-reveal>The Worlds</h1><p class="p-lede" data-reveal>Four skies, one horizon. Each world keeps its own climate, history, laws and wound. Pick a door — they are all unlocked.</p></div>'+
  '<div class="cards c2">'+WORLDS.map(function(w,i){return '<a class="card" href="#/worlds/'+w.id+'" data-nav data-reveal><span class="frame" style="aspect-ratio:16/10"><img src="'+w.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+w.idx+' · '+w.tag+'</span><span>'+w.climate+'</span></span><h3>'+w.name+'</h3><p>'+w.blurb+'</p><span class="c-foot mono">'+w.locations.length+' LOCATIONS · '+w.characters.length+' CHARACTERS</span></a>'}).join("")+'</div>'+
  '<div class="sec-head" data-reveal><span class="mono">＋</span><h2>A fifth world is sketching</h2></div>'+
  '<p class="lede" data-reveal style="color:var(--smoke)">The sketch wall has a new corner. We will say more when the sentence survives the week. <a href="#/news/n4" data-nav style="color:var(--ember-deep)">Read the teaser →</a></p></div></div>';
  return{html:html};
});
route(/^\/worlds\/([^/]+)\/?$/,function(m){
  var w=byId(WORLDS,m[1]);if(!w)return v404();
  setTitle(w.name);
  var chars=w.characters.map(function(id){return byId(CHARACTERS,id)}).filter(Boolean);
  var arts=ART.filter(function(a){return a.world===w.id});
  var rel=[];
  w.stories.forEach(function(id){var s=byId(STORIES,id);if(s)rel.push({href:"#/stories/"+s.id,img:s.img,k1:"Story",k2:s.kicker,title:s.title,sub:s.minutes+" min"})});
  w.games.forEach(function(id){var g=byId(GAMES,id);if(g)rel.push({href:"#/games/"+g.id,img:g.img,k1:"Game",k2:g.genre,title:g.title,sub:g.status})});
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"Worlds",href:"#/worlds"},{t:w.name}])+
  '<div class="wrap"><div class="detail-hero flip"><div><p class="p-kicker mono" data-reveal>'+w.idx+' · '+w.tag+'</p><h1 class="p-title sm" data-reveal>'+w.name+'</h1><p class="p-lede" data-reveal>'+w.blurb+'</p><div class="p-meta mono" data-reveal><span>CLIMATE — '+w.climate+'</span><span>FIRST APPEARS — '+w.first+'</span></div><div class="pal" data-reveal>'+w.palette.map(function(c){return '<i style="background:'+c+'" title="'+c+'"></i>'}).join("")+'</div><p style="margin-top:26px;display:flex;gap:12px;flex-wrap:wrap" data-reveal>'+saveBtn("world:"+w.id,"SAVE THIS WORLD")+'<a class="btn" href="#/collections/skies" data-nav>IN “THE FOUR SKIES”</a></p></div>'+
  '<div class="frame" data-clip data-reveal style="aspect-ratio:4/3.4"><img src="'+w.img+'" alt="" data-par></div></div>'+
  '<canvas id="gl-world" style="width:min(22vmin,240px);height:min(22vmin,240px);margin:-4vh auto 0;display:block" aria-hidden="true"></canvas>'+
  '<div class="sec-head"><span class="mono">I</span><h2>History</h2></div><div class="prose" data-reveal>'+w.history.map(function(p){return "<p>"+p+"</p>"}).join("")+'</div>'+
  '<p class="mono" style="color:var(--ember);margin-top:3vh" data-reveal>FIELD NOTE — '+w.note+'</p>'+
  '<div class="sec-head"><span class="mono">II</span><h2>Locations</h2></div><div class="cards">'+w.locations.map(function(l){return '<div class="card" data-reveal><span class="c-kick mono"><span>'+l.t+'</span></span><h3>'+l.n+'</h3><p>'+l.d+'</p></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">III</span><h2>Factions</h2></div><div class="rows">'+w.factions.map(function(f){return '<div class="row-item" style="grid-template-columns:1fr 2fr" data-reveal><span class="r-title">'+f.n+'</span><span class="r-sub">'+f.d+'</span></div>'}).join("")+'</div>'+
  (chars.length?'<div class="sec-head"><span class="mono">IV</span><h2>People of this world</h2></div><div class="cards">'+chars.map(function(c){return '<a class="card" href="#/characters/'+c.id+'" data-nav><span class="frame" style="aspect-ratio:3/3.4"><img src="'+c.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>Character</span></span><h3>'+c.name+'</h3><p>'+c.role+'</p></a>'}).join("")+'</div>':"")+
  (arts.length?'<div class="sec-head"><span class="mono">V</span><h2>Art from '+w.name+'</h2><span class="side"><a class="btn" href="#/art" data-nav>FULL GALLERY</a></span></div><div class="cards">'+arts.map(function(a){return '<button class="card g-open" data-art="'+a.id+'" data-cursor="VIEW"><span class="frame" style="aspect-ratio:16/10"><img src="'+a.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+a.type+'</span><span>'+a.year+'</span></span><h3>'+a.title+'</h3></button>'}).join("")+'</div>':"")+
  '<div class="rel-strip wrap"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>Keep wandering</h2></div>'+relCards(rel.slice(0,3))+'</div>'+
  '</div></div>';
  return{html:html,init:function(){
    if(window.__initWorldGL)window.__initWorldGL(w);
    $$(".g-open").forEach(function(b){b.addEventListener("click",function(){
      var items=arts.map(function(a){return{img:a.img,title:a.title,meta:a.medium+" · "+a.year}});
      var idx=arts.indexOf(byId(arts,b.getAttribute("data-art")));openLightbox(items,idx)})});
    document.addEventListener("click",function h(e){if(e.target.closest("#gl-world"))return;});
  }};
});

/* ---------------- GAMES ---------------- */
route(/^\/games\/?$/,function(){
  setTitle("Games");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Games"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Game Library · '+GAMES.length+' works</p><h1 class="p-title" data-reveal>The Games</h1><p class="p-lede" data-reveal>One flagship in production, one free film, one coal from a garage. Everything we have made, and everything it taught us.</p></div>'+
  GAMES.map(function(g){return '<article style="display:grid;grid-template-columns:.85fr 1.15fr;gap:5vw;align-items:center;padding:7vh 0;border-top:1px solid var(--line-l)" data-reveal><div class="frame" data-clip style="aspect-ratio:3/3.2"><img src="'+g.img+'" alt="" loading="lazy"></div><div><p class="mono" style="margin-bottom:16px"><span class="badge '+(g.statusType==="live"?"b-live":"")+'">'+g.status+'</span></p><h2 style="font-family:var(--disp);font-weight:330;font-size:clamp(2.2rem,5vw,4.4rem);text-transform:uppercase;letter-spacing:-.02em">'+g.title+'</h2><p style="color:#4a443a;max-width:54ch;margin:18px 0">'+g.desc+'</p><div class="p-meta mono"><span>'+g.genre+'</span><span>'+g.platforms.join(" · ")+'</span><span>'+g.release+'</span></div><p style="margin-top:24px"><a class="btn solid" href="#/games/'+g.id+'" data-nav>OPEN THE GAME <span class="arr">→</span></a></p></div></article>'}).join("")+
  '</div></div>';
  return{html:html};
});
route(/^\/games\/([^/]+)\/?$/,function(m){
  var g=byId(GAMES,m[1]);if(!g)return v404();
  setTitle(g.title);
  var ws=g.worlds.map(function(id){return byId(WORLDS,id)}).filter(Boolean);
  var cs=g.characters.map(function(id){return byId(CHARACTERS,id)}).filter(Boolean);
  var rel=[];STORIES.forEach(function(s){if(s.world&&g.worlds.indexOf(s.world)>-1)rel.push({href:"#/stories/"+s.id,img:s.img,k1:"Story",k2:s.kicker,title:s.title,sub:s.minutes+" min"})});
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"Games",href:"#/games"},{t:g.title}])+
  '<div class="wrap"><div class="detail-hero"><div><p class="mono" style="margin-bottom:18px"><span class="badge '+(g.statusType==="live"?"b-live":"")+'">'+g.status+'</span> <span class="badge b-game">'+g.genre+'</span></p><h1 class="p-title sm" data-reveal>'+g.title+'</h1><p class="p-lede" data-reveal><em style="font-family:var(--disp);font-style:italic;font-size:1.3em">“'+g.tagline+'”</em><br><br>'+g.desc+'</p><div class="facts" data-reveal><div><span class="mono">Release</span><b>'+g.release+'</b></div><div><span class="mono">Platforms</span><b>'+g.platforms.join(", ")+'</b></div><div><span class="mono">Worlds</span><b>'+g.worlds.length+'</b></div><div><span class="mono">Engine</span><b>'+g.engine+'</b></div></div><p style="display:flex;gap:12px;flex-wrap:wrap" data-reveal>'+saveBtn("game:"+g.id,"SAVE THIS GAME")+'<button class="btn" id="g-reel" data-cursor="PLAY">▶ WATCH REEL</button></p></div>'+
  '<div class="frame" data-clip data-reveal style="aspect-ratio:3/3.4"><img src="'+g.img+'" alt="" data-par></div></div>'+
  '<div class="sec-head"><span class="mono">I</span><h2>The story</h2></div><div class="prose" data-reveal><p>'+g.story+'</p></div>'+
  '<div class="sec-head"><span class="mono">II</span><h2>How it plays</h2></div><div class="cards">'+g.pillars.map(function(p){return '<div class="card" data-reveal><span class="c-kick mono"><span>Pillar</span></span><h3>'+p.n+'</h3><p>'+p.d+'</p></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">III</span><h2>Features</h2></div><div class="rows" data-reveal>'+g.features.map(function(f){return '<div class="row-item" style="grid-template-columns:auto 1fr"><span class="mono" style="color:var(--ember)">✳</span><span class="r-title" style="font-size:1.05rem;font-family:var(--body)">'+f+'</span></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">IV</span><h2>Worlds of '+g.title+'</h2></div><div class="cards">'+ws.map(function(w){return '<a class="card" href="#/worlds/'+w.id+'" data-nav><span class="frame" style="aspect-ratio:16/10"><img src="'+w.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+w.idx+'</span></span><h3>'+w.name+'</h3></a>'}).join("")+'</div>'+
  (cs.length?'<div class="sec-head"><span class="mono">V</span><h2>Characters</h2></div><div class="cards c4">'+cs.map(function(c){return '<a class="card" href="#/characters/'+c.id+'" data-nav><span class="frame" style="aspect-ratio:3/3.6"><img src="'+c.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+c.role+'</span></span><h3>'+c.name+'</h3></a>'}).join("")+'</div>':"")+
  '<div class="sec-head"><span class="mono">VI</span><h2>Technology & music</h2></div><div class="prose" data-reveal><p><strong>Engine —</strong> '+g.tech+'</p><p><strong>Music —</strong> '+g.music+'</p></div>'+
  (g.updates.length?'<div class="sec-head"><span class="mono">VII</span><h2>Development log</h2></div><div class="rows">'+g.updates.map(function(u){return '<div class="row-item" data-reveal><span class="r-date mono">'+fmtDate(u.d)+'</span><span class="r-title">'+u.t+'</span><span class="r-sub">'+u.x+'</span></div>'}).join("")+'</div>':"")+
  '<div class="sec-head"><span class="mono">VIII</span><h2>The team on this game</h2></div><div class="rows" data-reveal>'+g.team.map(function(t){var p=t.split(" — ");return '<div class="row-item" style="grid-template-columns:1fr 1fr"><span class="r-title">'+p[0]+'</span><span class="r-sub mono">'+p[1]+'</span></div>'}).join("")+'</div>'+
  '<div class="rel-strip"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>Stories from these worlds</h2></div>'+relCards(rel.slice(0,3))+'</div>'+
  '<p class="mono" style="color:var(--smoke);margin-top:6vh">'+g.pressNote+' <a href="#/press" data-nav style="color:var(--ember)">Press hub →</a></p></div></div>';
  return{html:html,init:function(){
    $("#g-reel").addEventListener("click",function(){openReel([IMG.poster,IMG.ashen,IMG.bridge,IMG.pale,IMG.finale],g.title.toUpperCase()+" — ANIMATIC REEL · INTERNAL BUILD")})}};
});

/* ---------------- CHARACTERS ---------------- */
route(/^\/characters\/?$/,function(){
  setTitle("Characters");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Characters"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Dossiers · '+CHARACTERS.length+' souls</p><h1 class="p-title" data-reveal>The Characters</h1><p class="p-lede" data-reveal>The people who carry the light — and the ones who listen for it. Every dossier holds relationships, a small timeline, and the stories they appear in.</p></div>'+
  '<div class="cards c4">'+CHARACTERS.map(function(c){var w=byId(WORLDS,c.world);return '<a class="card" href="#/characters/'+c.id+'" data-nav><span class="frame" style="aspect-ratio:3/3.7"><img src="'+c.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+(w?w.name:"")+'</span></span><h3>'+c.name+'</h3><p>'+c.role+'</p></a>'}).join("")+'</div></div></div>';
  return{html:html};
});
route(/^\/characters\/([^/]+)\/?$/,function(m){
  var c=byId(CHARACTERS,m[1]);if(!c)return v404();
  setTitle(c.name);
  var w=byId(WORLDS,c.world);
  var gs=c.games.map(function(id){return byId(GAMES,id)}).filter(Boolean);
  var ss=c.stories.map(function(id){return byId(STORIES,id)}).filter(Boolean);
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"Characters",href:"#/characters"},{t:c.name}])+
  '<div class="wrap"><div class="detail-hero"><div><p class="p-kicker mono" data-reveal>Dossier · '+(w?w.name:"")+'</p><h1 class="p-title sm" style="font-style:italic;text-transform:none" data-reveal>'+c.name+'</h1><p class="mono" style="color:var(--ember-deep);margin:10px 0 26px">'+c.role+'</p><p class="char-quote" style="font-size:clamp(1.4rem,2.4vw,2rem)" data-reveal>'+c.quote+'</p><p style="display:flex;gap:12px;flex-wrap:wrap" data-reveal>'+saveBtn("character:"+c.id,"SAVE DOSSIER")+'</p></div>'+
  '<div class="frame" data-clip data-reveal style="aspect-ratio:3/3.6"><img src="'+c.img+'" alt="" data-par></div></div>'+
  '<div class="prose" data-reveal><p>'+c.bio+'</p></div>'+
  '<div class="sec-head"><span class="mono">I</span><h2>Relationships</h2></div><div class="rows">'+c.relationships.map(function(r){return '<div class="row-item" style="grid-template-columns:1fr 2fr" data-reveal><span class="r-title">'+r.n+'</span><span class="r-sub">'+r.t+'</span></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">II</span><h2>Their timeline</h2></div><div class="rows">'+c.timeline.map(function(t){return '<div class="row-item" data-reveal><span class="r-date mono">'+t.d+'</span><span class="r-title" style="font-size:1.05rem;font-family:var(--body)">'+t.x+'</span></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">III</span><h2>Appears in</h2></div><div class="cards">'+gs.map(function(g){return '<a class="card" href="#/games/'+g.id+'" data-nav><span class="frame" style="aspect-ratio:16/10"><img src="'+g.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>Game</span></span><h3>'+g.title+'</h3></a>'}).join("")+(w?'<a class="card" href="#/worlds/'+w.id+'" data-nav><span class="frame" style="aspect-ratio:16/10"><img src="'+w.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>World</span></span><h3>'+w.name+'</h3></a>':"")+'</div>'+
  (ss.length?'<div class="rel-strip"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>Stories featuring '+c.name+'</h2></div>'+relCards(ss.map(function(s){return{href:"#/stories/"+s.id,img:s.img,k1:"Story",k2:s.kicker,title:s.title,sub:s.minutes+" min"}}))+'</div>':"")+
  '</div></div>';
  return{html:html};
});

/* ---------------- ART ---------------- */
route(/^\/art\/?$/,function(){
  setTitle("Art Gallery");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Art"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Gallery · '+ART.length+' pieces</p><h1 class="p-title" data-reveal>The Art</h1><p class="p-lede" data-reveal>Pigment before pixels. Color scripts, keyframes, portraits and early maps — a working room, not a portfolio. Filter by world, or click any piece to look closer.</p></div>'+
  '<div class="filters" id="art-f"><button class="chip active" data-w="">ALL WORLDS</button>'+WORLDS.map(function(w){return '<button class="chip" data-w="'+w.id+'">'+w.name+'</button>'}).join("")+'</div>'+
  '<div class="cards c2" id="art-grid"></div><div id="art-empty" style="display:none">'+emptyState("No pieces from this world yet.","The sketch wall is patient. Try another world, or wander the full collection.","BACK TO ALL","#/art")+'</div></div></div>';
  return{html:html,init:function(){
    var grid=$("#art-grid");
    function paint(wid){var list=ART.filter(function(a){return !wid||a.world===wid});
      grid.innerHTML=list.map(function(a){return '<button class="card g-open" data-art="'+a.id+'" data-cursor="VIEW"><span class="frame" style="aspect-ratio:16/11"><img src="'+a.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+a.type+'</span><span>'+a.year+'</span></span><h3>'+a.title+'</h3><p>'+a.medium+'</p></button>'}).join("");
      $("#art-empty").style.display=list.length?"none":"block";
      if(MOTION)gsap.fromTo("#art-grid .card",{opacity:0,y:26},{opacity:1,y:0,duration:.7,stagger:.07,ease:"expo.out"});
      $$(".g-open",grid).forEach(function(b){b.addEventListener("click",function(){
        var idx=list.indexOf(byId(ART,b.getAttribute("data-art")));
        openLightbox(list.map(function(a){return{img:a.img,title:a.title,meta:a.medium+" · "+a.year+(a.world?" · "+worldName(a.world):"")}}),idx)})});
      initReveals(grid)}
    $("#art-f").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;
      $$(".chip",$("#art-f")).forEach(function(c){c.classList.toggle("active",c===b)});paint(b.getAttribute("data-w"))});
    paint("");
  }};
});

/* ---------------- STORIES ---------------- */
route(/^\/stories\/?$/,function(){
  setTitle("Stories");
  var list=STORIES.slice().sort(function(a,b){return a.date<b.date?1:-1});
  var feat=list[0];
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Stories"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>The Magazine · '+STORIES.length+' issues</p><h1 class="p-title" data-reveal>The Stories</h1><p class="p-lede" data-reveal>Fiction, craft and lore from the Emberline magazine. A new issue lands when it is honest, not when it is scheduled.</p></div>'+
  '<article style="display:grid;grid-template-columns:1.15fr .85fr;gap:4vw;align-items:center;padding:6vh 0;border-top:1px solid var(--line-l)" data-reveal><div class="frame" data-clip style="aspect-ratio:16/9.6"><img src="'+feat.img+'" alt="" loading="lazy"></div><div><p class="mono" style="color:var(--ember-deep);margin-bottom:14px">LATEST · '+feat.kicker+'</p><h2 class="char-name" style="margin:0 0 14px">'+feat.title+'</h2><p style="color:#4a443a">'+feat.body[0].replace(/<[^>]+>/g,"")+'</p><p class="mono" style="color:var(--smoke);margin-top:14px">'+feat.minutes+' MIN · '+fmtDate(feat.date)+' · '+feat.author.toUpperCase()+'</p><a class="btn solid" style="margin-top:22px" href="#/stories/'+feat.id+'" data-nav>READ <span class="arr">→</span></a></div></article>'+
  '<div class="rows" style="margin-top:4vh">'+list.slice(1).map(function(s){return '<a class="row-item" href="#/stories/'+s.id+'" data-nav data-reveal><span class="r-date mono">'+fmtDate(s.date)+'</span><span class="r-title">'+s.title+'</span><span class="r-sub mono">'+s.kicker+' · '+s.minutes+' MIN</span><span class="r-go mono">READ →</span></a>'}).join("")+'</div>'+
  '<div class="pq-band"><p class="pq" data-reveal>A game is a letter you write to a stranger, <b>hoping they will feel less alone</b> on the other side of the glass.</p><p class="pq-cite mono" data-reveal>— Ines Marek, Creative Director</p></div></div></div>';
  return{html:html};
});
route(/^\/stories\/([^/]+)\/?$/,function(m){
  var s=byId(STORIES,m[1]);if(!s)return v404();
  setTitle(s.title);
  var w=s.world?byId(WORLDS,s.world):null;
  var cs=s.characters.map(function(id){return byId(CHARACTERS,id)}).filter(Boolean);
  var rel=STORIES.filter(function(x){return x.id!==s.id&&x.world===s.world}).slice(0,3);
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"Stories",href:"#/stories"},{t:s.title}])+
  '<div class="wrap" style="max-width:1000px"><p class="mono" style="color:var(--ember-deep)" data-reveal>'+s.kicker+' · '+fmtDate(s.date)+' · BY '+s.author.toUpperCase()+'</p><h1 class="p-title sm" style="text-transform:none;margin:2vh 0" data-reveal>'+s.title+'</h1>'+
  '<div class="frame" data-clip data-reveal style="aspect-ratio:16/8;margin:4vh 0"><img src="'+s.img+'" alt=""></div>'+
  '<div class="prose" data-reveal>'+s.body.map(function(p){return "<p>"+p+"</p>"}).join("")+'</div>'+
  '<p style="display:flex;gap:12px;flex-wrap:wrap;margin-top:5vh" data-reveal>'+saveBtn("story:"+s.id,"SAVE STORY")+(w?'<a class="btn" href="#/worlds/'+w.id+'" data-nav>THE WORLD: '+w.name.toUpperCase()+'</a>':"")+'</p>'+
  (cs.length?'<div class="sec-head"><span class="mono">→</span><h2>Featuring</h2></div><div class="cards">'+cs.map(function(c){return '<a class="card" href="#/characters/'+c.id+'" data-nav><span class="frame" style="aspect-ratio:3/3.4"><img src="'+c.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>Character</span></span><h3>'+c.name+'</h3></a>'}).join("")+'</div>':"")+
  (rel.length?'<div class="rel-strip"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>More from '+(w?w.name:"the magazine")+'</h2></div>'+relCards(rel.map(function(r){return{href:"#/stories/"+r.id,img:r.img,k1:"Story",k2:r.kicker,title:r.title,sub:r.minutes+" min"}}))+'</div>':"")+
  '</div></div>';
  return{html:html};
});

/* ---------------- ARCHIVE ---------------- */
route(/^\/archive\/?$/,function(){
  setTitle("Archive");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Archive"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Everything, filterable · '+ARCHIVE.length+' items</p><h1 class="p-title" data-reveal>The Archive</h1><p class="p-lede" data-reveal>Every world, game, story, character, artwork, journal entry and announcement — one index, built to grow for years. Filter, sort, and change how you look at it.</p></div>'+
  '<div class="filters" id="arc-f"></div>'+
  '<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-bottom:4vh"><select class="sel" id="arc-year" aria-label="Filter by year"></select><select class="sel" id="arc-world" aria-label="Filter by world"></select><select class="sel" id="arc-sort"><option value="new">SORT: NEWEST</option><option value="old">SORT: OLDEST</option><option value="az">SORT: A–Z</option></select><div class="view-tog" role="group" aria-label="View mode"><button class="active" data-v="grid">GRID</button><button data-v="list">LIST</button><button data-v="time">TIMELINE</button></div><span class="mono" id="arc-count" style="color:var(--smoke)"></span></div>'+
  '<div id="arc-out"></div></div></div>';
  return{html:html,init:function(){
    var st={type:"All",year:"",world:"",sort:"new",view:"grid"};
    var types=["All","World","Game","Character","Story","Art","Journal","News"];
    var years={};ARCHIVE.forEach(function(a){years[a.date.slice(0,4)]=1});
    $("#arc-f").innerHTML=types.map(function(t){return '<button class="chip'+(t==="All"?' active':'')+'" data-t="'+t+'">'+t+'</button>'}).join("");
    $("#arc-year").innerHTML='<option value="">ALL YEARS</option>'+Object.keys(years).sort().reverse().map(function(y){return '<option>'+y+'</option>'}).join("");
    $("#arc-world").innerHTML='<option value="">ALL WORLDS</option>'+WORLDS.map(function(w){return '<option value="'+w.id+'">'+w.name+'</option>'}).join("");
    $("#arc-f").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;st.type=b.getAttribute("data-t");$$(".chip",$("#arc-f")).forEach(function(c){c.classList.toggle("active",c===b)});paint()});
    $("#arc-year").addEventListener("change",function(e){st.year=e.target.value;paint()});
    $("#arc-world").addEventListener("change",function(e){st.world=e.target.value;paint()});
    $("#arc-sort").addEventListener("change",function(e){st.sort=e.target.value;paint()});
    $(".view-tog").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;st.view=b.getAttribute("data-v");$$("button",$(".view-tog")).forEach(function(x){x.classList.toggle("active",x===b)});paint()});
    function list(){var l=ARCHIVE.filter(function(a){return (st.type==="All"||a.type===st.type)&&(!st.year||a.date.indexOf(st.year)===0)&&(!st.world||a.world===st.world)});
      if(st.sort==="new")l.sort(function(a,b){return a.date<b.date?1:-1});
      if(st.sort==="old")l.sort(function(a,b){return a.date>b.date?1:-1});
      if(st.sort==="az")l.sort(function(a,b){return a.title<b.title?-1:1});return l}
    function paint(){var l=list();$("#arc-count").textContent=l.length+" ITEMS";var out=$("#arc-out");
      if(!l.length){out.innerHTML=emptyState("The archive is quiet here.","No items match this combination. Loosen a filter, or wander somewhere warmer.","CLEAR TO EVERYTHING","#/archive");return}
      if(st.view==="grid"){out.innerHTML='<div class="cards">'+l.map(function(a){return '<a class="card" href="'+a.href+'" data-nav><span class="frame" style="aspect-ratio:16/10"><img src="'+a.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+a.type+'</span><span>'+fmtDate(a.date)+'</span></span><h3>'+esc(a.title)+'</h3><p>'+esc(a.sub)+'</p></a>'}).join("")+'</div>'}
      else if(st.view==="list"){out.innerHTML='<div class="rows">'+l.map(function(a){return '<a class="row-item" href="'+a.href+'" data-nav><span class="r-date mono">'+fmtDate(a.date)+'</span><span class="r-title">'+esc(a.title)+'</span><span class="r-sub mono">'+a.type+' · '+esc(a.sub)+'</span><span class="r-go mono">OPEN →</span></a>'}).join("")+'</div>'}
      else{var byYear={};l.forEach(function(a){var y=a.date.slice(0,4);(byYear[y]=byYear[y]||[]).push(a)});
        out.innerHTML=Object.keys(byYear).sort().reverse().map(function(y){return '<div class="arc-year" data-reveal>'+y+'</div><div class="rows">'+byYear[y].map(function(a){return '<a class="row-item" href="'+a.href+'" data-nav><span class="r-date mono">'+fmtDate(a.date)+'</span><span class="r-title">'+esc(a.title)+'</span><span class="r-sub mono">'+a.type+'</span><span class="r-go mono">OPEN →</span></a>'}).join("")+'</div>'}).join("")}
      initReveals(out);
      if(MOTION)gsap.fromTo("#arc-out .card, #arc-out .row-item",{opacity:0,y:22},{opacity:1,y:0,duration:.55,stagger:.03,ease:"power3.out"})}
    paint();
  }};
});

/* ---------------- TIMELINE ---------------- */
route(/^\/timeline\/?$/,function(){
  setTitle("Timeline");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Timeline"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>2019 → 2028 · The long flame</p><h1 class="p-title" data-reveal>The Studio<br>Timeline</h1><p class="p-lede" data-reveal>From a coal in a garage to four worlds in production. Scroll the whole fire.</p></div>'+
  TIMELINE.map(function(e){return '<section class="era"><p class="era-k mono" data-reveal>'+e.era+' · '+e.from+'</p><h3 data-reveal>'+e.era.charAt(0)+e.era.slice(1).toLowerCase()+'</h3><div class="tlp">'+e.items.map(function(it){return '<div class="tl-item" data-reveal><span class="tl-year mono" style="color:var(--ember)">'+it.y+'</span><h4>'+it.t+'</h4><p>'+it.x+'</p></div>'}).join("")+'</div></section>'}).join("")+
  '<div class="rel-strip"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>Where the fire goes next</h2></div>'+relCards([{href:"#/games/sunderlight",img:IMG.poster,k1:"2027",k2:"Release",title:"Sunderlight",sub:"One flame, no fail states."},{href:"#/news/n4",img:IMG.finale,k1:"2028",k2:"Teaser",title:"The next world",sub:"First sketches, shared internally."},{href:"#/careers",img:IMG.wall,k1:"Now",k2:"Join",title:"Open roles",sub:"Help carry it."}])+'</div></div></div>';
  return{html:html};
});

/* ---------------- JOURNAL ---------------- */
route(/^\/journal\/?$/,function(){
  setTitle("Journal");
  var cats=["All"].concat(JOURNAL.map(function(j){return j.cat}).filter(function(v,i,a){return a.indexOf(v)===i}));
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Journal"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Development diary · living document</p><h1 class="p-title" data-reveal>The Journal</h1><p class="p-lede" data-reveal>Honest numbers, cut worlds, painted skies. The studio writes down what it learns — including the expensive parts.</p></div>'+
  '<div class="filters" id="j-f">'+cats.map(function(c,i){return '<button class="chip'+(i===0?' active':'')+'" data-c="'+c+'">'+c+'</button>'}).join("")+'</div>'+
  '<div id="j-out"></div></div></div>';
  return{html:html,init:function(){
    function paint(cat){var l=JOURNAL.filter(function(j){return cat==="All"||j.cat===cat}).sort(function(a,b){return a.date<b.date?1:-1});
      var out=$("#j-out");
      out.innerHTML='<div class="cards c2">'+l.map(function(j){return '<a class="card" href="#/journal/'+j.id+'" data-nav><span class="frame" style="aspect-ratio:16/8"><img src="'+j.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+j.cat+'</span><span>'+fmtDate(j.date)+'</span></span><h3>'+j.title+'</h3><p>'+j.excerpt+'</p><span class="c-foot mono">BY '+j.author.toUpperCase()+'</span></a>'}).join("")+'</div>';
      if(MOTION)gsap.fromTo("#j-out .card",{opacity:0,y:24},{opacity:1,y:0,duration:.6,stagger:.06,ease:"expo.out"});
      initReveals(out)}
    $("#j-f").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;$$(".chip",$("#j-f")).forEach(function(c){c.classList.toggle("active",c===b)});paint(b.getAttribute("data-c"))});
    paint("All");
  }};
});
route(/^\/journal\/([^/]+)\/?$/,function(m){
  var j=byId(JOURNAL,m[1]);if(!j)return v404();
  setTitle(j.title);
  var rel=JOURNAL.filter(function(x){return x.id!==j.id}).slice(0,3);
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"Journal",href:"#/journal"},{t:j.title}])+
  '<div class="wrap" style="max-width:1000px"><p class="mono" style="color:var(--ember-deep)" data-reveal>'+j.cat+' · '+fmtDate(j.date)+' · BY '+j.author.toUpperCase()+'</p><h1 class="p-title sm" style="text-transform:none;margin:2vh 0" data-reveal>'+j.title+'</h1>'+
  '<div class="frame" data-clip data-reveal style="aspect-ratio:16/8;margin:4vh 0"><img src="'+j.img+'" alt=""></div>'+
  '<div class="prose" data-reveal>'+j.body.map(function(p){return "<p>"+p+"</p>"}).join("")+'</div>'+
  '<p style="margin-top:5vh;display:flex;gap:12px" data-reveal>'+saveBtn("journal:"+j.id,"SAVE ENTRY")+'</p>'+
  '<div class="rel-strip"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>More from the desk</h2></div>'+relCards(rel.map(function(r){return{href:"#/journal/"+r.id,img:r.img,k1:r.cat,k2:fmtDate(r.date),title:r.title,sub:r.excerpt}}))+'</div></div></div>';
  return{html:html};
});

/* ---------------- MEDIA ---------------- */
var MEDIA=[
 {id:"m1",type:"Trailer",proj:"Sunderlight",title:"Sunderlight — Announcement",img:IMG.poster,frames:[IMG.poster,IMG.ashen,IMG.bridge,IMG.pale,IMG.finale],cap:"SUNDERLIGHT — ANNOUNCEMENT ANIMATIC"},
 {id:"m2",type:"Reel",proj:"Sunderlight",title:"The Wind System",img:IMG.loom,frames:[IMG.loom,IMG.bridge,IMG.poster],cap:"LOOMLANDS WIND — CAPTURE"},
 {id:"m3",type:"Screenshot",proj:"Sunderlight",title:"Hearthfall at Dusk",img:IMG.ashen},
 {id:"m4",type:"Screenshot",proj:"Sunderlight",title:"The Sunk Archive",img:IMG.verdigris},
 {id:"m5",type:"Screenshot",proj:"Kindling",title:"The Quiet Mile",img:IMG.pale},
 {id:"m6",type:"Key art",proj:"Sunderlight",title:"Key Art — The Courier",img:IMG.poster},
 {id:"m7",type:"Key art",proj:"Kindling",title:"Kindling Poster",img:IMG.finale},
 {id:"m8",type:"Reel",proj:"Studio",title:"A Friday Playtest",img:IMG.wall,frames:[IMG.wall,IMG.idea,IMG.bridge],cap:"STUDIO — FRIDAY PLAYTEST"}
];
route(/^\/media\/?$/,function(){
  setTitle("Media Hub");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Media"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Trailers · captures · key art</p><h1 class="p-title" data-reveal>The Media Hub</h1><p class="p-lede" data-reveal>Moving and still images from every project. Reels play in the letterbox; captures open full. Filter by type or project.</p></div>'+
  '<div class="filters" id="m-f"><button class="chip active" data-t="">ALL TYPES</button><button class="chip" data-t="Trailer">TRAILERS</button><button class="chip" data-t="Reel">REELS</button><button class="chip" data-t="Screenshot">SCREENSHOTS</button><button class="chip" data-t="Key art">KEY ART</button><select class="sel" id="m-p"><option value="">ALL PROJECTS</option><option>Sunderlight</option><option>Kindling</option><option>Studio</option></select></div>'+
  '<div class="cards" id="m-grid"></div><div id="m-empty" style="display:none">'+emptyState("Nothing in this corner of the hub.","Try a different type or project — the reels are usually hiding in Trailers.","SHOW EVERYTHING","#/media")+'</div></div></div>';
  return{html:html,init:function(){
    var st={t:"",p:""};
    function paint(){var l=MEDIA.filter(function(x){return (!st.t||x.type===st.t)&&(!st.p||x.proj===st.p)});
      var g=$("#m-grid");$("#m-empty").style.display=l.length?"none":"block";
      g.innerHTML=l.map(function(x){return '<button class="card m-open" data-id="'+x.id+'" data-cursor="'+(x.frames?"PLAY":"VIEW")+'"><span class="frame" style="aspect-ratio:16/9"><img src="'+x.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+x.type+'</span><span>'+x.proj+'</span></span><h3>'+x.title+'</h3>'+(x.frames?'<span class="c-foot mono">▶ PLAY IN LETTERBOX</span>':"")+'</button>'}).join("");
      $$(".m-open",g).forEach(function(b){b.addEventListener("click",function(){var it=byId(MEDIA,b.getAttribute("data-id"));
        if(it.frames)openReel(it.frames,it.cap);else openLightbox([{img:it.img,title:it.title,meta:it.type+" · "+it.proj}],0)})});
      if(MOTION)gsap.fromTo("#m-grid .card",{opacity:0,y:24},{opacity:1,y:0,duration:.6,stagger:.05,ease:"expo.out"})}
    $("#m-f").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;st.t=b.getAttribute("data-t");$$(".chip",$("#m-f")).forEach(function(c){c.classList.toggle("active",c===b)});paint()});
    $("#m-p").addEventListener("change",function(e){st.p=e.target.value;paint()});
    paint();
  }};
});

/* ---------------- NEWS ---------------- */
route(/^\/news\/?$/,function(){
  setTitle("News");
  var list=NEWS.slice().sort(function(a,b){return a.date<b.date?1:-1});
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"News"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Announcements, awards, small truths</p><h1 class="p-title" data-reveal>The News</h1><p class="p-lede" data-reveal>We post rarely and mean it every time.</p></div>'+
  '<div class="rows">'+list.map(function(n){return '<a class="row-item" href="#/news/'+n.id+'" data-nav data-reveal><span class="r-date mono">'+fmtDate(n.date)+'</span><span class="r-title">'+n.title+'</span><span class="r-sub mono">'+n.kicker+'</span><span class="r-go mono">READ →</span></a>'}).join("")+'</div></div></div>';
  return{html:html};
});
route(/^\/news\/([^/]+)\/?$/,function(m){
  var n=byId(NEWS,m[1]);if(!n)return v404();
  setTitle(n.title);
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"News",href:"#/news"},{t:n.title}])+
  '<div class="wrap" style="max-width:900px"><p class="mono" style="color:var(--ember-deep)" data-reveal>'+n.kicker+' · '+fmtDate(n.date)+'</p><h1 class="p-title sm" style="text-transform:none;margin:2vh 0" data-reveal>'+n.title+'</h1>'+
  '<div class="frame" data-clip data-reveal style="aspect-ratio:16/8;margin:4vh 0"><img src="'+n.img+'" alt=""></div>'+
  '<div class="prose" data-reveal>'+n.body.map(function(p){return "<p>"+p+"</p>"}).join("")+'</div>'+
  '<div class="rel-strip"><div class="sec-head" style="margin-top:0"><span class="mono">→</span><h2>Elsewhere</h2></div>'+relCards([{href:"#/journal",img:IMG.wall,k1:"Journal",k2:"Living document",title:"The dev diary",sub:"Honest numbers, weekly-ish."},{href:"#/press",img:IMG.poster,k1:"Press",k2:"Assets",title:"Press hub",sub:"Kits, facts, contacts."}])+'</div></div></div>';
  return{html:html};
});

/* ---------------- COLLECTIONS ---------------- */
route(/^\/collections\/?$/,function(){
  setTitle("Collections");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Collections"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Curated groups, chosen by hand</p><h1 class="p-title" data-reveal>Collections</h1><p class="p-lede" data-reveal>Not algorithms. A person sat down, argued with another person, and chose these.</p></div>'+
  '<div class="cards c2">'+COLLECTIONS.map(function(c){return '<a class="card" href="#/collections/'+c.id+'" data-nav><span class="frame" style="aspect-ratio:16/9"><img src="'+c.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>COLLECTION</span><span>'+c.items.length+' PIECES</span></span><h3>'+c.title+'</h3><p>'+c.desc+'</p></a>'}).join("")+'</div></div></div>';
  return{html:html};
});
route(/^\/collections\/([^/]+)\/?$/,function(m){
  var c=byId(COLLECTIONS,m[1]);if(!c)return v404();
  setTitle(c.title);
  function resolve(key){var p=key.split(":"),t=p[0],id=p[1];
    if(t==="world"){var w=byId(WORLDS,id);return w?{href:"#/worlds/"+id,img:w.img,k1:"World",k2:w.tag,title:w.name,sub:w.blurb}:null}
    if(t==="game"){var g=byId(GAMES,id);return g?{href:"#/games/"+id,img:g.img,k1:"Game",k2:g.genre,title:g.title,sub:g.tagline}:null}
    if(t==="character"){var ch=byId(CHARACTERS,id);return ch?{href:"#/characters/"+id,img:ch.img,k1:"Character",k2:ch.role,title:ch.name,sub:ch.quote}:null}
    if(t==="story"){var s=byId(STORIES,id);return s?{href:"#/stories/"+id,img:s.img,k1:"Story",k2:s.kicker,title:s.title,sub:s.minutes+" min read"}:null}
    if(t==="journal"){var j=byId(JOURNAL,id);return j?{href:"#/journal/"+id,img:j.img,k1:"Journal",k2:j.cat,title:j.title,sub:j.excerpt}:null}
    if(t==="art"){var a=byId(ART,id);return a?{href:"#/art",img:a.img,k1:"Art",k2:a.medium,title:a.title,sub:"In the gallery"}:null}
    return null}
  var items=c.items.map(resolve).filter(Boolean);
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Collections",href:"#/collections"},{t:c.title}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Collection · '+items.length+' pieces</p><h1 class="p-title sm" data-reveal>'+c.title+'</h1><p class="p-lede" data-reveal>'+c.desc+'</p></div>'+
  relCards(items)+'</div></div>';
  return{html:html};
});

/* ---------------- PRESS ---------------- */
route(/^\/press\/?$/,function(){
  setTitle("Press");
  var factRows=[["Studio","Emberline Studio AS"],["Founded","2021, Oslo"],["People","41 makers · 12 countries"],["Flagship","Sunderlight — 2027"],["Engine","Emberlight (proprietary)"],["Contact","press@emberline.studio"]];
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Press"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>For journalists, streamers and the curious</p><h1 class="p-title" data-reveal>The Press Hub</h1><p class="p-lede" data-reveal>Fact sheet, releases, and downloadable assets. If you need something that is not here, write to us — a human answers within a day.</p></div>'+
  '<div class="sec-head" data-reveal><span class="mono">I</span><h2>Fact sheet</h2></div><div class="facts" data-reveal>'+factRows.map(function(f){return '<div><span class="mono">'+f[0]+'</span><b>'+f[1]+'</b></div>'}).join("")+'</div>'+
  '<p data-reveal><button class="btn solid" id="press-kit">⤓ DOWNLOAD PRESS KIT (.TXT)</button> <button class="copy-btn" id="copy-email" style="margin-left:14px">COPY PRESS EMAIL</button></p>'+
  '<div class="sec-head" data-reveal><span class="mono">II</span><h2>Assets</h2></div><div class="kit-grid">'+
   '<div class="kit-card" data-reveal><h4>Logo</h4><p>The Emberline ring, SVG, current colours.</p><button class="btn" id="logo-dl">⤓ LOGO.SVG</button></div>'+
   '<div class="kit-card" data-reveal><h4>Key art — Sunderlight</h4><p>The courier and the lantern-sword.</p><a class="btn" href="'+IMG.poster+'" target="_blank" rel="noopener">OPEN FULL-RES ↗</a></div>'+
   '<div class="kit-card" data-reveal><h4>Screenshots</h4><p>Four worlds, one horizon.</p><a class="btn" href="#/media" data-nav>BROWSE CAPTURES</a></div>'+
   '<div class="kit-card" data-reveal><h4>Brand colours</h4><p>Ember #E05A28 · Paper #F4EFE5 · Ink #161210.</p><span class="pal" style="margin-top:6px"><i style="background:#E05A28"></i><i style="background:#F4EFE5"></i><i style="background:#161210"></i></span></div>'+
   '<div class="kit-card" data-reveal><h4>Reel</h4><p>90-second animatic, letterboxed.</p><button class="btn" id="press-reel">▶ PLAY REEL</button></div>'+
   '<div class="kit-card" data-reveal><h4>Boilerplate</h4><p>Two honest paragraphs, copy-ready.</p><button class="copy-btn" id="copy-boiler">COPY TEXT</button></div>'+
  '</div>'+
  '<div class="sec-head" data-reveal><span class="mono">III</span><h2>Press releases</h2></div><div class="rows">'+PRESS_REL.map(function(n){return '<a class="row-item" href="#/news/'+n.id+'" data-nav><span class="r-date mono">'+fmtDate(n.date)+'</span><span class="r-title">'+n.title+'</span><span class="r-sub mono">'+n.kicker+'</span><span class="r-go mono">READ →</span></a>'}).join("")+'</div>'+
  '<p class="mono" style="color:var(--smoke);margin-top:6vh">Review build of Sunderlight targeted Q1 2027. Embargo maps available on request.</p></div></div>';
  return{html:html,init:function(){
    var BOILER="Emberline Studio AS is an independent game studio founded in Oslo in 2021. The studio crafts hand-painted worlds and human stories: no combat, no fail states, one flame. Its first film, Kindling (2024), won Best Atmosphere at the Nordic Indie Awards. Its flagship, Sunderlight, releases in 2027 on PC and console. The studio is 41 makers in 12 countries, gathered around one stove.";
    $("#copy-email").addEventListener("click",function(){copyText("press@emberline.studio","PRESS EMAIL COPIED")});
    $("#copy-boiler").addEventListener("click",function(){copyText(BOILER,"BOILERPLATE COPIED")});
    $("#press-reel").addEventListener("click",function(){openReel([IMG.poster,IMG.ashen,IMG.bridge,IMG.pale,IMG.finale],"PRESS REEL — 90 SECONDS")});
    $("#logo-dl").addEventListener("click",function(){
      var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200"><circle cx="100" cy="100" r="52" fill="none" stroke="#E05A28" stroke-width="8"/><circle cx="100" cy="100" r="14" fill="#E05A28"/><text x="190" y="122" font-family="Georgia,serif" font-size="64" fill="#161210" letter-spacing="6">EMBERLINE</text></svg>';
      downloadBlob(new Blob([svg],{type:"image/svg+xml"}),"emberline-logo.svg")});
    $("#press-kit").addEventListener("click",function(){
      var txt="EMBERLINE STUDIO — PRESS KIT\nGenerated "+new Date().toISOString().slice(0,10)+"\n\n"+BOILER+"\n\nFACTS\n"+factRows.map(function(f){return f[0]+": "+f[1]}).join("\n")+"\n\nCONTACT\npress@emberline.studio\n";
      downloadBlob(new Blob([txt],{type:"text/plain"}),"emberline-press-kit.txt")});
  }};
});
function copyText(t,msg){if(navigator.clipboard){navigator.clipboard.writeText(t).then(function(){toast(msg)},function(){toast("COPY FAILED — LONG-PRESS TO SELECT")})}else toast("COPY NOT SUPPORTED HERE")}
function downloadBlob(blob,name){var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500)}

/* ---------------- STUDIO ---------------- */
route(/^\/studio\/?$/,function(){
  setTitle("Studio");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Studio"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Oslo · founded 2021 · 41 makers</p><h1 class="p-title" data-reveal>The Studio</h1><p class="p-lede" data-reveal>Emberline is an independent studio making slow games with long flames. This page holds our philosophy, our history in one breath, and the people at the stove.</p></div>'+
  '<div class="sec-head" data-reveal><span class="mono">I</span><h2>Philosophy</h2></div>'+
  '<div class="cards">'+
   '<div class="card" data-reveal><span class="c-kick mono"><span>01</span></span><h3>Humans first, portfolios second</h3><p>A world can only be as kind as the room it was made in. We hire accordingly.</p></div>'+
   '<div class="card" data-reveal><span class="c-kick mono"><span>02</span></span><h3>Polish is a posture</h3><p>Every milestone ships at release quality. Slower, calmer, truer.</p></div>'+
   '<div class="card" data-reveal><span class="c-kick mono"><span>03</span></span><h3>One accent, one weather, one wound</h3><p>Constraints are kind. They are how a world gets a face.</p></div>'+
   '<div class="card" data-reveal><span class="c-kick mono"><span>04</span></span><h3>No crunch, written down</h3><p>The pledge has been on the wall since 2021. It has never needed erasing.</p></div>'+
  '</div>'+
  '<div class="sec-head" data-reveal><span class="mono">II</span><h2>History, in one breath</h2></div>'+
  '<div class="prose" data-reveal><p>In 2019, three friends built a jam game about borrowed warmth in a garage. In 2021, they founded a studio around its one honest mechanic: <strong>warmth is borrowed, and must be returned</strong>. A first film won an award. A flagship entered production. The stove never moved.</p><p>Today we are forty-one makers in twelve countries, still remote-first, still meeting-free on Wednesdays, still paying in the same currency: time.</p></div>'+
  '<p data-reveal style="margin-top:3vh"><a class="btn" href="#/timeline" data-nav>THE FULL TIMELINE <span class="arr">→</span></a></p>'+
  '<div class="sec-head" data-reveal><span class="mono">III</span><h2>The people</h2></div>'+
  '<div class="rows">'+TEAM.map(function(t,i){return '<div class="row-item" data-reveal><span class="r-date mono">0'+(i+1)+'</span><span class="r-title">'+t.n+'</span><span class="r-sub mono">'+t.r+'</span><span class="r-sub mono">'+t.l+'</span></div>'}).join("")+'<div class="row-item" style="grid-template-columns:auto 1fr"><span class="mono" style="color:var(--ember)">＋</span><span class="r-sub">and 34 more makers across 12 countries</span></div></div>'+
  '<div class="sec-head" data-reveal><span class="mono">IV</span><h2>Practical</h2></div>'+
  '<div class="cards">'+
   '<a class="card" href="#/careers" data-nav data-reveal><span class="c-kick mono"><span>JOIN</span></span><h3>Careers</h3><p>Five open roles. Humans apply, humans read.</p></a>'+
   '<a class="card" href="#/press" data-nav data-reveal><span class="c-kick mono"><span>PRESS</span></span><h3>Press hub</h3><p>Facts, kits, boilerplate.</p></a>'+
   '<a class="card" href="#/contact" data-nav data-reveal><span class="c-kick mono"><span>WRITE</span></span><h3>Contact</h3><p>The inbox by the stove.</p></a>'+
  '</div></div></div>';
  return{html:html};
});

/* ---------------- CAREERS ---------------- */
route(/^\/careers\/?$/,function(){
  setTitle("Careers");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Careers"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>'+JOBS.length+' open roles · humans read every application</p><h1 class="p-title" data-reveal>Work at<br>Emberline</h1><p class="p-lede" data-reveal>Remote-first, meeting-free Wednesdays, no crunch in writing. Apply below, or write to us about a role that does not exist yet.</p></div>'+
  '<div class="filters" id="c-f"><button class="chip active" data-d="">ALL DEPARTMENTS</button>'+["Art","Writing","Engineering","Animation","Audio"].map(function(d){return '<button class="chip" data-d="'+d+'">'+d+'</button>'}).join("")+'</div>'+
  '<div class="rows" id="c-out"></div><div id="c-empty" style="display:none">'+emptyState("No roles in this department right now.","The team is small by choice, so openings open slowly. Leave a letter anyway — we keep them all.","WRITE TO US","#/contact")+'</div>'+
  `<p class="mono" style="color:var(--smoke);margin-top:5vh">Don't see your role? <a href="#/contact" data-nav style="color:var(--ember)">Write to us anyway.</a></p></div></div>`;
  return{html:html,init:function(){
    function paint(d){var l=JOBS.filter(function(j){return !d||j.dept===d});
      $("#c-empty").style.display=l.length?"none":"block";
      $("#c-out").innerHTML=l.map(function(j){return '<a class="row-item" href="#/careers/'+j.id+'" data-nav><span class="r-date mono">'+j.dept+'</span><span class="r-title">'+j.title+'</span><span class="r-sub mono">'+j.loc+' · '+j.type+'</span><span class="r-go mono">VIEW →</span></a>'}).join("");
      if(MOTION)gsap.fromTo("#c-out .row-item",{opacity:0,y:18},{opacity:1,y:0,duration:.5,stagger:.05,ease:"power3.out"})}
    $("#c-f").addEventListener("click",function(e){var b=e.target.closest(".chip");if(!b)return;$$(".chip",$("#c-f")).forEach(function(c){c.classList.toggle("active",c===b)});paint(b.getAttribute("data-d"))});
    paint("");
  }};
});
route(/^\/careers\/([^/]+)\/?$/,function(m){
  var j=byId(JOBS,m[1]);if(!j)return v404();
  setTitle(j.title+" — Careers");
  var DKEY="eb_draft_"+j.id,draft={};try{draft=JSON.parse(localStorage.getItem(DKEY)||"{}")}catch(e){}
  var html='<div class="page">'+crumbs([{t:"Home",href:"#/"},{t:"Careers",href:"#/careers"},{t:j.title}])+
  '<div class="wrap" style="max-width:960px"><p class="mono" style="color:var(--ember-deep)" data-reveal>'+j.dept+' · '+j.loc+' · '+j.type+' · '+j.level+'</p>'+
  '<h1 class="p-title sm" style="text-transform:none;margin:2vh 0" data-reveal>'+j.title+'</h1>'+
  '<div class="prose" data-reveal><p>'+j.about+'</p></div>'+
  '<div class="sec-head"><span class="mono">I</span><h2>What you will do</h2></div><div class="rows" data-reveal>'+j.resp.map(function(r){return '<div class="row-item" style="grid-template-columns:auto 1fr"><span class="mono" style="color:var(--ember)">✳</span><span>'+r+'</span></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">II</span><h2>What we hope you bring</h2></div><div class="rows" data-reveal>'+j.req.map(function(r){return '<div class="row-item" style="grid-template-columns:auto 1fr"><span class="mono" style="color:var(--ember)">✳</span><span>'+r+'</span></div>'}).join("")+'</div>'+
  '<div class="sec-head"><span class="mono">III</span><h2>What you get</h2></div><div class="rows" data-reveal>'+j.perks.map(function(r){return '<div class="row-item" style="grid-template-columns:auto 1fr"><span class="mono" style="color:var(--ember)">✳</span><span>'+r+'</span></div>'}).join("")+'</div>'+
  '<div id="apply" class="sec-head"><span class="mono">IV</span><h2>Apply</h2></div>'+
  '<form id="apply-form" novalidate>'+
  '<div class="field" id="a-name-f"><label for="a-name">Your name</label><input id="a-name" type="text" value="'+esc(draft.n||"")+'" autocomplete="name"><span class="f-err">REQUIRED</span></div>'+
  '<div class="field" id="a-email-f"><label for="a-email">Email</label><input id="a-email" type="email" value="'+esc(draft.e||"")+'" autocomplete="email"><span class="f-err">VALID EMAIL REQUIRED</span></div>'+
  '<div class="field" id="a-port-f"><label for="a-port">Portfolio / website</label><input id="a-port" type="url" placeholder="https://" value="'+esc(draft.p||"")+'"><span class="f-err">A LINK, EVEN A SMALL ONE</span></div>'+
  '<div class="field" id="a-let-f"><label for="a-letter">A few honest words</label><textarea id="a-letter" placeholder="No cover-letter voice. Tell us about a thing you made and what it cost.">'+esc(draft.l||"")+'</textarea><span class="f-err">SAY SOMETHING TRUE</span></div>'+
  '<label class="check"><input type="checkbox" id="a-consent"><span>You may keep this application for up to a year in case a better-fitting role appears.</span></label>'+
  '<button class="btn solid" id="a-submit" type="submit">SEND APPLICATION <span class="arr">→</span></button> <span class="mono" style="color:var(--smoke);margin-left:12px">DRAFT SAVED AS YOU TYPE</span>'+
  '</form>'+
  '<div id="apply-ok" class="form-ok" role="status" style="display:none"><span class="mono">RECEIVED — THANK YOU</span><p>Your application is with the team. A human reads every one; expect an answer within a week, either way.</p><button class="btn" id="apply-again" style="margin-top:22px">VIEW OTHER ROLES</button></div>'+
  '</div></div>';
  return{html:html,init:function(){
    var f=$("#apply-form");
    ["a-name","a-email","a-port","a-letter"].forEach(function(id){$("#"+id).addEventListener("input",function(){
      try{localStorage.setItem(DKEY,JSON.stringify({n:$("#a-name").value,e:$("#a-email").value,p:$("#a-port").value,l:$("#a-letter").value}))}catch(e){}})});
    f.addEventListener("submit",function(e){e.preventDefault();var ok=true;
      function chk(id,cond){$(id).classList.toggle("bad",!cond);if(!cond)ok=false}
      chk("#a-name-f",$("#a-name").value.trim().length>1);
      chk("#a-email-f",/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($("#a-email").value.trim()));
      chk("#a-port-f",/^https?:\/\/.+\..+/.test($("#a-port").value.trim()));
      chk("#a-let-f",$("#a-letter").value.trim().length>20);
      if(!$("#a-consent").checked){toast("PLEASE TICK THE CONSENT BOX");ok=false}
      if(!ok){toast("A FEW FIELDS NEED ATTENTION");return}
      var b=$("#a-submit");b.disabled=true;b.textContent="SENDING…";
      setTimeout(function(){f.style.display="none";$("#apply-ok").style.display="block";try{localStorage.removeItem(DKEY)}catch(e){}toast("APPLICATION RECEIVED — THANK YOU")},1100)});
    $("#apply-again").addEventListener("click",function(){navigate("#/careers")});
  }};
});

/* ---------------- SAVED ---------------- */
route(/^\/saved\/?$/,function(){
  setTitle("Saved");
  function resolve(key){var p=key.split(":"),t=p[0],id=p[1];
    if(t==="world"){var w=byId(WORLDS,id);return w?{key:key,href:"#/worlds/"+id,img:w.img,k1:"World",title:w.name,sub:w.tag}:null}
    if(t==="game"){var g=byId(GAMES,id);return g?{key:key,href:"#/games/"+id,img:g.img,k1:"Game",title:g.title,sub:g.genre}:null}
    if(t==="character"){var c=byId(CHARACTERS,id);return c?{key:key,href:"#/characters/"+id,img:c.img,k1:"Character",title:c.name,sub:c.role}:null}
    if(t==="story"){var s=byId(STORIES,id);return s?{key:key,href:"#/stories/"+id,img:s.img,k1:"Story",title:s.title,sub:s.kicker}:null}
    if(t==="journal"){var j=byId(JOURNAL,id);return j?{key:key,href:"#/journal/"+j.id,img:j.img,k1:"Journal",title:j.title,sub:j.cat}:null}
    return null}
  var items=savedList().map(resolve).filter(Boolean);
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Saved"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Your shelf · stored in this browser only</p><h1 class="p-title" data-reveal>Saved</h1><p class="p-lede" data-reveal>The pieces you marked with a flame. They live in your browser — no account, no tracking, no expiry.</p></div>';
  if(!items.length){html+=emptyState("Your shelf is empty — for now.","Wander the worlds, open a dossier, save a story. The flame button on any page will keep it here for you.","START WITH DISCOVER","#/discover")}
  else{html+='<div class="cards">'+items.map(function(x){return '<a class="card" href="'+x.href+'" data-nav><span class="frame" style="aspect-ratio:16/10"><img src="'+x.img+'" alt="" loading="lazy"></span><span class="c-kick mono"><span>'+x.k1+'</span></span><h3>'+x.title+'</h3><p>'+x.sub+'</p></a>'}).join("")+'</div><p style="margin-top:5vh"><button class="btn" id="clear-saved">CLEAR THE SHELF</button></p>'}
  html+='</div></div>';
  return{html:html,init:function(){var b=$("#clear-saved");if(b)b.addEventListener("click",function(){try{localStorage.removeItem(SKEY)}catch(e){}toast("SHELF CLEARED");navigate("#/saved")})}};
});

/* ---------------- SEARCH PAGE ---------------- */
route(/^\/search\/?$/,function(){
  setTitle("Search");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Search"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>Everything, searchable</p><h1 class="p-title" data-reveal>Search</h1><p class="p-lede" data-reveal>Worlds, games, characters, stories, art, journal entries, roles and pages — one index, filterable and sortable, with keyboard navigation.</p></div>'+
  '<div id="page-search-root" class="search-panel"></div></div></div>';
  return{html:html,init:function(){mountSearch($("#page-search-root"),{focus:true})}};
});

/* ---------------- CONTACT PAGE ---------------- */
route(/^\/contact\/?$/,function(){
  setTitle("Contact");
  var html='<div class="page"><div class="wrap">'+crumbs([{t:"Home",href:"#/"},{t:"Contact"}])+
  '<div class="p-hero"><p class="p-kicker mono" data-reveal>The inbox by the stove</p><h1 class="p-title" data-reveal>Contact</h1><p class="p-lede" data-reveal>General, business, press, partnership or careers — choose a door, write honestly, and a human answers within two days.</p></div>'+
  '<div style="display:grid;grid-template-columns:.9fr 1.1fr;gap:6vw">'+
  '<div><div class="c-lines" style="display:grid;gap:16px" data-reveal>'+
   '<a class="mono" href="mailto:hello@emberline.studio" style="color:var(--ember-deep);border-bottom:1px solid var(--line-l);padding-bottom:6px">HELLO@EMBERLINE.STUDIO — GENERAL</a>'+
   '<a class="mono" href="mailto:press@emberline.studio" style="color:var(--ember-deep);border-bottom:1px solid var(--line-l);padding-bottom:6px">PRESS@EMBERLINE.STUDIO — PRESS</a>'+
   '<a class="mono" href="mailto:jobs@emberline.studio" style="color:var(--ember-deep);border-bottom:1px solid var(--line-l);padding-bottom:6px">JOBS@EMBERLINE.STUDIO — CAREERS</a>'+
   '<span class="mono" style="color:var(--smoke)">GRÜNERLØKKA, OSLO — BY APPOINTMENT</span></div>'+
   '<div class="sec-head"><span class="mono">→</span><h2>Often useful</h2></div>'+
   '<div class="rows" data-reveal><a class="row-item" style="grid-template-columns:1fr auto" href="#/press" data-nav><span class="r-title" style="font-size:1.05rem">Press kit & fact sheet</span><span class="r-go mono">OPEN →</span></a>'+
   '<a class="row-item" style="grid-template-columns:1fr auto" href="#/careers" data-nav><span class="r-title" style="font-size:1.05rem">Open roles</span><span class="r-go mono">OPEN →</span></a>'+
   '<a class="row-item" style="grid-template-columns:1fr auto" href="#/studio" data-nav><span class="r-title" style="font-size:1.05rem">Who we are</span><span class="r-go mono">OPEN →</span></a></div></div>'+
  '<div><form id="contact-form" novalidate>'+
   '<div class="field"><label for="f-topic">I am writing about</label><select id="f-topic"><option>General</option><option>Business</option><option>Press</option><option>Partnership</option><option>Careers</option></select></div>'+
   '<div class="field" id="fld-name"><label for="f-name">Your name</label><input id="f-name" type="text" autocomplete="name"><span class="f-err">REQUIRED</span></div>'+
   '<div class="field" id="fld-email"><label for="f-email">Email</label><input id="f-email" type="email" autocomplete="email"><span class="f-err">VALID EMAIL REQUIRED</span></div>'+
   '<div class="field" id="fld-msg"><label for="f-msg">Message</label><textarea id="f-msg"></textarea><span class="f-err">A FEW WORDS, AT LEAST</span></div>'+
   '<button class="btn solid" id="f-submit" type="submit">SEND THE LETTER <span class="arr">→</span></button></form>'+
   '<div id="form-ok" class="form-ok" role="status" style="display:none"><span class="mono">RECEIVED — THANK YOU</span><p>Your letter is on the desk by the stove. We reply within two days, usually with more questions than answers.</p><button class="btn" id="form-again" style="margin-top:22px">WRITE ANOTHER</button></div></div>'+
  '</div></div></div>';
  return{html:html,init:function(){wireContactForm()}};
});

/* ---------------- 404 ---------------- */
function v404(){
  setTitle("Lost");
  var html='<div class="page"><div class="wrap" style="text-align:center;padding:6vh 0">'+
  '<p class="mono" style="color:var(--ember)" data-reveal>ERROR 404 — A DOOR THAT ISN\u2019T</p>'+
  '<h1 class="p-title" style="margin:3vh 0" data-reveal>This world<br>does not exist.<br><em style="font-style:italic">Yet.</em></h1>'+
  '<p class="lede" style="margin:0 auto 4vh;text-align:center" data-reveal>You have found the only place on the site with nothing in it. Every other door works — here are four that definitely do:</p>'+
  '<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap" data-reveal><a class="btn solid" href="#/" data-nav>GO HOME</a><a class="btn" href="#/discover" data-nav>SURPRISE ME</a><button class="btn" id="lost-search">SEARCH</button><a class="btn" href="#/archive" data-nav>THE ARCHIVE</a></div></div></div>';
  return{html:html,init:function(){$("#lost-search").addEventListener("click",function(){navigate("#/search")})}};
}

/* ---------------- HUD ---------------- */
var chapters=$$("[data-chapter]");
function hudTick(){
  if(document.body.getAttribute("data-route")!=="home")return;
  var mid=window.innerHeight*0.5,cur=chapters[0];
  chapters.forEach(function(c){var r=c.getBoundingClientRect();if(r.top<mid)cur=c});
  if(cur){$("#hud-num").textContent=cur.getAttribute("data-num")+" / 10";$("#hud-title").textContent=cur.getAttribute("data-title")}
  var p=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  $("#hud-fill").style.transform="scaleX("+p+")";
}
var hudRAF=null;
window.addEventListener("scroll",function(){if(hudRAF)return;hudRAF=requestAnimationFrame(function(){hudTick();document.body.classList.toggle("scrolled",window.scrollY>40);hudRAF=null})},{passive:true});

/* ---------------- HERO TITLE SPLIT + LOADER ---------------- */
$$(".hero-title .line").forEach(function(line){var txt=line.textContent;line.textContent="";
  txt.split("").forEach(function(c){var s=document.createElement("span");s.className="ch";s.innerHTML=c===" "?"&nbsp;":c;line.appendChild(s)})});
var loader=$("#loader");
function heroIntro(){if(!MOTION)return;var chars=$$(".hero-title .ch");
  gsap.fromTo(chars,{yPercent:120,rotate:4},{yPercent:0,rotate:0,duration:1.15,stagger:.028,ease:"expo.out",delay:.1});
  gsap.fromTo(".hero-kicker",{opacity:0,y:16},{opacity:1,y:0,duration:.9,delay:.5});
  gsap.fromTo(".hero-foot",{opacity:0,y:20},{opacity:1,y:0,duration:.9,delay:.9})}
function finishLoad(){if(MOTION)gsap.to("#loader",{yPercent:-100,duration:.9,ease:"expo.inOut",delay:.15,onComplete:function(){loader.remove()}});else loader.remove();
  heroIntro();if(window.__GL)window.__GL.boost()}
if(MOTION){
  var count=$("#load-count");
  gsap.to({v:0},{v:100,duration:1.0,ease:"power2.inOut",onUpdate:function(){count.textContent=("00"+Math.round(this.targets()[0].v)).slice(-3)},onComplete:finishLoad});
  gsap.fromTo("#loader .lg-ring",{strokeDashoffset:190},{strokeDashoffset:0,duration:.9,ease:"power2.inOut"});
}else{loader.style.display="none"}

/* home reel button */
$("#btn-reel").addEventListener("click",function(){openReel([IMG.poster,IMG.ashen,IMG.bridge,IMG.pale,IMG.finale],"SUNDERLIGHT — ANIMATIC REEL · INTERNAL BUILD")});

/* ---------------- EMBERS ---------------- */
(function(){if(REDUCED)return;var cv=$("#embers-future");if(!cv)return;var ctx=cv.getContext("2d"),P=[],W=0,H=0,vis=false;
  function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=[];var n=Math.min(46,Math.floor(W/34));
    for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.5,v:Math.random()*.5+.15,d:Math.random()*2-1,a:Math.random()*.5+.15})}
  size();addEventListener("resize",size);
  new IntersectionObserver(function(en){vis=en[0].isIntersecting}).observe(cv);
  (function loop(){requestAnimationFrame(loop);if(!vis||document.hidden)return;ctx.clearRect(0,0,W,H);
    P.forEach(function(p){p.y-=p.v;p.x+=Math.sin(p.y*.02)*.4+p.d*.08;if(p.y<-4){p.y=H+4;p.x=Math.random()*W}
      ctx.globalAlpha=p.a;ctx.fillStyle="#E05A28";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fill()});ctx.globalAlpha=1})()})();

/* ---------------- MAGNETIC ---------------- */
if(FINE&&MOTION){document.addEventListener("mouseover",function(e){var el=e.target.closest(".magnetic");if(!el||el.getAttribute("data-mag"))return;el.setAttribute("data-mag","1");
  el.addEventListener("mousemove",function(ev){var r=el.getBoundingClientRect();gsap.to(el,{x:(ev.clientX-r.left-r.width/2)*.28,y:(ev.clientY-r.top-r.height/2)*.28,duration:.5,ease:"power3.out"})});
  el.addEventListener("mouseleave",function(){gsap.to(el,{x:0,y:0,duration:.7,ease:"elastic.out(1,.4)"})})});
  document.addEventListener("mouseover",function(e){var f=e.target.closest(".char-frame");if(!f||f.getAttribute("data-tilt"))return;f.setAttribute("data-tilt","1");
    f.addEventListener("mousemove",function(ev){var r=f.getBoundingClientRect();var px=(ev.clientX-r.left)/r.width-.5,py=(ev.clientY-r.top)/r.height-.5;
      gsap.to(f,{rotateY:px*7,rotateX:-py*6,duration:.6,ease:"power2.out",transformPerspective:900})});
    f.addEventListener("mouseleave",function(){gsap.to(f,{rotateX:0,rotateY:0,duration:.9,ease:"power3.out"})})})}

/* ---------------- INITIAL RENDER ---------------- */
render();
})();
