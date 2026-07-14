import type { Guide, GuideVideo } from './types';

const publishedAt = '2026-07-14';
const updatedAt = '2026-07-14';

const videos: Record<string, GuideVideo> = {
  officialGameplay: {
    id: 'NGIuNtA35Ec',
    title: 'Machinefall gameplay',
    channel: 'Facteroids',
    url: 'https://www.youtube.com/watch?v=NGIuNtA35Ec',
    thumbnailUrl: '/machinefall/guides/beginner-guide.jpg',
    publishedAt: '2026-06-14',
    checkedAt: updatedAt,
  },
  review: {
    id: 'PEElEF5itPw',
    title: 'Machinefall Review — Quick Look At The Game',
    channel: 'Max Dixon',
    url: 'https://www.youtube.com/watch?v=PEElEF5itPw',
    thumbnailUrl: '/machinefall/guides/review.jpg',
    publishedAt: '2026-07-02',
    checkedAt: updatedAt,
  },
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Machinefall Beginner Guide: Your First Stable Campaign',
    seoTitle: 'Machinefall Beginner Guide - First Base & Campaign Plan',
    seoDescription:
      'Start Machinefall with a stable base, safe expansion, working logistics and a clear army plan before you chase lairs or the final boss.',
    summary:
      'Choose Scenario Mode, make one settlement reliable, liberate nearby cities and prove a short supply line before expanding across the world.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: '/machinefall/guides/beginner-guide.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Built from the full-version Steam announcement, current store description and long gameplay from the Steam-linked Facteroids channel.',
    videoSearchQueries: [
      'Machinefall beginner guide',
      'Machinefall gameplay full release',
    ],
    video: videos.officialGameplay,
    tags: ['Scenario Mode', 'First base', 'Campaign'],
    relatedRoutes: [
      '/guides/depots-logistics',
      '/guides/workers-carts',
      '/guides/base-defense',
      '/guides/lairs-world-map',
    ],
    body: [
      {
        heading: 'Pick Scenario Mode and define the win condition',
        paragraphs: [
          'Start with Scenario Mode unless you are deliberately testing the sandbox. The developer recommends it for a first game because technology arrives as part of the campaign instead of being open from the start. That pacing reduces the number of production chains, vehicles and military options you must understand at once. Free Game is useful later, but every technology being available immediately can hide which link in your economy is actually failing.',
          'Your campaign goal is not to color the whole globe. The released-game description says you break enemy strongholds and then face a powerful boss. Treat cities and territory as infrastructure for that objective, not as a completion checklist. A smaller connected region that feeds one capable army is more valuable than scattered holdings whose workers, ammunition and medical supplies cannot reach the front.',
        ],
      },
      {
        heading: 'Make the first settlement boring before making it big',
        paragraphs: [
          'A good opening settlement does the ordinary jobs consistently: it gathers basic materials, turns them into the items your next buildings need and keeps enough people available for construction and military recruitment. Do not spend every new worker immediately. A settlement with no spare labor becomes slow exactly when a wall, storage building or production fix is urgent.',
          'Build in short loops. Add one production step, confirm materials arrive, then add the consumer. When a building sits idle, inspect its input and the route to that input before placing another copy. Machinefall can display thousands of units, but scale does not repair a broken chain. Duplicating an idle workshop only creates two idle workshops and a larger labor bill.',
        ],
        bullets: [
          'Keep a small labor reserve for construction and transport changes.',
          'Place storage near the production cluster it serves, not simply wherever space is open.',
          'Pause expansion when several buildings are waiting for the same missing input.',
        ],
      },
      {
        heading: 'Liberate nearby cities before crossing the world',
        paragraphs: [
          'Liberated cities are the renewable backbone of expansion because they provide access to workers and soldiers. The full-version announcement also says liberated cities no longer spawn bugs, so clearing a useful nearby city improves both recruitment and local security. That makes early liberation a stronger investment than sending a fragile army toward a distant objective marker.',
          'Use the closest practical city as a second node, not an isolated trophy. Connect it to your first base, decide what it should produce and keep the number of required imports small. One city might collect local materials while the original base handles equipment. Another can become a defensive depot. The exact layout is flexible; the important decision is giving every settlement a clear job and a tested supply connection.',
        ],
      },
      {
        heading: 'Prove logistics with a short route first',
        paragraphs: [
          'Before creating a transcontinental network, make one short depot route work. A depot is more than extra storage: it is a handoff point for material moving over a longer distance, often with carts, trucks, ships or aircraft as your technology advances. If the first route fails, check whether the sending depot has stock, whether transport is available and staffed, and whether the receiving side has somewhere useful for the cargo to go.',
          'Watch the direction of shortage. A front-line base that lacks ammunition may have plenty of raw material at home but no completed ammunition at the departure depot. A cart standing still may need a driver rather than another road. Solve the narrowest missing step. Once one compact route moves the intended cargo reliably, copy the pattern and extend it in segments instead of drawing one heroic line across the planet.',
        ],
      },
      {
        heading: 'Build an army that can stay in the field',
        paragraphs: [
          'Recruiting the largest possible group is not the same as preparing an army. The official description emphasizes melee and ranged balance, formations, terrain and defensive walls. Put durable close-range units where they can stop the swarm from reaching ranged troops, and give the ranged line enough space to fire. A wide uncontrolled blob wastes weapons because units block, arrive at different times and chase targets out of support range.',
          'Plan medical and ammunition support before the march. Vehicles can fight, transport troops or carry supplies, but they also add another dependency: fuel or cargo, a driver, a safe path and a place to unload. Keep a reserve near the base until the first formation is supplied. Losing a distant army because its quivers or medical support never arrived costs more than waiting one extra production cycle.',
        ],
      },
      {
        heading: 'Use a repeatable checkpoint before every objective',
        paragraphs: [
          'Before attacking a lair, stronghold or boss route, stop and perform the same check: the home economy is producing, the departure depot has the finished supplies, the route is moving, the destination has storage, the army has both frontline and ranged bodies, and the base behind it can survive a raid. This checklist keeps campaign progress from outrunning the systems that make progress sustainable.',
          'If something breaks, retreat one decision rather than restarting the entire plan. An empty depot is a production or routing issue. An army that scatters is a control and formation issue. A wall without ammunition is a supply issue. Machinefall becomes manageable when each failure is assigned to the system that caused it. Your first campaign does not need to be fast; it needs to teach you which system to inspect next.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should a beginner choose Scenario Mode or Free Game?',
        answer:
          'Choose Scenario Mode first. It introduces technology through the campaign, while Free Game opens all technology and is better for later experimentation.',
      },
      {
        question: 'Do I need to conquer every city?',
        answer:
          'No. The campaign objective is to defeat enemy strongholds and then the final boss. Liberate cities that improve recruitment, safety or logistics.',
      },
      {
        question: 'What is the safest first expansion?',
        answer:
          'A nearby city connected by a short, testable supply route is safer than a distant objective push.',
      },
    ],
  },
  {
    slug: 'depots-logistics',
    path: '/guides/depots-logistics',
    title: 'Machinefall Depots and Logistics: Build Supply Lines That Work',
    seoTitle: 'Machinefall Depots & Logistics Guide - Routes That Work',
    seoDescription:
      'Understand Machinefall depots, storage, routes and transport vehicles, then diagnose why a remote base or army is not receiving supplies.',
    summary:
      'Treat each depot as a deliberate handoff point: stock the correct finished item, assign transport, test one route segment and inspect the first empty link.',
    category: 'Logistics',
    difficulty: 'Intermediate',
    coverImageUrl: '/machinefall/screenshots/7.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses the released full-version logistics description and developer depots devlog. Exact old Demo limits are intentionally excluded.',
    videoSearchQueries: ['Machinefall depot guide', 'Machinefall logistics'],
    tags: ['Depots', 'Routes', 'Supply'],
    relatedRoutes: [
      '/guides/workers-carts',
      '/guides/cities-refugee-camps',
      '/guides/naval-transport',
      '/guides/boss-preparation',
    ],
    body: [
      {
        heading: 'Understand the three jobs in a supply line',
        paragraphs: [
          'A working line has a source, a handoff and a consumer. The source makes or gathers the item. A depot holds it where long-distance transport can collect it. The consumer is a city, defensive position, army or another production chain that actually spends it. Confusion begins when all three jobs are treated as “storage.” A full warehouse beside a workshop does not guarantee that a departure depot contains the finished ammunition needed overseas.',
          'Give each depot a sentence-long purpose such as “send bandages east” or “receive ammunition for the northern wall.” That sounds simple, but it prevents one depot from becoming a mixed pile whose vehicles move low-value cargo while an army waits. Machinefall supports a network of depots, ports and airfields; networks remain understandable only when every node has a defined input, output and direction.',
        ],
      },
      {
        heading: 'Build the smallest possible proof route',
        paragraphs: [
          'Start with two nearby points and one cargo type. Put a modest quantity at the sender, make room at the receiver and assign the appropriate transport. Let the route complete several trips before adding more goods. If the receiving count rises, the transport layer works. If it does not, the short distance makes the missing link easier to see than it would be on a route crossing half a continent.',
          'Do not test production, multiple cargo types, three depot transfers and an army resupply at the same time. Each extra dependency makes the same symptom—an empty destination—harder to diagnose. Once the proof route is reliable, add one variable: a longer leg, a second commodity or a second receiver. The result is slower initial expansion but much faster troubleshooting later.',
        ],
        bullets: [
          'Sender: confirm the exact item is physically present at the departure node.',
          'Vehicle: confirm it exists, is assigned and has the required operator.',
          'Receiver: confirm it has capacity and a real downstream demand.',
        ],
      },
      {
        heading: 'Diagnose an empty destination from left to right',
        paragraphs: [
          'When a front is starving, inspect the chain in production order. Is the raw material being collected? Is the processing building operating? Does the finished product reach the departure depot? Does a vehicle leave? Does it arrive and unload? Does the destination immediately consume the delivery? The first point where the expected quantity stops is the actual fault. Everything after that point is only a visible consequence.',
          'This method also catches false alarms. A receiving depot may appear empty because ammunition is being consumed as quickly as it arrives. In that case the route functions, but throughput is too low. Increase the production or transport capacity that feeds the line; do not rebuild the destination. Conversely, a permanently full sender and idle vehicle usually indicates assignment, staffing, path or receiver-capacity trouble.',
        ],
      },
      {
        heading: 'Use staged depots for long distances',
        paragraphs: [
          'Long routes are easier to maintain when they are broken into regional legs. A production center sends to a continental depot, that depot hands off to a port or airfield, and a forward depot feeds the army. Staging creates visible checkpoints: if the port is full but the forward base is empty, you can focus on the sea or air leg instead of searching the entire economy.',
          'Staging also protects the front from temporary disruption. A forward depot with a sensible reserve lets a wall keep firing while the next convoy travels. The goal is not to hoard everything at every node. It is to hold enough of the critical finished items—ammunition, medical supplies and equipment—to bridge the time between deliveries and recover from a lost vehicle or interrupted path.',
        ],
      },
      {
        heading: 'Match transport to geography and cargo',
        paragraphs: [
          'Ground carts and trucks are natural for connected land routes. Ships such as rafts and barges open water crossings, while balloons and zeppelins can support later air links. The released-game announcement says vehicles can carry troops, fight or move supplies, but every role competes for a finite vehicle. Decide whether a vehicle is a logistics asset or part of the battle group instead of expecting one unit to do both jobs continuously.',
          'Choose cargo by consequence, not by abundance. A remote base can often gather wood or stone locally, but a specialized weapon or medical chain may exist only at home. Ship the item that would be hardest to replace at the destination. This reduces traffic and makes each route’s purpose visible. If every material is sent everywhere, the network becomes busy without becoming reliable.',
        ],
      },
      {
        heading: 'Scale throughput only after the route is readable',
        paragraphs: [
          'When the line works but cannot keep up, measure the bottleneck by observation. If finished goods accumulate at the sender, add or improve transport. If vehicles wait for cargo, increase upstream production. If the destination fills while the frontline still starves, the last-mile movement or consumer assignment needs attention. Capacity added anywhere else will not solve that specific queue.',
          'Preserve readability as the network grows. Name the purpose in your own notes, cluster related depots and avoid crossing routes unless geography requires it. The global map invites dramatic lines, but robust logistics is built from small boring segments. A chain you can explain is a chain you can repair during a swarm, which is the standard that matters before a lair or boss push.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is a depot just another storage building?',
        answer:
          'No. It can store items, but its strategic job is to act as a long-distance handoff in a route using vehicles.',
      },
      {
        question: 'Why is my receiving depot empty?',
        answer:
          'Check the exact finished item at the sender, vehicle assignment and operator, path, receiver capacity and immediate consumption in that order.',
      },
      {
        question: 'Should one depot carry every material?',
        answer:
          'Usually no. A small number of purpose-specific cargo types makes shortages and transport bottlenecks much easier to identify.',
      },
    ],
  },
  {
    slug: 'workers-carts',
    path: '/guides/workers-carts',
    title: 'Machinefall Workers and Carts: Recruit, Drive and Resupply',
    seoTitle: 'Machinefall Workers & Carts Guide - Recruit and Drive',
    seoDescription:
      'Learn where Machinefall workers come from, how carts support storage and supply, and how to disembark a driver from the current interface.',
    summary:
      'Liberate cities for people, reserve workers for production and transport, and treat every cart as a vehicle that still needs a driver and a clear job.',
    category: 'Logistics',
    difficulty: 'Beginner',
    coverImageUrl: '/machinefall/screenshots/3.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses full-version recruitment information plus the current developer instruction for disembarking a cart driver.',
    videoSearchQueries: ['Machinefall workers', 'Machinefall cart driver'],
    tags: ['Workers', 'Carts', 'Recruitment'],
    relatedRoutes: [
      '/guides/depots-logistics',
      '/guides/cities-refugee-camps',
      '/guides/beginner-guide',
      '/guides/naval-transport',
    ],
    body: [
      {
        heading: 'Get more people by liberating cities',
        paragraphs: [
          'Workers and soldiers are tied to the human settlements you rescue. The full-version announcement says you recruit them by liberating cities, so population growth is an expansion problem as much as a production problem. If your home base has filled every job and still cannot build, the answer may be a nearby city rather than another building inside the same settlement.',
          'Choose the next city for usefulness. A close city is easier to defend and connect. A city near a new resource can specialize. A distant city beside an objective may become a forward recruiting and supply node, but only if your current army can clear and hold the route. Liberation should add capacity; it should not create another isolated location that consumes the last available workers.',
        ],
      },
      {
        heading: 'Keep labor in three visible pools',
        paragraphs: [
          'Think of workers as operating labor, construction labor and mobile labor. Operating labor keeps gathering and production active. Construction labor lets a base respond to damage or expansion. Mobile labor drives carts and other vehicles or moves with a new settlement plan. Spending all three pools on permanent jobs creates the common situation where materials exist but nobody can build the depot or drive the vehicle that would solve the shortage.',
          'You do not need an exact universal percentage. The correct reserve depends on distance and danger. Instead, watch whether assigning a new workshop makes construction or transport stop. If it does, the settlement is already at its practical labor limit. Liberate another city, release a low-priority job or pause the new production line until people are available.',
        ],
        bullets: [
          'Operating labor keeps the existing economy alive.',
          'Construction labor repairs and adds infrastructure.',
          'Mobile labor operates carts and supports the next expansion.',
        ],
      },
      {
        heading: 'Give each cart one measurable job',
        paragraphs: [
          'Carts are useful because they increase the amount of material that can move through storage and supply tasks. The developer’s cart notes specifically mention carrying medical bandages and quivers, which illustrates the best use: moving finished support items that an army or defensive line consumes away from the factory. A cart without a defined origin, cargo and destination is only parked capacity.',
          'Begin with a short route and one item, exactly as you would test a depot. Watch the cart load, travel and unload. If it never moves, check whether a driver is present and whether the route has valid endpoints. If it arrives empty, inspect the source stock. If it unloads but the destination remains empty, the cargo may be consumed immediately or stored somewhere other than the place you are watching.',
        ],
      },
      {
        heading: 'Disembark a cart driver in the current UI',
        paragraphs: [
          'The current developer answer gives a specific sequence: select the cart, click the driver icon in the right-hand panel, then choose Disembark. Use this when a worker is trapped in a vehicle role that no longer matters or when you need to reassign the person. Because the game was patched quickly after release, treat interface location as a current-build instruction and recheck after major UI updates.',
          'Do not abandon the cart in a dangerous forward area just to recover one worker. Move it to a safe base or route node first. A parked cart can later be assigned to a new driver, while a destroyed cart costs both production and transport time. Reassignment is most useful when consolidating routes, replacing an inefficient leg or freeing the only available worker for an urgent construction task.',
        ],
      },
      {
        heading: 'Separate cart shortages from production shortages',
        paragraphs: [
          'A common mistake is adding carts when there is nothing ready to carry. Check the departure inventory. If finished bandages, ammunition or equipment are not accumulating, production is the bottleneck. More vehicles will wait in a larger queue. If stock is accumulating while the receiver starves, transport capacity or assignment is the likely bottleneck, and an additional cart may help.',
          'Also inspect the final consumer. A wall can use ammunition faster than a small route delivers it, making a working cart look ineffective. Compare the pattern over time: steady arrivals with immediate depletion indicate insufficient throughput; no arrivals indicate a broken route. This distinction prevents repeated rebuilding and tells you whether to add production, vehicles or a forward reserve.',
        ],
      },
      {
        heading: 'Use people and vehicles to make expansion reversible',
        paragraphs: [
          'Before founding or taking over a distant position, keep enough workers and transport to retreat from a bad plan. A spare driver can recover a cart, a construction crew can add emergency storage, and an uncommitted worker can repair a missing link. Expansion becomes brittle when every person is permanently assigned before the route has completed its first delivery.',
          'The strategic lesson is that population and logistics are the same system at different scales. Cities provide people; people run production and vehicles; vehicles connect cities and armies; successful armies liberate more cities. When growth stalls, identify which part of that loop is missing instead of treating “not enough workers” as an isolated resource problem.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get more workers in Machinefall?',
        answer:
          'Liberate cities and use new settlements or refugee-camp expansion to create additional recruitment capacity.',
      },
      {
        question: 'How do I remove a driver from a cart?',
        answer:
          'Select the cart, click the driver icon on the right-side panel and choose Disembark, according to the current developer reply.',
      },
      {
        question: 'Why is my cart not moving supplies?',
        answer:
          'Confirm it has a driver, a valid route, the exact cargo at its source and space or demand at the destination.',
      },
    ],
  },
  {
    slug: 'base-defense',
    path: '/guides/base-defense',
    title: 'Machinefall Base Defense: Walls, Towers and Swarm Control',
    seoTitle: 'Machinefall Base Defense Guide - Walls, Towers & Ammo',
    seoDescription:
      'Build a layered Machinefall defense with walls, four tower types, ammunition supply, terrain and a mobile reserve that can stop machine swarms.',
    summary:
      'A wall buys time; a staffed, supplied firing line uses it. Defend approach lanes, feed tower weapons and keep a mobile force behind the position.',
    category: 'Combat',
    difficulty: 'Intermediate',
    coverImageUrl: '/machinefall/screenshots/6.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Based on the official full-version defense description and current developer confirmation that four tower types can mount weapons.',
    videoSearchQueries: ['Machinefall base defense', 'Machinefall towers'],
    tags: ['Walls', 'Towers', 'Ammunition'],
    relatedRoutes: [
      '/guides/army-formations',
      '/guides/depots-logistics',
      '/guides/boss-preparation',
      '/guides/cities-refugee-camps',
    ],
    body: [
      {
        heading: 'Defend an approach, not an entire compass',
        paragraphs: [
          'Start by identifying where a swarm can actually reach the settlement: a road, open plain, bridge, coast landing or gap between terrain. Build your strongest line across that approach instead of placing equal wall around a huge empty perimeter. Concentrated defenses shorten the amount of structure to repair and let the same ranged units cover more of the contact area.',
          'The global map encourages sprawling bases, but every extra edge creates another location that needs visibility, weapons and ammunition. Put fragile production behind natural obstacles where possible. Leave clear interior paths so workers, carts and reserve troops can reach the threatened side. A defense that blocks its own supply traffic will fail even if its outer wall looks complete.',
        ],
      },
      {
        heading: 'Treat walls as time, not damage',
        paragraphs: [
          'Walls are valuable because they stop or redirect machines long enough for weapons to work. They are not the full defense. A deep swarm can chew through an unsupported wall while defenders stand too far away or fire from a poor angle. Build the firing position and its supply before assuming a closed perimeter is safe.',
          'Use layers where an important settlement justifies the cost. An outer obstacle slows the first contact, a main wall creates the kill zone and a fallback line protects the production core. Leave controlled gaps only when you intentionally want to funnel enemies into concentrated fire. If a gap also becomes the easiest path to storage, it is not a funnel; it is an open door.',
        ],
        bullets: [
          'Outer layer: early warning and path disruption.',
          'Main line: staffed towers and ranged formation with clear fire.',
          'Rear layer: ammunition, medical support and a mobile reserve.',
        ],
      },
      {
        heading: 'Staff towers and feed their weapons',
        paragraphs: [
          'The developer says there are four types of tower that can mount weapons, and the released-game announcement lists ballistae, catapults, machine guns and cannon across technological eras. The important shared rule is that mounted weapons need people and ammunition. An empty tower is terrain. A staffed tower with no ammunition is an observation post.',
          'Connect the defensive line to a nearby depot that holds the finished ammunition it actually uses. Do not rely on a distant central store during a large raid. Keep a forward reserve large enough to bridge delivery time, then watch whether it drains between convoys. If ammunition disappears faster than the route replaces it, increase production or throughput before adding more guns that consume the same scarce stock.',
        ],
      },
      {
        heading: 'Balance the firing line and mobile reserve',
        paragraphs: [
          'Static defenses are efficient against the direction they face. They are weak against a breach, an unexpected approach or a fight that moves outside their arc. Keep a formation behind the line that can reinforce a gate, seal a broken section or pursue the machines that pass through. That reserve should not be committed to the first targets the towers can already handle.',
          'Place tougher melee troops forward when physical contact is unavoidable and keep ranged troops spaced behind them. Terrain and formation matter because a dense ball causes pathing and line-of-fire problems. A reserve with medical supplies can survive repeated interventions; an unsupported chase may draw it beyond the wall and expose the base to the next wave.',
        ],
      },
      {
        heading: 'Adapt to different machine bugs',
        paragraphs: [
          'Official material describes bugs that attack with claws, spit acid or explode, plus giant threats. These behaviors punish one-layer defense in different ways. Melee swarms pressure the wall, ranged acid attacks can punish a packed line and explosive units make clustering dangerous. You do not need an invented counter table to respond: preserve spacing, maintain range and stop fragile support units from standing at the breach.',
          'After a wave, inspect what actually failed. If the wall survived but troops collapsed, formation or medical support was weak. If towers went silent, ammunition or staffing failed. If machines arrived behind the line, the approach map or perimeter had a gap. Repair the causal layer first. Simply rebuilding the same destroyed wall reproduces the same result on the next attack.',
        ],
      },
      {
        heading: 'Use liberation to reduce local pressure',
        paragraphs: [
          'The full-version announcement says machine bugs spawn in cities within unexplored territory, while liberated cities stay clear. That gives expansion a defensive purpose: clearing nearby population centers can reduce dangerous local sources and create recruitment nodes. You still need defenses, but a secured region is easier to protect than a base surrounded by hostile cities.',
          'Do not push so far that the new city cannot be supplied. The best defensive expansion removes a local threat, shortens warning time and creates a forward depot. Build that connection before moving the main army onward. A line of liberated, supplied cities gives you fallback positions; a line of flags with no people, ammunition or repair capacity gives the swarm a sequence of easy targets.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many tower types are in Machinefall?',
        answer:
          'The developer currently says there are four tower types, with mounted weapons changing through the technology eras.',
      },
      {
        question: 'Why did my towers stop firing?',
        answer:
          'Check both staffing and the exact ammunition supply. A tower needs a weapon operator and a route that can replace consumed ammo.',
      },
      {
        question: 'Should I wall the whole base?',
        answer:
          'Protect likely approaches and critical production first. A smaller layered line is easier to staff, supply and repair than an oversized perimeter.',
      },
    ],
  },
  {
    slug: 'technology-eras',
    path: '/guides/technology-eras',
    title: 'Machinefall Technology Eras: Progress Without Breaking Supply',
    seoTitle: 'Machinefall Technology & Eras Guide - Stone to Space',
    seoDescription:
      'Plan Machinefall technology from Stone Age to Space Age, choose Scenario or Free Game, and upgrade only when your economy can support the new chain.',
    summary:
      'New technology increases capability and dependency. Stabilize the current production chain, then add one new vehicle, weapon or route layer at a time.',
    category: 'Progression',
    difficulty: 'Intermediate',
    coverImageUrl: '/machinefall/screenshots/5.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Era range and mode differences come from the released Steam store and full-version announcement; no unsupported exact research tree is published.',
    videoSearchQueries: ['Machinefall technology tree', 'Machinefall eras'],
    tags: ['Technology', 'Scenario', 'Free Game'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/depots-logistics',
      '/guides/base-defense',
      '/guides/naval-transport',
    ],
    body: [
      {
        heading: 'Use Scenario Mode to learn dependencies',
        paragraphs: [
          'Machinefall spans Stone Age to Space Age, which means the late game is not simply an early settlement with bigger numbers. New weapons, vehicles and movement layers add factories, specialized cargo and supply responsibilities. Scenario Mode reveals that complexity through campaign progress and is the developer’s recommended first experience. It gives each new system a chance to prove itself before the next one arrives.',
          'Free Game unlocks all technology and is useful when you already know what each branch requires. For a first run, the open tree can encourage building advanced items before the worker base, storage and routes exist to operate them. If you choose Free Game anyway, impose your own phases: basic settlement, ground logistics, defended region, naval or air links, then late combined arms.',
        ],
      },
      {
        heading: 'Advance when the current era is stable',
        paragraphs: [
          'A stable era has spare workers, steady basic material, functioning storage, a proven local route and enough military supply to survive a raid. The test is not whether you can pay for one research or building. It is whether the settlement can operate the new chain without stopping the old chain that feeds everyone. If every worker and cart is already committed, the next technology is a liability waiting for an operator.',
          'Watch for hidden replacement costs. A stronger gun may require different ammunition. A truck moves more than a cart but still needs a working route. A ship opens water but needs a shipyard and safe landing logic. Technology pays off when the entire supporting chain comes online. Build one complete example, observe it under demand and only then duplicate it.',
        ],
        bullets: [
          'Labor check: enough people to build and operate the new chain.',
          'Input check: upstream materials arrive faster than they are consumed.',
          'Logistics check: the new output can reach the place that needs it.',
          'Defense check: upgrading does not empty the existing firing line.',
        ],
      },
      {
        heading: 'Choose technology for the next constraint',
        paragraphs: [
          'Research should answer a problem you can name. If distance is the constraint, better transport or a new movement layer matters. If a wall cannot stop a larger swarm, weapon and ammunition capacity matters. If recruitment is the limit, expand and automate cities before buying another combat chain. If the army survives but cannot remain supplied, logistics technology beats raw damage.',
          'This prevents research from becoming a collection game. A technology can be powerful and still be wrong for the next objective. Look at the route to the lair or stronghold: land, ocean, hostile cities, supply distance and likely defensive needs. Select the branch that removes the most immediate blocking condition, then keep a lower-tech fallback until the new system has completed a real mission.',
        ],
      },
      {
        heading: 'Upgrade transport before global expansion',
        paragraphs: [
          'The campaign eventually uses carts, trucks, tanks, rafts, barges, balloons and zeppelins. They are not interchangeable decorations. Ground vehicles depend on connected land paths, ships depend on ports and water access, and aircraft depend on later infrastructure. Each movement layer should connect two stable nodes before it becomes the backbone of the campaign.',
          'Keep regional depots even after faster transport unlocks. A new vehicle improves a leg; it does not eliminate the value of staging. Long-range movement without visible handoffs is difficult to debug, especially when the simulation contains many thousands of units. Upgrade one route segment, compare stock at both ends and preserve a known working alternative until throughput is proven.',
        ],
      },
      {
        heading: 'Upgrade defense as a complete package',
        paragraphs: [
          'Defensive technology includes more than the weapon model. Towers, operators, ammunition production, transport and repair all need to grow together. Replacing a ballista with a later gun may increase firepower, but a shortage of the new ammunition can make the position weaker during a long wave. Build the new supply reserve before converting every firing point.',
          'Use mixed generations during transition. Keep a section of the old line working while a new weapon proves its rate of consumption and range. This gives the base continuous coverage and creates a direct comparison. Once the new package remains supplied through a real attack, scale it along the important approach instead of upgrading distant decorative sections first.',
        ],
      },
      {
        heading: 'Treat late technology as coordination, not victory',
        paragraphs: [
          'Late vehicles and weapons let you solve larger problems, but they increase the number of systems that must arrive at the same time. A combined force may need infantry formation, vehicle transport, ammunition, medical support, a forward depot and a defended fallback city. The technology unlock is only permission to build that system; it is not proof that the system is ready.',
          'Before the final push, audit dependencies from the frontline backward. If a late unit is irreplaceable because only one distant factory can support it, protect that route or build regional capacity. Machinefall’s era progression is most satisfying when old settlements become reliable infrastructure for the new age. If they are abandoned as soon as a new icon appears, the future army will still fail for an ancient reason: missing supply.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many eras does Machinefall have?',
        answer:
          'Official descriptions define the range from Stone Age to Space Age, but this guide does not invent a fixed node-by-node count.',
      },
      {
        question: 'Does Free Game unlock all technology?',
        answer:
          'Yes. The developer says all technology is available in Free Game, while Scenario Mode is the recommended guided experience.',
      },
      {
        question: 'When should I advance technology?',
        answer:
          'Advance when the current economy has spare labor, stable inputs, working logistics and enough defense to support the new chain.',
      },
    ],
  },
  {
    slug: 'army-formations',
    path: '/guides/army-formations',
    title: 'Machinefall Army Formations: Control Thousands Without a Blob',
    seoTitle: 'Machinefall Army Formations Guide - Organize Large Forces',
    seoDescription:
      'Organize Machinefall melee, ranged, vehicles and support into controllable formations that keep supply, terrain and retreat routes intact.',
    summary:
      'Split the army by role, keep a stable frontline, protect ranged and support groups, and move in bounds between supplied positions.',
    category: 'Combat',
    difficulty: 'Intermediate',
    coverImageUrl: '/machinefall/screenshots/9.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses official formation, terrain, rank and vehicle descriptions plus developer control-group notes; it does not publish an unsupported unit tier list.',
    videoSearchQueries: [
      'Machinefall army organization',
      'Machinefall formations',
    ],
    tags: ['Formations', 'Ranks', 'Combined arms'],
    relatedRoutes: [
      '/guides/base-defense',
      '/guides/boss-preparation',
      '/guides/depots-logistics',
      '/guides/technology-eras',
    ],
    body: [
      {
        heading: 'Stop selecting the entire army for every order',
        paragraphs: [
          'Machinefall can put thousands of units in a battle, but a single selection turns specialists into one slow, wide crowd. Split the force into roles before contact: a frontline group, a ranged group, a mobile or vehicle group and a support or reserve group. Give each one a control group so you can change its position without dragging every other unit through the same path.',
          'Developer notes describe number keys for selecting groups and Control plus a number for assigning them. Interface details can evolve, so confirm the current key hints, but preserve the concept even if a binding changes. The goal is to issue fewer, clearer orders. Direct commands receive high simulation priority according to the technical update, so unnecessary repeated commands can create exactly the congestion you are trying to fix.',
        ],
      },
      {
        heading: 'Build a line with depth',
        paragraphs: [
          'Melee units belong where they can intercept machines without hiding every ranged weapon behind the same body. Put the frontline on a readable line or shallow arc, then place ranged groups far enough behind to fire and close enough to remain protected. Avoid a formation wider than the terrain or path can support, because the edges will arrive late and the center will bunch up.',
          'Use terrain deliberately. Walls, forests, coastlines and narrow approaches can reduce how many enemies make contact at once, but obstacles can also block your retreat. Look at the route behind the formation before the fight begins. A good position has a firing lane, a fallback point and enough open ground for support vehicles to reach the units that need them.',
        ],
        bullets: [
          'Frontline: holds contact and protects the firing line.',
          'Ranged: stays spaced with a clear line toward the swarm.',
          'Mobile group: responds to flanks, breaches or exposed targets.',
          'Reserve/support: carries medical and ammunition capacity and protects retreat.',
        ],
      },
      {
        heading: 'Keep ranked soldiers alive',
        paragraphs: [
          'The released-game announcement says soldiers gain ranks, improving health and attacks and allowing better equipment. Experienced soldiers are therefore persistent campaign assets, not disposable dots. Do not send the highest-rank formation alone into unexplored territory simply because it has the strongest current stats. Losing it removes both battlefield power and the time invested in earning those ranks.',
          'Rotate damaged or depleted groups behind the line and let a fresher unit hold contact. Use the retreat before a formation breaks, not after it scatters. A controlled fallback toward medical support and a supplied city preserves ranks and shortens the path back to action. The best long campaign army is the one that can survive several objectives, not the one that wins a single fight with no remaining structure.',
        ],
      },
      {
        heading: 'Add vehicles without blocking infantry',
        paragraphs: [
          'Vehicles can transport, supply and fight. Their larger movement footprint makes them valuable and dangerous inside a dense formation. Keep transport vehicles behind the main line until unloading is complete, and give combat vehicles a lane where infantry will not surround them. When every unit shares one destination click, carts, trucks or tanks can become obstacles rather than force multipliers.',
          'Assign vehicles by primary role for each operation. A truck hauling ammunition should not be pulled into a chase unless the route is already covered. An assault vehicle should not be the only way medical supplies reach the front. Clear roles make losses understandable and replacements targeted. Mixed forces work because their roles support one another, not because every available object travels in one selection box.',
        ],
      },
      {
        heading: 'Advance between supply checkpoints',
        paragraphs: [
          'Move the army from one secure node to the next: a liberated city, regional depot, port or defensible terrain. Let ammunition and medical stock catch up before the next leg. This “move in bounds” approach is slower than sending the whole force directly to the objective marker, but it keeps retreat distance reasonable and tells you which logistics segment failed.',
          'A forward depot should be established before the army empties its carried supply. If the terrain ahead crosses an ocean or hostile region, separate the transport operation from the assault. Land, reorganize, confirm the new depot receives cargo, then advance. A formation that arrives in pieces is not a formation, even if every unit eventually reaches the same continent.',
        ],
      },
      {
        heading: 'Use a battle reset after every major contact',
        paragraphs: [
          'After a swarm or city fight, stop issuing forward commands. Re-form the frontline, pull ranged units out of exposed positions, recover transport, replace ammunition and identify casualties. Large selections hide missing specialists; a quick role-by-role count reveals whether the next fight has no medical support, no durable screen or no working vehicle.',
          'Keep one formation as the reserve until the situation is clear. Machinefall’s scale makes it tempting to solve uncertainty by committing more units, but that removes your ability to respond to a breach or unexpected spawn. Clear formations turn thousands of units into a small set of decisions. If you always know which group holds, fires, moves and rescues, the army remains controllable even when the screen is full.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do control groups work in Machinefall?',
        answer:
          'Developer notes use Control plus a number to assign a group and the number key to select it. Check current in-game hints after patches.',
      },
      {
        question: 'Do soldiers improve over time?',
        answer:
          'Yes. The developer says soldiers gain ranks with more health, stronger attacks and access to better equipment.',
      },
      {
        question: 'What is the best Machinefall formation?',
        answer:
          'There is no verified universal best. Use a frontline, protected ranged line, mobile group and supplied reserve, then adapt width to terrain.',
      },
    ],
  },
  {
    slug: 'lairs-world-map',
    path: '/guides/lairs-world-map',
    title: 'Machinefall Lairs and World Map: Find Every Campaign Objective',
    seoTitle: 'Machinefall Lair Locations - World Map & Locate Button',
    seoDescription:
      'Find Machinefall lairs with the objective locate button and developer location clues, then build a supplied route before attacking each region.',
    summary:
      'Hover the objective and use its locate button first. The developer places the four target lairs among major regions away from your closest start.',
    category: 'Expansion',
    difficulty: 'Reference',
    coverImageUrl: '/machinefall/screenshots/2.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Location guidance comes from a current Steam discussion reply by the developer. Geography is described as a search pattern, not exact invented coordinates.',
    videoSearchQueries: ['Machinefall lair locations', 'Machinefall world map'],
    tags: ['Lairs', 'World map', 'Objectives'],
    relatedRoutes: [
      '/guides/boss-preparation',
      '/guides/depots-logistics',
      '/guides/naval-transport',
      '/guides/army-formations',
    ],
    body: [
      {
        heading: 'Use the objective panel before scanning Earth',
        paragraphs: [
          'The current developer answer gives the fastest method: hover the objective in the upper-right interface, open its information box and use the locate button. Do this before manually searching a map with more than 33 million tiles. The button exists to connect the campaign task to the relevant area and is more reliable than matching a small structure from an old screenshot.',
          'If the marker takes you to a broad region rather than the exact object, zoom in gradually and look for the distinctive hostile city tile or tentacle-like visual reported by players. Keep the objective selected while changing zoom. Do not march the army until you have confirmed the route, because an accidental cross-world command can split formations and send vehicles through unsuitable paths.',
        ],
      },
      {
        heading: 'Use the developer location pattern',
        paragraphs: [
          'In the same discussion, the developer identifies the lair regions as major locations around New York, Tokyo, Chile, the Sahara and Australia, excluding the location closest to your starting position. The wording implies that four of those five regional candidates are active for a given start. Use this as a search pattern rather than a promise of one fixed coordinate.',
          'Start with the objective locate function, then compare the candidate regions that remain far from your opening area. Geography makes the transport requirement clear: some objectives can be reached over land, while others require a sea or later air connection. Mark the nearest safe city and port before choosing which lair becomes the next campaign operation.',
        ],
        bullets: [
          'Candidate regions named by the developer: New York, Tokyo, Chile, Sahara and Australia.',
          'Expected campaign set: four lairs, excluding the candidate closest to the start.',
          'Exact placement can vary with the starting context; use the objective locate button as primary evidence.',
        ],
      },
      {
        heading: 'Scout the route as a logistics problem',
        paragraphs: [
          'Finding a lair is only the first half of the task. Trace the path backward from the marker: nearest liberatable city, defensible staging ground, port if needed, regional depot and production center. A route with no staging point may be technically passable but strategically useless once the army consumes ammunition or needs replacement soldiers.',
          'Choose the next lair based on support distance, not visual proximity alone. A slightly farther objective on the same connected landmass may be easier than an island that requires a new naval chain. If the campaign technology gate points toward a specific operation, build the infrastructure while the current objective is still active instead of waiting until the army reaches the coast.',
        ],
      },
      {
        heading: 'Secure a forward city before the assault',
        paragraphs: [
          'Liberated cities supply workers and soldiers, and official notes say cleared cities no longer spawn machine bugs. That makes a nearby city the best practical launch point. Clear it, establish storage or a depot, prove that supplies arrive and let the army reorganize there. The city becomes a fallback if the lair fight is stronger than expected.',
          'Avoid using the lair tile itself as the first destination for every unit. Send a controlled group to secure the route and keep the rest at the staging city until the path is known. Large direct commands can create path congestion and expose transport. Once the scout and forward supply are stable, move combat formations in deliberate waves.',
        ],
      },
      {
        heading: 'Bring the right campaign package',
        paragraphs: [
          'A lair assault should include a balanced frontline and ranged line, medical support, ammunition and enough transport to sustain the distance. It should also leave the origin defended. Machine swarms can pressure settlements while the main army is away, so stripping every wall and tower crew for one objective creates a new loss condition behind you.',
          'Carry reserve supply rather than assuming an uninterrupted route during combat. If the lair is across water, land at a safe point, unload and reform before approaching it. If the route passes unexplored cities, expect local machine activity and clear or bypass it intentionally. The objective marker tells you where to go; it does not remove the strategic cost of getting there.',
        ],
      },
      {
        heading: 'Record what changes after a lair falls',
        paragraphs: [
          'After the fight, check the objective panel, technology progress and the region around the lair before immediately selecting the next marker. Confirm the campaign registered the victory. Recover ranked soldiers, repair vehicles and refill the forward depot. If the objective does not advance, save and reload before assuming another hidden requirement exists.',
          'Turn the conquered region into a network asset only if it helps the next route. A remote base that contributes nothing can drain workers and attention. Keep a port, depot or recruiting city when it shortens future logistics; otherwise consolidate the army and supply back to the main chain. The campaign needs functioning strongholds, not monuments at every former target.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I locate a Machinefall lair?',
        answer:
          'Hover the campaign objective in the upper-right, open its information box and click the locate button, according to the developer.',
      },
      {
        question: 'Where are the four lairs?',
        answer:
          'The developer names New York, Tokyo, Chile, Sahara and Australia as candidates, with the one nearest your start excluded.',
      },
      {
        question: 'Should I attack as soon as I find one?',
        answer:
          'No. First secure a nearby city or staging point, connect a supply route and reform the army close to the objective.',
      },
    ],
  },
  {
    slug: 'boss-preparation',
    path: '/guides/boss-preparation',
    title: 'Machinefall Boss Preparation: Trigger, Supply and Final Push',
    seoTitle: 'Machinefall Boss Guide - Preparation & Spawn Fix',
    seoDescription:
      'Prepare for the Machinefall final boss with a supplied regional army, then use the developer reload and move-closer fix if the boss does not appear.',
    summary:
      'Separate a missing boss trigger from a weak army: reload and move closer for the first problem; build layered supply and reserves for the second.',
    category: 'Combat',
    difficulty: 'Intermediate',
    coverImageUrl: '/machinefall/screenshots/4.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'The trigger workaround is a current developer reply. The guide deliberately does not reuse the old Demo boss name for the full campaign boss.',
    videoSearchQueries: [
      'Machinefall final boss',
      'Machinefall boss not spawning',
    ],
    tags: ['Boss', 'Strongholds', 'Troubleshooting'],
    relatedRoutes: [
      '/guides/lairs-world-map',
      '/guides/army-formations',
      '/guides/depots-logistics',
      '/guides/base-defense',
    ],
    body: [
      {
        heading: 'Confirm the campaign state before building a theory',
        paragraphs: [
          'The released campaign asks you to defeat enemy strongholds and then a powerful boss. Before waiting at the final area, check that the current objectives show the required strongholds or lairs as complete. Use the objective information and locate function rather than assuming the last visible enemy city is the gate. A missing prerequisite and a failed spawn can look identical from the map.',
          'Do not use the old Demo boss name as proof of the released campaign encounter. The Demo included a final boss fight, but the full campaign is broader and the developer’s current full-version description does not establish that the same named enemy represents the final release boss. This guide stays with the verified “final boss” label so troubleshooting does not depend on outdated content.',
        ],
      },
      {
        heading: 'Use the developer fix when the boss does not appear',
        paragraphs: [
          'A current Steam discussion answer says that if the boss does not appear within a few minutes, reload the game. If it still does not appear, move your units closer to the enemy. Follow that order. Save in a stable state, reload, wait briefly and then advance a controlled group toward the marked enemy area instead of sending every transport and defender at once.',
          'This is a trigger workaround, not a combat tactic. If the boss appears and the army loses, reloading repeatedly will not repair weak supply or formation. Conversely, do not spend hours adding technology because a scripted event failed to start. Identify whether the problem is “no encounter” or “encounter too strong,” then apply the matching solution.',
        ],
        bullets: [
          'No appearance after a few minutes: save safely and reload.',
          'Still absent: move a controlled combat group closer to the enemy area.',
          'Encounter starts but fails: return to supply, formation and reserve preparation.',
        ],
      },
      {
        heading: 'Build the final operation around a forward depot',
        paragraphs: [
          'The boss force should assemble near a supplied city, depot, port or airfield rather than marching directly from the original settlement. Stock finished ammunition, medical items and equipment at that node. Let the route complete multiple deliveries before the army arrives so the depot contains a real reserve instead of promises from factories on another continent.',
          'Keep the route simple enough to inspect during the battle. A three-leg chain with visible staging points is better than one opaque global line. If the forward depot drains, you need more production or transport. If it remains full while units starve, the last-mile support is wrong. Solve that distinction before committing the ranked core of the army.',
        ],
      },
      {
        heading: 'Organize the force in layers',
        paragraphs: [
          'Use a frontline group to stop contact, ranged groups with space to fire, a mobile group for breaches and a reserve that protects medical and ammunition support. Keep transport outside the first collision. A boss battle can attract a large surrounding swarm, so a single dense selection may wrap around obstacles and arrive in pieces.',
          'Preserve experienced soldiers. Official notes say ranks improve health, attack and equipment access. Rotate a depleted formation rather than leaving it in contact until it collapses. The reserve exists to make that rotation possible. If every unit is engaged from the first second, there is no formation available to cover a retreat or respond to a second direction.',
        ],
      },
      {
        heading: 'Protect the campaign behind the boss army',
        paragraphs: [
          'Do not strip every city of defenders and tower staff. The final operation can be long, and a raid against an empty production center can cut the route that feeds it. Leave walls staffed, ammunition stocked and a small local response group at important nodes. A boss army whose home factories are destroyed becomes a stranded army even if the first phase goes well.',
          'Save at decision points, not only at the entrance. A useful checkpoint is after the forward depot is filled, the army is re-formed and the route is still operating. That lets you retry the tactical contact without repeating hours of global movement. Avoid saving in a chaotic broken formation where every reload recreates the same supply and pathing problem.',
        ],
      },
      {
        heading: 'Recover before chasing the ending',
        paragraphs: [
          'After the boss falls, verify the campaign objective updates before dismantling the forward network. Re-form units, recover vehicles and let the route replace consumed supplies. If the objective fails to register, use a safe reload and move the surviving combat group within the encounter area, following the same trigger logic rather than inventing a hidden kill condition.',
          'If the fight fails, write down the first causal loss. Towers or ranged units running dry means logistics. A collapsed frontline means formation, rank preservation or force size. Reinforcements arriving too late means staging. Fix the earliest failure and retry. Adding more of everything can overload pathing and consumption; a targeted correction usually produces a cleaner second attempt.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do if the boss does not spawn?',
        answer:
          'The developer says to reload if it does not appear within a few minutes, then move units closer to the enemy if it is still absent.',
      },
      {
        question: 'Is the full-game boss called Stomper?',
        answer:
          'Stomper appears in old Demo material, but current official full-version sources do not establish that name for the final campaign boss.',
      },
      {
        question: 'Where should I stage the final army?',
        answer:
          'At a nearby liberated and defended node with a tested depot route, finished supplies and enough room to form the army.',
      },
    ],
  },
  {
    slug: 'naval-transport',
    path: '/guides/naval-transport',
    title: 'Machinefall Naval Transport: Rafts, Barges and Safe Landings',
    seoTitle: 'Machinefall Ships Guide - Rafts, Barges & Transport',
    seoDescription:
      'Use Machinefall shipyards, rafts and barges to move troops and supplies, establish a landing depot and avoid splitting an army across water.',
    summary:
      'Treat an ocean crossing as two operations: move and unload the force, then build a local supply bridge before starting the land assault.',
    category: 'Logistics',
    difficulty: 'Intermediate',
    coverImageUrl: '/machinefall/screenshots/8.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'The released game identifies rafts and barges as naval transport. Old Demo statements about specific passenger limits are not treated as current facts.',
    videoSearchQueries: [
      'Machinefall ships',
      'Machinefall raft barge transport',
    ],
    tags: ['Ships', 'Rafts', 'Landings'],
    relatedRoutes: [
      '/guides/depots-logistics',
      '/guides/lairs-world-map',
      '/guides/cities-refugee-camps',
      '/guides/army-formations',
    ],
    body: [
      {
        heading: 'Decide whether water is really the shortest route',
        paragraphs: [
          'The global map makes an ocean crossing look direct, but the strategic distance includes the shipyard, loading point, sailing leg, safe coast, unloading time and new supply route. Compare that full chain with a longer land route through liberatable cities. Water wins when it bypasses a massive detour or reaches an island objective, not simply because the coastlines look close at orbital zoom.',
          'Use the objective marker and candidate lair region to choose a landing. Look for a coast near a city or defensible open ground where units can unload and reform. A narrow hostile beach beside machine activity gives no room to separate melee, ranged and support. The landing point should become a staging node, not merely the place where the path command ends.',
        ],
      },
      {
        heading: 'Build the shipyard into a working port',
        paragraphs: [
          'The developer’s Seaworthy update introduced shipyards and rafts, while the released version also describes barges among naval vehicles. The shipyard produces transport, but a useful port also needs nearby storage or a depot, a path for troops to reach the shore and a route that delivers the supplies intended for the destination. Test the waterfront with one ship before producing a fleet.',
          'Keep loading traffic away from unrelated city movement. If carts, recruits and production workers all converge on the same narrow shore, the ship can appear broken when the actual problem is path congestion. Stage combat groups beside the port, bring each one to the loading area in sequence and leave enough clear ground for returning or resupply vessels.',
        ],
        bullets: [
          'Origin port: shipyard, staging space, departure depot and a protected route from production.',
          'Sea leg: enough transport for deliberate waves, not one overloaded selection.',
          'Landing: open coast, nearby objective or city, and room for a forward depot.',
        ],
      },
      {
        heading: 'Move formations in deliberate waves',
        paragraphs: [
          'Do not send the entire army and all support vehicles with one cross-water order. Load a secure first wave that can protect the beach, then move ranged units, supplies and additional formations. Each wave should have a clear selection and destination. If one vessel or group paths poorly, the rest of the operation remains understandable and recoverable.',
          'Keep an origin reserve until the landing is confirmed. The first force may discover that the coast is blocked, hostile or too small. A reserve can choose another beach without the entire campaign being trapped at sea. Once the beachhead holds, use control groups to rebuild the same frontline, ranged and support structure you used on land.',
        ],
      },
      {
        heading: 'Separate troop transport from supply transport',
        paragraphs: [
          'Official descriptions allow vehicles to carry troops and supplies, but one vessel cannot perform both jobs at the same moment. Decide which ships are delivering formations and which are maintaining cargo flow after the landing. If every ship stays with the assault, the beachhead receives no continuing ammunition or medical support. If every ship becomes a route vehicle too soon, reinforcements remain at home.',
          'Prioritize finished items that are difficult to produce locally. The landing may gather basic materials after it grows, but the first hours depend on ammunition, medical supplies and equipment from the established economy. Put those items at the departure depot before the first ship sails. A port with empty storage cannot fix the beachhead by adding more vessels.',
        ],
      },
      {
        heading: 'Create a landing depot before pushing inland',
        paragraphs: [
          'After unloading, establish or capture a node that can receive repeated deliveries. If a nearby city can be liberated safely, it provides people, security and a natural staging point. Otherwise use a depot close enough to the coast that cargo does not need another long unsupported movement. Confirm multiple deliveries arrive before the main force leaves the beach area.',
          'The forward depot turns the sea crossing into a visible logistics leg. When it fills, the ships and origin port work. When it empties while ships remain idle, inspect the departure stock or assignment. When it fills but the inland army starves, fix the local ground route. Without this handoff, every later shortage is blamed on “ships” even when the naval segment is operating normally.',
        ],
      },
      {
        heading: 'Keep a fallback coast and return capacity',
        paragraphs: [
          'Do not consume or reassign every vessel after landing. Preserve enough return capacity to evacuate ranked troops or retrieve a stranded support group if the objective is stronger than expected. A second safe coast can also prevent pathing around a crowded primary beach. The crossing is complete only when the army can be supplied and, if necessary, withdrawn.',
          'Old Demo discussion contains narrower claims about exactly which unit roles could travel by boat. Because the full release has changed and the official current description broadly states troop transport, this guide avoids repeating those old limits. Test a small representative group in the current build before committing a campaign-critical passenger type, and use the live interface as the final authority.',
        ],
      },
    ],
    faq: [
      {
        question: 'What ships are in Machinefall?',
        answer:
          'Official released-game material lists rafts and barges, produced through naval infrastructure such as the shipyard.',
      },
      {
        question: 'Can ships move troops and supplies?',
        answer:
          'Yes, the full-version description says vehicles can transport troops and supplies. Assign separate operational roles so the beachhead keeps receiving cargo.',
      },
      {
        question: 'Why should I stop at the beach?',
        answer:
          'You need room to unload, reform the army and prove a forward depot before an inland push makes the sea route hard to diagnose.',
      },
    ],
  },
  {
    slug: 'cities-refugee-camps',
    path: '/guides/cities-refugee-camps',
    title: 'Machinefall Cities and Refugee Camps: Grow a Global Network',
    seoTitle: 'Machinefall Cities & Refugee Camps Guide - Expand Safely',
    seoDescription:
      'Liberate Machinefall cities, recruit workers and soldiers, use refugee camps for new settlements and assign every city a useful network role.',
    summary:
      'Liberate for people and safety, use City Hall plans for automation, and found new settlements only where they shorten a real resource or military route.',
    category: 'Expansion',
    difficulty: 'Beginner',
    coverImageUrl: '/machinefall/screenshots/8.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Uses the full-version city automation and liberation explanation plus the developer refugee-camp update. Old exact house counts are contextual, not a target.',
    videoSearchQueries: ['Machinefall cities', 'Machinefall refugee camp'],
    tags: ['Cities', 'Refugee camps', 'Automation'],
    relatedRoutes: [
      '/guides/workers-carts',
      '/guides/depots-logistics',
      '/guides/base-defense',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Liberate cities for both population and security',
        paragraphs: [
          'Cities are where campaign expansion becomes permanent. The released-game announcement says soldiers and workers are recruited by liberating cities, and machine bugs spawn in cities within unexplored territory while liberated cities stay clear. Clearing a city therefore gives you people, removes a local source of danger and creates a potential logistics node in one operation.',
          'Select targets that improve the network. A nearby city can relieve labor pressure at home. A port city can unlock an ocean leg. A city near an objective can become a forward depot and retreat point. A random distant city may add a flag while forcing you to defend and feed another isolated location. Expansion is successful when the new city makes the next operation easier.',
        ],
      },
      {
        heading: 'Give every city one primary role',
        paragraphs: [
          'A city can gather local material, process a specialized output, recruit, defend a region or stage transport. It can eventually do several jobs, but start with one. The primary role tells you which workers, storage and route deserve priority. Without it, every city grows into the same incomplete mega-base and competes for every cargo type.',
          'Use local abundance. A city beside useful raw material should collect and perhaps process it before exporting. A city on an empty strategic corridor may need only a depot, walls and recruitment capacity. A forward city near the boss route should stock completed military supplies rather than duplicate every early production chain. Specialization reduces long-distance traffic and makes shortages easier to trace.',
        ],
        bullets: [
          'Resource city: gathers or processes what the region provides well.',
          'Logistics city: depot, port or airfield that hands cargo to the next leg.',
          'Garrison city: walls, towers and recruits that secure a dangerous region.',
          'Forward city: reserve supply, medical support and army staging near an objective.',
        ],
      },
      {
        heading: 'Use City Hall plans to automate growth',
        paragraphs: [
          'The full-version overview says cities can automate construction, resource gathering and production, and that a City Hall plus a chosen plan can grow settlements. Automation is most useful after you understand what the city should become. A plan cannot correct a strategic role that was never chosen; it will simply build more activity around an unclear purpose.',
          'Before enabling growth, secure the approach and connect the basic inputs. Watch the first expansion cycle. If new buildings consume the workers needed for the depot or wall, slow the plan and restore a reserve. Automation should remove repetitive placement, not remove oversight. Check whether the city produces useful surplus and whether that surplus reaches the network.',
        ],
      },
      {
        heading: 'Use refugee camps to place new settlements deliberately',
        paragraphs: [
          'Developer updates added the Refugee Camp as a way to create new houses or settlement capacity and recruit workers and recruits. Its best use is filling a genuine geographic gap: a long land route with no city, a coast that needs a port settlement or a resource region far from existing population. Founding a settlement beside an established city usually duplicates labor and defense needs without shortening the network.',
          'Bring the first construction and defense package before committing. A new settlement needs people, storage, a reliable input source and protection while it grows. Keep the parent route short and simple until the camp produces useful capacity. If the location cannot receive basic supplies or survive the nearest machine activity, abandon the plan early instead of feeding an exposed site indefinitely.',
        ],
      },
      {
        heading: 'Choose between a mega-city and a network',
        paragraphs: [
          'The developer explicitly supports both a single mega-city and supply-chain bases. A mega-city concentrates production and is easier to understand at first, but long-distance objectives then depend on transport from one point. A network reduces distance and creates fallback positions, but every node needs people, defense and a readable route. Neither shape is automatically best.',
          'Use a hybrid for the campaign: one mature industrial center, several specialized regional cities and small forward nodes. Keep difficult production at the center until another region has enough labor and inputs to duplicate it. Let regional cities gather, recruit and stage supplies. This preserves economic clarity without forcing every cartridge or bandage to cross the entire planet.',
        ],
      },
      {
        heading: 'Audit a city before moving the army onward',
        paragraphs: [
          'A city is ready to support further expansion when it can defend itself, replace consumed stock and keep a route moving without the main army present. Leave a garrison and tower staff. Confirm ammunition reaches the defensive line. Confirm the depot holds the items assigned to that route. Then move only the formations needed for the next operation.',
          'If the city collapses after the army leaves, identify the missing role. No people means recruitment or over-assignment. Idle buildings mean input or labor. Silent towers mean ammunition or staffing. An empty receiving depot means logistics. Repair that role before adding more buildings. A chain of self-sustaining cities turns the world map into infrastructure; a chain that requires constant rescue turns expansion into permanent distraction.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why should I liberate cities in Machinefall?',
        answer:
          'Liberated cities provide workers and soldiers, stop local bug spawning and create secure production or logistics nodes.',
      },
      {
        question: 'What does a Refugee Camp do?',
        answer:
          'Developer updates describe it as a way to establish new housing or settlement capacity and recruit workers and recruits.',
      },
      {
        question: 'Should I build one mega-city?',
        answer:
          'It is supported, but a hybrid of one industrial center and specialized regional cities usually shortens campaign supply lines.',
      },
    ],
  },
  {
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Machinefall System Requirements and Performance Guide',
    seoTitle: 'Machinefall System Requirements - RAM, GPU & Performance',
    seoDescription:
      'Check the official Machinefall minimum and recommended PC requirements, then reduce simulation pressure without confusing community reports for confirmed bugs.',
    summary:
      'Machinefall officially asks for 32 GB RAM minimum and 64 GB recommended because its global simulation and very large unit counts scale with hardware.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: '/machinefall/screenshots/9.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Requirements are copied in meaning from the live Steam full-game page. Technical scale comes from the developer Under the Hood post; memory-leak claims remain labeled community reports.',
    videoSearchQueries: [
      'Machinefall performance',
      'Machinefall system requirements',
    ],
    tags: ['32 GB RAM', 'Windows', 'Performance'],
    relatedRoutes: [
      '/review',
      '/download',
      '/guides/army-formations',
      '/guides/technology-eras',
    ],
    body: [
      {
        heading: 'Read the official requirements literally',
        paragraphs: [
          'The full game requires a 64-bit processor and Windows 10 64-bit. Minimum hardware is an Intel Core i5-4440, 32 GB RAM, a dedicated GeForce GTX 750 Ti with 2 GB, DirectX 12 and 1 GB of available storage. Recommended hardware is an Intel Core i7-8700, 64 GB RAM, a GTX 1080 with 8 GB, DirectX 12 and 1 GB of storage.',
          'The unusually high memory recommendation is not a typo introduced by this wiki; it is the current Steam listing. Storage is small because asset size and active simulation load are different constraints. A PC can have enough disk space and still fall below the memory target. Check installed RAM, not free drive capacity, before buying based only on the 1 GB download size.',
        ],
        bullets: [
          'Minimum: Windows 10 64-bit, i5-4440, 32 GB RAM, GTX 750 Ti 2 GB, DirectX 12, 1 GB storage.',
          'Recommended: Windows 10 64-bit, i7-8700, 64 GB RAM, GTX 1080 8 GB, DirectX 12, 1 GB storage.',
          'Steam Deck, macOS and Linux are not listed as supported platforms on the current store page.',
        ],
      },
      {
        heading: 'Understand what the simulation is doing',
        paragraphs: [
          'The developer’s Under the Hood article describes an 8192 by 4096 map with more than 33 million tiles. Hierarchical pathfinding handles long routes, while the simulation step changes dynamically with hardware and active unit count. This means late-game slowdown can come from simulation and pathfinding even when the rendered graphics appear simple.',
          'Direct player commands receive high priority. Large repeated orders across the world can force many units to reconsider paths while local battles, production and transport continue. Performance therefore depends partly on how many active systems and moving units the campaign maintains. Graphics settings may help GPU load, but they cannot remove the CPU and memory work of a global economy and thousands of agents.',
        ],
      },
      {
        heading: 'Reduce active pathfinding pressure',
        paragraphs: [
          'Use control groups and regional staging instead of repeatedly selecting the entire army. Move formations from one supplied node to the next. Avoid giving thousands of units different long-distance destinations at the same time. When a unit no longer has a useful job, park it safely rather than leaving it on a route that constantly crosses active traffic.',
          'Simplify logistics where possible. A few readable regional legs are easier for both the player and the simulation than overlapping routes between every city. Remove obsolete assignments after a campaign front moves. Keep production near the region that consumes it so fewer individual carriers need global paths. These changes improve operational clarity even if the performance gain varies by hardware.',
        ],
      },
      {
        heading: 'Use the new zoom controls after the first patch',
        paragraphs: [
          'The July 11 quick fix added adjustable zoom speed and orbital edge scrolling. If navigation feels too fast, too slow or awkward at global scale, check the current settings before assuming camera performance is broken. The patch also added a vehicle selection filter, which can reduce the work of finding transports inside a large mixed army.',
          'Separate camera feel from simulation slowdown. A slow zoom setting is a preference. A falling simulation rate during a huge battle is a workload issue. A vehicle that appears unresponsive may be unstaffed, blocked or waiting for supply. Identifying the category prevents graphics changes from being used to troubleshoot a logistics or control problem.',
        ],
      },
      {
        heading: 'Treat memory-leak posts as reports, not proof',
        paragraphs: [
          'Some Steam users report rising memory use or crashes, but a community report is not the same as a confirmed universal leak. The official requirements already set a high baseline, and campaign scale varies dramatically. If memory continues rising in the same save, record the starting value, play time, unit count and the action that preceded the change. That evidence is more useful than a single screenshot after a long session.',
          'Save, restart the game and compare the same location. Close memory-heavy background applications, keep Windows virtual memory available and update GPU drivers. If the issue repeats, use the Steam discussion or linked Discord to report the build and reproduction steps. Do not install unofficial memory patches or injectors from strangers; the developer does not provide official mod support.',
        ],
      },
      {
        heading: 'Use the Demo as the safest compatibility test',
        paragraphs: [
          'Steam offers a separate free Machinefall Demo. It includes the introductory mission, first technology era and a boss fight, so it can verify basic launch, controls and early simulation behavior before purchase. The Demo is older and smaller than a full late campaign, which means smooth Demo performance does not guarantee identical results with thousands of late-game units.',
          'Test at the resolution and background workload you actually use. Watch memory, CPU and GPU utilization during a growing battle, not only at the opening screen. If your PC falls below 32 GB RAM, the official minimum is not met even if the Demo launches. You can still observe behavior, but buying the full game would be a decision outside the listed support target.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much RAM does Machinefall need?',
        answer:
          'Steam lists 32 GB RAM as minimum and 64 GB RAM as recommended for the full game.',
      },
      {
        question: 'Why does Machinefall need so much memory?',
        answer:
          'The developer simulates a map with more than 33 million tiles and potentially thousands of active units, routes and battles.',
      },
      {
        question: 'Is there a confirmed memory leak?',
        answer:
          'Players have reported memory problems, but this wiki has not found an official universal confirmation. Report reproducible behavior with build and save details.',
      },
    ],
  },
  {
    slug: 'review',
    path: '/review',
    title: 'Machinefall Review: Who Should Buy This Giant Solo-Dev RTS?',
    seoTitle: 'Machinefall Review - Is the Global-Scale RTS Worth It?',
    seoDescription:
      'A no-score Machinefall review covering the global map, logistics depth, rough edges, high RAM needs, single-player scope and free Demo.',
    summary:
      'Buy for systemic scale, flexible base networks and giant swarms; use the Demo or wait if you need polished onboarding, low RAM use, multiplayer or official mods.',
    category: 'Review',
    difficulty: 'Status',
    coverImageUrl: '/machinefall/guides/review.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Buyer guidance uses live official facts and an independent quick-look video. No numerical site score or frozen Steam review percentage is claimed.',
    videoSearchQueries: ['Machinefall review', 'Machinefall worth it'],
    video: videos.review,
    tags: ['Review', 'Solo developer', 'Buyer guide'],
    relatedRoutes: [
      '/download',
      '/system-requirements',
      '/guides/beginner-guide',
      '/guides/depots-logistics',
    ],
    body: [
      {
        heading: 'The short verdict',
        paragraphs: [
          'Machinefall is most compelling as a systems sandbox inside a campaign: start with survivors, rebuild cities, connect depots across Earth and eventually command formations, trucks, tanks, ships and aircraft against enormous machine-bug swarms. Its hook is not cinematic polish. It is the ability to zoom from a planetary route to a street-level logistics or battle problem and know both views affect the same war.',
          'That ambition comes from a solo developer and launched on July 10, 2026. Expect a game whose scale and flexibility can create memorable situations, but whose interface, onboarding and performance demands ask the player to participate in troubleshooting. If learning an unusual simulation is part of the fun, the value proposition is strong. If you want frictionless competitive RTS conventions, use the free Demo first.',
        ],
      },
      {
        heading: 'What Machinefall does unusually well',
        paragraphs: [
          'The fully playable global map is more than a backdrop. Geography changes the plan: a lair in another region requires land staging, a port and rafts or barges, or later air logistics. Liberated cities become recruiting and supply nodes. The same campaign can support one giant industrial city, a network of specialist bases, a focused raiding force or one massive army.',
          'Scale is paired with persistent consequences. Soldiers gain ranks, routes can starve a distant line and walls need staffed, supplied weapons. The player is not only issuing attack orders; they are designing the conditions that make an attack sustainable. When a carefully staged army reaches a distant objective with its supply chain intact, the achievement belongs to planning rather than a scripted mission corridor.',
        ],
      },
      {
        heading: 'Where the friction appears',
        paragraphs: [
          'The Steam discussions show real confusion around depots, carts, workers, army equipment, ships and objective locations. Some solutions are hidden in selection panels or require understanding how several systems hand work to one another. The developer is actively answering questions and shipped a quick fix one day after release, including zoom and vehicle-selection improvements, but the first hours still reward patience.',
          'The game also asks for unusually high memory: 32 GB RAM minimum and 64 GB recommended. Its dynamic simulation, massive map and unit counts explain why this is not a light hardware target. Community users have reported memory or performance problems, though those reports should not be generalized into one confirmed universal defect. The Demo is the best personal test.',
        ],
        bullets: [
          'Good fit: players who enjoy logistics, base networks, experimentation and very large systemic battles.',
          'Use the Demo first: players near the minimum hardware target or unsure about the interface.',
          'Wait: players who require multiplayer, official mod tools or a highly polished guided campaign.',
        ],
      },
      {
        heading: 'Campaign length and replay shape',
        paragraphs: [
          'The developer describes the full campaign as more than ten hours. You do not need to conquer the whole map; destroying strongholds and defeating the final boss is the directed objective. That keeps the campaign from becoming mandatory world painting, while the global map remains available for players who enjoy building a larger network.',
          'Free Game opens all technology and shifts the appeal toward self-directed construction and war. Scenario Mode is the recommended first run because technology progression gives the economy a readable sequence. Replay value therefore comes more from different expansion choices, starting geography and city-versus-network plans than from a promised competitive ladder or scripted multiplayer meta.',
        ],
      },
      {
        heading: 'Single-player, mods and generative AI status',
        paragraphs: [
          'Machinefall is currently single-player. In Steam discussions, the developer says multiplayer is too ambitious for a solo project. The same answer applies to official mod support. Community users may mention third-party injection frameworks, but they are not official, can break saves or binaries and are not a reason to buy the game expecting a supported mod ecosystem.',
          'The Steam store also includes a generative-AI disclosure. It says generative AI was used for 2D images, music and sound effects; the Demo disclosure also mentions voice overs. Buyers who care about production methods should include that fact in their decision. The disclosure is an official store fact, not a judgment about whether the resulting art is good or bad.',
        ],
      },
      {
        heading: 'Buy, demo or wait',
        paragraphs: [
          'Buy now if the central fantasy is enough: rebuild humanity on a real-world-scale map, design supply chains and watch huge formations collide with machine swarms. Accept that a newly released solo-developed simulation can require forum checks and careful saves. The strongest audience is the player who turns a broken route into an interesting problem instead of seeing it only as interruption.',
          'Play the free Steam Demo if hardware or interface is the deciding issue. Wait for patches if you need lower memory risk, clearer automation or more mature community documentation. Skip if multiplayer or official mods are required features. This no-score recommendation will age better than a launch percentage because it states the conditions under which Machinefall is a good purchase.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Machinefall multiplayer?',
        answer:
          'No. It is single-player, and the developer says multiplayer is too ambitious for this solo-developed project.',
      },
      {
        question: 'Does Machinefall support mods?',
        answer:
          'There is no official mod support. This wiki does not recommend unofficial injectors or modified game files.',
      },
      {
        question: 'How long is Machinefall?',
        answer:
          'The developer describes the complete campaign as more than ten hours, with Free Game available for open-ended play.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Machinefall Download: Full Game, Free Demo and Safe Links',
    seoTitle: 'Machinefall Download - Official Steam Game & Free Demo',
    seoDescription:
      'Download Machinefall safely from the official Steam full-game page or free Demo, and avoid fake APK, crack, torrent and unofficial mod installers.',
    summary:
      'Use Steam App 3213120 for the full Windows release or App 3436640 for the free Demo. There is no official mobile APK.',
    category: 'Safety',
    difficulty: 'Reference',
    coverImageUrl: '/machinefall/hero.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Links point only to the official Steam full game, official Steam Demo and the developer’s historical itch.io page.',
    videoSearchQueries: ['Machinefall download Steam', 'Machinefall demo'],
    tags: ['Steam', 'Demo', 'Safe download'],
    relatedRoutes: [
      '/system-requirements',
      '/review',
      '/guides/beginner-guide',
      '/disclaimer',
    ],
    body: [
      {
        heading: 'Use the official Steam full-game page',
        paragraphs: [
          'The released Windows game is Steam App 3213120. Open the official store page, sign in through Steam and install it through the Steam client. That route provides current builds, achievements, cloud support, patches and the store’s normal refund process. A search result offering the same title as a standalone ZIP does not provide those protections.',
          'Machinefall released on July 10, 2026 and is developed and published under the Steam name “by Jan Zizka.” Verify the app number and developer before purchasing, especially if an advertisement copies the header image. Regional pricing and discounts change; this wiki does not publish a frozen price that might be wrong when you open the store.',
        ],
        bullets: [
          'Full game: Steam App 3213120, Machinefall.',
          'Platform: Windows 10 64-bit is the current supported operating system.',
          'Developer and publisher shown on Steam: by Jan Zizka.',
        ],
      },
      {
        heading: 'Try the separate free Steam Demo',
        paragraphs: [
          'The official free Demo is Steam App 3436640. Its store description includes an introductory mission, the first technology era and a boss fight. That is enough to test basic controls, production flow and early battle performance before buying the full game. Install it from its own Steam page rather than a third-party download mirror.',
          'The Demo first released in August 2025 and does not represent every current full-version detail. Mechanics, interface behavior and content changed during development. Use it as a compatibility and genre test, then use current full-version Steam News or discussion answers when a Demo tutorial conflicts with the released game.',
        ],
      },
      {
        heading: 'Treat the itch.io build as historical',
        paragraphs: [
          'The developer also maintains a Machinefall itch.io page and devlog. It is valuable for understanding how depots, carts, ships and other mechanics evolved, but Steam is the verified current full-release source used by this wiki. Check the date and version of any itch build before assuming it matches the July 2026 campaign.',
          'Old devlog instructions can contain limits that were removed or redesigned. The July 11 Steam patch, for example, changed camera controls, vehicle selection and range behavior. If you are troubleshooting the Steam release, start with its News and Discussions rather than forcing an old Demo workaround into the current interface.',
        ],
      },
      {
        heading: 'There is no official Machinefall APK',
        paragraphs: [
          'The current Steam listing supports Windows and does not announce Android, iOS, macOS or a browser edition. A site offering “Machinefall APK,” a mobile port or an emulator package is not an official channel identified by the developer. Do not enter Steam credentials into a download page or install a mobile package simply because it uses official screenshots.',
          'The game’s controls, large simulation and 32 GB minimum RAM listing also make claims of a tiny unofficial mobile installer especially suspect. If another platform is announced later, it should appear through the developer’s Steam-linked channels or an official platform store. Until then, this page will not link to APK aggregators.',
        ],
      },
      {
        heading: 'Avoid cracks, torrents and unofficial injectors',
        paragraphs: [
          'Crack and torrent pages can bundle credential stealers, miners or modified executables. They also remove the normal patch path for a game receiving rapid launch fixes. This wiki does not provide bypasses, repacks, save editors or pirated copies. Use the free Demo when you need to evaluate the game without purchasing it.',
          'The developer currently says there is no official mod support. That means an injector or third-party framework suggested in a forum is not a supported download, even if another user reports success. It can corrupt saves or stop working after an update. Keep campaign saves backed up and avoid modifying the executable if you want reliable Steam patching.',
        ],
      },
      {
        heading: 'Check hardware before installing the full game',
        paragraphs: [
          'Storage is only 1 GB on the full-game listing, but memory requirements are much higher: 32 GB RAM minimum and 64 GB recommended. Confirm Windows is 64-bit, DirectX 12 is available and the PC has a dedicated GPU at least around the listed GTX 750 Ti 2 GB minimum. The System Requirements guide explains why global simulation load matters beyond install size.',
          'If the Steam client fails to install or update, use Steam’s file verification and support flow before downloading replacement files from elsewhere. If the game launches but slows in a large campaign, restarting or simplifying active routes may help diagnose it, but hardware below the official minimum remains outside the listed target. The Demo is the lowest-risk first check.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Machinefall?',
        answer:
          'Use the official Steam page for App 3213120. The official free Demo is a separate Steam App, 3436640.',
      },
      {
        question: 'Is Machinefall free?',
        answer: 'The full game is paid, while the separate Steam Demo is free.',
      },
      {
        question: 'Is there a Machinefall APK or mobile version?',
        answer:
          'No official mobile version is currently listed. Avoid APK pages using copied screenshots or asking for Steam credentials.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const featuredGuides = guides.slice(0, 6);
