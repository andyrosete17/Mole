# Whack a mole
## How to run the app
### Install dependencies
Once you are in the project root (whack-a-mole folder)
- Server
  - navigate to server folder (```cd server```)
  - Run a ```npm i```
- Client
  -  Run a ```npm i```
- Run the application (```npm start```)
  - You should be able to see the client running on port 3006
  - You should be able to see the server running on port 3000


## Requirements 
### Install basic tools: 
- [X] React
- [X] Redux
- [X] Testing libraries
### Frontend:
- [X] Add a background
  - [ ] Pending set custom cursor (configured but not working)
- [X] Create mole component
- [X] Add mole functionality (if it's active, when hit should hide)
- [X] Once a mole is active should deactivated when pass some time (reference 2 seconds)
- [X] Add mole map (3x4)
  - [X] Mock render method 
  - [X] Only one mole can be active at the time
  - [X] When hit/hide a mole other should appear

#### Game 
- [X] Add header with name and Start button
  - [x] Add input empty and max length validations(NTH)
- [X] Add reset game functionality
  - [X] When click on reset, the timer should set to 0 and also the score
- [X] Add start game functionality
  - [X] When click on start, the timer should start
  - [x] Every game should take 2min
### Score & LeaderBoard
#### Score
- [x] Add score to the screen
- [x] Score should increase when hit a mole

#### LeaderBoard
- [x] Add leader-board (think about where to display)
  - [x] Leader-board display player name (max length ??) and score
- [x] Show top 10 players ordered by max points

### Backend:
Should we get the mole random render from the server???
- [x] Added server project with mocks endpoints (no database persistance, used a json file)
- [X] When app load:
  - [X] Load leaderBoard
- [X] When a game end: 
  - [x] Save game record
  - [x] Update LeaderBoard 
- [x] Add service layer integration

## Pending /NTH
  - [ ] NTH maybe change the basic implementation to Graphql
  - [ ] NTH maybe change current implementation to a microfrontend one.
  - [ ] I recommend following the structured from [emberjs](https://cli.emberjs.com/release/advanced-use/project-layouts/)
  - [ ] Finish unit tests to 3rd party libraries like countdown
  - [ ] Add unit test to the service
  - [ ] Add integration tests with cypress
  - [ ] Use database persistance (postgresql)