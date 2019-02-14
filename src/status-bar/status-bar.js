function statusBar() {
    console.log('testing');
    const userStatus = document.getElementById('user-status');

    const jsonProfile = window.localStorage.getItem('userProfile');
    const userProfile = JSON.parse(jsonProfile);

    const statusBarName = document.createElement('span');
    userStatus.appendChild(statusBarName);
    statusBarName.textContent = 'Name: ' + userProfile.username;
    
    const statusBarHP = document.createElement('span');
    userStatus.appendChild(statusBarHP);
    statusBarHP.textContent = 'HP: ' + userProfile.hitpoints;
    
    const statusBarGold = document.createElement('span');
    userStatus.appendChild(statusBarGold);
    statusBarGold.textContent = 'Gold: ' + userProfile.gold;
}


export default statusBar;