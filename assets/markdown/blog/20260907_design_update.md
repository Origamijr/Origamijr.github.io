---
title: Design is my passion
date: 2026-09-08
tags: website
---

I decided to do a minor rehaul of this website to give it a little bit more personality. This post is just a quick rundown of the key changes and the thoughts behind them.

This rehaul targets the question of what I want the overall design philosophy of this website to be. At first, I thought about targeting a retro windows 98 desktop type theme, since it evokes nostalgia for the computer I used to play games on at my grandparent's house. After exploring a bit more on the indie web, I think I want to distance myself slightly from the retro desktops look, as it is quite an overused aesthetic.

I also considered going off the deep end and going full indie Y2K type theming. After some consideration, I think I'll pull some restraint on this website. After all, this website is the website I'll tie to my public persona with a slight side purpose of being a "professional" portfolio (I'll go full crazy on a secret site not explicitly tied to this one).

All that said, I really didn't want this site to become sterile, as we get enough of that from ready-made templates, and AI generated web pages. As such, I took the liberty to make some deliberate "bad" design choices that while not conforming to clean design principles, hopefully indicate traces of intent.

## Comic Sans MS

For the reasons stated above, I've eagerly made the executive decision to change the primary font on this website to Comic Sans. From the 2000s to the 2010s, Comic Sans would easily indicate "unprofessional" and "amateur", as one of the most painfully overused and inappropriately used fonts.

It's probably somewhere in the last decade where we wrapped back around to being cool again. I think in the age of accessible clean typography, Comic Sans is a signifier towards intentional imperfection.

Comic Sans is not my favorite font by a long shot. But for this site, I wanted visual language that would immediately communicate my intentions, and hopefully the use of Comic Sans is very loud and intentional.

## Home screen

I've changed the navbar to include some crude hand drawn MS paint icons. This is an indicator of the human aspect of the design, while also being a slight nod to my original intention of theming my site as a retro desktop.

I've also tried to rearrange my intro blurb to be less redundant, and moved my headshot away from the top of the page. It feels unpleasant being blasted by my own face when I visit my own website.

## The scrolling tiles in the back

This is the most obvious visual change of the website, where previously it was just a solid dark teal background. In my head, my ideal website is full of puzzles and easter eggs. Since this website is hosted on github, there's a limit to how "secret" I can make puzzles. I also can't make the puzzle too overt and obtrusive, as this website should also serve a semi-professional role.

In the end I decided to go with some sort of subtle puzzle in the background that can be mistaken as an inoffensive wallpaper. Of course, the puzzle I want to use had to be tied to minesweeper in some way, as it is my favorite puzzle game of all time. 

Vanilla minesweeper would be pretty obvious, so I went for a variant of complete information minesweeper called Mosaic. This way, people may notice that clicking the tiles cause them to toggle, but it's not immediately obvious that it's tied to a puzzle.

Unlike normal mosaic, I made the board toroidal, immediately making the puzzle slightly more challenging since there are no edges to artificially induce smaller regions for easier initial deductions. I might make a post later breaking down the puzzle generation method, but it's pretty much using the first method you would think of.

I broke the puzzle into 4 levels, with the initially loaded puzzle being the easiest, and the fourth level being practically impossible to solve on first encounter without crazy pen and paper work or a dedicated program to solve it (or you can cheat by looking at the json puzzle database, but that's pretty lame).

At moment of writing, I can probably do the first level in about a minute of thinking, levels 2 and 3 with maybe half an hour and maybe some supplementary scratchwork. I have thoughts on how to approach the fourth level, but I wouldn't dare attempt it at the moment.