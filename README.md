# THE-HACKSAW

Written with vanilla [Bootstrap 5.3](https://getbootstrap.com/) and [React](https://react.dev/), bundled with [Vitejs](https://vitejs.dev/), hosted on [Firebase](https://firebase.google.com/).

## Motivation
THE-HACKSAW came to fruition because of the difficulty of a good friend of mine, a civil engineer. 

The problem was, that they needed different lengths of, for example, steel bars for a construction project. However, suppliers can only supply specific lengths. So, they will need to cut the supplied materials to their lengths. Same thing for other materials.

They were utilizing Excel to compute, which made them consume unnecessary time, produce errors, as well as purchase more than what they needed. All of these cost resources (money).

This is a variation of the [Bin-Packing Problem](https://en.wikipedia.org/wiki/Bin_packing_problem), and is classified as NP-hard. Fortunately, we are not dealing with very large number of inputs and edge cases, so utilizing the three basic algorithms to solve the problem will suffice (First Fit, Best Fit, Worst Fit).

I also had some time and have been learning full-stack with React, so this was a perfect opportunity for me to both help and study. Two birds in one stone!

I first whipped up a Proof of Concept (PoC) for them to use and check what could be done. Then, improve based on the feedback. The PoC can be found [here](https://github.com/jmgloria07/scrap-optimizer).

## Setup

Ensure you have node.js and npm installed, then run:

`npm install`

To start the development server, run:

`npm run dev`

To build:

`npm run build`

Built files are in dist/ folder.

## To-Do

### Future Plans
- Implement Past Computes
- Define a custom fit

### Known Bugs
- Copied tooltip doesn't disappear right away
- Accordion isn't the way I want it to be
