function changeLogo() {
    if (window.location.hostname === 'twitter.com') {
        const logoElement = document.querySelector('h1[role=heading]');
        if (logoElement) {
            logoElement.innerHTML = '<img alt="Bitcoin" draggable="false" src="https://abs.twimg.com/hashflags/Bitcoin_evergreen/Bitcoin_evergreen.png" style="height: 50px;">';
            console.log('Logo changed');
        }
    }
}

// Run after 3 seconds
setTimeout(changeLogo, 3000);