# Whack a mole
## How to run the app
PENDING

## Requirements 
### Install basic tools: 
- [X] React
- [X] Redux
- [X] Testing libraries
### Frontend:
- [X] Add a background
  - [ ] Pending set custom cursor (configure but not working)
- [X] Create mole component
- [X] Add mole functionality (if it's active, when hit should hide)
- [X] Once a mole is active should deactivated when pass some time (reference 2 seconds)
  - [ ] Pending set time configurable
- [X] Add mole map (3x4)
- [ ] Render moles randomly (should it be rendered in local or calling a service???)
  - [X] Mock render method 
  - [X] Only one mole can be active at the time
  - [X] When hit/hide a mole other should appear

#### Game 
- [ ] Add header with name and Start button
- [ ] Add reset game functionality
  - [ ] When click on reset, the timer should set to 0 and also the score
- [ ] Add start game functionality
  - [ ] When click on start, the timer should start
  - [ ] Every game should take 2min
### Score & LeaderBoard
#### Score
- [ ] Add score to the screen
- [ ] Score should increase when hit a mole


#### LeaderBoard
- [ ] Add leader-board (think about where to display)
  - [ ] Leader-board display player name (max length ??) and score
- [ ] Show top 10 players ordered by max points

### Backend:
Should we get the mole random render from the server???
- [ ] When app load:
  - [ ] Load leaderBoard
- [ ] When a game end: 
  - [ ] Save game record
  - [ ] Update LeaderBoard 