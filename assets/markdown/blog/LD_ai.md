---
title: "[LD] Opinions on AI"
date: 2026-04-21
update: 2026-06-11
tags: [AI, Living Document]
---

## Personal Background<a name="background"></a>

This entry needs to be prefaced with a bit of background to make clear the context I'm coming from and my possible biases. 

I have a decently strong background in the math and engineering of modern AI, probably somewhere between an undergrad level and an actual ML engineer (well below those in AI theory). As my direct research only tangentially involves AI, I do not consider myself an expert, but I am relatively informed and generally capable of understanding newer developments. 

I am also critically online, with much of my media consumption being a combination of Youtube and Reddit. In general, I would summarize my stance as AI optimistic, but severely critical of the current trends surrounding AI.

## AI Landscape<a name="landscape"></a>

### AI is overhyped

From my perspective, this is an extremely cold take. Unfortunately, AI has found itself directly entwined with capitalism, which could be said to be the source of many of my gripes. We should not, however, dismiss this as a simple issue of capitalism and try to engage in the direct perceptions and impacts of AI.

As is with most technologies, the sellers of AI profit when there are clear perceived benefits of AI, so it is in their best interest to oversell the capabilities of the technology. AI in itself is a very difficult topic for most people to understand. In a way, we are in a "market for lemons", where there is a severe information asymmetry between the AI providers and the AI consumers. The unique inpenatrability of AI creates an asymmetry that further enables the overselling of the capabilities and upward trajectory of AI.

The ideal remedy would be a general increase in "AI literacy". At least in the online sphere I reside, the trend towards AI literacy seems positive, but I'm not sure how well this reflects in the general public, and perhaps more importantly, investors and policy makes.

### The Singularity is not coming (in this AI boom)

Technologically, the biggest kickstarter to the current AI boom is twofold: improved architectures that enabled parallelism with promising scaling laws (i.e. transformers), and the massive scaling of traning data. This goes back towards the "bitter lesson" that AI advancement seems to mostly be supplanted by improved scaling in both compute and data.

From what I've seen though, It would seem that the ocean of "quality data" has probably already been tapped, and with our current hardware capabilities, we might be approaching a limit in reasonable feasibility. Promises for "stronger models" at the highest end probably aren't coming from any changes in fundamentals, but moreso in the engineering wrapping the models.

If I were to point to the clearest issue in the current LLM paradigm is the disconnect between virtual data current models use and the ways things work in the real world. The sentiment of this disconnect seems to be held within the research community, with the shift to thinking about "world models" and reinforcement learning. Mayhap the capital generated from the current AI boom may incur a sort of research inertia towards another breakthrough, but if anything, history has shown that this type of paradigm shifting AI development occurs over a much longer time period, timed perhaps after another AI winter.

### What we have might effectively be close enough to AGI

While we might be in a plateau in terms of core technology, I think we still haven't harnessed all the capabilities of the current models. As is, these models are extremely potent. The AGI label seems to be a constant moving target, varying from person to person. The problem seems to be that it is tied to the entire range of human capabilities, which is very difficult to measure in practice. 

Practically though, I think AI can *(with the right wrapper)* perform mostly any complex reasoning tasks to a generally productive level. I see the two key paradigms extending LLMs towards this aim are multimodality (vision and audio) and tool calling. In this sense, ignoring compute costs, AI seems plenty capable for most tasks, which is probably "close enough" for the social paradigm we expected AGI to bring.

## AI Coding<a name="coding"></a>

Coding has become a task LLMs have become particularly adept at for a variety of reasons. One can point to the bias towards coding tasks as the people developing LLMs are themselves coders. You can also point to the vast amounts of open source code readily available to be scraped and trained upon. Perhaps the most important feature of coding tasks is that their correctness can, for the most part, be immediately and automatically verifiable, leading to more grounded training loops. Nevertheless, interestingly coding jobs are seemingly among the most impacted professions of this AI boom. The opinions I hold about AI coding are likely very cold takes, but they are still worth spelling out

### AI is democratizing coding

I really hate the term "democratizing", as it is mostly coopted by entrepreneurs trying to sell a product. But in the case of coding, I really think the unreasonable effectiveness of AI is showing through. Non-coders who are even slightly technically literate are evidently able to use AI to create websites and small applets without even touching a line of code. Personally, I have been able to completely vibe code webpages with only a week's worth of free claude prompts. For even more capable coders working in tandem with AI, the production speed of applications is accelerating at an unbelievable pace. We can't really deny that a much broader populace without coding training are now able create their own little applications using only natural language prompts.

At the moment, I don't think we've seen the effect of this to the fullest extent. In the hands of an increasingly technically literate populace, perhaps the need for trained coders will decrease for the development of simple applications, like personal websites and todo-list type apps. 

### Coders should use AI with extreme caution

In this moment, we are starting to see the consequences of vibe coding on larger scale projects. At first, the AI output is incredible, leading to easy prototypes that can go right into production. After a few weeks to months, it becomes increasingly difficult to add or change features, with the AI often fighting back and an increasingly bloated codebase you aren't able to fully understand. AI coding, used in excess, can lead to a large amount of technical debt (as well as a newer phenomena, comprehension debt). The previously mentioned non-coders will likely be unable to overcome these sorts of walls, and the trained coders may find this wall insurmountable. In order for this paradigm to thrive, developers must become more "system architect" than coder, understanding and steering the project in directions in anticipation of future needs and updates.

There is also a clear worry of AI reliance leading to a deterioration of coding abilities in general. It would seem that as developers, we need to find a good balance between what work we relegate to AI, and which tasks we choose to tackle ourselves. In my view, the smaller and shorter-term the project, perhaps vibe coding becomes more apt so long as the desired outcome is merely an app and not learning. In larger projects, I think AI is best used in boilerplate and simple function writing, documentation and library search, and debugging and error finding.

At the moment of writing, we are seeing a drastic rise in pricing of the mainstream, more capable coding models. This, hopefully, wakes people up to the fact that if they want to be developers, they really should just learn to code themselves ~~or switch to Chinese/local models~~.

## AI Art<a name="art"></a>

Although I don't really have a horse in the race for this debate, I'm pretty deeply invested on the matter of AI in the creative fields. Generative AI, in particular, dominates the landscape of this debate. With the current state of AI, I firmly place myself within the anti-AI art side, mostly for the purposes of signaling a position I think will yield the "best" outcome. There are, however, many underdiscussed nuances in surface discourse.

### AI art is art

I find this part of the debate to be mostly an unproductive semantics argument. Pinning down a definition for Art tied to essential properties might be a fools errand, as per Wittgenstein. As it stands, art itself is such a bloated term drawing boundaries seems impossible. I somewhat subscribe to the "artworld" consensus type approach, embracing dadaism, where Duchamp's Fountain can be considered art. In which case, I must also consider Théâtre D'opéra Spatial art.

From a value perspective though, I believe that AI produced art is broadly "lesser". To the extent artistic value is derived from communication and spectacle, the quantity and quality of communication conveyed when art is perceived to be AI generated is severely diminished, while my admiration towards great artwork is dampened when it is realized that the perceived effort is a mere facsimile of what I previously knew to be laborious. This is, of course, on a spectrum as differing levels of intention can by conveyed through the filter of AI, and differing amounts of effort can be exerted. However, my innate distaste towards the medium is likely derived from the stark change in how I have to evaluate art, from which previously artwork "quality" was a near sufficient measure.

However, the intrinsic value that I and many in adjacent artworlds derive feels increasingly divorced from the instrumental value AI art holds for the indifferent art market. AI art has clear value in the speed, cost efficiency, and potential broadly appealing aesthetic it provides. This distinction seems to have lead to a split in the discourse to those who view "art as product" and "art as process". As always, the truth lies in the middle as a mixture of the two.

I think a similar conclusion can be reached about the semantic treatment of "artist", but I feel stronger contempt towards who could be deemed as a lesser artist. Insofar as art is communication, art is intrinsically tied to the artist. However, even in the case of art as a product, art is tied to artist by the artist's capabilities to reproduce similar artwork.

More importantly, and also a bit more esoterically, the artist is the the embodiment of their art, as the artwork is an artifact or snapshot of their artistic journey. In this way, the artist is moreso what we'd consider the "art" than the artwork.

Insofar as the utility of the "artist" label is just the ability to produce artwork, any person capable of providing artwork is an artist. However, culturally my perception is that even subconsciously, we treat artist as the art. The haphazardous production of art divorced from artist's artistic experience hence cannot be emboddied within the artist. Any treatment of such person as an artist would then be deception.

### AI is an enabler for art theft

It's not accurate to say that AI is creating carbon copies or even collages of existing artworks. The moral delimma regarding the treatment of nonconsensual use of artwork in model training, and of theft in general, is a matter of intellectual property.

When artists posted their work online, it was meant to be seen and shared, I don't think we should fault them for not anticipating it may be used to train a model (regardless of TOS). To this extent, even if training on their artwork is fair use under the law, I hope there can be agreement that this sort of exploitation is morally impermissible.

From a policy perspective however, I feel like the line is a bit less blurry when addressing the deliberate training and use of AI to directly replicate an artist's IP/likeness. IP laws exist to incentivize creative work and allow for proper attribution, and I hope most can agree that this type of deliberate infringement goes against these goals. 

While this is one way AI art can harm artists, I think it's also worth mentioning the harm caused through the theft of jobs. I don't want to sound too accusatory, but I can't help but feel that many responses to this point seem to lack empathy for artists who refuse to "adapt". Some artists may have spent their whole life specializing in their trade, and refuse to use new technologies as it would conflict with their personal morals. Was this inevitable? Maybe. Is it still bad? Yes, for those affected.

### AI art is harmful

Perhaps the most common phrase I see in the opposition is that "AI is just a tool". This is a thought terminating cliche that cannot lead to any productive discussion about the impacts of AI. AI is "just a tool" the same way a gun is "just a tool". Sure, a gun is a tool insofar as it is capable of providing utility, for instance for hunting or crime deterrance. Painting anything with an extremely broad brush as "just a tool", if anything, deliberately attempts to avoid the nuances that contrast that subject to other "tools", and at worst, attempts to create a false dichotomy that since the subject is a "tool", it cannot do harm. 

In essence, AI image generation has greatly accelerated the pace at which passable to high quality images are created. Left unopposed, this creates a flood of content, which is clearly evident in many social networks. While the "contentification" of the web was already underway, AI has certainly accelerated this process. As art is dragged along in this trend, I worry that we increasingly divorce content from context. AI content in general is discussed in the next section.

When I and many others figure out something is AI generated, it signals "low effort". As AI gets more and more distinguishable, on average I fear we begin to attribute less and less to the process, seeing art more as it simply presents itself. No, traditional art will not die, but there certainly has been a chilling effect on the traditional arts. Is this just the natural evolution of culture? Probably, but I can't help but feel like something very human and meaningful is lost along the way. The same way I've grown up with digital communication replacing much of face-to-face communication, I simply worry of the consequences indifference to AI vs. non-AI art will lead.

## AI Content and Communication

AI art is uniquely positioned as a socially contentious topic in this era, since it's opponents are naturally among the louder among us. Taking a step back and looking at the larger picture, we can see AI taking over all corners of the internet, bot accounts everywhere, spam websites full of AI generated pages, and AI search seizing control of our internet navigation. Sociologically, its impacts are certainly felt, and I can't help but feel like it's steering the ways we communicate and the way we understand truth itself in irreperably dangerous places.

### AI is normalizing communication (in a bad way)

Mostly everyone who knows me knows that I hate emojis. ~~In my opinion,~~ they are used far too frequently and inappropriately, making intent unclear while putting on a facade of an emotional extreme clearly not being expressed by the sender. Language has granted us the ability to transmit ideas between one another, a form of telepathy we take for granted. Similar to emojis, AI has become a dangerous shortcut for communication.

I want to point out two psychological phenomena: constructed preferences and choice blindness. Constructed preferences in behavioral economics is the notion that there exists a large amount of ambiguity in people's preferences and values, and decisions are made on the fly based on available context and information. Choice blindness is the phenomena where subjects fail to notice mismatches between their choices and outcomes, and often justify the opposite of their choices when presented the wrong outcome. The combination of these phenomena indicate a gap in decision making where AI can slip in and fill ambiguity in our communication decisions, and gaslight us into believing what is produces is actually what we want to communicate.

This AI gap filling normalizes all forms of communication through which we rely upon AI. We may think that AI is perfectly reflecting our thoughts, and perhaps even think its expressing our thoughts in a manner better than what we were capable. This reliance, as a result of choice blindness, can mean these AI outputs supplant our original, possibly ambiguous, intentions. While possibly completely functional in a myopic utilitarian sense, this reliance degrades the individualism of communication. In a way, our sloth has convinced us to trade autonomy for convenience.

### AI deteriorates are natural communication abilities

TODO literacy crisis stuff etc

### AI is epistemically dangerous

TODO post-truth, ungrounded truth, hyperreality stuff

